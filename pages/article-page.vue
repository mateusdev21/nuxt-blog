<template>
  <div>
    <v-card v-for="item in items" :key="item.title" elevation="2" dark>
      <v-card-title>
        <h1>{{ item.title }}</h1>
      </v-card-title>
      <v-row>
        <v-col>
            <v-img :src="item.urlToImage"></v-img>
        </v-col>
        <v-col></v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { getArticle } from '@/api/news'
export default {
  name: 'ArticlePage',
  head: {
    title: 'Article',
  },
  data() {
    return {
      items: [],
    }
  },
  async mounted() {
    try {
      this.isLoading = true
      const promises = [this.fetchArticle()]
      await Promise.all(promises)
      this.isLoading = false
    } catch (err) {
      this.isLoading = false
      console.log(err)
    }
  },
  methods: {
    async fetchArticle() {
      const article = await getArticle(this.$route.query.q)
      const { data } = article
      this.items = data.articles
    },
  },
}
</script>

<style></style>
