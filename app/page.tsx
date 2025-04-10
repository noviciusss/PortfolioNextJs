'use client';

import Contact from '@/components/Contact';
import ExperienceTimeline from '@/components/Experience';
import FirstPage from '@/components/FirstPage';
import Header from '@/components/Header';
import { SecondPage } from '@/components/SecondPage';
import SkillsPage from '@/components/SkillsPage';
import StarsCanvas from '@/components/Stars';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function Home() {
    return (
        <div className='relative'>
            <Header />
            <div className='relative h-screen'>
                <StarsCanvas />
                <ScrollAnimation className="py-10">
                <div className='absolute inset-0'>
                    <FirstPage />
                </div>
                </ScrollAnimation>
            </div>
            <div className='relative h-screen'>
                <StarsCanvas />
                <ScrollAnimation className="py-10">
                <div className='absolute inset-0'>
                    <SecondPage />
                </div>
                </ScrollAnimation>
            </div>
            <div className='relative h-screen '>
                <StarsCanvas />
                <ScrollAnimation className="py-10">
                <div className='absolute inset-0'>
                    <ExperienceTimeline />
                </div>
                </ScrollAnimation>
            </div>
            <div className='relative'>
                <StarsCanvas />
                <ScrollAnimation className="py-10">
                <SkillsPage />
                </ScrollAnimation>
            </div>
            <div className='relative h-screen'>
                <StarsCanvas />
                <div className='absolute inset-0'>
                <ScrollAnimation className="py-10">
                    <Contact />
                </ScrollAnimation>   
                </div>
            </div>
        </div>
    );
}
