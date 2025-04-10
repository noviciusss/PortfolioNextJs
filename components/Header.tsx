'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import profileImage from '@/components/assests/profile1.jpg';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const [isVisible, setIsVisible] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 w-full z-50 p-2 ${
                isVisible ? 'bg-black/50 backdrop-blur-md' : 'bg-transparent'
            } rounded-full shadow-lg`}
        >
            <div className='flex justify-between max-w-8xl pt-2 w-full text-white'>
                <motion.div 
                    className='flex items-center ml-2'
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image
                        src={profileImage}
                        alt='Logo'
                        width={40}
                        height={40}
                        className='rounded-full mr-2'
                    />
                    <motion.h1 
                        className='text-3xl font-bold ml-1'
                        whileHover={{ scale: 1.05 }}
                    >
                        Noviciusss
                    </motion.h1>
                </motion.div>

                <nav className='hidden md:flex text-xl mr-4 font-semibold'>
                    <motion.ul 
                        className='flex space-x-6'
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        {['about', 'project', 'contact'].map((item, index) => (
                            <motion.li
                                key={item}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    href={`#${item}`}
                                    className={`text-xl hover:text-blue-${500 - index * 100} transition-all duration-300 ease-in-out`}
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </Link>
                            </motion.li>
                        ))}
                    </motion.ul>
                </nav>

                <motion.button
                    className='md:hidden flex items-center justify-center h-12 w-12 rounded-full bg-contact dark:bg-contact'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1 }}
                >
                    ☰
                </motion.button>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        className='md:hidden flex flex-col items-center mt-4 bg-contact rounded-lg'
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {['about', 'project', 'contact'].map((item, index) => (
                            <motion.a
                                key={item}
                                href={`#${item}`}
                                className='py-2 text-white hover:text-gray-300'
                                onClick={() => setIsMenuOpen(false)}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, x: 10 }}
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
