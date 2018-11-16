console.sir = element => {
  console.log(
    `Here is the ${typeof element} that you asked for` + " m'lord. 🤵🏼" + "\n"
  )
  console.dir(element)
}

console.king = element => {
  console.log(
    `May I present you with a ${typeof element}, your Grace 🤴🏼` + "\n"
  )
  console.dir(element)
}

exports.console = console
