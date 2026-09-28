
function generateSequence(length: number): number[] {
  const sequence: number[] = []

  for (let i = 0; i < length; i++) {
    const cell = Math.floor(Math.random() * 9)
    sequence.push(cell)
  }

  return sequence
}

export default generateSequence



