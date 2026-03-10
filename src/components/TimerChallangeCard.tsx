const TimerChallangeCard = ({ time, text }: { time: number; text: string }) => {
  return (
    <section className="challenge">
      <h2>{text}</h2>
      <p>Guess the number of seconds remaining!</p>
      <div className="challenge-time">Time: {time / 1000} seconds</div>
    </section>
  )
}

export default TimerChallangeCard
