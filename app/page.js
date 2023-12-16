'use client'
import Typed from 'typed.js';
import React from 'react';

import { GrInstallOption } from "react-icons/gr";
import { FaComputer, FaDatabase } from "react-icons/fa6";
import { PiGraduationCapFill } from "react-icons/pi";
import { FaMobileAlt } from "react-icons/fa";
import { SiAzuredevops } from "react-icons/si";
import { GoProject } from "react-icons/go";
import { PiMediumLogoFill } from "react-icons/pi";
import Image from 'next/image'
import AnasPicture from '../public/cv image ronder-modified.png'
import logo from "../public/EA2.png"

import html from "../public/html5.png";
import css from "../public/css3.png";
import js from "../public/js.png";
import reactnative from "../public/reactnative.png"
import tailwind from "../public/tailwind-css.png"
import bootstrap from "../public/bootstrap.png"
import flutter from "../public/flutter.png"
import androidstudio from "../public/androidstudio.png"
import nodejs from "../public/nodejs.png"
import mongodb from "../public/mongodb.png"
import mysql from "../public/mysql.png"
import github from "../public/github.jpg"
import git from "../public/git.png"
import docker from "../public/docker.png"
import scrum from "../public/scrum.png"
import agile from "../public/agile.png"
import uml from "../public/uml.png"


import './experience.css'
import './CustomAnimation.css'

