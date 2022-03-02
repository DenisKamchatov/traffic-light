<template>
  <div class="traffic-light grey lighten-2 d-flex flex-column align-center">
    <div class="red-off-light"/>
    <div class="yellow-light"/>
    <div class="green-off-light"/>
    <h1 class="mt-8">{{ seconds }}</h1>
  </div>
</template>

<script>
export default {
  name: "YellowTrafficLight",
  data: () => ({
    seconds: 3,
  }),
  mounted() {
    if (this.$route.name === 'YellowPage') {
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