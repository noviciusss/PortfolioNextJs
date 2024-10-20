'use client';

import { Tilt } from 'react-tilt';
import { cn } from '../utils/cn';
export function CardDemo() {
    const defaultOptions = {
        reverse: false,
        max: 50,
        scale: 1.1,
        transition: true,
        reset: true,
    };
    return (
        <div className='flex justify-center items-center'>
            <div className='grid grid-cols-2 lg:gap-8 sm:gap-4 lg:grid-cols-4'>
                <Tilt options={defaultOptions}>
                    <div
                        className='max-w-xs w-full'
                        id='react'
                    >
                        <div
                            className={cn(
                                'group w-full cursor-pointer overflow-hidden relative card h-72 sm:h-68  rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800',
                                'bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover',
                                // Preload hover image by setting it in a pseudo-element
                                'before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]',
                                'hover:bg-[url(https://media.giphy.com/media/dRvEZLV0ORAmHT1L5u/giphy.gif)]',
                                "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                                'transition-all duration-500'
                            )}
                        >
                            <div className='text relative z-50'>
                                <h1 className='font-bold text-xl md:text-3xl text-gray-50 relative'>
                                    React Developer
                                </h1>
                                <p className='font-normal text-base text-gray-50 relative my-4'>
                                    Hmm can say already at intermediate level in it. Still long walk
                                    or run to go.Projects soon.
                                </p>
                            </div>
                        </div>
                    </div>
                </Tilt>
                <Tilt options={defaultOptions}>
                    <div
                        className='max-w-xs w-full'
                        id='NextJs'
                    >
                        <div
                            className={cn(
                                'group w-full cursor-pointer overflow-hidden relative card h-72  rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800',
                                'bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover',
                                // Preload hover image by setting it in a pseudo-element
                                'before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]',
                                'hover:bg-[url(https://media.giphy.com/media/mVJ5xyiYkC3Vm/giphy.gif)]',
                                "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                                'transition-all duration-500'
                            )}
                        >
                            <div className='text relative z-50'>
                                <h1 className='font-bold text-xl md:text-3xl text-gray-50 relative'>
                                    NextJs Developer
                                </h1>
                                <p className='font-normal text-base text-gray-50 relative my-4'>
                                    New to this but will be a pro soon😎.Going to start many and
                                    middle level projects soon.
                                </p>
                            </div>
                        </div>
                    </div>
                </Tilt>
                <Tilt options={defaultOptions}>
                    <div
                        className='max-w-xs w-full'
                        id='Python'
                    >
                        <div
                            className={cn(
                                'group w-full cursor-pointer overflow-hidden relative card h-72 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800',
                                'bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover',
                                // Preload hover image by setting it in a pseudo-element
                                'before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]',
                                'hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]',
                                "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                                'transition-all duration-500'
                            )}
                        >
                            <div className='text relative z-50'>
                                <h1 className='font-bold text-xl md:text-3xl text-gray-50 relative'>
                                    Python Developer
                                </h1>
                                <p className='font-normal text-base text-gray-50 relative my-4'>
                                    Used to its Tkinter and like libraries.Soon will we trying new
                                    waters like Ai and ML.Have one middle level Project.
                                </p>
                            </div>
                        </div>
                    </div>
                </Tilt>
                <Tilt options={defaultOptions}>
                    <div
                        className='max-w-xs w-full'
                        id='Mern'
                    >
                        <div
                            className={cn(
                                'group w-full cursor-pointer overflow-hidden relative card h-72 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800',
                                'bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover',
                                // Preload hover image by setting it in a pseudo-element
                                'before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]',
                                'hover:bg-[url(https://media.giphy.com/media/aS8ypUweGOXMA/giphy.gif)]',
                                "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                                'transition-all duration-500'
                            )}
                        >
                            <div className='text relative z-50'>
                                <h1 className='font-bold text-xl md:text-3xl text-gray-50 relative'>
                                    Mern Stack Developer
                                </h1>
                                <p className='font-normal text-base text-gray-50 relative my-4'>
                                    Learned it but still in learning phase🤓. Will be starting
                                    implementation on some real projects soon.
                                </p>
                            </div>
                        </div>
                    </div>
                </Tilt>
            </div>
        </div>
    );
}
