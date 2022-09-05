<template>
  <div>
    <h1>Home Page</h1>
  </div>
</template>

<script>
import { getHeadline } from '@/api/news'
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
      console.log(this.itemsHeadline)
    },
  },
}
</script>
