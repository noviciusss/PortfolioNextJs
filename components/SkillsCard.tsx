'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Tag {
    name: string;
    color: string;
}

interface ProjectCardProps {
    index: number;
    name: string;
    description: string;
    tags: Tag[];
    image: string;
    sourceCodeLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    index,
    name,
    description,
    tags,
    image,
    sourceCodeLink,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className='bg-gray-800 p-5 rounded-2xl sm:w-[360px] w-full'
        >
            <div className='relative w-full h-[230px]'>
                <Image
                    src={image}
                    alt='project_image'
                    layout='fill'
                    objectFit='cover'
                    className='rounded-2xl'
                />
                <div className='absolute inset-0 flex justify-end m-3'>
                    <div
                        onClick={() => window.open(sourceCodeLink, '_blank')}
                        className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                    >
                        <Image
                            src='/github-icon.png'
                            alt='source code'
                            width={20}
                            height={20}
                        />
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                <p className='mt-2 text-secondary text-[14px]'>{description}</p>
            </div>
            <div className='mt-4 flex flex-wrap gap-2'>
                {tags.map((tag) => (
                    <p
                        key={`${name}-${tag.name}`}
                        className={`text-[14px] ${tag.color}`}
                    >
                        #{tag.name}
                    </p>
                ))}
            </div>
        </motion.div>
    );
};

export default ProjectCard;