export default function Home() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Anas ESSAMLALI", "Anas ESSAMLALI"],
      typeSpeed: 100,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
 
 
 
  return (

    <div>

      <main className="flex min-h-screen flex-col items-center justify-between  ">
        <section className="  min-h-screen  ">
        <nav class="bg-gray-800 z-50">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        
        <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="absolute -inset-0.5"></span>
          <span class="sr-only">Open main menu</span>
          
          <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
         
          <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex flex-1 items-center justify-center sm:ml-22 sm:justify-start">
        <div class="flex flex-shrink-0 items-center">
          <Image class="h-8 w-auto " src={logo} alt="My  Logo"/>
        </div>
        <div class="hidden sm:ml-15 sm:block">
          <div class="flex space-x-9 ">
          <a onClick={() => scrollToSection('home')} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium" >Home</a>
          <a onClick={() => scrollToSection('parcours')} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium">Parcours Universitaire</a>
          <a onClick={()=>scrollToSection('experience')} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium  whitespace-nowrap" >Expérience Professionnelle</a>
          <a onClick={() => scrollToSection('competence')} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium">Compétences informatiques</a>

            
           
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
       

       
        <div class="relative mr-18">
          <div>
          <a
                  className='font-bold bg-gradient-to-r from-cyan-700 to-teal-500 px-3 py-3 rounded-md -mr-7 flex items-center hover:bg-gradient-to-r hover:from-cyan-600 hover:to-teal-400'
                  href= "data/CV.pdf"
                  target="_blank"
                  download="CV.pdf"
                  rel="noopener noreferrer">
                  <span className="mr-2">
                    <GrInstallOption />
                  </span>
                  My Resume
                </a>
                <a href="data/CV.pdf" className='resume-link'></a>
            
          </div>

         
        
         
        </div>
      </div>
    </div>
  </div>

 
  <div class="sm:hidden" id="mobile-menu">
    <div class="space-y-1 px-2 pb-3 pt-2">
     
      <a onClick={()=>{scrollToSection('home')}}  className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Home</a>
      <a onClick={()=>{scrollToSection('parcours')}} className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Parcours Universitaire</a>
      <a onClick={()=>{scrollToSection('experience')}} className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Expérience Professionnelle</a>
      <a onClick={()=>{scrollToSection('competence')}} className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"> Compétences informatiques</a>
      
    </div>
  </div>
</nav>
          <nav className='py-4 mb-18 ml-8  flex justify-between '>
            
            
            <ul className='text-3xl flex items-end'>
             
              <li className='items-end'>
                
              </li>

            </ul>

          </nav>
          <section id='home'>
          <div className=' mx-auto bg-gradient-to-b from-teal-700 rounded-md max-w-6xl overflow-hidden flex items-center'>
            <div className='w-1/2 ml-3'>
              <Image src={AnasPicture} className='object-cover w-full h-full rounded-l-2xl' />
            </div>

            <div className='flex flex-col justify-center ml-40 h-80'>
              <h1 className='text-6xl px-10 py-4 text-teal-700 font-semibold '><span ref={el} >Anas ESSAMLALI</span></h1>
              <h2 className='animate-custom mr-20 text-center px-10 text-4xl font-bold text-gray-900 '>Développeur Web💻</h2>
              <p className='text-2xl py-5 leading-18 text-gray-800 font-bold'>
                Je suis un élève ingénieur en 5 ème année Emsi option MIAGE (Méthodes Informatiques Appliquées à la gestion des entreprises)
              </p>
            </div>
          </div>


</section>

        </section>

        <section className='w-11/12 ' id='parcours'>
          <div className=' mx-auto mt-20 overflow-hidden  text-left  shadow-2xl p-20 rounded-xl my-10 dark:bg-white'>
            <PiGraduationCapFill className="  pb-3 py-0 ml-44 -mt-1 -mb-14    text-teal-700 parcours-icon " />

            <h3 className=' text-3xl  pb-3 py-0 ml-14 -mt-11 mb-10 text-center font-semibold  text-teal-700 '>  Parcours Universitaire</h3>
            <div className="experience">
              <div className="relative experience-item">

                <p className="experience-date">10/2022 - 06/2024</p>
                <p className="experience-company">EMSI/Casablanca</p>
                <p className="experience-role text-xl from-neutral-900 font-medium">
                  5ème Année Option MIAGE <br />
                  (Méthodes Informatiques Appliquées à La Gestion Des Entreprises ).
                </p>
              </div>

              <div className=" relative experience-item">

                <p className="experience-date">09/2019 - 07/2022</p>
                <p className="experience-company">FSBM/Casablanca</p>
                <p className="experience-role text-xl from-neutral-900 font-medium">
                  Licence fondamentale en SMI <br />
                  (sciences mathématiques et informatiques)
                </p>
              </div>

              <div className="experience-item">
                <p className="experience-date">09/2018 - 06/2019</p>
                <p className="experience-company">LYCEE Hassan 2/Casablanca</p>
                <p className="experience-role text-xl from-neutral-900 font-medium">Diplôme de Baccaleauréat
                  en sciences mathématiques<br /> (A) mention
                  A.Bien.</p>
              </div>

            </div>
          </div>
          </section >
          <section  className='w-11/12 ' id='experience'>
          <div className=' mx-auto mt-20 overflow-hidden  text-left  shadow-2xl p-20 rounded-xl my-10 dark:bg-white'>
            <FaComputer className=" text-teal-700 ml-44 parcours-icon " />

            <h3 className=' text-3xl  pb-3 py-0 ml-14 -mt-11 mb-10 text-center font-semibold  text-teal-700 '>  Expérience Professionnelle</h3>
            <div className="experience">
              <div className="relative experience-item">

                <p className="experience-date">07/2023 - 09/2023</p>
                <p className="experience-company">Projet de fin d'Année(PFA)</p>
                <p className="experience-role text-xl from-neutral-900 font-medium">
                  Conception et développement d’une Application Web
                  <br />
                  de gestion d’un cabinet de courtage.
                </p>
              </div>

              <div className=" relative experience-item">

                <p className="experience-date">12/2022 - 02/2023</p>
                <p className="experience-company">Projet de fin d'Année(PFA)</p>
                <p className="experience-role text-xl from-neutral-900 font-medium">
                  Développement d’un système intelligent E-learning.
                </p>
              </div>

              <div className="experience-item">
                <p className="experience-date">03/2022 - 06/2022</p>
                <p className="experience-company">LYCEE Hassan 2/Casablanca</p>
                <p className="experience-role text-xl from-neutral-900 font-medium">Conception et développement d’une plateforme du Recrutement
                  <br /> en utilisant des outils comme:<br />
                  HTML,CSS,JS,Bootstrap,Laravel
                </p>
              </div>

            </div>
          </div>


        </section>
        <section className="w-11/12" id='competence'>
        
            <h2 className="text-3xl py-10 dark:text-white ">Mes Compétences informatiques</h2>
            <div className=' mx-auto mt-20 overflow-hidden  text-left  shadow-2xl p-20 rounded-xl my-10 dark:bg-white'>
            <FaComputer className=" text-teal-700 ml-44 parcours-icon mr-50" />
           
            <h3 className='  text-3xl  pb-3 py-0 ml-14 -mt-11 mb-10 text-center font-semibold  text-teal-700  '>Programmation web </h3>

          
          <div className="flex flex-wrap gap-11 justify-center">
  <div className="flex flex-col items-center">
    <Image
      className="rounded-lg object-cover"
      style={{ width: '100px', height: '100px' }}
      src={html}
    />
    <h2 className="mt-2  text-xl font-bold whitespace-nowrap subpixel-antialiased rounded-full">HTML5</h2>
  </div>

  <div className="flex flex-col items-center">
    <Image
      className="rounded-lg object-cover"
      style={{ width: '100px', height: '100px' }}
      src={css}
    />
    <h2 className="mt-2  text-xl font-bold whitespace-nowrap subpixel-antialiased">CSS3</h2>
  </div>

  <div className="flex flex-col items-center">
    <Image
      className="rounded-lg object-cover"
      style={{ width: '100px', height: '100px' }}
      src={js}
    />
    <h2 className="mt-2  text-xl font-bold whitespace-nowrap subpixel-antialiased">JS</h2>
  </div>

  <div className="flex flex-col items-center">
    <Image
      className="rounded-lg object-cover"
      style={{ width: '100px', height: '100px' }}
      src={reactnative}
    />
    <h2 className="mt-2  text-xl font-bold whitespace-nowrap subpixel-antialiased">React JS</h2>
  </div>

  <div className="flex flex-col items-center">
    <Image
      className="rounded-lg object-cover"
      style={{ width: '100px', height: '100px' }}
      src={tailwind}
    />
    <h2 className="mt-2  text-xl font-bold whitespace-nowrap subpixel-antialiased">Tailwind</h2>
  </div>

  <div className="flex flex-col items-center">
        <Image
          className="rounded-lg object-cover"
          style={{ width: '100px', height: '100px' }}
          src={bootstrap}
        />
        <h2 className="mt-2  text-xl font-bold whitespace-nowrap subpixel-antialiased">Bootstrap</h2>
      </div>
      <div className="flex flex-col items-center">
        <Image
          className="rounded-lg object-cover"
          style={{ width: '100px', height: '100px' }}
          src={nodejs}
        />
        <h2 className="mt-2  text-xl font-bold whitespace-nowrap subpixel-antialiased">Node JS</h2>
      </div>
      </div>
</div>
        
           
            
<div className='mx-auto mt-20 overflow-hidden text-left shadow-2xl pt-2 pb-2 p-20 rounded-xl my-10 dark:bg-white'>
  <FaMobileAlt className="text-teal-700 ml-44 parcours-icon mr-50" />
  <h3 className=' text-3xl  pb-3 py-0 ml-14 -mt-11 mb-10 text-center font-semibold  text-teal-700  '>Programmation mobile </h3>

  <div className="flex flex-wrap gap-7 lg:flex-row lg:flex-wrap">
    <div className="mx-10 flex-1 text-center">
      <div className="flex flex-col items-center">
        <Image
          className="rounded-lg object-cover"
          style={{ width: '100px', height: '100px' }}
          src={androidstudio}
        />
        <h2 className='py-1 font-mono text-xl font-extrabold whitespace-nowrap'>Android Studio</h2>
      </div>
    </div>

    <div className="mx-15 flex-1 text-center">
      <div className="flex flex-col items-center">
        <Image
          className="rounded-lg object-cover"
          style={{ width: '100px', height: '100px' }}
          src={flutter}
        />
        <h2 className='ml-2 mr-10 py-1 font-mono text-xl font-extrabold whitespace-nowrap'>Flutter</h2>
      </div>
    </div>

    <div className="mx-20 flex-1 text-center">
      <div className="flex flex-col items-center">
        <Image
          className="rounded-lg object-cover -mt-8"
          width={200} height={200}
          src={reactnative}
        />
        <h2 className='-mt-6 font-mono text-xl font-extrabold whitespace-nowrap'>ReactNative</h2>
      </div>
    </div>
  </div>
</div>
</section>
<div className='mx-auto mt-20 overflow-hidden text-left shadow-2xl pt-2  p-20 rounded-xl my-10 dark:bg-white'>
  <SiAzuredevops className="text-teal-700 ml-32 parcours-icon mr-50" />
  <h3 className='  text-3xl  pb-3 py-0  -mt-11 mb-10 text-center font-semibold  text-teal-700  '>Devops </h3>


  <div className="flex items-center justify-center gap-20">
  <div className="text-center">
    <Image
      className="rounded-lg object-cover"
      style={{ width: '100px', height: '100px' }}
      src={github}
    />
  </div>

  <div className="text-center">
    <Image
      className="rounded-lg object-cover"
      style={{ width: '100px', height: '100px' }}
      src={git}
    />
  </div>

  <div className="text-center">
    <Image
      className="rounded-lg object-cover"
      style={{ width: '120px', height: '100px' }}
      src={docker}
    />
  </div>
</div>

</div>

<div className="grid grid-cols-2 gap-10">

  {/* Left Div */}
  <div className='mx-auto overflow-hidden text-left shadow-2xl pt-2 pb-2 p-20 rounded-xl my-10 dark:bg-white'>
    <FaDatabase className="text-teal-700 parcours-icon" />
    <h3 className='ml-20 text-3xl pb-1 -mt-11 mb-10 font-semibold text-teal-700'>Base de données</h3>

    <div className="flex flex-col gap-7 lg:flex-row lg:flex-wrap justify-center">
      <div className="mx-4 flex-2 text-center -mt-10">
        <div className="flex flex-col items-center">
          <Image
            className="rounded-lg object-cover"
            style={{ width: '100px', height: '100px' }}
            src={mongodb}
          />
          <h2 className='text-center -ml-30 py-1 font-mono text-xl font-extrabold whitespace-nowrap'>MongoDB</h2>
        </div>
      </div>

      <div className="mx-4 flex-2 text-center -mt-10">
        <div className="flex flex-col items-center">
          <Image
            className="rounded-lg object-cover"
            style={{ width: '100px', height: '100px' }}
            src={mysql}
          />
          <h2 className='text-center -ml-30 py-1 font-mono text-xl font-extrabold whitespace-nowrap'>MySQL</h2>
        </div>
      </div>
    </div>
  </div>

  {/* Right Div */}
  <div className='mx-auto overflow-hidden text-left shadow-2xl pt-2 pb-2 p-20 rounded-xl my-10 dark:bg-white'>
    <GoProject className="text-teal-700 parcours-icon" />
  <h3 className='ml-20 text-3xl pb-1 -mt-11 mb-10 font-semibold text-teal-700'>Gestion de projet</h3>


<div className="flex flex-col gap-7 lg:flex-row lg:flex-wrap justify-center">
  <div className="mx-4 flex-2 text-center -mt-1">
    <div className="flex flex-col items-center">
      <Image
        className="rounded-lg object-cover"
        style={{ width: '100px', height: '100px' }}
        src={scrum}
      />
    </div>
  </div>

  <div className="mx-4 flex-2 text-center -mt-1">
    <div className="flex flex-col items-center">
      <Image
        className="rounded-lg object-cover"
        style={{ width: '100px', height: '100px' }}
        src={agile}
      />
    </div>
  </div>
  </div>
</div>


  
</div>

<div className='mx-auto mt-20 overflow-hidden text-left shadow-2xl pt-2 pb-2 p-20 rounded-xl my-10 dark:bg-white'>
  <PiMediumLogoFill className="text-teal-700 parcours-icon" />
  <h3 className='ml-20 text-3xl pb-1 -mt-11 mb-10 font-semibold text-teal-700'>Modélisation et Conception</h3>
  

<div className="flex flex-col gap-7 lg:flex-row lg:flex-wrap justify-center">
  <div className="mx-4 flex-2 text-center -mt-10">
    <div className="flex flex-col items-center">
      <Image
        className="rounded-lg object-cover"
        style={{ width: '200px', height: '200px' }}
        src={uml}
      />
    </div>
  </div>
</div>

     </div>   



        <footer class="bg-white">
          <div class="mx-auto max-w-screen-2xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">


            <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
              <div className="mx-auto max-w-sm lg:max-w-none">
                <p className="mt-4 text-center text-gray-500 lg:text-left lg:text-lg">
                  📬 Connect with me! Whether you have questions, want to discuss a project, or just want to say hello,
                  I'm always open to new opportunities and conversations.
                  Feel free to reach out through any of the following channels. Let's stay connected! 🚀✨
                </p>

                <div className="py-10 px-32 mt-6 flex justify-center gap-4 lg:justify-start">
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href=""
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only"> Facebook </span>

                    <svg
                      className="h-6 w-10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>

                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="https://www.linkedin.com/in/anas-essamlali/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only"> LinkedIn </span>

                    <svg
                      className="h-10 w-10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.0214 0H1.02084C0.453707 0 0 0.451613 0 1.01613V12.9839C0 13.5258 0.453707 14 1.02084 14H12.976C13.5432 14 13.9969 13.5484 13.9969 12.9839V0.993548C14.0422 0.451613 13.5885 0 13.0214 0ZM4.15142 11.9H2.08705V5.23871H4.15142V11.9ZM3.10789 4.3129C2.42733 4.3129 1.90557 3.77097 1.90557 3.11613C1.90557 2.46129 2.45002 1.91935 3.10789 1.91935C3.76577 1.91935 4.31022 2.46129 4.31022 3.11613C4.31022 3.77097 3.81114 4.3129 3.10789 4.3129ZM11.9779 11.9H9.9135V8.67097C9.9135 7.90323 9.89082 6.8871 8.82461 6.8871C7.73571 6.8871 7.57691 7.74516 7.57691 8.60323V11.9H5.51254V5.23871H7.53154V6.16452H7.55423C7.84914 5.62258 8.50701 5.08065 9.52785 5.08065C11.6376 5.08065 12.0232 6.43548 12.0232 8.2871V11.9H11.9779Z"
                      />
                    </svg>
                  </a>



                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="https://github.com/Anas0102"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only"> GitHub </span>

                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>


                </div>
              </div>

              <div
                className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left"
              >
                <div>
                  <strong className="font-medium text-gray-900"> Services </strong>

                  <ul className="mt-6 space-y-1">
                    <li>
                      <a
                        className="text-gray-700 transition hover:text-gray-700/75"
                        href="/"
                      >
                        Marketing
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-700 transition hover:text-gray-700/75"
                        href="/"
                      >
                        Graphic Design
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-700 transition hover:text-gray-700/75"
                        href="/"
                      >
                        App Development
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-700 transition hover:text-gray-700/75"
                        href="/"
                      >
                        Web Development
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <strong className="font-medium text-gray-900"> About </strong>

                  <ul className="mt-6 space-y-1">
                    <li>
                      <a
                        className="text-gray-700 transition hover:text-gray-700/75"
                        href="/"
                      >
                        About
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-700 transition hover:text-gray-700/75"
                        href="/"
                      >
                        Careers
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-700 transition hover:text-gray-700/75"
                        href="/"
                      >
                        History
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-700 transition hover:text-gray-700/75"
                        href="/"
                      >
                        Our Team
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <strong className="font-medium text-gray-900"> Support </strong>

                  <ul className="mt-6 space-y-1">
                    <li>
                      <a
                        className="text-gray-700 transition hover:text-gray-700/75"
                        href="/"
                      >
                        FAQs
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-700 transition hover:text-gray-700/75"
                        href="/"
                      >
                        Contact
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-700 transition hover:text-gray-700/75"
                        href="/"
                      >
                        Live Chat
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-16 border-t border-gray-100 pt-8">
              <p className="text-center text-xs/relaxed text-gray-500">
                © Company 2022. All rights reserved.

                <br />

                Created with
                <a
                  href=""
                  className="text-gray-700 underline transition hover:text-gray-700/75"
                >Reactjs</a
                >
                and
                <a
                  href=""
                  className="text-gray-700 underline transition hover:text-gray-700/75"
                > Tailwind</a
                >.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
