<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Barra de titulo con botón hamburguesa -->
    <HeaderBar />

    <!-- Menu lateral Drawer -->
    <DrawerMenu />

    <!-- Contenido principal -->
    <q-page-container>
      <!-- Para cachear con router -->
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
  import { defineComponent, computed } from 'vue'
  import HeaderBar from '../components/Header.vue'
  import DrawerMenu from '../components/DrawerMenu.vue'

  export default defineComponent({
    name: 'MainLayout',

    components: {
      HeaderBar,
      DrawerMenu,
    },

  })
</script>
