import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello my name is',
  name: 'Lauri',
  subtitle: 'I am software Developer / Tester',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.linkedin.com/in/laurikyttala/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'argentine-tango.jpg',
    title: 'Dance Calendar',
    info: 'Comment and save your favourite ballrooms',
    info2: 'Make calendar notes and much more ...',
    url: 'https://dance-calendar-test.herokuapp.com/home',
    repo: 'https://github.com/lasse1900/dance-calendar-test', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'girlsFace.jpg',
    title: 'Facerecognition App',
    info: 'AI face recognition ',
    info2: 'Node.js, React, PostgreSQL',
    url: 'https://facerecognition-lk.herokuapp.com/',
    repo: 'https://github.com/lasse1900/facerecognition-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'contact-memo.png',
    title: 'Contact Memo',
    info: 'Save and sort all your contacts',
    info2: 'ASP.NET',
    url: 'http://contactmemo.apphb.com/',
    repo: 'https://bitbucket.org/LauriKy/contactmemo/src/master/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'weather.png',
    title: 'Weather & Population',
    info: 'Get country population and weather in the capital',
    info2: '',
    url: 'https://coutry-info-ver2.netlify.app/',
    repo: 'https://github.com/lasse1900/country-info-ver2', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'LUT.png',
    title: 'My Thesis',
    info: 'The Development of Practical Programming Course at LUT-university',
    info2: '',
    url: 'https://lutpub.lut.fi/handle/10024/72533',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/laurikyt',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: 'https://codepen.io/trending',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/laurikyttala/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/lasse1900',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
