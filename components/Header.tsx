'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import profileImage from '@/components/assests/profile1.jpg';

export default function Header() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
                isVisible ? 'translate-y-0' : '-translate-y-full'
            } bg-contact rounded-full shadow-lg`}
        >
            <div className='flex justify-between max-w-8xl pt-2 w-full text-white'>
                <div className='flex items-center ml-2'>
                    <Image
                        src={profileImage}
                        alt='Logo'
                        width={40}
                        height={40}
                        className='rounded-full mr-2'
                    />
                    <h1 className='text-3xl font-bold ml-1'>Noviciusss</h1>
                </div>
                <nav className='text-xl mr-4 font-semibold'>
                    <ul className='flex space-x-6'>
                        <li>
                            <a
                                href='#about'
                                className='hover:text-gray-300'
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href='#project'
                                className='hover:text-gray-300'
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href='#contact'
                                className='hover:text-gray-300'
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
