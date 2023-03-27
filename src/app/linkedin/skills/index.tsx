import { Eye } from 'lucide-react'
import { TitleIconView } from '@/components'
import { titles } from '@/core/resources'
import { list_skills } from './array_skills'
import './styles.css'

export default function Skills() {
  const nameSkills = (name: string) => {
    return name.split('-')[1]
  }
  return (
    <section>
      <div className="container-sub">
        <TitleIconView title={titles.skills} />
        <div className='d-flex f-direction gap-009'>
          {list_skills && list_skills.map(({ list, name }, index) => (
            <div key={index}>
              <h3>- {name}</h3>
              <div className="container-icon-skills">
                {list.map((skills, idx) => (
                  <div key={idx} className="container-name-skills">
                    <i className={`${skills} `} />
                    <span>{nameSkills(skills)}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
