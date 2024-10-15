import Contact from '@/components/Contact';
import ExperienceTimeline from '@/components/Experience';
import { FirstPage } from '@/components/FirstPage';
import Header from '@/components/Header';
import { SecondPage } from '@/components/SecondPage';
import SkillsPage from '@/components/SkillsPage';
import StarsCanvas from '@/components/Stars';

export default function Home() {
    return (
        <div className='relative'>
            <Header />
            <div className='relative h-screen'>
                <StarsCanvas />
                <div className='absolute inset-0'>
                    <FirstPage />
                </div>
            </div>
            <div className='relative h-screen'>
                <StarsCanvas />
                <div className='absolute inset-0'>
                    <SecondPage />
                </div>
            </div>
            <div className='relative h-screen'>
                <StarsCanvas />
                <div className='absolute inset-0'>
                    <ExperienceTimeline />
                </div>
            </div>
             <div className='relative'>
                <StarsCanvas />
                   <SkillsPage />
            </div>
            <div className='relative h-screen'>
                <StarsCanvas />
                <div className='absolute inset-0'>
                    <Contact />
                </div>
            </div>
        </div>
    );
}
