<template>
  <section class="container">
    <div>
      <v-data-table :headers="headers" :items="lists" :items-per-page="10">
        <v-btn color="success">Success</v-btn>
      </v-data-table>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ app }) {
    // エンドポイントを設定
    const baseUrl = '/search'
    const response = await app.$axios.$get(baseUrl)
    return { lists: response }
  },
  data() {
    return {
      headers: [
        {
          text: '日にち',
          align: 'left',
          sortable: true,
          value: 'date'
        },
        {
          text: '時間',
          align: 'left',
          sortable: true,
          value: 'time'
        },
        {
          text: 'やること',
          align: 'left',
          value: 'content'
        },
        {
          text: 'Actions',
          value: 'actions',
          sortable: false
        }
      ]
    }
  }
}
</script>
