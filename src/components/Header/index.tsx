import { Home, Users, Backpack, MessageCircle, Bell, Linkedin, Grid } from 'lucide-react'
import Link, { LinkProps } from 'next/link'

import './styles.css'

export function Header() {
  return (
    <div className="container">
      <div className="container-main">
        <div className="container-search">
          <Link href={'/linkedin'}>
            <Linkedin size={25} color="#fff" />
          </Link>
          <input type="text" placeholder="Seach" />
        </div>
        <div className="container-icons border-right">
          <Home size={20} color="#7c7c8a" />
          <Users size={20} color="#7c7c8a" />
          <Backpack size={20} color="#7c7c8a" />
          <MessageCircle size={20} color="#7c7c8a" />
          <Bell size={20} color="#7c7c8a" />
        </div>
      </div>
      <div className="container-icons">
        <Grid size={20} color="#7c7c8a" />
      </div>
    </div>
  )
}
