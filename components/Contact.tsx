'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { GlobeDemo } from './Globe';

interface FormData {
    name: string;
    email: string;
    message: string;
}

export default function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                'service_3kp5ilw',
                'template_qxochq8',
                {
                    from_name: formData.name,
                    to_name: 'Your Name',
                    from_email: formData.email,
                    to_email: 'your@email.com',
                    message: formData.message,
                },
                'Emh29ZD_5r6ENE9ab'
            );
            alert('Thank you.😊I will get back to you as soon as possible.');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            id='contact'
            className='flex h-screen items-center justify-center'
        >
            <div className='flex w-full h-screen max-w-7xl mx-auto'>
                <div className='w-2/4 flex items-center p-4'>
                    <div className='bg-contact p-8 rounded-lg shadow-xl h-auto w-full'>
                        <p className='text-[16px] text-secondary uppercase tracking-wider mb-2'>
                            Get in Touch
                        </p>
                        <h3 className='text-white font-black text-[32px] md:text-[48px] mb-6'>
                            Contact.
                        </h3>
                        <form
                            onSubmit={handleSubmit}
                            className='flex flex-col gap-5'
                        >
                            <label className='flex flex-col'>
                                <span className='text-white mb-2 font-medium'>Your name</span>
                                <input
                                    type='text'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder='Ex. Samarth'
                                    className='bg-contactBox py-3.5 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                                />
                            </label>
                            <label className='flex flex-col'>
                                <span className='text-white mb-2 font-medium'>Your email</span>
                                <input
                                    type='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder='Ex. sam@gmail.com'
                                    className='bg-contactBox py-3.5 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                                />
                            </label>
                            <label className='flex flex-col'>
                                <span className='text-white mb-2 font-medium'>Your message</span>
                                <textarea
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder='Type your message here...'
                                    className='bg-contactBox py-3.5 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium h-32'
                                />
                            </label>
                            <button
                                type='submit'
                                disabled={loading}
                                className='bg-contactBox py-3 px-6 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl disabled:opacity-50 mt-2'
                            >
                                {loading ? 'Sending...' : 'Send'}
                            </button>
                        </form>
                    </div>
                </div>

                <div className='w-2/4 h-screen flex items-center justify-center'>
                    <div className='globe-container'>
                        <div className='fixed-size'>
                            <GlobeDemo />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
