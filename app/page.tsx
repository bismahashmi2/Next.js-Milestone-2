import Hero from './Hero/Hero';
import Image from 'next/image'

export default function Home() {
  return (
      <div className="w-full flex min-h-screen">
      <div className='flex relative'>
        
      <Image src={'/images/bg.PNG'} alt='background' layout='fill' objectFit='cover' className='z-[-1]'/>

      {/* Hero Section */}
      <Hero/>
      </div>

      
        </div>
  );
}
