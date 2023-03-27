import { TitleIconView } from '@/components'
import { Heart, ThumbsUp } from 'lucide-react'
import { titles } from '@/core/resources'
import './styles.css'

export default function Highlighted() {
  const img_highlighted =
    'https://media.licdn.com/dms/image/C4D22AQFiDw0ATDCfUg/feedshare-shrink_480/0/1651845387455?e=1682553600&v=beta&t=jO9KOMm418USNuU9zxJcOnQE5LCJyrLz-vj5ob-_MfI'
  return (
    <section>
      <div className="container-sub">
        <TitleIconView title={titles.highlighted} />

        <div className="container-highlighted">
          <span>Publication</span>

          <div className="container-highlighted-company">
            <div className="img-highlighted" />
            <div className="text-highlighted">
              <h3>
                My time has come and I can finally say that I am a CI&Ter. <br />
                <br />
                After a long journey of much learning working between Front-end and Full-stack,
                today I want to share with you that I am very happy and grateful to be part of
                CI&T's development time.
              </h3>
            </div>
          </div>

          <div className="container-likes">
            <div className="container-icon-like">
              <ThumbsUp className="like" />
              <Heart className="heart" />
              <span> more 61 people</span>
            </div>
            <span> 11 comment</span>
          </div>
        </div>
      </div>
    </section>
  )
}
