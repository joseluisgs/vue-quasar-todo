<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Barra de titulo con botón hamburguesa -->
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>

      <div class="q-px-lg q-pt-xl q-mb-md">
        <div class="text-h3">Todo</div>
        <div class="text-subtitle1">{{ myDate }}</div>

        <div>
          Coded with
          <Icon
            class="text-red-6"
            icon="ant-design:heart-filled"
          />
          <a
            class="text-white"
            href="https://joseluisgs.github.io"
            target="_blank"
            >JoséLuisGS</a
          >&nbsp;
          <a
            href="https://github.com/joseluisgs"
            target="_blank"
          >
            <Icon
              class="text-grey-3"
              icon="akar-icons:github-fill"
          /></a>
        </div>
      </div>
      <q-img
        src="~/assets/developer.jpg"
        class="header-image absolute-top"
      />
    </q-header>

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
          <div class="text-weight-bold">{{ userStore.user }}</div>
          <div>{{ userStore.twitter }}</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <!-- Para cachear -->
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
  import { defineComponent, ref } from 'vue'
  import { Icon } from '@iconify/vue'
  import { date } from 'quasar'
  import UserStore from '../stores/users'

  export default defineComponent({
    name: 'MainLayout',

    components: {
      Icon,
    },

    setup() {
      const leftDrawerOpen = ref(false)
      const userStore = UserStore()

      return {
        leftDrawerOpen,
        toggleLeftDrawer() {
          leftDrawerOpen.value = !leftDrawerOpen.value
        },
        myDate: date.formatDate(Date.now(), 'dddd, DD MMMM YYYY'),
        userStore,
      }
    },
  })
</script>

<style lang="scss" scoped>
  .header-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.2;
    filter: grayscale(100%);
  }
</style>
