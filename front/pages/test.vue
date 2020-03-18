<template>
  <v-row>
    <Button />
    <v-spacer></v-spacer>
    <Button buttonName="サインアップ" />
  </v-row>
</template>

<script>
import Button from '../components/Button'

export default {
  name: 'test',
  components: {
    Button
  }
}
</script>
