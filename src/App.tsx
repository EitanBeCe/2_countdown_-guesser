import Player from './components/Player'
import TimerChallangeCard from './components/TimerChallangeCard.js'

const cards: { time: number; text: string }[] = [
  { time: 1000, text: 'Easy' },
  { time: 5000, text: 'Not Easy' },
  { time: 10000, text: 'Getting Tough' },
  { time: 15000, text: 'Pros Only' },
]

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        {cards.map((card, index) => (
          <TimerChallangeCard key={card.time} time={card.time} text={card.text} />
        ))}
      </div>
    </>
  )
}

export default App
