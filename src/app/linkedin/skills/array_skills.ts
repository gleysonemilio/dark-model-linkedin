interface ListSkillsProps {
  name: string;
  list: string[];
}

export const list_skills: ListSkillsProps[] = [
  {
    name: 'FRONT-END',
    list: [
      'devicon-react-original',
      'devicon-sass-original',
      'devicon-tailwindcss-original-wordmark',
      'devicon-storybook-plain',
      'devicon-typescript-plain',
      'devicon-vuejs-plain',
      'devicon-redux-original',
      'devicon-nextjs-original',
      'devicon-html5-plain',
      'devicon-javascript-plain',
      'devicon-bootstrap-plain',
      'devicon-css3-plain',
      'devicon-jquery-plain',
    ]
  },
  {
    name: 'BACK-END',
    list: [
      'devicon-firebase-plain',
      'devicon-mongodb-plain',
      'devicon-mysql-plain',
      'devicon-nodejs-plain',
      'devicon-php-plain',
    ]
  },
  {
    name: 'DESIGN',
    list: [
      'devicon-figma-plain'

    ]
  },
  {
    name: 'OTHER',
    list: [
      'devicon-bitbucket-original',
      'devicon-git-plain',
      'devicon-github-original',
      'devicon-gitlab-plain',
      'devicon-circleci-plain',
      'devicon-jest-plain',
      'devicon-salesforce-plain',
      'devicon-argocd-plain',
    ]
  },
]

