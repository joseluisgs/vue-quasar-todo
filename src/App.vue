<template>
  <router-view />
</template>

<script>
  import { defineComponent, onMounted } from 'vue'
  import TaskStore from './stores/tasks'

  export default defineComponent({
    name: 'App',

    setup() {
      const taskStore = TaskStore()

      onMounted(() => {
        taskStore.fetchTasks()
      })
    },
  })
</script>
