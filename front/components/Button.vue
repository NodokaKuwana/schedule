<template>
  <v-btn>
    {{ buttonName }}
  </v-btn>
</template>

<script>
import axios from 'axios'
const url = 'https://zip-cloud.appspot.com/api/search?zipcode=7830060'
export default {
  name: 'Button',
  props: {
    buttonName: {
      type: String,
      default: 'api()'
    }
  },
  data() {
    return function api() {
      axios.get(url).then((res) => {
        console.log(res.data)
        return res.data
      })
    }
  }
}
</script>
