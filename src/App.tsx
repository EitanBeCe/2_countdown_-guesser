import Player from './components/Player'
import TimerChallangeCard from './components/TimerChallangeCard.js'

const cards: { timeMs: number; text: string }[] = [
  { timeMs: 1000, text: 'Easy' },
  { timeMs: 5000, text: 'Not Easy' },
  { timeMs: 10000, text: 'Getting Tough' },
  { timeMs: 15000, text: 'Pros Only' }
]

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        {cards.map(card => (
          <TimerChallangeCard key={card.timeMs} targetTimeMs={card.timeMs} text={card.text} />
        ))}
      </div>
    </>
  )
}

export default App
