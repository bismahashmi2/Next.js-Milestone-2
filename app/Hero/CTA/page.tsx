import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='w-full min-h-screen bg-gradient-to-b from-[#fef9c3] via-[#b2d8d8] to-[#fef9c3]'>
    
      <div className="mx-auto max-w-3xl py-32 ">

        <h1 className='text-[#D72638] text-4xl font-bold mb-8 text-center'>Fuel Your Ambition - Small Steps, Big Changes!</h1>

       <ol className="list-decimal text-[20px] text-[#333] leading-loose space-y-6">
        <li className="text-[#1D3557] text-[30px] font-semibold">Understand Your "WHY" :-</li>
        <p>Always be crystal clear about why you're doing something. This makes it easier to stay on track. Ask yourself :</p>

        <ul className="list-disc text-[#457B9D]">
          <li>Why this goal matters to me?</li>
          <li>What impact will it have on my life?</li>
        </ul>

        <p>For example, if you are working on a project, remind yourself how creative work enhances problem-solving skills and build confidence, while helping you to become more practical. Write down your why and keep it visible.</p>
        
        <li className="text-[#1D3557] text-[30px] font-semibold">Split Up Your Tasks :-</li>
        <p>One of the main reasons people lose motivation is because big goals seem distant and unachievable. To avoid this, break down your larger aspirations into smaller, manageable tasks and work on them daily or weekly. Also:</p>

        <ul className="list-disc text-[#457B9D]">
          <li>Maintain a checklist for each task.</li>
          <li>Celebrate small wins along your journey.</li>
          <li>Do not try to achieve everything in one day.</li>
          </ul>
          <p>This approach not only provides a clear roadmap but also gives a sense of accomplishment as you check off each task, fueling your motivational level while you explore the power of setting achievable goals.</p>

          <li className="text-[#1D3557] text-[30px] font-semibold">Transform Your Dreams Into Visions :-</li>
          <p>Create a vision board that reflects your dreams and aspirations. Visualizing your goals can be a powerful motivator. Use images,
          quotes, and reminders of what you want to achieve to keep your focus sharp and your enthusiasm alive. Place it somewhere you’ll see it every day to reinforce your commitment.
          </p>

          <li className="text-[#1D3557] text-[30px] font-semibold">Positive Surrounding Matters!</li>
    
            <ul className="list-disc">
              <li>Surround yourself with positivity by connecting with mind-like individuals.</li>
              <li>Listen to the music that uplifts you and quotes that resonates your journey.</li>
              </ul>
              <p>
              Joining groups or communities that share your interests and goals can also provide support, inspiration, and accountability, making it easier to stay motivated and push through challenges together.
              </p>

              <li className="text-[#1D3557] text-[30px] font-semibold">Focus on Progress, Not Perfection ...</li>
              <p>Perfectionism kills motivation. Instead of striving for perfection, focus on making progress. Every small step matters, even if it’s imperfect. Remember, you’re learning and growing every day.
              </p>
          </ol>

          <div className='text-center'>
            <Link href={'/'}>
            <button className='bg-coral-pink text-black font-bold px-6 py-3 rounded-full text-medium hover:text-coral-pink/80 hover:bg-black hover:font-extrabold transition mt-6'>Back to Home</button>
            </Link>
          </div>

       </div>
     
    </div>
  )
}

export default page
