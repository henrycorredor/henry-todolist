export function delayer(delay = 3000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, 3000)
  })
}