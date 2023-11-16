"use client"
import siteMetadata from "@/src/utils/siteMetadate";
import { GithubIcon, LinkedinIcon, SunIcon, TwitterIcon } from "../Icons";
import Logo from "./Logo";
import Link from "next/link";
import { useThemeSwitch } from "../Hooks/useThemSwitch";
import { useState } from "react";


const Header = () => {

  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(!click)
  }

  return (
    <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between">
      <Logo />

      <bottom className="inline-block sm:hidden z-50" onClick={toggle}>
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span className="absolute top-0 inline-block w-full b-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click ? "rotate(-45deg) translateY(0)" : "rotate(0deg) translateY(6px)"
              }}

            >&nbsp;</span >
            <span className="absolute top-0 inline-block w-full b-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                opacity: click ? 0 : 1
              }}
            >&nbsp;</span>
            <span className="absolute top-0 inline-block w-full b-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click ? "rotate(-45deg) translateY(0)" : "rotate(0deg) translateY(-6px)"
              }}
            >&nbsp;</span >
          </div>

        </div>
      </bottom>
      <nav className="w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize
      items-center flex sm:hidden
      fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50"

        style={{
          top: click ? "1rem" : "-5rem"
        }}
      >
        <Link href="/" className="mr-2">Home</Link>
        <Link href="/about" className="mx-2">About</Link>
        <Link href="/contact" className="mx-2">Contact</Link>
        <button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
          <SunIcon />
        </button>
      </nav>


      <nav className="w-max py-3 px-6 sm:px-8 border border-solid border-dark rounded-full font-medium capitalize
      items-center hidden sm:flex 
      fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50
      transition-all ease duration-300">
        <Link href="/" className="mr-2">Home</Link>
        <Link href="/about" className="mx-2">About</Link>
        <Link href="/contact" className="mx-2">Contact</Link>
        <button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
          <SunIcon />
        </button>
      </nav>
      <div className="sm:flex items-center hidden">
        <a href={siteMetadata.linkedin} className="inline-block w-6 h-6 mr-4"><LinkedinIcon className="hover:scale-150 transition ease duration-200" /></a>
        <a href={siteMetadata.twitter} className="inline-block w-6 h-6 mr-4"><TwitterIcon className="hover:scale-150 transition ease duration-200" /></a>
        <a href={siteMetadata.github} className="inline-block w-6 h-6 mr-4"><GithubIcon className="hover:scale-150 transition ease duration-200 dark:fill-light" /></a>
      </div>
    </header>
  )
}

export default Header;