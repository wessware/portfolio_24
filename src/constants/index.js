import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  coverhunt,
  dcc,
  kelhel,
  microverse,

  excel,
  python, 
  bi, 
  r,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
  {
    id: 'blog',
    title: 'Blog',
  },
];

const services = [
  {
    title: 'Data Analysis',
    icon: frontend,
  },
  {
    title: 'Machine Learning Engineering',
    icon: backend,
  },
  {
    title: 'Data Enumeration & Management',
    icon: ux,
  },
  {
    title: 'Software Development',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'R',
    icon: r,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'Excel',
    icon: excel,
  },
  {
    name: 'PowerBI',
    icon: bi,
  },
  ];

const experiences = [
  {
    title: 'Independent Cloud Contractor',
    company_name: 'CloudFactory Kenya',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'May 2023 - Present',
  },
  {
    title: 'Data Analsyt',
    company_name: 'DukaTech Solutions',
    icon: microverse,
    iconBg: '#333333',
    date: 'Jan 2021 - Aug 2023',
  },
  {
    title: 'Data Manager/Enumerator',
    company_name: 'Federation of Kenya Employer JKUAT',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Oct 2022 - March 2023',
  },
  {
    title: 'Junior Front-end Developer',
    company_name: 'Roftus Kenya',
    icon: dcc,
    iconBg: '#333333',
    date: 'Jun 2019 - May 2020',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'NLP',
    description: 'Sentiment Analysis on a reknown twitter user - Amerix',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'Time Series Analysis',
    description:
      'An integrated Time series anlysis application that predicts farm production & income',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'AMI Landing page',
    description: 'This is a single-page for a tech company',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Traffic Prediction',
    description: `TensorFlow machine learning models that predict traffic on road sections.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'SET KENYA Website', 
    description:
      'Functional & hosted website for the Student Empowerment Team Kenya.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects };
