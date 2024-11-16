import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InformationService {
  icons = [
    {
      href: 'https://github.com/taboubi-oussema',
      icon: 'fa-brands fa-github',
    },
    {
      href: 'https://tryhackme.com/r/p/Ousama',
      icon: 'fa-solid fa-network-wired',
    },
    {
      href: 'https://www.linkedin.com/in/taboubi-oussema/',
      icon: 'fa-brands fa-linkedin',
    },
  ];

  skills = [
    {
      title: 'HTML/CSS',
      description: 'Building responsive and accessible web pages.',
    },
    {
      title: 'JavaScrip',
      description: 'Creating dynamic and interactive user experiences.',
    },
    {
      title: 'Angular',
      description:
        'Developing single-page applications with modern frameworks.',
    },
    {
      title: 'Java',
      description:
        'Building robust applications using object-oriented programming.',
    },
    {
      title: 'PHP',
      description: 'Developing server-side applications and APIs.',
    },
    {
      title: 'Huawei IA',
      description: 'Leveraging AI technologies for intelligent applications.',
    },
  ];
  experience = [
    {
      name: 'Telecom Training',
      duration: 'January 2024 – February 2024',
      description: [
        ' Acquired comprehensive knowledge regarding network operations during telecom training.',
        "Studied CCNA 1 independently using Cisco's Packet Tracer to enhance my understanding of internet technologies.",
        'Explored various subjects, including network accessibility,network capacity calculation, switches, the OSI model, and network classifications.',
        'This training provided a solid foundation for my ongoing learning and development in networking and telecommunications.',
      ],
    },
    {
      name: 'Software Development Internship',
      duration: 'July 2024 – September 2024',
      description: [
        ' Acquired hands-on experience setting up Node.js environments.',
        'Became proficient in React Native with TypeScript, using libraries like react-native-otp-entry, React Navigation, axios, and more.',
        'Gained backend development skills with Express and MongoDB,enabling API creation.',
        'Developed a full-stack application, which is available for review on my',
      ],
    },
  ];
  project = [
    {
      title: 'My Portfolio website',
      desc: 'This project is a personal profile website I created to showcase my skills and interests.  it features a clean and responsive design that adapts to various screen sizes. The site includes sections for my biography, skills, and projects, providing a comprehensive view of my background and capabilities.',
      tech: 'HTML , JAVASCRIPT , CSS',
      image: '../../assets/protfilo.png  ',
      path: 'https://taboubi-oussema.github.io/My-Portfolio-website/',
      code: 'https://github.com/taboubi-oussema/My-Portfolio-website',
    },
    {
      title: '  Mobile Application',
      desc: 'This project is a mobile application developed using React Native that enables users to easily contact doctors and ask them questions. The app aims to bridge the gap between patients and healthcare professionals, providing a convenient platform for medical inquiries.',
      tech: 'ReactNativ , Nodejs , Express , MongoDB',
      image: '../../assets/doctor.png',
      path: '#',
      code: 'https://github.com/taboubi-oussema/Fullstack-ReactNative-Nodejs-Express-MongoDB',
    },
    {
      title: 'Simple Bitcoin Calculator',
      desc: 'This project is a mobile application developed using React Native that enables users to easily contact doctors and ask them questions. The app aims to bridge the gap between patients and healthcare professionals, providing a convenient platform for medical inquiries.',
      tech: 'ReactNativ , TypeScript',
      image: '../../assets/calc.png',
      path: '#',
      code: 'https://github.com/taboubi-oussema/simple-bitcoin-calculator',
    },
    {
      title: 'Geography Competitio',
      desc: 'The Geography Competition is a simple yet engaging game where players guess the name of a country based on an image. It challenges users to identify various countries through visual clues, enhancing their geographical knowledge while having fun. The game is designed to be interactive and educational, providing instant feedback on guesses.',
      tech: 'HTML , JAVASCRIPT , CSS',
      image: '../../assets/geography.jpg',
      path: 'https://taboubi-oussema.github.io/Geography-competition/',
      code: 'https://github.com/taboubi-oussema/Geography-competition',
    },
  ];
}
