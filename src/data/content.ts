export interface Skill {
  title: string;
  icon: string;
}

export const summaryData = {
  name: "Nicholas Cushman",
  jobTitle: "Software Engineer",
  aboutMe: "I strive to find simple solutions to complex problems. I find comfort in the constant pursuit of growth, knowing that on any given day, I can look back at where I was a week ago and confidently say that I improved.",
}

export const navItems = [
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Skills', id: 'skills'},
  { name: 'Contact', id: 'contact' },
]

export const workExperienceData = [
  {
    company: "Monyverse",
    position: "Software Engineer",
    duration: "Sept 2023 - Present",
    description: "Led development of cloud-based solutions, improving system efficiency by 40%.",
    icon: "/experience/dom-logo.svg",
    background: "",
    href: "https://www.monyverse.com"
  },
  {
    company: "React Relay",
    position: "Software Engineer",
    duration: "Sept 2022 - Sept 2023",
    description: "Developed and maintained multiple web applications using React and Node.js.",
    icon: "/experience/react-relay.png",
    background: "",
    href: "https://reactrelay.com"
  },
  {
    company: "Professional Poker Player",
    position: "Self-Employed",
    duration: "June 2013 - Augu 2022",
    description: "",
    icon: "",
    background: "",
    href: "https://reactrelay.com"
  },
];

export const projectData = [
  {
    title: "Hot Nav",
    description: "NPM package for adding hotkey functionality to clickable components",
    overview: "Press the 'Control' key to ",
    href: "https://www.npmjs.com/package/hot-nav",
    demo: "/gifs/hot-nav-demo.gif"
  },
  {
    title: "URL Smart Scan",
    description: "Mobile app allowing users to scan a URL and rapidly generate a link on their mobile device",
    overview: "",
    href: "https://www.npmjs.com/package/hot-nav",
    demo: ""

  },
  {
    title: "Fitness Tracker",
    description: "Full Stack React app allowing users to track fitness progress and generate custom workout/diet plans",
    overview: "",
    href: "https://github.com/Danger-Noodle-59/fitness-tracker",
    demo: ""
  },
  {
    title: "Portfolio",
    description: "this is my portfolio this is my portfolio this is my portfolio this is my portfolio this is my portfolio this is my portfolio",
    overview: "",
    // TODO: add href
    href: "https://www.npmjs.com/package/hot-nav",
    demo: ""
  }
]

export const DefaultSkills: Skill[] = [
  { title: 'AWS', icon: '/skills/aws.png'},
  { title: 'React', icon: '/skills/reactjs.png'},
  { title: 'Next.js', icon: '/skills/nextjs.svg'},
  { title: 'TypeScript', icon: '/skills/typescript.png'},
  { title: 'JavaScript', icon: '/skills/javascript.png'},
  { title: 'Node.js', icon: '/skills/nodejs.svg'},
  { title: 'Python', icon: '/skills/python.png'},
  { title: 'Docker', icon: '/skills/docker.png'},
  { title: 'PostgreSQL', icon: '/skills/sql.png'},
  { title: 'MongoDB', icon: '/skills/mongodb.png'},
  { title: 'HTML', icon: '/skills/html.svg'},
  { title: 'CSS', icon: '/skills/css.svg'},
]

export const AwsSkills: Skill[] = [
  { title: 'Lambda', icon: '/skills/aws/Lambda.svg'},
  { title: 'CloudFormation', icon: '/skills/aws/CloudFormation.svg'},
  { title: 'ECS', icon: '/skills/aws/ECS.svg'},
  { title: 'S3', icon: '/skills/aws/S3.svg'},
  { title: 'RDS', icon: '/skills/aws/RDS.svg'},
  { title: 'DynamoDB', icon: '/skills/aws/DynamoDB.svg'},
  { title: 'EC2', icon: '/skills/aws/EC2.svg'},
  { title: 'EventBridge', icon: '/skills/aws/EventBridge.svg'},
  { title: 'CloudWatch', icon: '/skills/aws/CloudWatch.svg'},
  { title: 'IAM', icon: '/skills/aws/IAM.svg'},
  { title: 'SQS', icon: '/skills/aws/SQS.svg'},
  { title: 'SNS', icon: '/skills/aws/SNS.svg'},
  { title: 'Step Functions', icon: '/skills/aws/Step Functions.svg'},
  { title: 'Simple Email Service', icon: '/skills/aws/Simple Email Service.svg'},
  { title: 'ECR', icon: '/skills/aws/ECR.svg'},
  { title: 'Fargate', icon: '/skills/aws/Fargate.svg'},
  { title: 'Rekognition', icon: '/skills/aws/Rekognition.svg'},
  { title: 'Amplify', icon: '/skills/aws/Amplify.svg'},
  { title: 'Secrets Manager', icon: '/skills/aws/Secrets Manager.svg'},
  { title: 'Route 53', icon: '/skills/aws/Route 53.svg'},
  { title: 'CloudFront', icon: '/skills/aws/CloudFront.svg'},

]