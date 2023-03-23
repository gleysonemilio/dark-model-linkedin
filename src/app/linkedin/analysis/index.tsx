import { ReactElement } from 'react'
import { Users, Eye, Search, BarChart2 } from 'lucide-react'
import './styles.css'
import { TitleIconView } from '@/components/TitleIconView'

interface listProps {
  Icon: () => ReactElement
  title: string
  sub_title: string
}

export default function Analysis() {
  const list_analysis: listProps[] = [
    {
      Icon: () => <Users size={25} color="#7c7c8a" />,
      title: 'Profile view',
      sub_title: 'know who viewed your profile.'
    },
    {
      Icon: () => <BarChart2 size={25} color="#7c7c8a" />,
      title: '2,989 impressions of publications',
      sub_title: 'See who is interacting with your posts.'
    },
    {
      Icon: () => <Search size={25} color="#7c7c8a" />,
      title: '8 occurrences in search results ',
      sub_title: 'See who often your profile appears in search results.'
    }
  ]

  return (
    <section >
      <div className="container-sub">
        <TitleIconView title="Analysis" Icon={() => <Eye size={20} color="#7c7c8a" />} />

        <div className="d-flex gap-007">
          {list_analysis.map(({ title, sub_title, Icon }, index) => (
            <div className="d-flex gap-007 w-100" key={index}>
              <div className="container-items-svg">
                <Icon />
              </div>
              <div className="container-items-text">
                <h3>{title}</h3>
                <span>{sub_title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
