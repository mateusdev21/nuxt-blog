<template>
  <div class="toolbar">
    <v-toolbar color="dark" dark>
      <v-toolbar-title class="toolbar-title">NuxtJS News Blog</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          class="toolbar-items"
          router
          exact
        >
          <v-icon dark class="mr-0">{{ item.icon }}</v-icon>
          <p>&nbsp;{{ item.title }}</p>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-main>
      <v-container class="main-container">
        <Nuxt />
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/',
        },
        {
          icon: 'mdi-format-list-bulleted',
          title: 'List',
          to: '/list-page',
        },
      ],
    }
  },
}
</script>

<style>
.v-main {
  background-color: #4d4d4d !important;
  min-height: 100vh;
}
.toolbar {
  font-family: Arial, Helvetica, sans-serif !important;
}
.toolbar-title {
  font-weight: 700 !important;
}
.toolbar-items {
  text-transform: capitalize !important;
  font-size: 1rem !important;
  font-weight: 500 !important;
  padding: 15px !important;
  box-shadow: none !important;
}
.main-container {
  margin: 0px !important;
  padding: 2vh 5vw !important;
  min-width: 100vw;
}
</style>
