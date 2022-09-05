import apiHandler from './api-handler'

const key = process.env.API_KEY

export async function getHeadline() {
  const res = await apiHandler.get(`/top-headlines`, {
    params: {
      apiKey: key,
      country: 'us',
      pageSize: 5,
    },
  })
  return res
}

export async function getNews(size) {
  const res = await apiHandler.get(`/everything`, {
    params: {
      apiKey: key,
      sources: 'cnn',
      language: 'en',
      pageSize: size,
    },
  })
  return res
}

export async function getArticle(title) {
  const res = await apiHandler.get(`/everything`, {
      params: {
          apiKey: key,
          q: title
      }
  })
  return res
}
