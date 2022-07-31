<template>
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
</template>
<script>
  import { ref } from 'vue'
  import { useQuasar } from 'quasar'
  import TaskStore from '../stores/tasks'

  export default {
    name: 'InputTask',

    setup() {
      const taskStore = TaskStore()
      const quasar = useQuasar()
      const newTaskTitle = ref('')

      const createTask = () => {
        if (newTaskTitle.value.trim().length > 0) {
          taskStore.createTask(newTaskTitle.value.trim())
          newTaskTitle.value = ''
          quasar.notify({ message: 'Task added', color: 'positive' })
        }
      }

      return {
        newTaskTitle,
        createTask,
      }
    },
  }
</script>
