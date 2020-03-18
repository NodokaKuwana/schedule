<template>
  <section class="container">
    <div>
      <v-app id="inspire">
        <div id="app">
          <h1>{{ message }}</h1>
        </div>
      </v-app>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ app }) {
    const baseUrl = 'http://localhost:8000/search'
    const response = await app.$axios.$get(baseUrl)
    console.log(response[0].content)
    const content = response[0].content
    return { message: content }
  }
}
</script>
