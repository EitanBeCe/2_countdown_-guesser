import { useRef, useState } from 'react'
import ResultPopup, { type ResultPopupHandle } from './ResultPopup.js'

interface TimerChallangeCardProps {
  targetTime: number
  text: string
}

// let clickTime: number | null = null // One variable for all instances of the component = bug if multiple timers are used at the same time.

const TimerChallangeCard = ({ targetTime, text }: TimerChallangeCardProps) => {
  const [isTimer, setIsTimer] = useState(false)
  // const [isShowPopup, setIsShowPopup] = useState(false)
  const clickTime = useRef<number | null>(null)
  const alertText = useRef('')
  const popupRef = useRef<ResultPopupHandle | null>(null)

  const toggleTimer = () => {
    if (isTimer) {
      // Stop timer and show result
      const msBetweenClicks = Date.now() - (clickTime.current || 0)
      const elapsed = msBetweenClicks - targetTime

      const second_s = targetTime / 1000 === 1 ? 'second' : 'seconds'

      alertText.current = `The target time was ${targetTime / 1000} ${second_s}.
      ${msBetweenClicks / 1000} ${second_s} passed.
      You were ${Math.abs(elapsed) / 1000} ${second_s} ${elapsed > 0 ? 'late' : 'early'}!`

      clickTime.current = null

      setIsTimer(false)

      // popupRef.current?.showModal()
      popupRef.current?.openModal() // useImperativeHandle
    } else {
      // Start timer
      clickTime.current = Date.now()

      setIsTimer(true)
    }
  }

  // const onClosePopup = () => {
  // popupRef.current?.close()
  // setIsShowPopup(false)
  // }

  return (
    <>
      {/* {isShowPopup && <ResultPopup ref={popupRef} text={alertText.current} onClose={onClosePopup} />} */}
      <ResultPopup ref={popupRef} text={alertText.current} />

      <section className="challenge">
        <h2>{text}</h2>
        <div className="challenge-time">{targetTime / 1000} seconds</div>

        <button onClick={toggleTimer}>{isTimer ? 'Timer Started!' : 'Start Timer'}</button>
      </section>
    </>
  )
}

export default TimerChallangeCard
