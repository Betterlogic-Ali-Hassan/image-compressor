import React from "react";
import Card from "./hero/Card";

const Contact = () => {
  return (
    <section className='mt-[140px] '>
      <div className='container max-w-[1100px]'>
        <Card>
          <h1>Contact Us</h1>
          <form className='mt-6'>
            <div className='mb-5'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                id='name'
                placeholder='Enter your name'
                className='w-full rounded-[6px] px-[10px] appearance-none text-sm bg-background border border-border transition duration-300 outline-none focus:border-primary placeholder:text-[#888] mt-3 h-[40px] '
              />
            </div>
            <div className='mb-5'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                placeholder='Enter your email'
                className='w-full rounded-[6px] px-[10px] appearance-none text-sm bg-background border border-border transition duration-300 outline-none focus:border-primary placeholder:text-[#888] mt-3 h-[40px]'
              />
            </div>
            <div className='mb-5'>
              <label htmlFor='message'>Message</label>
              <textarea
                id='message'
                placeholder='Enter your message'
                className='w-full rounded-[6px] px-[10px] pt-[10px] appearance-none text-sm bg-background border border-border transition duration-300 outline-none focus:border-primary placeholder:text-[#888] mt-3 h-[100px]'
              ></textarea>
            </div>
            <div className='mb-5'>
              <button
                type='submit'
                className='sm:max-w-[150px] w-full bg-[#00bc7d1b] text-primary shadow-none rounded-[8px] transition-all duration-300 px-5 hover:brightness-[0.8] h-[40px]'
              >
                Send
              </button>
            </div>
          </form>
          <b>EMAIL ADDRESS:</b> studziddi@gmail.com
        </Card>
      </div>
    </section>
  );
};

export default Contact;
