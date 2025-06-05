import {TaskStatus} from "~/types/enums";

export const tasksMockData =  [
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

export const articlesMockData = [{
  id: 1,
  title: "Article 1",
  content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.",
  featured_image: "https://picsum.photos/400/400",
  excerpt: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
  created_at: "2025-06-02"
},{
  id: 2,
  title: "The art of life",
  content: "Art of Life is the fourth studio album by Japanese heavy metal band X Japan, released on August 25, 1993, by Atlantic Records. The album consists solely of the 29-minute-long orchestrated title track, which was written and composed by Yoshiki entirely in English and recorded with the Royal Philharmonic Orchestra. It topped the Oricon chart and has sold over 600,000 copies. The album is the band's first after changing their name from simply \"X\" and the first to feature bassist Heath.",
  featured_image: "https://picsum.photos/400/400",
  excerpt: "Art of Life is the fourth studio album by Japanese heavy metal band X Japan, released on August 25, 1993, by Atlantic Records.",
  created_at: "2025-03-02"
},{
  id: 3,
  title: "How interesting is VUE",
  content: "Astro is a modern all-in-one web framework for building performant, scalable, and accessible web applications. It is designed to be flexible and customizable, allowing developers to build their projects in the way that best fits their needs.\n" +
    "\n" +
    "One of the key benefits of using Astro is its ability to handle both client-side and server-side rendering. This means you can pre-render your web application on the server, resulting in faster load times and improved accessibility for users with slower internet connections. it also provides a powerful routing system, making it easy to define the routes for your web application. Additionally, you can add custom middleware to your routes to add custom logic, such as authentication or authorization checks.\n" +
    "\n" +
    "Another feature of Astro is its support for static site generation, which allows you to generate a fully static version of your web application that can be served from a CDN or other hosting provider. This can help to improve the performance and scalability of your web application, as well as reduce the load on your server.",
  featured_image: "https://picsum.photos/400/400",
  excerpt: "Astro is a modern all-in-one web framework for building performant, scalable, and accessible web applications. It is designed to be flexible and customizable, allowing developers to build their projects in the way that best fits their needs.",
  created_at: "2025-04-08"
}]