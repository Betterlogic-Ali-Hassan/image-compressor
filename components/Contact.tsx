"use client";
import React from "react";
import Card from "./hero/Card";
import { useForm, ValidationError } from "@formspree/react";
import Alerts from "./Alerts";

const Contact = () => {
  const [state, handleSubmit] = useForm("xbldyjby");
  return (
    <section className='mt-[52px] '>
      <div className='hero-container max-w-[1100px]'>
        <Alerts />
        <Card>
          <h1>Contact Us</h1>
          <form className='mt-6' onSubmit={handleSubmit}>
            <div className='mb-5'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                id='name'
                name='name'
                required
                placeholder='Enter your name'
                className='w-full rounded-[6px] px-[10px] appearance-none text-sm bg-background border-2 border-border transition duration-300 outline-none focus:border-primary placeholder:text-[#888] mt-3 h-[48px] '
              />
              <ValidationError
                prefix='Name'
                field='Name'
                errors={state.errors}
                className='text-red-500'
              />
            </div>
            <div className='mb-5'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter your email'
                className='w-full rounded-[6px] px-[10px] appearance-none text-sm bg-background border-2 border-border transition duration-300 outline-none focus:border-primary placeholder:text-[#888] mt-3 h-[48px]'
              />
              <ValidationError
                prefix='Email'
                field='email'
                errors={state.errors}
                className='text-red-500'
              />
            </div>
            <div className='mb-5'>
              <label htmlFor='message'>Message</label>
              <textarea
                id='message'
                name='message'
                placeholder='Enter your message'
                className='w-full rounded-[6px] px-[10px] pt-[10px] appearance-none text-sm bg-background border-2 border-border transition duration-300 outline-none focus:border-primary placeholder:text-[#888] mt-3 h-[100px]'
              ></textarea>
              <ValidationError
                prefix='Message'
                field='Message'
                errors={state.errors}
                className='text-red-500'
              />
            </div>
            <div className='mb-5'>
              <button
                type='submit'
                className='sm:max-w-[150px] w-full bg-text text-background shadow-none rounded-[8px] transition-all duration-300 px-5 hover:bg-black/80 dark:hover:bg-white/80 h-[40px]'
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
