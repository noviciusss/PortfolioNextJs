"use client";

import React from 'react';
import ProjectCard from '@/components/SkillsCard';

const projects = [
    {
        name: 'Project 1',
        description: 'This is a description of Project 1',
        tags: [{ name: 'react', color: 'text-blue-500' }],
        image: '/path-to-image.jpg',
        sourceCodeLink: 'https://github.com/yourusername/project1',
    },
    {
        name: 'Project 2',
        description: '',
        tags: [],
        image: '',
        sourceCodeLink: '',
    },
    {
        name: 'Project 3',
        description: '',
        tags: [],
        image: '',
        sourceCodeLink: '',
    },
    {
        name: 'Project 4',
        description: '',
        tags: [],
        image: '',
        sourceCodeLink: '',
    },
    {
        name: 'Project 5',
        description: '',
        tags: [],
        image: '',
        sourceCodeLink: '',
    },
    {
        name: 'Project 6',
        description: '',
        tags: [],
        image: '',
        sourceCodeLink: '',
    },
];

const SkillsPage: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen p-4 m-4">
            <div className="max-w-4xl w-full ">
                <div className="mb-8">
                    <h3 className='text-2xl font-semibold mb-2 text-gray-600'>My Work</h3>
                    <h1 className='text-6xl font-extrabold mb-4'>Projects.</h1>
                    <p className="text-base text-gray-500 mx-auto max-w-2xl">
                        Dive into my digital portfolio showcasing real-world projects that highlight my skills. 
                        Each entry offers a glimpse into my problem-solving approach, tech versatility, and project management chops. 
                        With quick descriptions and links to repos and demos, it's a snapshot of my ability to turn ideas into reality.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.name}
                            index={index}
                            {...project}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillsPage;
