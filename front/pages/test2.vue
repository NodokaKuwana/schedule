<template>
  <v-layout>
    <v-flex class="text-center">
      <blockquote class="blockquote">
        予定を登録する
        <v-app id="inspire">
          <v-row justify="right">
            <v-sheet height="600">
              <v-date-picker
                v-model="picker"
                color="#81D4FA"
                header-color="#F8BBD0"
                scrollable="true"
                width="600"
              >
              </v-date-picker>
            </v-sheet>
          </v-row>
        </v-app>
      </blockquote>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  el: '#inspire',
  data() {
    return {
      picker: new Date().toISOString().substr(0, 10)
    }
  }
}
</script>
