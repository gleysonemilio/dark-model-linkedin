import { ReactElement, ReactNode } from 'react'

export interface ExperienceProps {
  title: string
  location: string
  sub_title: string
  text?: ReactElement
  skills: string[]
  img_company: string
}

export const list_experience: ExperienceProps[] = [
  {
    text: (
      <p>
        I accepted SalutemPlus's challenge to become a Full-stack developer as I have a
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
    sub_title: 'abr de 2022 - moment · 1 year ',
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
        I accepted SalutemPlus's challenge to become a Full-stack developer as I have a
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
    sub_title: 'jun de 2019 - mai de 2022 · 3 years',
    location: 'Belo Horizonte e Região, Brasil',
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
  }
]
