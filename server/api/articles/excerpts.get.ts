import {delayer} from "~/server/serverUtils";
import dbService from "~/server/dbService";

export default defineEventHandler(async () => {
  await delayer(800)

  return {
    status: 'success',
    data: dbService.getArticlesExcerpt()
  }
})