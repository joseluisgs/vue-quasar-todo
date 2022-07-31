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
        v-ripple
      >
        <q-item-section avatar>
          <q-checkbox
            v-model="task.done"
            color="primary"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ task.title }}</q-item-label>
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

      return {
        tasks: taskStore.getTasks,
      }
    },
  })
</script>
