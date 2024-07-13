'use client'
// pages/about.js

import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProgressBar from "../components/ProgressBar";
import { Providers } from '../providers';
import { useEffect } from 'react';

const About = () => {
  const handleScroll = () => {
    const elements = document.querySelectorAll('.animate-section');

    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Check if element is in view (adjusted to only animate when scrolling down)
      if (elementTop < windowHeight * 0.75) {
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }
    });
  };

  useEffect(() => {
    // Trigger initial animation check
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 px-2">
      <Providers>
        <Header />
        <Head>
          <title>About Me</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex flex-col items-center justify-center flex-1 px-20 text-center w-full">
          <div className="max-w-6xl flex flex-col lg:flex-row justify-between items-start p-6 rounded-lg w-full animate-section">
            <div className="w-1/2 mb-6 lg:mb-0 lg:mr-8">
              <img
                src="/profile-image.jpg" // Replace with your image URL
                alt="Profile"
                className="rounded-full w-40 h-40 object-cover object-center"
              />
            </div>
            <div className="w-full lg:w-1/2 text-left mb-8">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                Hi there!
              </h1>
              <div>
                <p className="text-lg mb-4 text-justify">
                  I'm Blanca Sibecas Hernández, a software engineering graduate currently pursuing advanced studies and diverse projects.
                </p>

                <p className="text-lg mb-4 text-justify">
                  I have a keen interest in Web and Mobile development, Artificial Intelligence, and video game programming. I am skilled in programming languages such as C, C++, React, and Python. I actively pursue opportunities to expand my knowledge and explore new languages and technologies.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex px-8">
            <div className="w-full lg:w-1/2 text-left mb-8 animate-section">
              <h1 className="text-3xl lg:text-5xl font-bold mb-4">
                My Career
              </h1>
              <p className="text-lg mb-4 text-justify">
                I recently completed a Master's degree in Programming Video Games from The Core School, specializing in Unreal and Unity tools. Beginning in October, I will pursue a Master's in Artificial Intelligence at Europe University of Madrid. I'm excited about this upcoming program as it promises to further enhance my skills.
              </p>
              <p className="text-lg mb-4 text-justify">
                Thank you for visiting my portfolio and I invite you to explore my projects. If you'd like to collaborate or learn more about my work, feel free to reach out!
              </p>
            </div>
            <div className="w-full lg:w-1/2 mb-10 lg:ml-8 animate-section ">
              <div className="mb-10">
                <h2 className="text-lg lg:text-xl mt-12 font-bold text-left mb-4 ml-8">
                  Languages
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-8">
                  <div>
                    <ProgressBar language="Catalan" percentage={100} level="(Native)" />
                    <ProgressBar language="Spanish" percentage={100} level="(Native)" />
                  </div>
                  <div>
                    <ProgressBar language="French" percentage={80} level="(C1)" />
                    <ProgressBar language="English" percentage={80} level="(C1)" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full text-left mb-8 ml-10 animate-section">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Curriculum Vitae
            </h1>
          </div>
          <div className="w-full h-full flex justify-center items-center space-y-2 animate-section">
            <iframe
              src="/_Blanca_Sibecas_ENG_CV.pdf"
              width="60%"
              height="550px"
              className="border-2 border-sky-950 ml-8"
              title="PDF Document"
            />
            <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
              <p className="text-lg">Here is my CV for more information:</p>
              <div className="flex space-x-4">
                <a
                  href="/resume.pdf"
                  download
                  className="bg-amber-500 text-white px-4 hover:text-white py-2 rounded hover:bg-amber-300 transition duration-150"
                >
                  Download Spanish CV
                </a>
                <a
                  href="/_Blanca_Sibecas_ENG_CV.pdf"
                  download
                  className="bg-amber-500 text-white px-4 hover:text-white py-2 rounded hover:bg-amber-300 transition duration-150"
                >
                  Download English CV
                </a>
              </div>
            </div>
          </div>
          <Footer />
        </main>
      </Providers>
    </div>
  );
};

export default About;
