import { defineStore } from 'pinia'
import { getTasks } from '../services/tasks.js'

const TaskStore = defineStore({
  id: 'TaskStore',
  state: () => ({
    tasks: [],
  }),

  getters: {
    getTaskById: (state) => (id) => state.tasks.find((task) => task.id === id),
    // get task order by created at dec asc cambia el -1 por 1 y viceversa
    getTasks: (state) => state.tasks.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1)),
  },
  actions: {
    toggleTask(task) {
      // console.log('toggleTask', task)
      task.done = !task.done
    },

    deleteTask(task) {
      // console.log('deleteTask', task)
      const index = this.tasks.indexOf(task)
      this.tasks.splice(index, 1)
      // tambien lo puedo hacer como
      // this.state.tasks = this.state.tasks.filter((t) => t.id !== task.id)
    },

    createTask(title) {
      // console.log('createTask', title)
      this.tasks.push({
        id: Date.now(),
        title,
        done: false,
        createdAt: Date.now(),
      })
    },

    fetchTasks() {
      this.tasks = getTasks()
    },
  },
})

export default TaskStore
