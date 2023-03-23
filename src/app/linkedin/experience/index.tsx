import { TitleIconView } from '@/components/TitleIconView'
import './styles.css'
import { ViewText } from '@/components/ViewText'
import { ReactElement } from 'react'
import { list_experience } from './array_experience'

export default function Experience() {
  return (
    <section>
      <div className="container-sub">
        <TitleIconView title="Experience" />
        {list_experience.map(({ skills, text, img_company, location, title, sub_title }) => (
          <div className="container-experience">
            <div>
              <img src={img_company} alt="" />
            </div>
            <div className="container-experience-text">
              <h3>{title}</h3>
              <span>
              {sub_title}
                <br />
                {location}
              </span>
              <br />
              <br />
              <ViewText text={<>{text}</>} skills={skills} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
