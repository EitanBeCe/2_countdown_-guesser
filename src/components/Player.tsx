import { useRef, useState } from 'react'

export default function Player() {
  const inputRef = useRef<HTMLInputElement>(null)

  const [name, setName] = useState('unknown entity')

  const handleSetName = () => {
    const val = inputRef.current?.value

    if (val && val.trim() !== '') {
      setName(val.trim())
    } else {
      inputRef.current!.value = ''
      inputRef.current?.focus()
      setName('unknown entity')
    }
  }

  return (
    <section id="player">
      <h2>Welcome {name}</h2>
      <p>
        <input type="text" ref={inputRef} />
        <button onClick={handleSetName}>Set Name</button>
      </p>
    </section>
  )
}
