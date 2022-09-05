<template>
  <div class="toolbar">
    <v-toolbar color="dark" dark>
      <v-toolbar-title class="toolbar-title">NuxtJS News Blog</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-icon dark class="mr-0">{{item.icon}}</v-icon>
          <p>&nbsp;{{item.title}}</p>
        </v-btn>
        <!-- <v-btn text> List </v-btn> -->
      </v-toolbar-items>
    </v-toolbar>
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
          to: '/list',
        },
      ],
    }
  },
}
</script>

<style>
.toolbar {
  font-family: Arial, Helvetica, sans-serif !important;
}
.toolbar-title {
  font-weight: 700 !important;
}
</style>
