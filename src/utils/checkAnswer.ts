function checkAnswer(
  sequence: number[],
  userSequence: number[]
): boolean {
  if (sequence.length !== userSequence.length) {
    return false
  }

  return sequence.every(
    (cell, index) => cell === userSequence[index]
  )
}

export default checkAnswer