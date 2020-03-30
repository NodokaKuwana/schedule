<template>
  <v-layout>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-flex class="text-center">
        予定を登録する
        <div>
          <v-row justify="start">
            <v-sheet height="600">
              <v-date-picker
                v-model="date"
                color="#81D4FA"
                header-color="#F8BBD0"
                width="600"
                @click:date="onClickOpen"
              >
                calender
              </v-date-picker>
              <confirm ref="confirm" />
            </v-sheet>
          </v-row>
        </div>
      </v-flex>
    </v-form>
  </v-layout>
</template>

<script>
import confirm from '../components/registDialog.vue'
export default {
  components: {
    confirm
  },
  data() {
    return {
      date: new Date().toISOString().substr(0, 10)
    }
  },
  methods: {
    async onClickOpen(date) {
      await this.$refs.confirm.open(date, 'Add event', 'Add new event!', {
        color: '#AED581'
      })
    }
  }
}
</script>
