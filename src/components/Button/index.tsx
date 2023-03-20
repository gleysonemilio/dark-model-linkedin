import './styles.css'

interface ButtonProps {
  text: string
  onClick?: () => void
}

export function Button({ text, onClick }: ButtonProps) {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  )
}

export function ButtonPrimary({ text, onClick }: ButtonProps) {
  return (
    <button className="button-primary" onClick={onClick}>
      {text}
    </button>
  )
}

export function ButtonDefault({ text, onClick }: ButtonProps) {
  return (
    <button className="button-default" onClick={onClick}>
      {text}
    </button>
  )
}
