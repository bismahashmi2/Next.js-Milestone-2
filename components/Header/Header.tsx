import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <div className='flex flex-col lg:flex-row  w-full bg-light-cream min-h-[70px] items-center p-4 justify-between fixed bg-opacity-90 z-10'>
      <div className='flex'>
      <Image src={'/images/logo.PNG'} alt='image logo' width={70} height={70} />
      <h1 className='text-[mediumseagreen] ml-2 text-[40px] font-bold'>Motivation</h1>
      </div>
     
      <div className='text-[25px] text-bright-cyan flex'>
        <nav>
          <ul className='flex gap-[25px] font-bold'>
            <li className='hover:underline hover:font-extrabold'><Link href={'/'}>Home</Link></li>
            <li className='hover:underline hover:font-extrabold'><Link href={'/about'}>About</Link></li>
            <li className='hover:underline hover:font-extrabold'><Link href={'/contact'}>Contact</Link></li>
          </ul>
        </nav>
      </div>
      </div>
   </header>
  )
}

export default Header;
