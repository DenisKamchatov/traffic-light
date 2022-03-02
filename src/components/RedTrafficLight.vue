<template>
  <div class="traffic-light grey lighten-2 d-flex flex-column align-center">
    <div class="red-light" v-if="seconds > 4"/>
    <div class="red-light" v-if="seconds <= 4 && seconds % 2 === 0"/>
    <div class="red-off-light" v-else-if="seconds <= 4 && seconds % 2 !== 0"/>
    <div class="yellow-off-light"/>
    <div class="green-off-light"/>
    <h1 class="mt-8">{{ seconds }}</h1>
  </div>
</template>

<script>
export default {
  name: "RedTrafficLight",
  data: () => ({
    seconds: 10,
  }),
  mounted() {
    if (this.$route.name === 'RedPage') {
      let interval = setInterval(() => {
        if (this.seconds <= 1) {
          clearInterval(interval)
        } else {
          this.seconds--
        }
      }, 1000)
    } else {
      clearInterval()
    }
  }
}
</script>

<style scoped>

</style>