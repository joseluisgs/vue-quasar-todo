<template>
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
</template>
<script>
  import { computed } from 'vue'
  import { Icon } from '@iconify/vue'
  import { date } from 'quasar'
  import UtilStore from '../stores/utils'

  export default {
    name: 'HeaderBar',

    components: {
      Icon,
    },

    setup() {
      const utilStore = UtilStore()

      return {
        leftDrawerOpen: computed(() => utilStore.isLeftDrawerOpen),
        toggleLeftDrawer: () => utilStore.toggleLeftDrawer(),
        myDate: computed(() => date.formatDate(Date.now(), 'dddd, DD MMMM YYYY')),
      }
    },
  }
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
