import { Github, Linkedin } from 'lucide-react'
import './styles.css'

export default function MyNetworks() {
  return (
    <div className="container-aside">
      <span>my networks</span>
      <div className="container-links">
        <a href="https://www.linkedin.com/in/gleysonsilva/" target="_blank" rel="noreferrer">
          <Linkedin size={20} />
          {/* color={'#0a66c2'} */}
          <span>Linkedin</span>
        </a>
        •
        <a
          href="https://github.com/gleysonemilio/dask-model-linkedin"
          target="_blank"
          rel="noreferrer"
        >
          <Github size={20} />
          <span>Github</span>
        </a>
      </div>
      <span>Developed by Gleyson Silva</span>
    </div>
  )
}
