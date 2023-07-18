import { Button, ButtonDefault, ButtonPrimary } from '@/components'
import { UserImg, LogoCiandtImg, LogoPucMinas } from '@/assets'
import Image from 'next/image'
import './styles.css'

export default function Profile() {
  const list_company = [
    {
      name: 'CI&T',
      UrlLogo: LogoCiandtImg
    },
    {
      name: 'Pontificia Universidade Catolica de Minas Gerais',
      UrlLogo: LogoPucMinas
    }
  ]

  return (
    <section>
      <div className="img-profile">
        <Image src={UserImg} alt="img profile" width={130} quality={100} />
      </div>

      <div className="container-profile-about">
        <div className="container-infor">
          <h1>Gleyson Emilio</h1>
          <h3>Full Stack developer Pleno in Ci&t</h3>
          <span>
            Belo Horizonte, Minas Gerais, Brasil
            <strong>
              - Contact informartion + de <br /> 500 connections
            </strong>
          </span>
        </div>
        <div className="container-company">
          {list_company.map(({ name, UrlLogo }, index) => (
            <div className="img-container" key={index}>
              <Image src={UrlLogo} alt="img ci&t" width={30}/>
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container-button">
        <ButtonPrimary text="Im interested in.." />
        <Button text="Add profile section" />
        <ButtonDefault text="More" />
      </div>
    </section>
  )
}
