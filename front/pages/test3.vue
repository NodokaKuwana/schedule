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
export default {
  async asyncData({ app }) {
    const baseUrl = 'https://zip-cloud.appspot.com/api/search?zipcode=7830060'
    const response = await app.$axios.$get(baseUrl)
    const content = response.results[0].address1
    return { message: content }
  }
}
</script>
