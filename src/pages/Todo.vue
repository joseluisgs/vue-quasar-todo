<template>
  <q-page class="bg-grey-3 column">
    <div class="row q-pa-sm bg-info">
      <q-input
        filled
        bottom-slots
        v-model="newTaskTitle"
        placeholder="Add task"
        dense
        bg-color="white"
        class="col"
        @keyup.enter="createTask"
      >
        <template v-slot:append>
          <q-btn
            round
            dense
            flat
            icon="add"
            @click="createTask"
          />
        </template>
      </q-input>
    </div>
    <q-list
      class="bg-white"
      separator
      bordered
    >
      <q-item
        v-for="task in tasks"
        :key="task.id"
        clickable
        @click="clickTask(task)"
        v-ripple
        :class="{ 'done bg-blue-1': task.done }"
      >
        <q-item-section avatar>
          <q-checkbox
            v-model="task.done"
            color="primary"
            class="no-pointer-events"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ task.title }}</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ timeAgo(task.createdAt) }}</q-item-label>
        </q-item-section>
        <q-item-section
          v-if="task.done"
          side
        >
          <q-btn
            flat
            round
            color="primary"
            icon="delete"
            dense
            @click.stop="deleteTask(task)"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
  import { defineComponent, ref, computed } from 'vue'
  import { useQuasar, date } from 'quasar'
  import TaskStore from '../stores/tasks'
  // Librería de tiempo y su plugin de tiempo relativo
  import dayjs from 'dayjs'
  import relativeTime from 'dayjs/plugin/relativeTime'
  // import 'dayjs/locale/es' /7 zi lo queremos en español
  // dayjs.locale('es') // Español
  dayjs.extend(relativeTime)

  export default defineComponent({
    name: 'TodoPage',

    setup() {
      const taskStore = TaskStore()
      const quasar = useQuasar()
      const newTaskTitle = ref('')

      const clickTask = (task) => {
        taskStore.toggleTask(task)
      }

      const deleteTask = (task) => {
        quasar
          .dialog({
            title: 'Delete Task',
            message: task.title,
            cancel: true,
            persistent: true,
          })
          .onOk(() => {
            taskStore.deleteTask(task)
            quasar.notify({ message: 'Task deleted', color: 'negative' })
          })
      }

      const createTask = () => {
        if (newTaskTitle.value.trim().length > 0) {
          taskStore.createTask(newTaskTitle.value.trim())
          newTaskTitle.value = ''
          quasar.notify({ message: 'Task added', color: 'positive' })
        }
      }

      const timeAgo = (timestamp) => {
        const date = new Date(timestamp)
        return dayjs().from(dayjs(date), true)
      }

      return {
        tasks: taskStore.getTasks,
        clickTask,
        deleteTask,
        newTaskTitle,
        createTask,
        timeAgo,
      }
    },
  })
</script>

<style lang="scss" scoped>
  .done {
    .q-item__label {
      text-decoration: line-through;
      color: #bbb;
    }
  }
</style>
