import { StaticImageData } from 'next/image';
import companyIcon1 from '../assets/company1.png';
import companyIcon2 from '../assets/company2.png';
import companyIcon3 from '../assets/company3.png';

interface Experience {
    title: string;
    company_name: string;
    icon: StaticImageData;
    iconBg: string;
    date: string;
    points: string[];
}

export const experiences: Experience[] = [
    {
        title: 'React.js Developer',
        company_name: 'Starbucks',
        icon: companyIcon1,
        iconBg: '#383E56',
        date: 'March 2020 - April 2021',
        points: [
            'Developing and maintaining web applications using React.js and other related technologies.',
            'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
            'Implementing responsive design and ensuring cross-browser compatibility.',
            'Participating in code reviews and providing constructive feedback to other developers.',
        ],
    },
    {
        title: 'React Native Developer',
        company_name: 'Tesla',
        icon: companyIcon2,
        iconBg: '#E6DEDD',
        date: 'Jan 2021 - Feb 2022',
        points: [
            'Developing and maintaining mobile applications using React Native and other related technologies.',
            'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
            'Implementing responsive design and ensuring cross-platform compatibility.',
            'Participating in code reviews and providing constructive feedback to other developers.',
        ],
    },
    {
        title: 'Web Developer',
        company_name: 'Shopify',
        icon: companyIcon3,
        iconBg: '#383E56',
        date: 'Jan 2022 - Jan 2023',
        points: [
            'Developing and maintaining web applications using React.js and other related technologies.',
            'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
            'Implementing responsive design and ensuring cross-browser compatibility.',
            'Participating in code reviews and providing constructive feedback to other developers.',
        ],
    },
];
