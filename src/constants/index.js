import {
  data,
  machine,
  ux,
  software,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  
  excel,
  python, 
  bi, 
  r,
  freelancer,
  cf,
  student,
  manager,
  ds,
  setkenya,
  traffic,
  ami,
  sungurai,
  amerix,
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
    icon: data,
  },
  {
    title: 'Machine Learning Engineering',
    icon: machine,
  },
  {
    title: 'Data Enumeration & Annotation',
    icon: ux,
  },
  {
    title: 'Web Development',
    icon: software,
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
    name: 'Excel',
    icon: excel,
  },
  {
    name: 'PowerBI',
    icon: bi,
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
  ];

const experiences = [
  {
    title: 'Data Analyst & Web Developer',
    company_name: 'Freelance',
    icon: freelancer,
    iconBg: '#333333',
    date: 'Jan 2023 - Present',
  },
  {
    title: 'Independent Cloud Contractor',
    company_name: 'CloudFactory Kenya',
    icon: cf,
    iconBg: '#333333',
    date: 'Sept 2023 - Present',
  },
  {
    title: 'Data Analsyt',
    company_name: 'DukaTech Solutions',
    icon: ds,
    iconBg: '#333333',
    date: 'Aug 2021 - Aug 2023',
  },
  {
    title: 'Data Manager/Enumerator',
    company_name: 'Federation of Kenya Employer JKUAT',
    icon: manager,
    iconBg: '#333333',
    date: 'March 2021 - March 2022',
  },
  {
    title: 'Junior Front-end Developer',
    company_name: 'Roftus Kenya',
    icon: student,
    iconBg: '#333333',
    date: 'Jun 2019 - March 2020',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'NLP',
    description: 'Sentiment Analysis on a reknown twitter user - Amerix',
    tags: [
      {
        name: 'Python',
        color: 'blue-text-gradient',
      },
      {
        name: 'Hugging Face',
        color: 'green-text-gradient',
      },
      {
        name: 'Kaggle',
        color: 'pink-text-gradient',
      },
    ],
    image: amerix,
    repo: 'https://github.com/wessware/sentiment_analysis_on_masculinity_saturday',
    demo: 'https://github.com/wessware/sentiment_analysis_on_masculinity_saturday',
  },
  {
    id: 'project-2',
    name: 'Time Series Analysis',
    description:
      'An integrated Time series anlysis application that predicts farm production & income',
    tags: [
      {
        name: 'Python',
        color: 'blue-text-gradient',
      },
      {
        name: 'R',
        color: 'green-text-gradient',
      },
      {
        name: 'Kaggle',
        color: 'pink-text-gradient',
      },
    ],
    image: sungurai,
    repo: 'https://github.com/wessware/ARIMA_TIME_SERIES_FORECASTING',
    demo: 'https://github.com/wessware/ARIMA_TIME_SERIES_FORECASTING',
  },
  {
    id: 'project-3',
    name: 'AMI Landing page',
    description: 'This is a single-page for a tech company',
    tags: [
      {
        name: 'ReactJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'HTML5',
        color: 'green-text-gradient',
      },
      {
        name: 'css3',
        color: 'pink-text-gradient',
      },
    ],
    image: ami,
    repo: 'https://github.com/ami-ng',
    demo: 'https://ami.ng',
  },
  {
    id: 'project-4',
    name: 'Traffic Prediction',
    description: `TensorFlow machine learning models that predict traffic on road sections.`,
    tags: [
      {
        name: 'Python',
        color: 'blue-text-gradient',
      },
      {
        name: 'TensorFlow',
        color: 'green-text-gradient',
      },
      {
        name: 'Kaggle',
        color: 'pink-text-gradient',
      },
    ],
    image: traffic,
    repo: 'https://github.com/wessware/traffic_prediction_tensorflow',
    demo: 'https://www.researchgate.net/publication/366154898_Deployment_of_Time_Series_Analysis_and_the_TensorFlow_GRU_model_in_traffic_flow_prediction',
  },
  {
    id: 'project-5',
    name: 'SET KENYA Website', 
    description:
      'Functional & hosted website for the Student Empowerment Team Kenya.',
    tags: [
      {
        name: 'JavaScript',
        color: 'blue-text-gradient',
      },
      {
        name: 'HTML5',
        color: 'green-text-gradient',
      },
      {
        name: 'css3',
        color: 'pink-text-gradient',
      },
    ],
    image: setkenya,
    repo: 'https://github.com/wessware/student_empowerment_team_kenya_web2.0.6',
    demo: 'http://setkenya.org',
  },
];

export { services, technologies, experiences, projects };
