<template>
  <v-app>
    <Header />

    <v-container class="mt-15 pt-10">
      <router-view/>
    </v-container>
  </v-app>
</template>

<script>

import Header from "./components/Header";

export default {
  name: 'App',

  components: {
    Header
  },

  data: () => ({
    seconds: 0,
    page: 'red'
  }),
  methods: {
    incrementSeconds() {
      this.seconds++
    }
  },
  mounted() {
    if (this.$route.name === 'MainPage') {
      this.$router.push('/red')
    }
  },
  updated() {

    if (this.$route.name === 'RedPage') {
      setTimeout(() => {
        this.$router.push('/yellow')
        this.page = 'red'
      }, 10000)

      // this.count = 10
      //
      // let incrementInterval = setInterval(() => {
      //   if (this.seconds < this.count) {
      //     this.incrementSeconds(this.count)
      //
      //   } else {
      //     clearInterval(incrementInterval)
      //     this.seconds = 0
      //     this.count = 3
      //   }
      // }, 1000)

    } else if (this.$route.name === 'YellowPage') {
      setTimeout(() => {
        if (this.page === 'green') {
          this.$router.push('/red')
        } else if (this.page === 'red') {
          this.$router.push('/green')
        }
      }, 3000)

      // let incrementInterval = setInterval(() => {
      //   if (this.seconds < this.count) {
      //     this.incrementSeconds(this.count)
      //
      //   } else {
      //     clearInterval(incrementInterval)
      //     this.seconds = 0
      //     this.count = 15
      //   }
      // }, 1000)

    } else if (this.$route.name === 'GreenPage') {
      setTimeout(() => {
        this.$router.push('/yellow')
        this.page = 'green'
      }, 15000)

      // let incrementInterval = setInterval(() => {
      //   if (this.seconds < this.count) {
      //     this.incrementSeconds(this.count)
      //
      //   } else {
      //     clearInterval(incrementInterval)
      //     this.seconds = 0
      //     this.count = 10
      //   }
      // }, 1000)
    }
  }
};
</script>

<style>
  .red-light {
    background-color: #ff0000;
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .yellow-light {
    background-color: #ffff00;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-top: 20px;
  }
  .green-light {
    background-color: #14ff14;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-top: 20px;
  }

  .red-off-light {
    background-color: #6d0707;
    width: 100px;
    height: 100px;
    border-radius: 100%;
  }
  .yellow-off-light {
    background-color: #93930f;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-top: 20px;
  }
  .green-off-light {
    background-color: #0b6f0b;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-top: 20px;
  }
  .traffic-light {
    margin: 0 auto;
    padding: 50px 0;
    width: 200px;
    border-radius: 20px;
  }
</style>