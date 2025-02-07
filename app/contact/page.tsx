import React from "react";

const Contact = () => {
  return (
    <div className="w-full min-h-screen py-40 px-10 leading-relaxed bg-gradient-to-b from-[#fef9c3] via-[#b2d8d8] to-[#fef9c3]">
      <div className="w-full bg-white max-w-xlg mx-auto rounded-lg shadow-md p-10">
        <h1 className="text-[32px] sm:text-[50px] text-center text-[#D72638] font-bold bg-gradient-to-r from-[#D72638] to-coral-pink bg-clip-text text-transparent">
          Have further queries or feedbacks? Contact us now!
        </h1>

        <form className="bg-peach rounded-lg shadow-lg p-8 sm:p-6 mt-6">
  
         <div>
            <label className="text-lg font-semibold">Name: </label>
            <input type="text" className="sm:w-full p-2 lg:max-w-40" placeholder="Enter your name" required />
            </div> <br />

                <div>
                    <label className="text-lg font-semibold">Email: </label>
                    <input type="text" className="p-2" placeholder="Enter your email" required />
                </div><br />   

                <div>
                    <label className="text-lg font-semibold">Leave a comment: </label> <br />
                    <textarea name="text" className="p-2 mt-2"></textarea>
                </div><br />

                <div>
                   <button className="border-[2px] border solid border-[black] px-3 py-1 rounded-md transition-all duration-100 hover:bg-black hover:text-white">Submit</button>
                </div>
           
        </form>
      </div>
    </div>
  );
};

export default Contact;
