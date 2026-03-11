import { useRef, useState } from 'react'

interface TimerChallangeCardProps {
  targetTime: number
  text: string
}

// let clickTime: number | null = null // One variable for all instances of the component = bug if multiple timers are used at the same time.

const TimerChallangeCard = ({ targetTime, text }: TimerChallangeCardProps) => {
  const [isTimer, setIsTimer] = useState(false)
  const clickTime = useRef<number | null>(null)

  const toggleTimer = () => {
    if (isTimer) {
      const msBetweenClicks = Date.now() - (clickTime.current || 0)
      const elapsed = msBetweenClicks - targetTime

      const alertText = `You were ${Math.abs(elapsed) / 1000} seconds ${elapsed > 0 ? 'late' : 'early'}!`

      alert(alertText)

      clickTime.current = null

      setIsTimer(false)
    } else {
      clickTime.current = Date.now()

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
