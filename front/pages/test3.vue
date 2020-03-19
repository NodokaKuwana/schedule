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
import axios from 'axios'
export default {
  asyncData() {
    return axios.get(`/search`).then((response) => {
      console.log(response)
      return { message: 'response.data.results[0].address1' }
    })
  }
}
</script>
