console.sir = element => {
  console.log(
    `Here is the ${typeof element} that you asked for` + " m'lord. 🤵🏼" + "\n"
  )
  console.dir(element)
}

let robby = {
  name: "robby",
  email: "rcackerley@me.com"
}

console.sir(robby)
