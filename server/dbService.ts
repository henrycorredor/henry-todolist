import {articlesMockData, tasksMockData} from "~/server/mockData";

export default {
  getArticle(id: number) {
    return articlesMockData.find(item => item.id === id)
  },
  getArticlesExcerpt() {
    return articlesMockData.map((article) => {
      const {id, title, excerpt, featured_image} = article
      return {
        id,
        title,
        excerpt,
        featured_image
      }
    })
  },
  getTasks() {
    return tasksMockData
  }
}