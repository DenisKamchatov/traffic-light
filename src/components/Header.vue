<template>
    <div>
      <v-app-bar
          color="grey darken-4"
          dense
          dark
          height="65px"
          fixed
      >
        <v-toolbar-title>Traffic Light</v-toolbar-title>

        <v-btn
          to="/red"
        >
          Red
        </v-btn>
        <v-btn
            to="/yellow"
        >
          Yellow
        </v-btn>
        <v-btn
            to="/green"
        >
          Green
        </v-btn>
      </v-app-bar>
    </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>