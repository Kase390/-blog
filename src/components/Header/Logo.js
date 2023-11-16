import Link from "next/link"
import Image from "next/image"
import ProfileImg from "@/public/profile-Img.png"


const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
    <div className="w-12 md:w-16 rounded-full overflow-hidden border border-solid border-dark dark:border-light mr-2 md:mr-4">
      <Image src={ProfileImg} alt="Hiroto" className="w-full h-auto rounded-full" />
    </div>
    <span className="font-bold dark:font-semibold text-lg md:text-xl">Hiroto</span>
    </Link>
  )
}

export default Logo