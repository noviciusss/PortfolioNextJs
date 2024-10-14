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
        <div className="flex items-center justify-center min-h-screen p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.name}
                        index={index}
                        {...project}
                    />
                ))}
            </div>
        </div>
    );
};

export default SkillsPage;
