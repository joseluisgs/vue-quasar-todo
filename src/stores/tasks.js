import { defineStore } from 'pinia'

const TaskStore = defineStore({
  id: 'TaskStore',
  state: () => ({
    tasks: [
      // {
      //   id: Date.now(),
      //   title: 'Get Oranges',
      //   done: false,
      //   createdAt: new Date(2022, 6, 31, 12, 42, 23),
      // },
      // {
      //   id: Date.now(),
      //   title: 'Learn Vue.js',
      //   done: true,
      //   createdAt: new Date(2022, 6, 29, 10, 22, 0),
      // },
      // {
      //   id: Date.now(),
      //   title: 'Make apps with Quasar',
      //   done: false,
      //   createdAt: new Date(2022, 6, 28, 9, 31, 33),
      // },
      // {
      //   id: Date.now(),
      //   title: 'Write API REST Kotlin-Ktor',
      //   done: false,
      //   createdAt: new Date(2022, 6, 31, 14, 0, 2),
      // },
    ],
  }),
  getters: {
    getTaskById: (state) => (id) => state.tasks.find((task) => task.id === id),
    // get task order by created at dec asc cambia el -1 por 1 y viceversa
    getTasks: (state) => state.tasks.sort((a, b) => (a.createdAt < b.createdAt ? -1 : 1)),
  },
  actions: {
    toggleTask(task) {
      console.log('toggleTask', task)
      task.done = !task.done
    },

    deleteTask(task) {
      console.log('deleteTask', task)
      const index = this.tasks.indexOf(task)
      this.tasks.splice(index, 1)
      // tambien lo puedo hacer como
      // this.state.tasks = this.state.tasks.filter((t) => t.id !== task.id)
    },

    createTask(title) {
      console.log('createTask', title)
      this.tasks.push({
        id: Date.now(),
        title,
        done: false,
        createdAt: Date.now(),
      })
    },
  },
})

export default TaskStore
