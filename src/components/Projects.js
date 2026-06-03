import webimg1 from '../assets/webimg1.jpg';
import webimg2 from '../assets/webimg2.jpg';
import webimg3 from '../assets/webimg3.jpg';

export default function Projects() {

    const config = {
        projects : [
            {
                image: webimg1,
                description: 'Big Bang Rejuvenators | WordPress',
                link: 'https://bbrejuvenators.com/'
            },
            {
                image: webimg2,
                description: ' Movie Verse | React, Tailwind CSS, TMDB API |',
                link: 'https://movie-verse-flax-one.vercel.app/'
            },
            {
                image: webimg3,
                description: 'FinTrack — Personal Finance Assistant|Next.js, TypeScript, PostgreSQL, Prisma',
                link: 'https://github.com/jvlcode/blog'
            }
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                <p>These are some of my best projects. I have built these with React, NextJS, Tailwind CSS and WordPress. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image} alt="Project"/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>
                                    View Project
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}