'use client';

import React from 'react';
import ProjectCard from '@/components/SkillsCard';
import { color } from 'framer-motion';

const projects = [
    {
        name: 'Portfolio',
        description:
            'Sleek, interactive portfolio crafted with Next.js, TypeScript, and Tailwind CSS. Showcases projects and skills through a modern, responsive design with smooth animations.',
        tags: [
            { name: 'NextJs', color: 'text-green-500' },
            { name: 'tailwind', color: 'text-pink-500' },
            { name: 'Typescript', color: 'text-blue-700' },
        ],
        imageUrl: '/assets/PorfolioScreen.png',
        sourceCodeLink: 'https://github.com/noviciusss/PortfolioNextJs',
    },
    {
        name: 'ProjectLoom',
        description: 'A collaborative platform where developers showcase projects, pitch innovative ideas, and connect with like-minded creators to build together, gain feedback, and grow their network—empowering the dev community to thrive and innovate.',
        tags: [
            { name: 'NextJs', color: 'text-green-500' },
            { name: 'tailwind', color: 'text-pink-500' },
            { name: 'Typescript', color: 'text-blue-700' },
            {name:'Sentry',color:'text-orange-500'},
            
        ],
        imageUrl: '/assets/projectloom.png',
        sourceCodeLink: 'your-repo-link-here',
    },
    {
        name: '',
        description: '',
        tags: [],
        imageUrl: '',
        sourceCodeLink: '',
    },
    {
        name: '',
        description: '',
        tags: [],
        imageUrl: '',
        sourceCodeLink: '',
    },
    {
        name: '',
        description: '',
        tags: [],
        imageUrl: '',
        sourceCodeLink: '',
    },
    {
        name: '',
        description: '',
        tags: [],
        imageUrl: '',
        sourceCodeLink: '',
    },
];

const SkillsPage: React.FC = () => {
    return (
        <div
            id='project'
            className='flex items-center justify-center min-h-screen p-4 relative'
        >
            <div className='max-w-6xl w-full'>
                <div className='mb-12'>
                    <h3 className='text-2xl font-semibold mb-2 text-gray-600'>My Work</h3>
                    <h1 className='text-6xl font-extrabold mb-4'>Projects.</h1>
                    <p className='text-base text-gray-500 max-w-4xl mb-8'>
                        Dive into my digital portfolio showcasing real-world projects that highlight
                        my skills. Each entry offers a glimpse into my problem-solving approach,
                        tech versatility, and project management chops. With quick descriptions and
                        links to repos and demos, it's a snapshot of my ability to turn ideas into
                        reality.
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 b gap-6'>
                    {projects.map((project, index) => (
                        project.name && (
                            <ProjectCard
                                key={project.name}
                                index={index}
                                {...project}
                            />
                        )
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillsPage;
