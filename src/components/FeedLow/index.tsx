import './styles.css'
import { ChevronRight } from 'lucide-react'

interface FeedLowProps {
  text: string
}

export function FeedLow({ text }: FeedLowProps) {
  return (
    <div className="container-display">
      <span> {text} </span>
      <ChevronRight size={25} color="#7c7c8a" />
    </div>
  )
}
