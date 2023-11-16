import { cx } from '@/src/utils';
import Link from 'next/link'
import React from 'react'

const Category = ({link="#", name, active, ...props}) => {
  return (
  <Link 
    href={link}  
    className={cx(
      "inline-block py-1.5 md:py-2 px-6 md:px-10 rounded-full capitalize border-2 border-solid border-dark hover:scale-105 dark:border-light transition-all ease duration-200 m-2" , 
    props.className,
    active ? "bg-dark text-light dark:bg-light" : "bg-light text-dark dark:bg-dark dark:text-light"
    )}
    >
      #{name}
    </Link>
  );
};
export default Category;