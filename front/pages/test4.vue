<template>
  <section class="container">
    <div>
      <!-- <v-app id="inspire">
        <h1>{{ message }}</h1>
      </v-app> -->
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'test3',
  computed: mapGetters('sumple', {
    todos: 'getTodos'
  }),
  methods: {
    ...mapActions({
      toggleTodo: 'getTodos'
    })
  }
}
</script>
