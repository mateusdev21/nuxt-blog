<template>
  <div class="home-container">
    <v-carousel
      hide-delimiter-background
      :show-arrows="false"
      height="600"
      class="mb-8"
    >
      <v-carousel-item
        v-for="item in itemsHeadline"
        :key="item.title"
        reverse-transition="fade-transition"
        transition="fade-transition"
        @click="readArticle(item.title)"
      >
        <h2 class="headline-title">
          {{ item.title }}
        </h2>
        <v-img :src="item.urlToImage" class="headline-image"> </v-img>
      </v-carousel-item>
    </v-carousel>

    <v-row class="news-row">
      <v-col v-for="item in itemsNews" :key="item.title" cols="12" md="4">
        <v-card class="mx-auto" max-width="600" outlined dark>
          <v-list-item three-line>
            <v-list-item-content class="news-content">
              <p class="published-date">{{ item.publishedAt }}</p>
              <v-list-item-title class="text-h6 mb-1 news-title">
                {{ item.title }}
              </v-list-item-title>
              <v-list-item-subtitle>{{
                item.description
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-card-actions>
            <v-btn outlined rounded text @click="readArticle(item.title)">
              Read
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import dateFns from 'date-fns'
import { getHeadline, getNews } from '@/api/news'

export default {
  name: 'HomePage',
  data() {
    return {
      itemsHeadline: [],
      itemsNews: [],
    }
  },
  async mounted() {
    try {
      this.isLoading = true
      const promises = [this.fetchHeadline(), this.fetchNews()]
      await Promise.all(promises)
      this.isLoading = false
    } catch (err) {
      this.isLoading = false
      console.log(err)
    }
  },
  methods: {
    async fetchHeadline() {
      const headlines = await getHeadline()
      const { data } = headlines
      this.articles = data
      this.itemsHeadline = data.articles
    },
    async fetchNews() {
      const news = await getNews(6)
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
.home-container {
  margin: 0px !important;
  padding: 0px !important;
}
.headline-title {
  color: white;
  background-color: black;
  font-weight: 700 !important;
  padding: 1%;
}
.news-row {
  margin-top: 2vh;
}
.published-date {
  font-size: 14px;
  color: white;
  margin-bottom: 1.5vh !important;
}
.news-title {
  font-size: 20px;
  margin-bottom: 1.5vh !important;
}
.news-content {
  word-wrap: break-word !important;
}
</style>
