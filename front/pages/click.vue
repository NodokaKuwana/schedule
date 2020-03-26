<template>
  <div id="app">
    <h2 @click="nakanishiClick">
      Nakanishi
    </h2>
    <h2 @click="superClick('引数です')">
      Super
    </h2>
  </div>
</template>

<script>
const number = 2 * 10

export default {
  data() {
    return {
      vueNumber: number,
      name: 'nakanishi'
    }
  },
  methods: {
    superClick(value) {
      alert(value)
    },
    nakanishiClick() {
      alert('Nakanishi')
    }
  }
}
</script>
