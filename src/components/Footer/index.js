"use client"
import React from 'react'
import { useForm } from 'react-hook-form';
import { LinkedinIcon, GithubIcon, TwitterIcon } from '../Icons';
import Link from 'next/link';
import siteMetadata from '@/src/utils/siteMetadate';

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <footer className='mt-16 rounded-2xl dark:font-bold bg-dark dark:bg-accentDark/90 m-2 sm:m-10 flex flex-col items-center text-light dark:text-dark'>
      <h3 className='mt-16 font-medium text-center capitalize text-2xl dark:font-medium sm:text-3xl lg:text-4xl px-4'>
        Interesting Stories | Updates | Guides
      </h3>
      <p className='mt-5 px-4 text-center w-full sm:w-3/5 font-light text-sm sm:text-base'>
        Subscribe to learn about new technology and updates. Join over 5000+ members community to stay up to date with latest news.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className='mt-6 w-fit py-1 sm:min-w-[384px] flex items-stretch bg-light dark:bg-dark sm:p-2 p-1 rounded mx04'>
        <input type="email" placeholder="Enter your email" {...register("email", { required: true, maxLength: 80 })}
          className='w-full bg-transparent pl-2 sm:pl-0 text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1'
        />

        <input type="submit" className='bg-dark text-light dark:text-dark dark:bg-light  cursor-pointer font-medium rounded px-3 sm:px-5 py-1' />
      </form>
      <div className='flex items-center mt-8'>
        <a href={siteMetadata.linkedin} className="inline-block w-6 h-6 mr-4"><LinkedinIcon className="hover:scale-150 transition ease duration-200" /></a>
        <a href={siteMetadata.twitter} className="fill-light  inline-block w-6 h-6 mr-4"><TwitterIcon className="hover:scale-150 transition ease duration-200" /></a>
        <a href={siteMetadata.github} className="inline-block w-6 h-6 mr-4 dark:fill-dark fill-light"><GithubIcon className="hover:scale-150 transition ease duration-200" /></a>
      </div>

      <div className='w-full  mt-16 md:mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex flex-col md:flex-row items-center justify-between'>
        <span className='text-center '>&copy;2023 Hiroto. All rights reserved.</span>
        <Link href="/sitemap.xml" className='text-center underline my-4 md:my-0'>
          sitemap.xml
        </Link>
        <div className='text-center'>
          Made with &hearts; by <a className='underline'>Hiroto</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer