import React from 'react'

const About = () => {
  return (
    <div className='w-full min-h-screen text-center py-40 px-10 leading-relaxed bg-gradient-to-b from-[#fef9c3] via-[#b2d8d8] to-[#fef9c3]'>
    
      {/* Hero Section  */}
     <h1 className="text-[50px] text-[#D72638] font-bold bg-gradient-to-r from-[#D72638] to-coral-pink bg-clip-text text-transparent">
          Empowering Minds To Stay <strong>Motivated</strong> Everyday...
        </h1>

      {/* Introduction */}
      <p className='mt-6 text-[20px] text-[#457B9D] max-w-3xl mx-auto'>
        Welcome to our motivation hub! Our goal is to help you unlock your full potential by providing meaningful tips and insightful stories inspiring you to stay motivated every day.
      </p>

     <div className='mt-6 max-w-3xl mx-auto'>
      <p className='text-[20px] text-[#457B9D]'>Did you know the fact that the mind listens to what you tell it repeatedly? This is a scientific fact! If you tell yourself that you cannot complete a task &mdash; like finishing a project on time, you will start believing it. But, if you train your mind to stay optimistic and search out possibilities, you will achieve the desired result.</p>
      
      {/* Motivational Quote */}
      <blockquote className='mt-3 text-[24px] italic max-w-xl mx-auto text-center'>
        <q className='text-gray-700'> You must expect great things from yourself before you can do them.</q> &mdash; <span className='text-[#1D3557] font-semibold'> Michael Jordan</span> </blockquote>

         {/* Call-to-Action */}
         <button className="bg-black text-bright-cyan px-6 py-3 rounded-full text-medium font-bold hover:text-coral-pink/80 hover:bg-black hover:font-extrabold transition mt-6">
          Read More Blogs
          </button>
     </div>
     
    </div>
  )
}

export default About
