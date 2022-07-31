import { defineStore } from 'pinia'

const TaskStore = defineStore({
  id: 'TaskStore',
  state: () => ({
    tasks: [
      { id: Date.now(), title: 'Get Oranges', done: false, createdAt: Date.now() },
      { id: Date.now(), title: 'Learn Vue.js', done: true, createdAt: Date.now() },
      { id: Date.now(), title: 'Make apps with Quasar', done: false, createdAt: Date.now() },
      { id: Date.now(), title: 'Write API REST Kotlin-Ktor', done: false, createdAt: Date.now() },
    ],
  }),
  getters: {
    getTaskById: (state) => (id) => state.tasks.find((task) => task.id === id),
    // get task order by created at dec asc cambia el -1 por 1 y viceversa
    getTasks: (state) =>
      state.tasks.sort((a, b) => (a.createdAt < b.createdAt) ? -1 : 1),
  },
  actions: {},
})

export default TaskStore
