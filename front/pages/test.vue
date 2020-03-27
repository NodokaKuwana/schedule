<template>
  <div id="form">
    <v-container fluid>
      <v-row justify="center">
        <v-col>
          <v-card>
            <v-app-bar color="primary" dark>
              <v-toolbar-title>
                <v-icon>list_alt</v-icon>○○一覧
              </v-toolbar-title>
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-btn
                    color="pink"
                    dark
                    small
                    absolute
                    bottom
                    right
                    fab
                    to="/create"
                    v-on="on"
                  >
                    <v-icon>add</v-icon>
                  </v-btn>
                </template>
                <span>新しい○○を作成する</span>
              </v-tooltip>
            </v-app-bar>
            <v-form ref="listForm" v-model="valid" lazy-validation>
              <v-container fluid class="pa-1">
                <v-row class="px-2">
                  <v-col cols="6" class="pa-1">
                    <v-text-field
                      v-model="model.title"
                      prepend-inner-icon="search"
                      clearable
                      label="タイトル"
                      name="title"
                      maxlength="64"
                      @change="loadList"
                    />
                  </v-col>
                  <v-col cols="3" class="pa-1">
                    <v-select
                      v-model="model.type"
                      label="種別"
                      name="type"
                      item-text="label"
                      item-value="value"
                      :items="[
                        { label: '-', value: null },
                        { label: '銀行', value: 0 },
                        { label: '郵便局', value: 1 }
                      ]"
                      @change="loadList"
                    />
                  </v-col>
                  <v-col cols="3" class="pa-1">
                    <v-select
                      v-model="model.is_open"
                      item-value="value"
                      label="公開"
                      name="is_open"
                      item-text="label"
                      :items="[
                        { label: '-', value: null },
                        { label: '公開中', value: true },
                        { label: '未公開', value: false }
                      ]"
                      @change="loadList"
                    />
                  </v-col>
                </v-row>
              </v-container>
              <v-data-table
                :headers="headers"
                :items="items"
                :options.sync="options"
                :server-items-length="total"
                :footer-props="{
                  'items-per-page-options': [
                    10,
                    20,
                    50,
                    100,
                    200,
                    300,
                    400,
                    500
                  ],
                  showFirstLastPage: true
                }"
                :loading="loading"
                multi-sort
                locale="ja-jp"
                loading-text="読込中"
                no-data-text="データがありません。"
                class="elevation-1"
              >
                <template v-slot:item.uri="{ item }">
                  <a :href="'https://hoge.jp/' + item.uri" target="_blank">
                    hoge.jp/{{ item.uri }}
                  </a>
                </template>
                <template v-slot:item.type="{ item }">
                  {{ selectionItems.type[item.type] }}
                </template>
                <template v-slot:item.is_open="{ item }">
                  <v-icon v-if="item.is_open">
                    check
                  </v-icon>
                </template>
                <template v-slot:item.created_at="{ item }">
                  {{ item.created_at.replace('T', ' ').replace(/-/g, '/') }}
                </template>
                <template v-slot:item.updated_at="{ item }">
                  {{ item.updated_at.replace('T', ' ').replace(/-/g, '/') }}
                </template>
                <template v-slot:item.code="{ item }">
                  {{ item.name }}
                </template>
                <template v-slot:item.action="{ item }">
                  <v-btn
                    small
                    class="mx-1"
                    color="orange accent-4"
                    :to="'/detail/' + item.uri"
                  >
                    <v-icon>pageview</v-icon>詳細
                  </v-btn>
                  <v-btn
                    small
                    class="mx-1"
                    color="orange accent-4"
                    :to="'/stats/' + item.uri"
                  >
                    <v-icon>bar_chart</v-icon>集計
                  </v-btn>
                </template>
              </v-data-table>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  data: () => ({
    loading: false,
    headers: [
      { text: 'ID', align: 'center', sortable: true, value: 'form_id' },
      { text: 'タイトル', align: 'center', sortable: true, value: 'title' },
      { text: 'URL', align: 'center', sortable: false, value: 'uri' },
      { text: '種別', align: 'center', sortable: false, value: 'form_type' },
      { text: '公開', align: 'center', sortable: false, value: 'is_open' },
      {
        text: '作成日時',
        align: 'center',
        sortable: true,
        value: 'created_at'
      },
      {
        text: '更新日時',
        align: 'center',
        sortable: true,
        value: 'updated_at'
      },
      { text: '組織', align: 'center', sortable: false, value: 'code' },
      { text: '操作', align: 'center', sortable: false, value: 'action' }
    ],
    options: {
      page: 1,
      itemsPerPage: 20,
      sortBy: ['form_id'],
      sortDesc: [true]
    },
    items: [],
    total: 0,
    selectionItems: {
      form_type: ['銀行', '郵便局']
    },
    model: {
      title: '',
      type: null,
      is_open: null
    }
  }),
  watch: {
    options: {
      handler() {
        this.loadList()
      },
      deep: true
    }
  },
  created() {
    this.loadList()
  },
  methods: {
    async loadList() {
      this.loading = true
      try {
        const sorts = []
        if (this.options.sortBy !== null) {
          this.options.sortBy.forEach((value, index) => {
            sorts.push((this.options.sortDesc[index] ? '-' : '+') + value)
          })
        }
        const res = await Axios.post(
          '/api/list',
          Object.assign(this.model, {
            offset: (this.options.page - 1) * this.options.itemsPerPage,
            limit: this.options.itemsPerPage,
            sort: sorts.join(' ')
          })
        )
        if (res.data) {
          this.items = res.data.items
          this.total = res.data.total
        }
      } catch (error) {
        alert('情報を取得できませんでした。時間をおいてやり直してください。')
      }
      this.loading = false
    }
  }
}
</script>
