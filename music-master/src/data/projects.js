import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

//Screen case syntax - PROJECTS (capital case) because of it being a global const
const PROJECTS = [
    {
        id: 1,
        title: 'Project 1',
        description: 'A React app that I built, involving JS and core web dev concepts!',
        link: 'https://github.com/sairamgunner/react-portfolio',
        image: project1
    },
    {
        id: 2,
        title: 'Project 2',
        description: 'A React app that I built, involving JS and core web dev concepts!',
        link: 'https://github.com/sairamgunner/react-portfolio',
        image: project2
    },
    {
        id: 3,
        title: 'Project 3',
        description: 'A React app that I built, involving JS and core web dev concepts!',
        link: 'https://github.com/sairamgunner/react-portfolio',
        image: project3
    }
];

export default PROJECTS;