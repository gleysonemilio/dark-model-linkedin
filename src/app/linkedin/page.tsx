import About from './about'
import Activities from './activities'
import Analysis from './analysis'
import Experience from './experience'
import Highlighted from './highlighted'
import Profile from './profile'
import Recursos from './recursos'

import './styles.css'

export const metadata = {
  title: 'LinkeDin Dark'
}

export default async function DevSetup() {
  return (
    <div id="container-linkedin">
      <div className="item1 d-flex">
        <Profile />
        <Analysis />
        <Recursos />
        <About />
        <Highlighted />
        <Activities />
        <Experience />
      </div>
      <div className="item2">TESTE</div>
    </div>
  )
}
