<template>
  <q-page class="bg-grey-3 column">
    <div class="row q-pa-sm bg-info">
      <InputTask />
    </div>
    <ListTask />
  </q-page>
</template>

<script>
  // Mis componentes
  import InputTask from '../components/InputTask.vue'
  import ListTask from '../components/ListTask.vue'

  export default {
    name: 'TodoPage',

    components: {
      InputTask,
      ListTask,
    },
  }
</script>
