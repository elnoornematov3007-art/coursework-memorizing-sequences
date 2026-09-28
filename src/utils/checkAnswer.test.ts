import { describe, it, expect } from 'vitest'
import checkAnswer from './checkAnswer'

describe('checkAnswer', () => {
  it('возвращает true для правильной последовательности', () => {
    const sequence = [2, 5, 1, 7]
    const userSequence = [2, 5, 1, 7]

    expect(checkAnswer(sequence, userSequence)).toBe(true)
  })

  it('возвращает false для неправильной последовательности', () => {
    const sequence = [2, 5, 1, 7]
    const userSequence = [2, 5, 3, 7]

    expect(checkAnswer(sequence, userSequence)).toBe(false)
  })

  it('возвращает false для последовательностей разной длины', () => {
    const sequence = [2, 5, 1, 7]
    const userSequence = [2, 5, 1]

    expect(checkAnswer(sequence, userSequence)).toBe(false)
  })
})