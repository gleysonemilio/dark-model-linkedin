import { ReactElement } from 'react'
import { TitleIconView, ViewText } from '@/components'
import { titles } from '@/core/resources'
interface listProps {
  Icon: () => ReactElement
  title: string
  sub_title: string
}

export default function About() {
  return (
    <section>
      <div className="container-sub">
        <TitleIconView title={titles.about} />

        <ViewText
          text={
            <p>
              Full-stack developer with almost 5 years of experience and fluctuating in different
              technologies over this time, I have worked in the health area, telecommunication,
              geolocation, management, NF-e verification/collection, personal loan platform.
              <br />
              <br />
              Technology has always been present in my life, I have always been passionate about
              design, technology and innovation, and I found this combination in programming, since
              then I have been studying and improving my knowledge, always attentive to new
              technologies in the market.
              <br />
              <br />
              Today I&apos;m a Full-stack Pleno/Senior developer, I&apos;ve been standing out throughout my
              career for my knowledge in Ui/Ux, I&apos;ve worked with the following technologies:
              <br />
              <br />
              -<br />
              <br />
              ➜ FRONT-END
              <br />
              React (React Hooks, Redux), Typescript, .Nextjs, Vuejs, Vitejs, JavaScript, Css
              (styled-components, Sass, BEM), Storybook, Material Ui, Bootstrap, Html, Jquery
              <br />
              <br />
              ➜ BACK-END
              <br /> Php, Nodejs, MySql, Firebase, RestFul, Microsoft Azure
              <br />
              <br />
              ➜ DESIGN
              <br />
              Figma, Adobe XD
              <br />
              <br />➜ OTHER Jira, Bitbucket, GitHub, GitLab, CircleCi, Aws, Jenkins, Argocd
            </p>
          }
        />
      </div>
    </section>
  )
}
