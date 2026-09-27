import './App.css'

function App() {
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

            <div className="game-board">
              {Array.from({ length: 9 }, (_, index) => (
                <button
                  key={index}
                  className="game-cell"
                  type="button"
                  aria-label={`Ячейка ${index + 1}`}
                />
              ))}
            </div>
    
          </div>
      </main>
    </div>
  )
}

export default App