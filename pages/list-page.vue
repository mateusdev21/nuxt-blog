<template>
  <div>
    <v-list two-line dark>
      <v-list-item
        v-for="item in itemsNews"
        :key="item.title"
        class="news"
        @click="readArticle(item.title)"
      >
        <!-- <v-list-item-avatar> -->
          <v-img :src="item.urlToImage" class="news-avatar"></v-img>
        <!-- </v-list-item-avatar> -->
        <v-list-item-content class="news-content">
          <v-list-item-title v-text="item.title"></v-list-item-title>
          <v-list-item-subtitle
            v-text="item.description"
          ></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import { getNews } from '@/api/news'
export default {
  name: 'ListPage',
  head: {
    title: 'News List',
  },
  data() {
    return {
      itemsNews: [],
    }
  },
  async mounted() {
    try {
      this.isLoading = true
      const promises = [this.fetchNews()]
      await Promise.all(promises)
      this.isLoading = false
    } catch (err) {
      this.isLoading = false
      console.log(err)
    }
  },
  methods: {
    async fetchNews() {
      const news = await getNews()
      const { data } = news
      this.articles = data
      this.itemsNews = data.articles

      console.log(this.itemsNews)

      // this.itemsNews.map(getPublishedDate)
      // function getPublishedDate(item) {
      //   return (item.publishedAt = dateFns.format(item.updatedAt, 'yyyy-MM-dd'))
      // }
    },
    readArticle(title) {
      this.$router.push(`article-page?q=${title}`)
    },
  },
}
</script>

<style>
.news-content {
  margin: 1vw !important;
  color: white;
}
.news-avatar {
    max-width: 200px;
}
</style>
