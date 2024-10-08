import React from 'react';
import { FloatingDock } from '@/components/ui/floating-dock';
import {
    IconBrandGithub,
    IconBrandNextjs,
    IconBrandReact,
    IconBrandTypescript,
    IconBrandJavascript,
    IconBrandPython,
    IconBrandPrisma,
    IconBrandMongodb,
} from '@tabler/icons-react';

export function Skills() {
    const links = [
        {
            title: 'NextJs',
            icon: (
                <IconBrandNextjs className='h-full w-full text-neutral-500 dark:text-neutral-300' />
            ),
            href: '#',
        },

        {
            title: 'React',
            icon: (
                <IconBrandReact className='h-full w-full text-neutral-500 dark:text-neutral-300' />
            ),
            href: '#',
        },
        {
            title: 'TypeScript',
            icon: (
                <IconBrandTypescript className='h-full w-full text-neutral-500 dark:text-neutral-300' />
            ),
            href: '#',
        },
        {
            title: 'JavaScript',
            icon: (
                <IconBrandJavascript className='h-full w-full text-neutral-500 dark:text-neutral-300' />
            ),
            href: '#',
        },

        {
            title: 'Python',
            icon: (
                <IconBrandPython className='h-full w-full text-neutral-500 dark:text-neutral-300' />
            ),
            href: '#',
        },
        {
            title: 'Prisma',
            icon: (
                <IconBrandPrisma className='h-full w-full text-neutral-500 dark:text-neutral-300' />
            ),
            href: '#',
        },
        {
            title: 'MongoDB',
            icon: (
                <IconBrandMongodb className='h-full w-full text-neutral-500 dark:text-neutral-300' />
            ),
            href: '#',
        },
        {
            title: 'GitHub',
            icon: (
                <IconBrandGithub className='h-full w-full text-neutral-500 dark:text-neutral-300' />
            ),
            href: '#',
        },
    ];
    return (
        <div className='flex items-center justify-center h-[35rem] w-full'>
            <FloatingDock
                mobileClassName='translate-y-20'
                items={links}
            />
        </div>
    );
}
