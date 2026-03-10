import { useState } from 'react'

interface TimerChallangeCardProps {
  targetTime: number
  text: string
}

let clickTime: number | null = null

const TimerChallangeCard = ({ targetTime, text }: TimerChallangeCardProps) => {
  const [isTimer, setIsTimer] = useState(false)

  const toggleTimer = () => {
    if (isTimer) {
      const msBetweenClicks = Date.now() - clickTime!
      const elapsed = msBetweenClicks - targetTime

      const text = `You were ${Math.abs(elapsed) / 1000} seconds ${elapsed > 0 ? 'late' : 'early'}!`

      alert(text)

      clickTime = null

      setIsTimer(false)
    } else {
      clickTime = Date.now()

      setIsTimer(true)
    }
  }

  return (
    <section className="challenge">
      <h2>{text}</h2>
      <div className="challenge-time">{targetTime / 1000} seconds</div>

      <button onClick={toggleTimer}>{isTimer ? 'Timer Started!' : 'Start Timer'}</button>
    </section>
  )
}

export default TimerChallangeCard
