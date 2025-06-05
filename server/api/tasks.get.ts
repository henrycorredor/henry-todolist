import {TaskStatus} from "~/types/enums";

function delayer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, 3000)
  })
}

export default defineEventHandler(async () => {
  await delayer()

  return {
    status: 'success',
    data: [
      {
        id: 1,
        title: "Task 1",
        desc: "This is the description for the first task. This is a little long",
        state: TaskStatus.CREATED,
        pic: "https://picsum.photos/320/200",
        createdAt: "2025-06-02"
      },
      {
        id: 2,
        title: "Fix the bike",
        desc: "Wheels are broken. Need to remplace the wheel and brakes. Maybe install a front basket",
        state: TaskStatus.COMPLETED,
        pic: "https://picsum.photos/400/400",
        createdAt: "2025-06-02"
      },
      {
        id: 3,
        title: "Buy a gift for mom",
        desc: "Next weekend is mom's bday!",
        state: TaskStatus.COMPLETED,
        pic: undefined,
        createdAt: "2025-06-02"
      },
      {
        id: 4,
        title: "Finish the VUE project",
        desc: "Two days for complete this homework. Nuxt and Bootstrap are not that good friends so take your time to research how to make it done.",
        state: TaskStatus.ON_PROGRESS,
        pic: "https://picsum.photos/400/400",
        createdAt: "2025-06-01"
      },
      {
        id: 5,
        title: "Make girlfriend happy",
        desc: "Perhaps the most difficult task for this list. Be good boy and get her flowers.",
        state: TaskStatus.ON_PROGRESS,
        pic: "https://picsum.photos/400/400",
        createdAt: "2025-05-29"
      },
      {
        id: 6,
        title: "One more task",
        desc: "Not sure what else to type. Yeah, that's it.",
        state: TaskStatus.CREATED,
        pic: undefined,
        createdAt: "2025-05-23"
      },
    ]
  }
})