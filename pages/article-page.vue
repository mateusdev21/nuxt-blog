<template>
  <div>
    <v-card
      v-for="item in items"
      :key="item.title"
      elevation="2"
      dark
      class="article-card"
    >
      <v-card-title>
        <h1 class="card-title">{{ item.title }}</h1>
      </v-card-title>
      <v-row>
        <v-col>
          <v-img :src="item.urlToImage"></v-img>
        </v-col>
        <v-col>
          <p>{{ item.description }}</p>
          <p class="article-desc">{{ item.content }}</p>
          <p>Read Full Article :</p>
          <p>{{ item.url }}</p>
          <div class="d-flex flex-row social-icons">
            <v-btn class="mx-2" fab dark small color="#1d9bf0" depressed>
              <v-icon dark> mdi-twitter </v-icon>
            </v-btn>
            <v-btn class="mx-2" fab dark small color="#1877f2" depressed>
              <v-icon dark> mdi-facebook </v-icon>
            </v-btn>
            <v-btn class="mx-2" fab dark small color="#ca0067" depressed>
              <v-icon dark> mdi-instagram </v-icon>
            </v-btn>
            <v-btn class="mx-2" fab dark small color="#36dc82" depressed>
              <v-icon dark> mdi-whatsapp </v-icon>
            </v-btn>
          </div>
        </v-col>
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

<style>
p {
  line-height: 28px;
}
.article-card {
  padding: 1vh 3vw !important;
}
.card-title {
  font-size: 1.5em;
}
.article-desc {
  margin-bottom: 1vh;
}
.social-icons {
  margin-top: 2vh !important;
}
</style>
