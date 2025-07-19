'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const heroRef = useRef(null);
  const visionRef = useRef(null);
  const coursesRef = useRef(null);
  const servicesRef = useRef(null);
  const impactRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  const backgroundImages = [
    { src: '/images/students-learning.jpg', alt: 'Students Learning' },
    { src: '/images/coding-class.jpg', alt: 'Coding Class' },
    { src: '/images/online-education.jpg', alt: 'Online Education' },
    { src: '/images/tech-skills.jpg', alt: 'Tech Skills Development' }
  ];

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);

    const initAnimations = () => {
      gsap.utils.toArray('.animate-on-scroll').forEach(element => {
        gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none none'
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        });
      });
    };

    initAnimations();

    return () => {
      clearInterval(carouselInterval);
      ScrollTrigger.getAll().forEach(instance => instance.kill());
    };
  }, []);

  const technicalCourses = [
    'Frontend Development',
    'Backend Development',
    'DevOps Engineering',
    'Data Science',
    'AI & Machine Learning',
    'Blockchain Development',
    'Cybersecurity'
  ];

  const nonTechnicalCourses = [
    'Product Management',
    'Project Management',
    'UI/UX Design',
    'Business Development',
    'Human Resources',
    'Leadership & Team Management'
  ];

  const services = [
    {
      title: 'CGPA Trackers',
      description: 'Helping students monitor and improve their academic performance',
      icon: '📊'
    },
    {
      title: 'Performance Analytics',
      description: 'Providing educators with data-driven insights',
      icon: '📈'
    },
    {
      title: 'Learning Apps',
      description: 'Creating tools that streamline educational administration',
      icon: '📱'
    }
  ];

  const teamMembers = [
    { name: 'Alex Johnson', role: 'CEO', expertise: 'Education Technology', image: '/images/team1.jpg' },
    { name: 'Sarah Chen', role: 'CTO', expertise: 'Technical Architecture', image: '/images/team2.jpg' },
    { name: 'Michael Rodriguez', role: 'Lead Instructor', expertise: 'Full Stack Development', image: '/images/team3.jpg' },
    { name: 'Emily Wilson', role: 'Curriculum Director', expertise: 'Educational Design', image: '/images/team4.jpg' }
  ];

  return (
    <div className="bg-white text-slate-800 font-inter">
      <Navbar />
      
      <section ref={heroRef} id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-32">
        <div className="absolute inset-0 z-0">
          {backgroundImages.map((image, index) => (
            <div 
              key={index}
              className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${currentBgIndex === index ? 'opacity-100' : 'opacity-0'}`}
              style={{ backgroundImage: `url(${image.src})` }}
            ></div>
          ))}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/80"></div>
        </div>
        
        <div className="container mx-auto px-6 z-10 text-left max-w-6xl">
          <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            Revolutionizing <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">Tech Education</span>
          </h1>
          
          <p className="hero-subtitle text-xl md:text-2xl text-slate-200 mb-12 max-w-3xl">
            Empowering learners at all stages with comprehensive technology education and innovative learning tools
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <button 
              onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-cyan-500 text-white font-semibold px-8 py-4 hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-xl border-0 text-lg"
            >
              Explore Courses
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-cyan-500 text-cyan-500 font-semibold px-8 py-4 hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Contact Us
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <svg className="w-12 h-12 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      <section ref={visionRef} id="vision" className="py-24 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="container mx-auto px-6">
          <div className="text-left mb-16 max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-cyan-600 mb-6">Our Vision & Mission</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-cyan-500">
                <h3 className="text-3xl font-bold text-slate-800 mb-4">Vision</h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  To revolutionize education by providing innovative software solutions that empower students, educators, and institutions to achieve their full potential through transformative learning experiences.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-cyan-600">
                <h3 className="text-3xl font-bold text-slate-800 mb-4">Mission</h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  To bridge the tech education gap by offering an inclusive online learning platform that serves individuals at all career stages, making quality education accessible to anyone, anywhere.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 animate-on-scroll">
            <div className="bg-white p-8 shadow-xl border-t-4 border-cyan-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Innovation</h3>
              <p className="text-slate-600 text-lg">Cutting-edge solutions for educational challenges</p>
            </div>
            <div className="bg-white p-8 shadow-xl border-t-4 border-cyan-600 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Inclusivity</h3>
              <p className="text-slate-600 text-lg">Education accessible to all backgrounds</p>
            </div>
            <div className="bg-white p-8 shadow-xl border-t-4 border-cyan-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Quality</h3>
              <p className="text-slate-600 text-lg">Industry-relevant curriculum</p>
            </div>
            <div className="bg-white p-8 shadow-xl border-t-4 border-slate-800 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Community</h3>
              <p className="text-slate-600 text-lg">Supportive learning environment</p>
            </div>
          </div>
        </div>
      </section>

      <section ref={coursesRef} id="courses" className="py-24 relative bg-slate-900">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('/images/code-background.jpg')] bg-cover"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600 mb-6">Our Courses</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive training across a wide spectrum of tech industry roles, from coding fundamentals to advanced specializations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-on-scroll">
            <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-3xl font-bold text-slate-800 mb-6 text-center">Technical Roles</h3>
              <ul className="space-y-4">
                {technicalCourses.map((course, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-cyan-500 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg text-slate-700">{course}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-3xl font-bold text-slate-800 mb-6 text-center">Non-Technical Roles</h3>
              <ul className="space-y-4">
                {nonTechnicalCourses.map((course, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-cyan-500 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg text-slate-700">{course}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section ref={servicesRef} id="services" className="py-24 bg-gradient-to-br from-cyan-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-cyan-600 mb-6">Our Educational Solutions</h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Innovative software products designed to enhance learning experiences and educational administration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-5xl mb-6 text-center">{service.icon}</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">{service.title}</h3>
                <p className="text-slate-600 text-lg text-center mb-6">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={impactRef} id="impact" className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600 mb-6">Our Impact</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Creating measurable change at individual, industry, and global levels through technology education.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll">
            <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Individual Level</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Empowering career development</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Building tech confidence</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Fostering lifelong learning</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Industry Level</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Closing the tech skills gap</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Promoting diversity in tech</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Bridging education-industry gaps</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Global Level</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Worldwide access to tech education</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Supporting economic development</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Advancing digital literacy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section ref={teamRef} id="team" className="py-24 bg-gradient-to-br from-cyan-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-cyan-600 mb-6">Meet Our Team</h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Passionate educators and technologists dedicated to transforming tech education.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-on-scroll">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-cyan-500">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 text-center mb-2">{member.name}</h3>
                <p className="text-cyan-500 font-semibold text-center mb-4">{member.role}</p>
                <p className="text-slate-600 text-center">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={contactRef} id="contact" className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600 mb-6">Get In Touch</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to start your tech education journey? Contact us to learn more about our programs and solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="animate-on-scroll">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Our Location</h3>
                    <p className="text-slate-300">123 Education Avenue<br />Tech City, TC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                    <p className="text-slate-300">+1 (555) EDU-TECH<br />Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                    <p className="text-slate-300">info@codepyramid.com<br />admissions@codepyramid.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-2xl animate-on-scroll">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-slate-700 font-medium mb-2">First Name</label>
                    <input 
                      type="text" 
                      id="firstName"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-slate-700 font-medium mb-2">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-slate-700 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-slate-700 font-medium mb-2">Interest</label>
                  <select 
                    id="interest"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all"
                  >
                    <option value="">Select an option</option>
                    <option value="courses">Courses</option>
                    <option value="products">Educational Products</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-slate-700 font-medium mb-2">Message</label>
                  <textarea 
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all resize-vertical"
                    placeholder="Tell us about your needs..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-cyan-500 text-white font-semibold px-6 py-4 rounded-lg hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}