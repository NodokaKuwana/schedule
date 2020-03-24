<template>
  <v-dialog v-model="dialog" :max-width="options.width" @keydown.esc="cancel">
    <v-card>
      <v-toolbar dark :color="options.color" dense text>
        <v-toolbar-title class="white--text">
          {{ title }}
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text v-show="!!message">
        {{ message }}
      </v-card-text>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="3">
              <v-text-field v-model="month" label="month" required />
            </v-col>
            <v-col cols="12" sm="3">
              <v-text-field v-model="day" label="day" required />
            </v-col>
            <v-col cols="12" sm="3">
              <v-select
                :items="[
                  '0',
                  '1',
                  '2',
                  '3',
                  '4',
                  '5',
                  '6',
                  '7',
                  '8',
                  '9',
                  '10',
                  '11',
                  '12',
                  '13',
                  '14',
                  '15',
                  '16',
                  '17',
                  '18',
                  '19',
                  '20',
                  '21',
                  '22',
                  '23',
                  '24'
                ]"
                label="hour"
                required
              />
            </v-col>
            <v-col cols="12" sm="3">
              <v-select
                :items="['00', '10', '20', '30', '40', '50']"
                label="minute"
                required
              />
            </v-col>
            <v-col cols="12">
              <v-text-field label="content" type="text" required />
            </v-col>
            <v-col cols="12">
              <v-text-field label="note" type="text" required />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions class="pt-0">
        <v-spacer />
        <v-btn color="grey" text="text" @click.native="cancel">
          Cancel
        </v-btn>
        <v-btn color="#F06292" text="text" @click.native="agree">
          Add
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    resolve: null,
    reject: null,
    message: null,
    title: null,
    month: null,
    day: null,
    options: {
      color: 'primary',
      width: 550
    }
  }),
  methods: {
    open(date, title, message, options) {
      this.dialog = true
      this.title = title
      this.message = message
      this.options = Object.assign(this.options, options)
      this.month = date.slice(5, 7)
      this.day = date.slice(8, 10)
      return new Promise((resolve, reject) => {
        this.resolve = resolve
        this.reject = reject
      })
    },
    agree() {
      this.resolve(true)
      this.dialog = false
    },
    cancel() {
      this.resolve(false)
      this.dialog = false
    }
  }
}
</script>
