import { TitleIconView, ViewText } from '@/components'
import { list_experience } from './array_experience'
import { CalendarRange, MapPin, Pin } from 'lucide-react'
import { titles } from '@/core/resources'
import './styles.css'

export default function Experience() {
  return (
    <section>
      <div className="container-sub">
        <TitleIconView title={titles.experience} />
        {list_experience.map(
          ({ skills, text, img_company, location, title, sub_title, time_worked }, index) => (
            <div className="container-experience" key={index}>
              <div>
                <img src={img_company} alt="" />
                <div className="container-liner" />
              </div>
              <div className="container-experience-text">
                <div className="container-experience-title">
                  <h3>{title}</h3>
                  <span>
                    {time_worked ? (
                      time_worked
                    ) : (
                      <>
                        <Pin size={18} /> Now
                      </>
                    )}
                  </span>
                </div>

                <div className="d-flex align-center gap-003">
                  <CalendarRange size={18} />
                  <span>{sub_title}</span>
                </div>
                <div className="d-flex align-center gap-003">
                  <MapPin size={18} />
                  <span>{location}</span>
                </div>

                <br />
                <ViewText text={<>{text}</>} skills={skills} />
              </div>
            </div>
          )
        )}
      </div>
    </section>
  )
}
