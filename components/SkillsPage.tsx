"use client";
import ProjectCard from '@/components/SkillsCard';

// In your component or page:
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

const SkillsPage = () => {
    return (
        <div className='grid grid-cols-2 gap-4'>
            {projects.map((project, index) => (
                <ProjectCard
                    key={project.name}
                    index={index}
                    {...project}
                />
            ))}
        </div>
    );
};

export default SkillsPage;
