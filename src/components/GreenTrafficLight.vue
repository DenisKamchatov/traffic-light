<template>
  <div class="traffic-light grey lighten-2 d-flex flex-column align-center">
    <div class="red-off-light"/>
    <div class="yellow-off-light"/>
    <div class="green-light" v-if="seconds > 4"/>
    <div class="green-light" v-if="seconds <= 4 && seconds % 2 === 0"/>
    <div class="green-off-light" v-else-if="seconds <= 4 && seconds % 2 !== 0"/>
    <h1 class="mt-8">{{ seconds }}</h1>
  </div>
</template>

<script>
export default {
  name: "GreenTrafficLight",
  data: () => ({
    seconds: 15,
  }),
  mounted() {
    if (this.$route.name === 'GreenPage') {
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