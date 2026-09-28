import { describe, it, expect } from 'vitest'
import generateSequence from './generateSequence'

describe('generateSequence', () => {
  it('создаёт последовательность заданной длины', () => {
    const sequence = generateSequence(5)

    expect(sequence).toHaveLength(5)
  })

  it('создаёт только допустимые индексы ячеек', () => {
    const sequence = generateSequence(100)

    sequence.forEach((cell) => {
        expect(cell).toBeGreaterThanOrEqual(0)
        expect(cell).toBeLessThanOrEqual(8)
    })
  })
})