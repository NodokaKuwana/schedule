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
          searchable: true,
          sortable: true,
          value: 'time'
        },
        {
          text: 'やること',
          value: 'content'
        }
      ]
    }
  },
  async asyncData({ app }) {
    // エンドポイントを設定
    const baseUrl = '/search'
    const response = await app.$axios.$get(baseUrl)
    console.log(response[2].date)
    return { lists: response }
  }
}
</script>
