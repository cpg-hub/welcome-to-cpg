'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  labelClass,
  selectClass,
  inputClass,
  buttonPrimary,
  noteText,
  rowWrapper,
  halfWidth
} from '../styles/styles';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const teamRef = useRef(null);
  const whyUsRef = useRef(null);
  const contactRef = useRef(null);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  const backgroundImages = [
    { src: '/images/tech-office.jpg', alt: 'Modern Tech Office' },
    { src: '/images/coding-setup.jpg', alt: 'Professional Coding Environment' },
    { src: '/images/team-collaboration.jpg', alt: 'Team Collaboration' },
    { src: '/images/digital-innovation.jpg', alt: 'Digital Innovation' },
    { src: '/images/global-network.jpg', alt: 'Global Network Solutions' }
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

      gsap.utils.toArray('.parallax-image').forEach(image => {
        gsap.to(image, {
          scrollTrigger: {
            trigger: image,
            scrub: true
          },
          y: 100,
          ease: 'none'
        });
      });
    };

    initAnimations();

    return () => {
      clearInterval(carouselInterval);
      ScrollTrigger.getAll().forEach(instance => instance.kill());
    };
  }, []);

  const processSteps = [
    { title: 'Conceptualization', icon: '💡', description: 'Market research and stakeholder interviews to define product vision' },
    { title: 'Requirements', icon: '📋', description: 'Detailed user stories and acceptance criteria gathering' },
    { title: 'Design', icon: '🎨', description: 'Wireframing, prototyping, and UI/UX design' },
    { title: 'Development', icon: '💻', description: 'Agile sprints with daily standups and code reviews' },
    { title: 'Testing', icon: '🧪', description: 'Comprehensive QA including unit, integration, and E2E testing' },
    { title: 'Deployment', icon: '🚀', description: 'CI/CD pipelines with automated testing and deployment' },
    { title: 'Monitoring', icon: '📊', description: 'Performance tracking and user feedback analysis' },
    { title: 'Scaling', icon: '📈', description: 'Optimization for global reach and performance' }
  ];

  const teamMembers = [
    { name: 'Alex Johnson', role: 'CEO', expertise: 'Business Strategy & Leadership', image: '/images/team1.jpg' },
    { name: 'Sarah Chen', role: 'CTO', expertise: 'Technical Architecture & Innovation', image: '/images/team2.jpg' },
    { name: 'Michael Rodriguez', role: 'Lead Developer', expertise: 'Full Stack Development', image: '/images/team3.jpg' },
    { name: 'Emily Wilson', role: 'UX Designer', expertise: 'User Experience & Interface Design', image: '/images/team4.jpg' },
    { name: 'David Kim', role: 'DevOps Engineer', expertise: 'Cloud Infrastructure & CI/CD', image: '/images/team5.jpg' },
    { name: 'Priya Patel', role: 'QA Lead', expertise: 'Quality Assurance & Testing', image: '/images/team6.jpg' }
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
            Transform Your Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">Future</span>
          </h1>
          
          <p className="hero-subtitle text-xl md:text-2xl text-slate-200 mb-12 max-w-3xl">
            Innovative Technology Solutions & Strategic Development for Modern Businesses
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-cyan-500 text-white font-semibold px-8 py-4 hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-xl border-0 text-lg"
            >
              Get Started
            </button>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-cyan-500 text-cyan-500 font-semibold px-8 py-4 hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Explore Solutions
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <svg className="w-12 h-12 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      <section ref={aboutRef} id="about" className="py-24 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="container mx-auto px-6">
          <div className="text-left mb-16 max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-cyan-600 mb-6">About Code Pyramid Global</h2>
            <p className="text-xl text-slate-700 leading-relaxed">
              At Code Pyramid Global, we specialize in cutting-edge technology solutions and strategic development. Our team of experts crafts innovative digital experiences that drive growth, enhance efficiency, and transform businesses for the digital age.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 animate-on-scroll">
            <div className="bg-white p-8 shadow-xl border-t-4 border-cyan-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Innovation</h3>
              <p className="text-slate-600 text-lg">Cutting-edge solutions tailored for tomorrow's challenges</p>
            </div>
            <div className="bg-white p-8 shadow-xl border-t-4 border-cyan-600 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Expertise</h3>
              <p className="text-slate-600 text-lg">Decades of combined technology and business experience</p>
            </div>
            <div className="bg-white p-8 shadow-xl border-t-4 border-cyan-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Results-Driven</h3>
              <p className="text-slate-600 text-lg">Focused on measurable outcomes and sustainable growth</p>
            </div>
            <div className="bg-white p-8 shadow-xl border-t-4 border-slate-800 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Partnership</h3>
              <p className="text-slate-600 text-lg">We treat your success as our own mission</p>
            </div>
          </div>
        </div>
      </section>

      <section ref={servicesRef} id="services" className="py-24 relative bg-slate-900">
        <div className="parallax-image absolute inset-0 z-0">
          <img src="/images/tech-background.jpg" alt="Technology Background" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600 mb-6">Our Services</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We offer a comprehensive range of services designed to meet the unique needs of modern businesses. From software development to digital marketing, our solutions are tailored to drive success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Custom Software Development</h3>
              <p className="text-slate-600 text-lg mb-6">
                Tailored software solutions that fit your business needs, enhancing efficiency and productivity.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-cyan-500 text-white font-semibold px-6 py-3 hover:bg-cyan-600 transition-all duration-300 w-full"
              >
                Learn More
              </button>
            </div>
            <div className="bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m3 0H4a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Digital Marketing</h3>
              <p className="text-slate-600 text-lg mb-6">
                Comprehensive digital marketing strategies to boost your online presence and drive engagement.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-cyan-500 text-white font-semibold px-6 py-3 hover:bg-cyan-600 transition-all duration-300 w-full"
              >
                Learn More
              </button>
            </div>
            <div className="bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Cybersecurity Solutions</h3>
              <p className="text-slate-600 text-lg mb-6">
                Protect your digital assets with our advanced cybersecurity services and risk management strategies.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-cyan-500 text-white font-semibold px-6 py-3 hover:bg-cyan-600 transition-all duration-300 w-full"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section ref={processRef} id="process" className="py-24 bg-gradient-to-br from-cyan-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-cyan-600 mb-6">Our Engineering Process</h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              We follow a rigorous, proven methodology to deliver exceptional results for every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-on-scroll">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-cyan-500">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={teamRef} id="team" className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600 mb-6">Meet Our Team</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our team of experts brings decades of combined experience in technology and business strategy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
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

      <section ref={whyUsRef} id="why-us" className="py-24 bg-gradient-to-br from-cyan-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-cyan-600 mb-6">Why Choose Us</h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Our commitment to excellence, innovation, and client success sets us apart in the competitive technology landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center animate-on-scroll">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Proven Track Record</h3>
                  <p className="text-slate-600">Over 500 successful projects delivered across various industries with 99% client satisfaction rate.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">24/7 Support</h3>
                  <p className="text-slate-600">Round-the-clock technical support and maintenance to ensure your systems run smoothly.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Cutting-Edge Technology</h3>
                  <p className="text-slate-600">We leverage the latest technologies and frameworks to deliver future-ready solutions.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white p-8 shadow-2xl border-t-4 border-cyan-500">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Ready to Get Started?</h3>
                <p className="text-slate-600 mb-6">
                  Transform your business with our innovative technology solutions. Contact us today for a free consultation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">Free initial consultation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">Custom project proposal</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">24-48 hour response time</span>
                  </div>
                </div>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-cyan-500 text-white font-semibold px-6 py-3 hover:bg-cyan-600 transition-all duration-300 w-full mt-6"
                >
                  Start Your Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={contactRef} id="contact" className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600 mb-6">Get In Touch</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to transform your business? Let's discuss your project and explore how we can help you achieve your goals.
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
                    <h3 className="text-xl font-bold text-white mb-2">Visit Our Office</h3>
                    <p className="text-slate-300">123 Innovation Drive<br />Tech City, TC 12345</p>
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
                    <p className="text-slate-300">+1 (555) 123-4567<br />Mon-Fri 9AM-6PM EST</p>
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
                    <p className="text-slate-300">info@codepyramidglobal.com<br />support@codepyramidglobal.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 shadow-2xl animate-on-scroll">
              <form className="space-y-6">
                <div className={rowWrapper}>
                  <div className={halfWidth}>
                    <label htmlFor="firstName" className={labelClass}>First Name</label>
                    <input 
                      type="text" 
                      id="firstName"
                      className={inputClass}
                      placeholder="John"
                    />
                  </div>
                  <div className={halfWidth}>
                    <label htmlFor="lastName" className={labelClass}>Last Name</label>
                    <input 
                      type="text" 
                      id="lastName"
                      className={inputClass}
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className={labelClass}>Email</label>
                  <input 
                    type="email" 
                    id="email"
                    className={inputClass}
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className={labelClass}>Company</label>
                  <input 
                    type="text" 
                    id="company"
                    className={inputClass}
                    placeholder="Your Company"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className={labelClass}>Service Interest</label>
                  <select 
                    id="service"
                    className={selectClass}
                  >
                    <option value="">Select a service</option>
                    <option value="software-development">Custom Software Development</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="cybersecurity">Cybersecurity Solutions</option>
                    <option value="consulting">Technology Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className={labelClass}>Message</label>
                  <textarea 
                    id="message"
                    rows={5}
                    className={`${inputClass} resize-vertical`}
                    placeholder="Tell us about your project..."
                  ></textarea>
                  <p className={noteText}>We'll get back to you within 24 hours</p>
                </div>
                
                <button 
                  type="submit"
                  className="bg-cyan-500 text-white font-semibold px-6 py-4 hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105 w-full"
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