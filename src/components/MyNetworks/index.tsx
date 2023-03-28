import './styles.css'

export default function MyNetworks() {
  return (
    <div className="container-aside">
      <p>my networks</p>
      <div className="container-links">
        <a href="https://www.linkedin.com/in/gleysonsilva/" target="_blank" rel="noreferrer">
          <i className="devicon-linkedin-plain " />
          <span>LinkedIn</span>
        </a>
        •
        <a href="https://github.com/gleysonemilio" target="_blank" rel="noreferrer">
          <i className="devicon-github-original" />
          <span>Github</span>
        </a>
      </div>
      <p>Developed by Gleyson Silva</p>
    </div>
  )
}
