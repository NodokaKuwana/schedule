<template>
  <v-row>
    <Button />
    <v-spacer></v-spacer>
    <Button buttonName="サインアップ" />
    <p>{{ message.message }}</p>
  </v-row>
</template>

<script>
import Button from '../components/Button'

const message = 'message'
this.message = message

export default {
  props: [message],
  name: 'Wrapper',
  components: {
    Button
  }
}
</script>
