'use client';
import React from 'react';
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './section-heading';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Contact() {
  const { ref } = useSectionInView('Contact');
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id='contact'
      ref={ref}
      className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'>
      <SectionHeading>Contact me</SectionHeading>
      <p className='text-gray-700 -mt-6'>
        Pleas contact me directly at{' '}
        <a className='underline' href='mailto:mario.vaquero.chueca@gmail.com'>
          mario.vaquero.chueca@gmail.com
        </a>{' '}
        or trough this form.
      </p>

      <form action='' className='mt-10 flex flex-col '>
        <input
          type='email'
          required
          maxLength={500}
          className='h-14 px-4 rounded-lg borderBlack'
          placeholder='Your Email'
        />
        <textarea
          className='h-52 my-3 rounded-lg borderBlack p-4'
          placeholder='Your Message'
          required
          maxLength={500}
        />
        <button
          type='submit'
          className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-800 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950'>
          Submit
          <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 ' />{' '}
        </button>
      </form>
    </motion.section>
  );
}
