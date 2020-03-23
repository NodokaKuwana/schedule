<template>
  <section class="container">
    <div>
      <v-data-table :headers="headers" :items="lists" :items-per-page="10" />
    </div>
  </section>
</template>

<script>
export default {
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
  },
  async asyncData({ app }) {
    // エンドポイントを設定
    const baseUrl = '/search'
    const response = await app.$axios.$get(baseUrl)
    console.log(response)
    return { lists: response }
  }
}
</script>
