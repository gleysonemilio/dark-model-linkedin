import { ReactElement, ReactNode } from 'react'

export interface ExperienceProps {
  title: string
  location: string
  sub_title: string
  text?: ReactElement
  skills: string[]
  img_company: string
  time_worked?: string
}

export const list_experience: ExperienceProps[] = [
  {
    text: (
      <p>
        I accepted SalutemPlus&apos;s challenge to become a Full-stack developer as I have a
        long-standing desire to expand my knowledge and skills in the development area. Working at
        Salutem was a significant milestone in my career as I had direct contact with clients and
        learned how to manage their expectations effectively in meetings and alignments.
        <br />
        <br />
        My previous experience with React made me a great fit for the role of helping to reformulate
        the platform from HTML to React. I took on the responsibility of creating the entire
        end-to-end system, which involved database creation in MySql, back-end development in PHP,
        and front-end development in React.
        <br />
        <br />I enjoyed the opportunity to work directly with the client and take ownership of the
        project from start to finish.
      </p>
    ),
    title: 'Software engineer',
    sub_title: 'abr de 2022',
    location: 'Belo Horizonte, Minas Gerais, Brasil',
    img_company:
      'https://media.licdn.com/dms/image/C4D0BAQHNSZRQJ1JlHA/company-logo_100_100/0/1658169890917?e=1687392000&v=beta&t=BIAAtriU1D-dIElkrStwZARua4acRt7pTWBXhisKuZM',
    skills: [
      'Nextj',
      'Azure DevOps Server',
      'React.js',
      'TypeScript',
      'Next.js',
      'Windows Azure',
      'CircleCI',
      'Bitbucket',
      'Figma (Software)',
      'JIRA',
      'React Hooks',
      'Jenkins',
      'Argocd',
      'JavaScript',
      'GitLab',
      'GitHub',
      'Jenkins',
      'Webpack',
      'API REST',
      'HTML',
      'Redux.js',
      'Styled-components',
      'SASS',
      'CSS'
    ]
  },
  {
    text: (
      <p>
        I accepted SalutemPlus&apos;s challenge to become a Full-stack developer as I have a
        long-standing desire to expand my knowledge and skills in the development area. Working at
        Salutem was a significant milestone in my career as I had direct contact with clients and
        learned how to manage their expectations effectively in meetings and alignments.
        <br />
        <br />
        My previous experience with React made me a great fit for the role of helping to reformulate
        the platform from HTML to React. I took on the responsibility of creating the entire
        end-to-end system, which involved database creation in MySql, back-end development in PHP,
        and front-end development in React.
        <br />
        <br />I enjoyed the opportunity to work directly with the client and take ownership of the
        project from start to finish.
      </p>
    ),
    title: 'Full Stack Developer',
    sub_title: 'jun de 2019 - mai de 2022',
    location: 'Belo Horizonte e Região, Brasil',
    time_worked: '3 years',
    img_company:
      'https://media.licdn.com/dms/image/C4E0BAQFXpNbT0i9bEQ/company-logo_100_100/0/1579099351715?e=1687392000&v=beta&t=hl92xboBQcap-tN9dMTWw_s9mlXGovMtgf54p66WszE',
    skills: [
      'Nextj',
      'Azure DevOps Server',
      'React.js',
      'TypeScript',
      'Next.js',
      'Windows Azure',
      'Figma (Software)',
      'JIRA',
      'React Hooks',
      'JavaScript',
      'GitLab',
      'GitHub',
      'Webpack',
      'API REST',
      'HTML',
      'Redux.js',
      'Styled-components',
      'SASS',
      'CSS',
      'PHP',
      'Banco de dados',
      'SQL',
      'MySQL',
      'Amazon Web Services'
    ]
  },
  {
    text: (
      <p>
        I worked at Azapfy as a designer and front-end developer. When I first started, I spent two
        months as a designer, where I was tasked with reformulating the platform using Adobe XP.
        <br />
        <br />
        After those two months, I transitioned into a front-end role, working with React and HTML to
        create important modules for the company&apos;s platform. Some of my key achievements in this
        role include developing packing list, NF-e verification, and delivery tracking modules that
        are still used in the company today. I was also one of the key contributors to the front-end
        platform&apos;s complete reformulation, moving it from HML to React.
        <br />
        <br />
        I&apos;m proud of the work I did at Azapfy, and I feel that I made a real impact during my time
        there. My skills as a designer and front-end developer allowed me to bring valuable insights
        and solutions to the company, and I enjoyed collaborating with my colleagues to deliver
        successful projects.
      </p>
    ),
    title: 'Front-End Developer',
    sub_title: 'jul de 2018 - jun de 2019',
    location: 'Belo Horizonte e Região, Brasil',
    time_worked: '1 year',
    img_company:
      'https://media.licdn.com/dms/image/C4E0BAQFy1bz1MT4ELQ/company-logo_100_100/0/1548082379818?e=1687392000&v=beta&t=N8t22dIWACTfsMuvkUxBjgsyuqzfXtpxRMn2Njiz5Pg',
    skills: [
      'React.js',
      'React Hooks',
      'Web design',
      'Design',
      'Adobe XD',
      'JavaScript',
      'GitLab',
      'GitHub',
      'Webpack',
      'API REST',
      'HTML',
      'Redux.js',
      'Styled-components',
      'SASS',
      'CSS',
      'Bootstrap'
    ]
  },
  {
    text: (
      <p>
        I was seeking to expand my horizons beyond the infrastructure segment of the technology
        market. That&apos;s when I found an opportunity to work at Mercedes Benz in their DTI (Department
        Technologist Informatica) technological department.
        <br />
        <br />
        During my time at Mercedes Benz, I was responsible for monitoring the Invoice system (ERP)
        of dealers, managing order integrations, opening and closing via service desk, managing
        databases, and providing support for users of the Mercedes Benz group. It was crucial to
        ensure the system was running smoothly and was implemented correctly by T-systems.
        <br />
        <br />
        Overall, this experience allowed me to gain a better understanding of the technology market
        and develop my skills.
      </p>
    ),
    title: 'Manager Service Desk',
    sub_title: 'dez de 2016 - jul de 2018 ',
    location: 'Belo Horizonte e Região, Brasil',
    time_worked: '1 year 8 months',
    img_company:
      'https://media.licdn.com/dms/image/C4D0BAQEkDK7TnthtLw/company-logo_100_100/0/1625140019174?e=1687392000&v=beta&t=tKvPBrPYAqIE1BcZzHzCKki8Hc7OA1SpGuuwiyWKJio',
    skills: ['Banco de dados', 'SQL', 'MySQL']
  }
]
