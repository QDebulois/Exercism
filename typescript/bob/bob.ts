
const SURE: String = "Sure."
const CHIL: String = "Whoa, chill out!"
const CALM: String = "Calm down, I know what I'm doing!"
const FINE: String = "Fine. Be that way!"
const WEVR: String = "Whatever."
const CHARS: String = "abcdefghijklmnopqrstuvwxyz"


export function hey(message: string): String {
  const msg: string = message.trim()

  if (msg === "") { return FINE }

  const msgIsYelled: boolean = msg.toUpperCase() === msg
  const msgIsQuestion: boolean = msg.endsWith("?")
  let   msgIsText: Boolean = false

  for (let i = 0; i < message.length; i++) {
    if (CHARS.includes(message[i].toLowerCase())) {
      msgIsText = true
      break
    }
  }

  if (msgIsText && msgIsYelled && msgIsQuestion) { return CALM }
  if (msgIsText && msgIsYelled) { return CHIL }
  if (msgIsQuestion) { return SURE }

  return WEVR
}
