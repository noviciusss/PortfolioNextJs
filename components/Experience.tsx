'use client';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase } from 'lucide-react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Skills } from './Skills';

const ExperienceTimeline = () => {
    return (
        <div className='flex flex-col'>
            <div className='container mx-auto p-4 sm:mt-8 mt-16'>
                <h2 className='text-3xl font-bold mb-4 text-center sm:block hidden'>Experience</h2>
                <VerticalTimeline className='sm:block hidden'>
                    <VerticalTimelineElement
                        className='vertical-timeline-element--work'
                        contentStyle={{ background: 'rgb(29, 24, 54)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
                        date='2024 - Present'
                        iconStyle={{ background: 'rgb(29, 24, 54)', color: '#fff' }}
                        icon={<Briefcase />}
                        visible={true}
                    >
                        <h3 className='vertical-timeline-element-title text-2xl font-bold'>
                            Some Projects
                        </h3>
                        <h4 className='vertical-timeline-element-subtitle'>Working 😊</h4>
                        <p>Description of the job and responsibilities.</p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
            <div className='flex flex-col items-center justify-center mt-16 mb-16 sm:mt-8 sm:mb-8 h-screen sm:h-auto'>
                <Skills />
            </div>
        </div>
    );
};

export default ExperienceTimeline;
