import React from 'react';
import { CardDemo } from './Cards';

// Updated SecondPage Component
export function SecondPage() {
    return (
        <div className='space-y-8'>
            <div className='relative border rounded-lg max-w-3xl  ml-20 mr-[-30rem] shadow-lg bg-dark'>
                <div className='absolute inset-0 bg-blur'></div>
                <div className='relative z-10'>
                    <h3 className='text-2xl font-semibold p-4 text-gray-600'>Introduction</h3>
                    <h1 className='text-6xl font-extrabold pr-2 pt-1 pb-2 pl-3'>Overview.</h1>
                    <p className='text-base text-gray-500 p-4'>
                        Hey there! I&apos;m a second-year B.Tech student in Computer Science and
                        Engineering with a focus on AI and ML at VIT Bhopal. I&apos;m super
                        passionate about being a MERN stack developer, and I&apos;ve recently added
                        Next.js and Prisma to my toolkit! I specialize in building smooth,
                        user-friendly web applications that really pop. With my skills in MongoDB,
                        Express.js, React.js, Node.js, Next.js, and Prisma, I love turning ideas
                        into reality, mixing creativity with cutting-edge tech. I&apos;m all about
                        learning fast and collaborating to create efficient, scalable solutions that
                        tackle real-world challenges. Let&apos;s build something amazing together!
                    </p>
                </div>
            </div>
            <CardDemo />
        </div>
    );
}
