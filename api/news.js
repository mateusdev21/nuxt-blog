import apiHandler from './api-handler'

export async function getHeadline() {
  const res = await apiHandler.get(`/top-headlines`, {
    params: {
      apiKey: process.env.API_KEY,
      country: 'us',
      pageSize: 5,
    },
  })
  return res
}

export async function getNews(size) {
  const res = await apiHandler.get(`/everything`, {
    params: {
      apiKey: process.env.API_KEY,
      sources: 'cnn',
      language: 'en',
      pageSize: size,
    },
  })
  return res
}
