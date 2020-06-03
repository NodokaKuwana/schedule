<template>
  <section class="container">
    <div>
      <v-data-table
        :headers="headers"
        :items="lists"
        :items-per-page="10"
        class="elevation-1"
      >
        <template v-slot:item.action="{ item }">
          <v-icon
            medium
            @click="
              onClickOpen(item, item.uuid, item.date, item.time, item.content)
            "
          >
            edit
          </v-icon>
          <v-icon medium @click="deleteEvent(item)">
            delete
          </v-icon>
        </template>
      </v-data-table>
      <confirm ref="confirm" />
    </div>
  </section>
</template>

<script>
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import confirm from '../components/updateDialog.vue'
export default {
  components: {
    confirm
  },
  async asyncData({ app }) {
    // エンドポイントを設定
    const baseUrl = '/search'
    const response = await app.$axios.$get(baseUrl)
    return { lists: response }
  },
  data() {
    return {
      message: 'OK',
      headers: [
        {
          text: '日にち',
          align: 'left',
          value: 'date'
        },
        {
          text: '時間',
          value: 'time'
        },
        {
          text: 'やること',
          value: 'content'
        },
        {
          text: 'Actions',
          value: 'action',
          sortable: false
        }
      ]
    }
  },
  methods: {
    async deleteEvent(item) {
      const result = window.confirm(
        'Are you sure you want to delete this event?'
      )
      if (result) {
        const index = this.lists.indexOf(item)
        const baseUrl = '/delete'
        const params = { uuid: item.uuid }
        await this.$axios.$delete(baseUrl, { data: params })
        this.lists.splice(index, 1)
      }
    },
    async onClickOpen(item, uuid, date, time, content) {
      await this.$refs.confirm.modify(
        uuid,
        date,
        time,
        content,
        'Update event',
        'Update this event!',
        {
          color: '#AED581'
        }
      )
      Object.assign(this.lists[this.lists.indexOf(item)], 'this.editedItem')
    }
  }
}
</script>
