import {delayer} from "~/server/serverUtils";
import dbService from "~/server/dbService";

export default defineEventHandler(async () => {
  await delayer()

  return {
    status: 'success',
    data: dbService.getTasks()
  }
})