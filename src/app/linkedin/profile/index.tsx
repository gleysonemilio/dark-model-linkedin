import { Button, ButtonDefault, ButtonPrimary } from '@/components/Button'
import './styles.css'

export default function Profile() {
  const url_profile =
    'https://media.licdn.com/dms/image/D4D03AQHjxUk0TY5kUQ/profile-displayphoto-shrink_200_200/0/1666033192249?e=1684368000&v=beta&t=Qbq3AX3Em3m82xpsWhRE1vMxlzjhursirq69v6IRUiM'

  const list_company = [
    {
      name: 'CI&T',
      url_logo:
        'https://media.licdn.com/dms/image/C4D0BAQHNSZRQJ1JlHA/company-logo_100_100/0/1658169890917?e=1687392000&v=beta&t=BIAAtriU1D-dIElkrStwZARua4acRt7pTWBXhisKuZM'
    },
    {
      name: 'Pontificia Universidade Catolica de Minas Gerais',
      url_logo:
        'https://media.licdn.com/dms/image/C4D0BAQFSybvCzUeNoQ/company-logo_100_100/0/1669894042482?e=1687392000&v=beta&t=vSEswCU4jBBteZVSe6ieZxKrxc4I36l4m2SPTgkn-Co'
    }
  ]

  return (
    <div className="container-feed">
      <div className="img-profile">
        <img src={url_profile} alt="img profile" />
      </div>

      <div className="container-profile-about">
        <div className="container-infor">
          <h1>Gleyson Emilio</h1>
          <h3>Full Stack developer Pleno in Ci&t</h3>
          <span>
            Belo Horizonte, Minas Gerais, Brasil
            <strong>
              {' '}
              - Contact informartion + de <br /> 500 connections
            </strong>
          </span>
        </div>
        <div className="container-company">
          {list_company.map(({ name, url_logo }, index) => (
            <div className="img-container" key={index}>
              <img src={url_logo} alt="img ci&t" />
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
    </div>
  )
}
