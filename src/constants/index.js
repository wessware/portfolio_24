import {
  data,
  machine,
  me,
  write,
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
  sql,
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
];

const services = [
  {
    title: 'Data & Analytics',
    icon: data,
  },
  {
    title: 'Machine Learning',
    icon: machine,
  },
  {
    title: 'Monitoring & Evaluation',
    icon: me,
  },
  {
    title: 'Report Writing',
    icon: write,
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
    name: 'SQL',
    icon: sql,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
   {
    name: 'git',
    icon: git,
  },
  ];

const experiences = [
  {
    title: 'Parttime Data Consultant',
    company_name: 'ShopOkoa',
    icon: freelancer,
    iconBg: '#333333',
    date: 'Jan 2021 - Present',
  },
  {
    title: 'Independent Cloud Contractor',
    company_name: 'CloudFactory Kenya',
    icon: cf,
    iconBg: '#333333',
    date: 'Oct 2023v - Present',
  },
  {
    title: 'M&E Research Assistant',
    company_name: 'Kenya Private Sector Alliance',
    icon: ds,
    iconBg: '#333333',
    date: '2024, 2025',
  },
  {
    title: 'Research Assistant',
    company_name: 'Federation of Kenyan Employers',
    icon: manager,
    iconBg: '#333333',
    date: '2022,2023, 2024',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'NLP',
    description: 'Trained Hugging Face Sentiment Analysis LLMs on a popular Twitter sensation.',
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
    name: 'R Data Analysis & Visualization',
    description: 'This project explores the advanced depths of Data Visualization & Analysis using R.',
    tags: [
      {
        name: 'R',
        color: 'blue-text-gradient',
      },
      {
        name: 'Kaggle',
        color: 'green-text-gradient',
      },
      {
        name: 'Jupyter',
        color: 'pink-text-gradient',
      },
    ],
    image: ami,
    repo: 'https://github.com/wessware/data_visualization_R_101',
    demo: 'https://github.com/wessware/data_visualization_R_101',
  },
  {
    id: 'project-4',
    name: 'TF GRU Traffic Prediction',
    description: 'TensorFlow GRU Neural Network models that predict traffic on road sections.',
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
    name: 'Credit Scores using Boosting & Clustering Models', 
    description:
      'These projects explore the robustness of Boosting & Clustering ML algorithms in credit scoring models.',
    tags: [
      {
        name: 'Python',
        color: 'blue-text-gradient',
      },
      {
        name: 'XGB',
        color: 'green-text-gradient',
      },
      {
        name: 'CatBoost',
        color: 'pink-text-gradient',
      },
    ],
    image: setkenya,
    repo: 'https://github.com/wessware/Boosting_Algorithms',
    demo: 'https://github.com/wessware/Boosting_Algorithms',
  },
];

export { services, technologies, experiences, projects };
