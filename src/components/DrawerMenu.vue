<template>
  <!-- Menu lateral Drawer -->
  <q-drawer
    v-model="leftDrawerOpen"
    show-if-above
    bordered
    :width="250"
    :breakpoint="600"
  >
    <q-scroll-area
      style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd"
    >
      <!-- Lista de elementos -->
      <q-list padding>
        <q-item
          to="/"
          exact
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-icon name="list" />
          </q-item-section>

          <q-item-section> Todo </q-item-section>
        </q-item>

        <q-item
          to="/help"
          exact
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-icon name="help" />
          </q-item-section>

          <q-item-section> Help </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>

    <q-img
      class="absolute-top text-center"
      src="~/assets/developer.webp"
      style="height: 150px"
    >
      <div class="absolute-bottom bg-transparent">
        <q-avatar
          size="56px"
          class="q-mb-sm"
        >
          <img :src="userStore.avatar" />
        </q-avatar>
        <div class="text-weight-bold">
          <a
            href="https://joseluisgs.github.io/"
            target="_blank"
            class="text-weight-bold my-link"
            >{{ userStore.user }}</a
          >
        </div>
        <div>
          <a
            href="https://twitter.com/joseluisgonsan"
            target="_blank"
            class="text-weight-bold my-link"
            >{{ userStore.twitter }}</a
          >
        </div>
      </div>
    </q-img>
  </q-drawer>
</template>
<script>
  import { computed } from 'vue'
  import UtilStore from '../stores/utils'
  import UserStore from '../stores/users'

  export default {
    name: 'DrawerMenu',

    setup() {
      const userStore = UserStore()
      const utilStore = UtilStore()

      return {
        leftDrawerOpen: computed(() => utilStore.isLeftDrawerOpen),
        userStore,
      }
    },
  }
</script>
<style lang="scss">
  .my-link {
    color: #fff;
    text-decoration: none;
  }
</style>
