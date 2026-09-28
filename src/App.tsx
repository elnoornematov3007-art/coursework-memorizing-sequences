import { useState } from 'react'
import generateSequence from './utils/generateSequence'
import checkAnswer from './utils/checkAnswer'
import './App.css'

function App() {
  const [sequence, setSequence] = useState<number[]>([])
  const [activeCell, setActiveCell] = useState<number | null>(null)
  const [userSequence, setUserSequence] = useState<number[]>([])
  const [isUserTurn, setIsUserTurn] = useState(false)
  const [status, setStatus] = useState('Выберите сложность и нажмите «Старт»')
  const [difficulty, setDifficulty] = useState('easy')

  function getShowTime() {
    if (difficulty === 'easy') {return 800}
    if (difficulty === 'medium') {return 600}
    return 400
  }

  async function showSequence(sequenceToShow: number[]) {
    for (const cell of sequenceToShow) {
      setActiveCell(cell)

      await new Promise((resolve) => setTimeout(resolve, getShowTime()))

      setActiveCell(null)

      await new Promise((resolve) => setTimeout(resolve, 200))
    }
  }

  async function handleStart() {
    const newSequence = generateSequence(1)

    setSequence(newSequence)
    setUserSequence([])
    setIsUserTurn(false)
    setStatus('Запоминайте последовательность')

    await showSequence(newSequence)

    setIsUserTurn(true)
    setStatus('Повторите последовательность')
  }

  async function handleCellClick(index: number) {
    if (!isUserTurn) {
      return
    }

    const currentIndex = userSequence.length

    if (index !== sequence[currentIndex]) {
      setIsUserTurn(false)
      setStatus('Ошибка! Игра окончена')
      return
    }

    const newUserSequence = [...userSequence, index]
    setUserSequence(newUserSequence)

    setActiveCell(index)
    await new Promise((resolve) => setTimeout(resolve, 200))
    setActiveCell(null)

    if (newUserSequence.length === sequence.length) {
      if (checkAnswer(sequence, newUserSequence)) {
        setStatus('Правильно!')
        setIsUserTurn(false)

        const nextSequence = [...sequence, ...generateSequence(1)]

        setSequence(nextSequence)
        setUserSequence([])

        await new Promise((resolve) => setTimeout(resolve, 600))

        setStatus('Запоминайте последовательность')
        await showSequence(nextSequence)

        setIsUserTurn(true)
        setStatus('Повторите последовательность')
      }
    }
  }

  return (
    <div className="app">
      <h1>Запоминание последовательностей</h1>

      <main className="game-layout">
        <section className="game">
          <div className="difficulty">
            <label htmlFor="difficulty">Уровень сложности:</label>

            <select
              id="difficulty"
              value={difficulty}
              onChange={(event) => setDifficulty(event.target.value)}
            >
              <option value="easy">Лёгкий</option>
              <option value="medium">Средний</option>
              <option value="hard">Сложный</option>
            </select>
          </div>

          <div className="game-board">
            {Array.from({ length: 9 }, (_, index) => (
              <button
                key={index}
                className={`game-cell ${activeCell === index ? 'active' : ''}`}
                type="button"
                onClick={() => handleCellClick(index)}
                aria-label={`Ячейка ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="game-info">
            <p>Текущая длина: 1</p>
            <p>Рекорд: 0</p>
          </div>

          <div className="game-controls">
            <button type="button" onClick={handleStart}>Старт</button>
            <button type="button">Начать заново</button>
          </div>

          <p className="game-status">{status}</p>
        </section>

        <aside className="history">
          <h2>История результатов</h2>
          <p>История пока пуста</p>
        </aside>
      </main>
    </div>
  )
}

export default App