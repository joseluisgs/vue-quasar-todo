import { defineStore } from 'pinia'

const UtilStore = defineStore({
  id: 'UtilStore',
  state: () => ({
    leftDrawerOpen: false,
  }),

  getters: {
    isLeftDrawerOpen: state => state.leftDrawerOpen,
  },

  actions: {
    toggleLeftDrawer() {
      // console.log('leftDrawerOpen', this.leftDrawerOpen)
      this.leftDrawerOpen = !this.leftDrawerOpen
      // console.log('leftDrawerOpen', this.leftDrawerOpen)
    },
  },
})

export default UtilStore
