import { TitleIconView } from '@/components/TitleIconView'
import './styles.css'
import Image from 'next/image'
import { Heart, ThumbsUp } from 'lucide-react'

export default function Highlighted() {
  const img_highlighted =
    'https://media.licdn.com/dms/image/C4D22AQFiDw0ATDCfUg/feedshare-shrink_480/0/1651845387455?e=1682553600&v=beta&t=jO9KOMm418USNuU9zxJcOnQE5LCJyrLz-vj5ob-_MfI'
  return (
    <div className="container-feed">
      <div className="container-analysis">
        <TitleIconView title="highlighted" />

        <div className="container-highlighted">
          <span>Publication</span>

          <div className="container-highlighted-company">
            <div className="img-highlighted" />
            <div className="text-highlighted">
              <h3>
                Minha hora chegou e finalmente posso dizer que sou um
                <br />
                <br />
                Depois de uma longa jornada de muito aprendizado trabalhando entre Front-end e
                Full-stack, venho hoje compartilhar com vocês que estou muito feliz e grato de fazer
                parte do time de desenvolvimento da CI&T.
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
    </div>
  )
}
