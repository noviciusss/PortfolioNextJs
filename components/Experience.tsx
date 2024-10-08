'use client';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase } from 'lucide-react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Skills } from './Skills';

const ExperienceTimeline = () => {
    return (
        <div className='flex flex-col'>
            <div className='container mx-auto p-4'>
                <h2 className='text-3xl font-bold mb-4 text-center'>Experience</h2>
                <VerticalTimeline>
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
                        <p>
                            Doing many projects to be get hired. And going to start hunting for one.
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
            <div className='flex flex-col items-center mt-8'>
                <h2 className='text-3xl font-bold mb-2 text-center'>Skills</h2>
                <div className='w-64 h-1 bg-gradient-to-r from-gray-500 to-transparent mb-4'></div>
                <Skills />
            </div>
        </div>
    );
};

export default ExperienceTimeline;
