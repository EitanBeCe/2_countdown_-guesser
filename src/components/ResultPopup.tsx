import { Ref, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'

export interface ResultPopupHandle {
  openModal: () => void
}

interface ResultPopupProps {
  ref: Ref<ResultPopupHandle>
  text: string
}

const ResultPopup = ({ ref, text }: ResultPopupProps) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null)

  useImperativeHandle(ref, () => ({
    openModal() {
      dialogRef.current?.showModal()
    },
  }))

  return createPortal(
    <dialog ref={dialogRef} className="result-modal">
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
