import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaDownload, FaBriefcase } from 'react-icons/fa';
import { FaBullhorn } from 'react-icons/fa6';
import { SiJavascript, SiReact, SiNextdotjs, SiMongodb, SiPython, SiLaravel, SiMysql } from 'react-icons/si';
import FloatingShapes from './components/FloatingShapes';
import CustomCursor from './components/CustomCursor';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Floating Shapes Background */}
      <FloatingShapes />
      
      {/* Header/Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-dark-navy/80 to-transparent py-4 px-4 md:px-6 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl font-bold gradient-text"
          >
            faizan.dev
          </motion.div>
          
          <nav className="hidden md:flex space-x-1">
            {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <motion.button
                key={item}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
              >
                {item}
              </motion.button>
            ))}
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <span className="gradient-text typing-text">faizan</span>
              </motion.h1>
              
              <motion.h2 
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-6 text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                MERN Stack Developer & Prompt Engineer
              </motion.h2>
              
              <motion.p 
                className="text-base md:text-lg text-gray-400 mb-6 md:mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Son of Muhammad Fazal • Crafting next-generation experiences with modern technologies
              </motion.p>
              
              <motion.p 
                className="text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto text-base md:text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                I am a Prompt Engineer who loves to analyze designs and applications with AI — transforming ideas into intelligent solutions.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(45,241,181,0.8)" }}
                  whileTap={{ scale: 0.95 }}
                  className="neon-button-primary flex items-center justify-center gap-2 text-base md:text-lg"
                >
                  <FaBriefcase /> Hire My Work
                </motion.button>
                <motion.a
                  href="https://drive.google.com/uc?export=download&id=1DMk-JL61K65_eavWnKETE_qeny9XLsTR"
                  download
                  whileHover={{ scale: 1.05, borderColor: "#2df1b5" }}
                  whileTap={{ scale: 0.95 }}
                  className="neon-button-secondary flex items-center justify-center gap-2 text-base md:text-lg"
                >
                  <FaDownload /> Download CV
                </motion.a>
              </motion.div>

              <motion.div 
                className="mt-10 flex flex-wrap items-center justify-center gap-5 md:gap-8 text-3xl md:text-4xl text-white/80"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {[
                  { Icon: SiJavascript, color: '#f7df1e' },
                  { Icon: SiReact, color: '#61dafb' },
                  { Icon: SiNextdotjs, color: '#ffffff' },
                  { Icon: SiMongodb, color: '#4db33d' },
                  { Icon: SiPython, color: '#ffde57' },
                  { Icon: SiLaravel, color: '#ff2d20' },
                  { Icon: SiMysql, color: '#4479a1' },
                  { Icon: FaBullhorn, color: '#2df1b5' }
                ].map(({ Icon, color }, idx) => (
                  <motion.div
                    key={idx}
                    className="p-3 md:p-4 rounded-full bg-white/5 border border-white/10"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3 + idx, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Icon style={{ color }} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-20 md:py-32 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="section-title text-center mb-12 md:mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              About Me
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-gray-300 mb-6 text-base md:text-lg leading-relaxed">
                  I'm Faizan, a passionate MERN Stack Developer with a drive for creating innovative web solutions. As the son of Muhammad Fazal, I've inherited values of dedication and continuous improvement. I specialize in transforming ideas into functional realities, user-friendly experiences that meet real-world problems.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
              >
                {[
                  { title: "Frontend Expert", desc: "Creating responsive user interfaces with modern UI frameworks." },
                  { title: "Backend Developer", desc: "Building robust APIs and backend systems using Node.js & Express." },
                  { title: "Database Management", desc: "Managing and optimizing MongoDB databases for peak performance." }
                ].map((item, idx) => (
                  <motion.div 
                    key={item.title}
                    className="glass-card-hover p-6 md:p-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <h3 className="text-lg md:text-xl font-semibold mb-3 text-neon-green">{item.title}</h3>
                    <p className="text-gray-300 text-sm md:text-base">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technical Expertise Section */}
        <section id="skills" className="py-20 md:py-32 px-4 md:px-6 bg-gradient-to-b from-transparent via-black/10 to-transparent">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="section-title text-center mb-12 md:mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Technical Expertise
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-neon-green">Frontend Development</h3>
                <div className="flex flex-wrap gap-3">
                  {['React', 'Next.js', 'Tailwind', 'Redux'].map((skill, idx) => (
                    <motion.span 
                      key={skill} 
                      className="skill-pill"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-neon-green">Backend Development</h3>
                <div className="flex flex-wrap gap-3">
                  {['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Python', 'Laravel'].map((skill, idx) => (
                    <motion.span 
                      key={skill} 
                      className="skill-pill"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="mt-12 md:mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="neon-button-secondary text-base md:text-lg"
              >
                See More →
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="py-20 md:py-32 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="section-title text-center mb-12 md:mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Featured Projects
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: "Video Calling App",
                  desc: "Real-time video calling built with WebRTC & Socket.IO offering seamless peer-to-peer communication.",
                  codeLink: "https://github.com/feziidev2/video-calling-app"
                },
                {
                  title: "Mern E-commerce",
                  desc: "A full e-commerce web app built using MongoDB, Express, React, Node with secure login & admin panel.",
                  codeLink: "https://github.com/feziidev2/Mern-Ecommerce2"
                },
                {
                  title: "Blog Site",
                  desc: "A modern blog platform with markdown support, rich editor, and SEO-optimized content management.",
                  codeLink: "https://github.com/feziidev2"
                },
                {
                  title: "AI Resume",
                  desc: "AI-powered resume builder with GPT and Claude integration, offering smart suggestions, professional templates, and real-time content optimization.",
                  codeLink: "https://github.com/feziidev2"
                }
              ].map((project, idx) => (
                <motion.div
                  key={project.title}
                  className="glass-card-hover overflow-hidden group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="p-6 md:p-8 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <h3 className="text-xl md:text-2xl font-semibold mb-4 text-neon-green">{project.title}</h3>
                      <p className="text-gray-300 mb-6 text-sm md:text-base leading-relaxed">
                        {project.desc}
                      </p>
                      <div className="flex gap-3 flex-wrap">
                        <motion.button 
                          className="neon-button-secondary text-sm md:text-base px-4 md:px-6 py-2 md:py-3"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Demo
                        </motion.button>
                        {project.codeLink ? (
                          <motion.a 
                            href={project.codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="neon-button-secondary text-sm md:text-base px-4 md:px-6 py-2 md:py-3"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            View Code
                          </motion.a>
                        ) : (
                          <motion.button 
                            className="neon-button-secondary text-sm md:text-base px-4 md:px-6 py-2 md:py-3"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            View Code
                          </motion.button>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 md:py-32 px-4 md:px-6 bg-gradient-to-b from-transparent via-black/10 to-transparent">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="section-title text-center mb-12 md:mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Experience
            </motion.h2>
            
            <div className="grid gap-8">
              <motion.div
                className="glass-card-hover max-w-3xl mx-auto p-6 md:p-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-4">
                  <h3 className="text-xl md:text-2xl font-semibold">MERN Stack Developer</h3>
                  <span className="text-neon-green font-medium text-sm md:text-base">Tech Solutions Ltd</span>
                </div>
                <p className="text-gray-400 mb-6 text-sm md:text-base">2022 – Present</p>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Delivering full-stack web applications using MERN Stack, implementing innovative UI design, optimizing performance, and leading digital marketing initiatives that boost product visibility.
                </p>
              </motion.div>

              <motion.div
                className="glass-card-hover max-w-3xl mx-auto p-6 md:p-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-4">
                  <h3 className="text-xl md:text-2xl font-semibold">Digital Marketing Specialist</h3>
                  <span className="text-neon-green font-medium text-sm md:text-base">Growth Dynamics</span>
                </div>
                <p className="text-gray-400 mb-6 text-sm md:text-base">2020 – 2022</p>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Orchestrated SEO, content, and performance marketing campaigns that increased qualified leads by 45% while aligning analytics insights with product strategy.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Career Highlights Section */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.h2 
              className="section-title text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Career Highlights
            </motion.h2>

            <motion.div
              className="glass-card-hover p-6 md:p-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-neon-green mb-4">Why Teams Trust Me</h3>
                  <ul className="space-y-3 text-gray-300 text-sm md:text-base list-disc list-inside">
                    <li>Hybrid expertise across MERN, AI-driven prompt engineering, and digital marketing funnels.</li>
                    <li>Hands-on leadership guiding cross-functional squads from concept to launch.</li>
                    <li>Data-informed decision making that ties UX, performance, and growth metrics together.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neon-green mb-4">Next Career Focus</h3>
                  <ul className="space-y-3 text-gray-300 text-sm md:text-base list-disc list-inside">
                    <li>Building AI-powered SaaS dashboards that blend analytics, automation, and storytelling.</li>
                    <li>Scaling digital experiences with seamless animations and personalized user journeys.</li>
                    <li>Mentoring teams on prompt engineering best practices and growth experimentation.</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 md:py-32 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="section-title text-center mb-12 md:mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Services I Offer
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                { title: "Full-Stack Web Development", desc: "Complete MERN stack apps built with modern UI/UX design and robust backend systems." },
                { title: "Modern UI Design", desc: "Fast & Scalable interfaces with smooth performance and engaging user experiences." },
                { title: "MongoDB Expertise", desc: "Database design, optimization, and management for scalable applications." },
                { title: "Digital Marketing", desc: "Data-driven marketing strategies, SEO, and content systems that amplify product reach." }
              ].map((service, idx) => (
                <motion.div
                  key={service.title}
                  className="glass-card-hover p-6 md:p-8 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <h3 className="text-lg md:text-xl font-semibold mb-4 text-neon-green">{service.title}</h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements & Stats Section */}
        <section className="py-20 md:py-32 px-4 md:px-6 bg-gradient-to-b from-transparent via-black/10 to-transparent">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="section-title text-center mb-12 md:mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Achievements & Stats
            </motion.h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { value: '50+', label: 'Projects Completed' },
                { value: '30+', label: 'Happy Clients' },
                { value: '2000+', label: 'Hours Worked' },
                { value: '5', label: 'Awards Received' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="glass-card p-4 md:p-8 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(45,241,181,0.3)" }}
                >
                  <div className="text-3xl md:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="section-title text-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Let's Work Together
            </motion.h2>
            
            <motion.p 
              className="text-gray-400 text-center mb-12 md:mb-20 max-w-2xl mx-auto text-base md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Ready to bring your ideas to life! I'm always open to discussing new opportunities and exciting projects.
            </motion.p>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-8 md:mb-12">
                  <h3 className="text-lg md:text-xl font-semibold mb-4 text-neon-green">Contact Information</h3>
                  <div className="space-y-4">
                    <motion.p 
                      className="flex items-center gap-3 text-sm md:text-base"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-neon-green text-lg">📧</span>
                      <span className="text-gray-300">faizanfezii7@gmail.com</span>
                    </motion.p>
                    <motion.p 
                      className="flex items-center gap-3 text-sm md:text-base"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-neon-green text-lg">📍</span>
                      <span className="text-gray-300">Karachi, Pakistan</span>
                    </motion.p>
                    <motion.p 
                      className="flex items-center gap-3 text-sm md:text-base"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-neon-green text-lg">📞</span>
                      <span className="text-gray-300">+92 331 7644884</span>
                    </motion.p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-4 text-neon-green">Connect with me</h3>
                  <div className="flex gap-4">
                    {[
                      { icon: FaGithub, label: "GitHub", href: "https://github.com/feziidev2" },
                      { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/faizan-devr/" },
                      { icon: FaFacebook, label: "Facebook" }
                    ].map((social) => (
                      <motion.a 
                        key={social.label}
                        href={social.href || "#"} 
                        className="neon-button-secondary p-3 md:p-4"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        title={social.label}
                      >
                        <social.icon size={20} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <form className="glass-card-hover p-6 md:p-8">
                  <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-gray-300 text-sm md:text-base font-medium">Name</label>
                    <motion.input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-neon-green transition-all text-sm md:text-base"
                      placeholder="Your name"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-gray-300 text-sm md:text-base font-medium">Email</label>
                    <motion.input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-neon-green transition-all text-sm md:text-base"
                      placeholder="your.email@example.com"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 text-gray-300 text-sm md:text-base font-medium">Message</label>
                    <motion.textarea 
                      id="message" 
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-neon-green transition-all text-sm md:text-base resize-none"
                      placeholder="Your message here..."
                      whileFocus={{ scale: 1.02 }}
                    ></motion.textarea>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(45,241,181,0.8)" }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="neon-button-primary w-full text-base md:text-lg"
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 md:py-12 px-4 md:px-6 border-t border-white/10 bg-gradient-to-t from-dark-navy/50 to-transparent">
        <div className="max-w-6xl mx-auto text-center">
          <motion.p 
            className="text-gray-400 text-sm md:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            © 2024 Faizan • MERN Stack Developer • Built with ❤️ and hard work
          </motion.p>
        </div>
      </footer>
    </div>
  );
}

export default App;