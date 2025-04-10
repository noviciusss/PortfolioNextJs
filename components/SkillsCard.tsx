'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Tag {
    name: string;
    color: string;
}

interface ProjectCardProps {
    name: string;
    description: string;
    tags: Tag[];
    imageUrl: string;
    sourceCodeLink: string;
    index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    name,
    description,
    tags,
    imageUrl,
    sourceCodeLink,
    index,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full border border-gray-800 hover:border-gray-700 transition-colors"
        >
            <div className="relative w-full h-[230px]">
                {imageUrl ? (
                    <Image
                        src={imageUrl}
                        alt={name}
                        width={400}
                        height={230}
                        className="w-full h-full object-cover rounded-2xl"
                        priority={index === 0}
                    />
                ) : (
                    <div className="w-full h-full bg-gray-200 rounded-2xl flex items-center justify-center">
                        <span className="text-gray-400">No image available</span>
                    </div>
                )}
                
                {/* GitHub icon in the corner */}
                {sourceCodeLink && (
                    <a
                        href={sourceCodeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-2 right-2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
                    >
                        <svg
                            className="w-6 h-6 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                )}
            </div>

            <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">{name}</h3>
                <p className="mt-2 text-secondary text-[14px]">{description}</p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                        #{tag.name}
                    </p>
                ))}
            </div>
        </motion.div>
    );
};

export default ProjectCard;
