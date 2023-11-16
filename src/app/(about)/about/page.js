import AboutCoverSections from "@/src/components/About/AboutCoverSections";
import Skills from "@/src/components/About/Skills";
import Link from "next/link";
import siteMetadata from "@/project files/siteMetaData";


export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: "About Me",
  description: `Here are some details about my self.`,
};

export default function About() {
  return (
    <>
      <AboutCoverSections />
      <Skills />
      <h2 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal ">
        Have a project in mind? Reach out to me 📞 from <Link href="/contact" className="!underline underline-offset-2"   >here</Link> and let's make it happen.
      </h2>
    </>
  );
}