import dbService from "~/server/dbService";
import {delayer} from "~/server/serverUtils";

export default defineEventHandler(async (event) => {
  const articleId = getRouterParam(event, 'article-id')
  const id = Number(articleId)

  const answer: {
    status: string
    message: string
    data?: any
  } = {
    status: 'error',
    message: "Bad request",
  }

  if(!isNaN(id)) {
    const article = dbService.getArticle(id)
    if(article) {
      answer.status = 'success'
      answer.message = 'Article found'
      answer.data = article
    }else{
      answer.message = "No article found."
    }
  }

  await delayer(2500)
  return answer
})