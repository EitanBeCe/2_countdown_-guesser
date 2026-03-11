import { createPortal } from 'react-dom'

interface ResultPopupProps {
  ref: React.RefObject<HTMLDialogElement | null>
  text: string
  // onClose: () => void
}

const ResultPopup = ({ ref, text }: ResultPopupProps) => {
  return createPortal(
    <dialog ref={ref} className="result-modal">
      <h2>Result</h2>
      <p>{text}</p>
      <form method="dialog">
        {/* <button onClick={onClose}>Close</button> */}
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal') as HTMLElement
  )
}

export default ResultPopup
