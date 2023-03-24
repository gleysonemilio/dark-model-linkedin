import { ReactElement } from 'react'
import { Users, Eye, Search, Radio, ChevronRight } from 'lucide-react'
import { TitleIconView } from '@/components/TitleIconView'
import { FeedLow } from '@/components/FeedLow'
import { titles } from '@/core/resources'
import './styles.css'

interface listProps {
  Icon: () => ReactElement
  title: string
  sub_title: string
}

export default function Recursos() {
  const list_analysis: listProps[] = [
    {
      Icon: () => <Radio size={25} color="#7c7c8a" />,
      title: 'Creation mode',
      sub_title: 'Stand out, showcase content on your profile, and access content creation tools.'
    },
    {
      Icon: () => <Users size={25} color="#7c7c8a" />,
      title: 'My Network',
      sub_title: 'View and manage your connections and interests.'
    }
  ]

  return (
    <section>
      <div className="container-sub">
        <TitleIconView title={titles.resources} Icon={() => <Eye size={20} color="#7c7c8a" />} />

        <div className="d-flex f-direction gap-007">
          {list_analysis.map(({ title, sub_title, Icon }, index) => (
            <div className={`d-flex w-100 gap-007 ${index === 0 && 'border-bottom'}`} key={index}>
              <div className="container-items-svg">
                <Icon />
              </div>

              <div className="container-items-text m-bottom">
                <h3>{title}</h3>
                <span>{sub_title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <FeedLow text="Display all 5 resources" />
    </section>
  )
}
