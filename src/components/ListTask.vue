<template>
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
  <div
    v-if="!tasks.length"
    class="no-tasks absolute-center"
  >
    <q-icon
      name="check"
      size="100px"
      color="primary"
    />
    <div class="text-h-5 text-primary text-bold text-center">No tasks</div>
  </div>
</template>

<script>
  import { computed } from 'vue'
  import { useQuasar } from 'quasar'
  import TaskStore from '../stores/tasks'
  // Librería de tiempo y su plugin de tiempo relativo
  import dayjs from 'dayjs'
  import relativeTime from 'dayjs/plugin/relativeTime'
  // import 'dayjs/locale/es' /7 zi lo queremos en español
  // dayjs.locale('es') // Español
  dayjs.extend(relativeTime)

  export default {
    name: 'ListTask',

    setup() {
      const taskStore = TaskStore()
      const quasar = useQuasar()

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
            quasar.notify({ type: 'negative', message: 'Task deleted' })
          })
      }

      const timeAgo = computed(() => (timestamp) => {
        const date = new Date(timestamp)
        return dayjs().from(dayjs(date), true)
      })

      return {
        tasks: computed(() => taskStore.getTasks),
        clickTask,
        deleteTask,
        timeAgo
      }
    },
  }
</script>

<style lang="scss" scoped>
  .done {
    .q-item__label {
      text-decoration: line-through;
      color: #bbb;
    }
  }
  .no-tasks {
    opacity: 0.6;
  }
</style>
