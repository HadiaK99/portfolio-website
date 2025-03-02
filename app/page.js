"use client";
import Head from "next/head";
import { AiFillGithub, AiFillMail, AiFillLinkedin } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from 'next/image';
import profileImage from './public/IMG_7372.jpg';
import design from './public/design.png';
import code from './public/code.png';
import consulting from './public/consulting.png';
import web1 from './public/web1.png';
import web2 from './public/web2.png';
import web3 from './public/web3.png';
import web4 from './public/web4.png';
import web5 from './public/web5.png';
import web6 from './public/web6.png'; 
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}> 
      <Head>
        <title>Hadia Khan Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/public/ favicon.ico" /> 
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">developedbyhadia</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl dark:fill-white" onClick={() => setDarkMode(!darkMode)}/>
              </li>
              <li>
                <a className="bg-gradient-to-r from-cyan-400 to-cyan-700 py-4 px-2 text-white rounded-md ml-8" href="#">Resume </a>
              </li>

              {/* <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li> */}
            </ul>
          </nav>
          <div className="text-center p-10">
             <h2 className="text-5xl py-2 text-cyan-500 font-medium md:text-6xl"> Hadia Khan </h2>
             <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Developer and Engineer.</h3>
             <p className="text-md py-5 leading-8 text-gray-700 md:text-xl max-w-xl mx-auto dark:text-white">
                Full Stack Developer by title, professional problem solver by nature—React, TypeScript, Node.js, and a touch of caffeine fuel my magic.
                {/* Full Stack developer, with proficiency in multiple stacks including React, Next, Node, Django, and beyond.
                At my core, I'm a problem solver—ready to tackle any challenge that comes my way! */}
              </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-500">
            {/* <AiFillTwitterCircle /> */}
            {/* <AiFillGoogleCircle /> */}
            <a href="https://www.linkedin.com/in/hadia-khan-7b11861a5/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/HadiaK99" target="_blank" rel="noopener noreferrer">
              <AiFillGithub />
            </a>
            <a href="mailto:hadiak54321@gmail.com" target="_blank" rel="noopener noreferrer">
              <AiFillMail />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-cyan-500 rounded-full w-80 h-80 mt-20 overflow-hidden  md:w-96 md:h-96"> 
             <Image src={profileImage} alt="Hadia Khan" layout="fill" objectFit="cover" />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-cyan-800">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-700 dark:text-gray-400">
              Code whisperer by day, bug wrangler by night.
            </p>
            {/* <p className="text-md py-2 leading-8 text-gray-700 dark:text-white">
              Creating seamless <span className="text-cyan-500">user experiences</span>, powerful <span className="text-cyan-500">back-end solutions</span>, and everything in between—customized to bring your ideas to life.
            </p> */}
          </div>
          <div className="lg:flex gap-10 ">
            <div className="text-center justify-items-center shadow-lg p-10 rounded-xl my-10">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-300">Full-Stack Development</h3>
              <p className="py-2  dark:text-white">Leveraging modern frameworks and tools to build scalable, high-performance web applications.</p>
              <h4 className="py-4 text-cyan-600">Technologies I Use</h4>
              <p className="text-gray-700 py-1 dark:text-gray-400">React, Next.js, MUI, TypeScript</p>
              <p className="text-gray-700 py-1 dark:text-gray-400">Redux, Redux Saga, Parse Cloud</p>
              <p className="text-gray-700 py-1 dark:text-gray-400">Node.js, Flask</p>
              <p className="text-gray-700 py-1 dark:text-gray-400">SQL, PostgreSQL, Neo4j</p>
            </div>
            <div className="text-center justify-items-center shadow-lg p-10 rounded-xl my-10">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-300">Robust and Scalable Code</h3>
              <p className="py-2  dark:text-white">Curating clean, modular, and high-performance applications with a focus on maintainability and scalability.</p>
              <h4 className="py-4 text-cyan-600">Languages and Frameworks I Use</h4>
              <p className="text-gray-700 py-1 dark:text-gray-400">JavaScript (ES6+), TypeScript</p>
              <p className="text-gray-700 py-1 dark:text-gray-400">Python</p>
              <p className="text-gray-700 py-1 dark:text-gray-400">C++</p>
              <p className="text-gray-700 py-1 dark:text-gray-400">C#</p>
              <p className="text-gray-700 py-1 dark:text-gray-400">SQL</p>
            </div>
            <div className="text-center justify-items-center shadow-lg p-10 rounded-xl my-10">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-300">Scalable System Architecture</h3>
              <p className="py-2  dark:text-white">Architecting efficient, serverless, and cloud-integrated solutions for performance and scalability.</p>
              <h4 className="py-4 text-cyan-600">Technologies & Services</h4>
              <p className="text-gray-700 py-1 dark:text-gray-400">Google & Microsoft SSO</p>
              <p className="text-gray-700 py-1 dark:text-gray-400">Stripe Payment Integration</p>
              <p className="text-gray-700 py-1 dark:text-gray-400">Serverless Functions</p>
              <p className="text-gray-700 py-1 dark:text-gray-400">Automated Workflows</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-cyan-800">Portfolio</h3>
            {/* <p className="text-md py-2 leading-8 text-gray-700 dark:text-gray-400">
              Code whisperer by day, bug wrangler by night.
            </p> */}
            <p className="text-md py-2 leading-8 text-gray-700 dark:text-white">
              Creating seamless <span className="text-cyan-500">user experiences</span>, powerful <span className="text-cyan-500">back-end solutions</span>, and everything in between—customized to bring your ideas to life.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image src={web1} className="rounded-lg object-cover" height={'100%'} width={'100%'} layout="responsive" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web2} className="rounded-lg object-cover" height={'100%'} width={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web6} className="rounded-lg object-cover" height={'100%'} width={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web4} className="rounded-lg object-cover" height={'100%'} width={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web5} className="rounded-lg object-cover" height={'100%'} width={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web3} className="rounded-lg object-cover" height={'100%'} width={'100%'} layout="responsive"/>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
