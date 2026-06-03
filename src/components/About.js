import AboutImg from '../assets/about.png';

export default function About () {
    const config  = {
        line1: "Hi,I'm Amrenther",
        line2: "I am a Full-stack web developer and WordPress developer. I build beautiful Websites with React.js, Tailwind CSS and Next.js. I also have experience in building websites with WordPress.",
        line3: "I am proficient in Frontend skills like React.js, React Router,React Hooks, Redux, Redux Tool Kit, Axios, RTK Query, Tailwind CSS, NextAuth, Zod, CSS3 and many more.",
        line4: "In backend I know Node.js,Prisma,MySQL,PostgreSQL"
    }

    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} alt="About" />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
                <p className='pb-5'>{config.line4}</p>
            </div>
        </div>
    </section>
}