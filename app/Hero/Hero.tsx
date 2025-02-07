import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='w-full min-h-screen text-center py-40 px-10 leading-relaxed'>
      
       <h1 className="text-[50px] text-[#1D3557] font-bold">
          Have You ever felt like <strong>everything</strong> is going to END?
        </h1>

       <div className='mt-6'> 
       <p className="text-[20px] text-[#268888]">If so, it is very natural to experience this. Life <em>
       can</em> be overwhelming at times, and staying motivated seems like an impossible task.
       But what if you could create <mark className='bg-[#82cccc]'>your own motivation?</mark>
       </p>
       </div>
       
       <div className='mt-10'>
       <h1 className="text-[50px] text-[#1D3557] font-bold">
          Stay Motivated Every Day!
        </h1>
        <p className="text-[20px] text-white drop-shadow-[0_0_8px_#00FFFF] mt-4">
          Transform your life with actionable tips and daily inspiration.
        </p>

        {/* Call To Action */}
        <button className="bg-black text-bright-cyan font-bold px-6 py-3 rounded-full text-medium hover:text-black hover:bg-bright-cyan hover:font-semibold transition mt-6">
        <Link href={'/Hero/CTA'}>Start Your Journey</Link>
        </button>
        </div>
    </div>
  )
}

export default Hero
