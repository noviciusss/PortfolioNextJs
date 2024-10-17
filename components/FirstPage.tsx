'use client';

function FirstPage() {
    return (
        <section className='relative w-full h-screen mx-auto flex items-center justify-center text-white'>
            <div className='absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-0'>
                <div className='flex flex-col items-center sm:flex-row sm:items-start gap-5'>
                    <div className='flex flex-col justify-center items-center sm:self-start sm:-mt-20'>
                        <div className='w-5 h-5 rounded-full bg-[#6123E7]' />
                        <div className='w-1 h-40 sm:h-80 bg-gradient-to-b from-[#6123E7] to-transparent' />
                    </div>
                    <div className='flex flex-col mt-5 items-center sm:items-start'>
                        <h1 className='font-bold text-6xl text-center sm:text-left'>
                            HI, I am Samarth P. Singh
                        </h1>
                        <p className='text-3xl font-semibold mt-4 text-center sm:text-left'>
                            Welcome to my Portfolio!
                        </p>
                        <a
                            href='#contact'
                            className='mt-4 px-4 py-2 text-white rounded-md border border-white font-semibold
                            hover:bg-[#090e23] hover:text-white transition-colors duration-300'
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FirstPage;
