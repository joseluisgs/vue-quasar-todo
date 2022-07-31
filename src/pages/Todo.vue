<template>
  <q-page class="bg-grey-3 column">
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
  import { defineComponent } from 'vue'
  import TaskStore from '../stores/tasks'

  export default defineComponent({
    name: 'TodoPage',

    setup() {
      const taskStore = TaskStore()

      const clickTask = (task) => {
        taskStore.toggleTask(task)
      }

      const deleteTask = (task) => {
        taskStore.deleteTask(task)
      }

      return {
        tasks: taskStore.getTasks,
        clickTask,
        deleteTask,
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
