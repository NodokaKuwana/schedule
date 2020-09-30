<template>
  <v-dialog v-model="dialog" :max-width="options.width" @keydown.esc="cancel">
    <v-card>
      <v-form ref="form" v-model="valid" lazy-validation>
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
                <v-text-field
                  v-model="month"
                  :rules="contentRules"
                  label="month"
                  required
                />
              </v-col>
              <v-col cols="12" sm="3">
                <v-text-field
                  v-model="day"
                  :rules="contentRules"
                  label="day"
                  required
                />
              </v-col>
              <v-col cols="12" sm="3">
                <v-select
                  v-model="hour"
                  :rules="contentRules"
                  :items="hour_list"
                  label="hour"
                  required
                />
              </v-col>
              <v-col cols="12" sm="3">
                <v-select
                  v-model="minute"
                  :rules="contentRules"
                  :items="minute_list"
                  label="minute"
                  required
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="content"
                  :rules="contentRules"
                  label="content"
                  type="text"
                  required
                />
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
          <v-btn
            :disabled="!valid"
            color="#F06292"
            text="text"
            @click.native="agree"
          >
            Add
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    dialog: false,
    resolve: null,
    reject: null,
    message: null,
    title: null,
    year: null,
    month: null,
    contentRules: [(v) => !!v || 'required'],
    day: null,
    hour_list: [
      '00',
      '01',
      '02',
      '03',
      '04',
      '05',
      '06',
      '07',
      '08',
      '09',
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
    ],
    minute_list: ['00', '10', '20', '30', '40', '50'],
    hour: null,
    minute: null,
    content: null,
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
      this.year = date.slice(0, 4)
      this.month = date.slice(5, 7)
      this.day = date.slice(8, 10)
      return new Promise((resolve, reject) => {
        this.resolve = resolve
        this.reject = reject
      })
    },
    async agree() {
      if (this.$refs.form.validate()) {
        this.resolve(true)
        const baseUrl = '/register'
        await this.$axios.$post(baseUrl, {
          year: this.year,
          month: this.month,
          day: this.day,
          hour: this.hour,
          minute: this.minute,
          content: this.content
        })
      }
    },
    cancel() {
      this.resolve(false)
      this.dialog = false
    }
  }
}
</script>
