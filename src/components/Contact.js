
export default function Contact () {

    const config = {
        email : 'amrenther15@gmail.com',
        phone: '+91 7338999121'
    }

    return <section id='contact' className='flex flex-col bg-primary px-5 py-32 text-white'>
        <div className='flex flex-col items-center'>
           
            <h1 className='text-4xl border-b-4  border-secondary mb-5 w-[140px] font-bold'>Contact</h1>
            <p className='pb-5'>If you want to discuss more in detail,contact me</p>
            <p className='py-2'><span className='font-bold'>Email :</span> <a href={`mailto:${config.email}`} className='text-black text-lg hover:underline'>{config.email}</a></p>
            <p className='py-2'><span className='font-bold'>Phone :</span> <a href={`tel:${config.phone}`} className='text-black text-lg hover:underline'>{config.phone}</a></p>
        </div>
    </section>
}