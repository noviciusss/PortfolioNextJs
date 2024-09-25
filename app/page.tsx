import { CardDemo } from '@/components/Cards';
import { FirstPage } from '@/components/FirstPage';
import Header from '@/components/Header';
import { SecondPage } from '@/components/SecondPage';
import StarsCanvas from '@/components/Stars';

export default function Home() {
    return (
        <div className='relative '>
            <Header />
            <div className='relative h-screen'>
                <StarsCanvas />
                <div className='absolute inset-0'>
                    <FirstPage />
                </div>
            </div>
            <div className='relative h-screen'>
                <StarsCanvas />
                <div className='absolute inset-0 '>
                    <SecondPage />
                </div>
            </div>
        </div>
    );
}
