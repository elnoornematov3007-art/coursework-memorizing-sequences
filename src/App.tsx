import { useState } from 'react'
import generateSequence from './utils/generateSequence'
import './App.css'

function App() {
  const [sequence, setSequence] = useState<number[]>([])
  const [activeCell, setActiveCell] = useState<number | null>(null)

  async function showSequence(sequenceToShow: number[]) {
    for (const cell of sequenceToShow) {
      setActiveCell(cell)

      await new Promise((resolve) => setTimeout(resolve, 600))

      setActiveCell(null)

      await new Promise((resolve) => setTimeout(resolve, 200))
    }
  }

  return (
    <div className="app">
      <h1>Запоминание последовательностей</h1>

      <main className="game-layout">
        <section className="game">
          <div className="difficulty">
            <label htmlFor="difficulty">Уровень сложности:</label>

            <select id="difficulty">
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
                aria-label={`Ячейка ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="game-info">
            <p>Текущая длина: 1</p>
            <p>Рекорд: 0</p>
          </div>

          <div className="game-controls">
            <button type="button">Старт</button>
            <button type="button">Начать заново</button>
          </div>

          <p className="game-status">
            Выберите сложность и нажмите «Старт»
          </p>
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