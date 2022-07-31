import { defineStore } from 'pinia'

const UserStore = defineStore({
  id: 'UserStore',
  state: () => ({
    user: 'José Luis González',
    avatar: 'https://avatars.githubusercontent.com/u/47913953?v=4',
    twitter: '@joseluisgonsan',
  }),
  getters: {},
  actions: {},
})

export default UserStore
