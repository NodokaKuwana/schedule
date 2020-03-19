<template>
  <section class="container">
    <div>
      <v-app id="inspire">
        <h1>{{ message }}</h1>
      </v-app>
    </div>
  </section>
</template>

<script>
import index from '../store/index'
console.log(index)

export default {
  data() {
    return {
      message: index
    }
  }
}
</script>
