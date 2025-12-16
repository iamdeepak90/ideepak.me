'use client';

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Code, Briefcase, GraduationCap, Award, ChevronRight, Menu, X, ExternalLink, Download, ShoppingCart, Star, Users, TrendingUp, CheckCircle, Zap, Target, Heart, MessageSquare, Send, Clock, Database, Server, SquareDashedTopSolid, Layers, Sparkles, CloudBackup } from 'lucide-react';
import Image from 'next/image';
import deepak from './images/deepak.webp';
import logo from './images/logo.png';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'achievements', 'services', 'testimonials', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const skills = {
    frontend: { items: ['React.js', 'Next.js', 'React Native', 'Vanila JS'], icon: Code },
    backend: { items: ['Node.js', 'PHP', 'Laravel', 'CodeIgniter', 'Express'], icon: Server },
    database: { items: ['PostgreSQL', 'Redis', 'MySQL', 'MariaDB'], icon: Database },
    eCommerce: { items: ['Medusa.js', 'CS-Cart', 'WooCommerce', 'Shopify'], icon: ShoppingCart},
    cms: { items: ['Sanity', 'Shopify', 'WordPress', 'Hygraph'], icon: Layers },
    css: { items: ['Tailwind', 'Bootstap', 'Materialize', 'Bulma'], icon: SquareDashedTopSolid },
    deployment: { items: ['AWS', 'Digital Ocean', 'Vercel', 'Railway', 'Coolify'], icon: CloudBackup },
    others: { items: ['Git', 'Digital Ocean', 'Vercel', 'Railway', 'Coolify'], icon: Briefcase },
  };

  const projects = [
    {
      name: 'Family Leisure',
      url: 'https://familyleisure.com',
      role: 'Senior CS-Cart Developer',
      tech: 'CS-Cart',
      description: 'Optimized product, cart, and checkout experience for a leading eCommerce store.',
      image: '🛒',
      color: 'from-cyan-500 via-blue-500 to-indigo-600'
    },
    {
      name: 'ArabTools',
      url: 'https://arabtools.com',
      role: 'Senior CS-Cart Developer',
      tech: 'CS-Cart',
      description: 'Integrated payment solutions and custom checkout flow for improved conversion rates.',
      image: '🔧',
      color: 'from-orange-500 via-red-500 to-pink-600'
    },
    {
      name: 'IPAA',
      url: 'https://ipaa.org.il',
      role: 'Development Team Lead',
      tech: 'WordPress, WooCommerce, WPML',
      description: 'Developed a custom WooCommerce solution with WPML and Advanced Custom Fields.',
      image: '🌐',
      color: 'from-emerald-500 via-teal-500 to-cyan-600'
    },
    {
      name: 'Mega Trends',
      url: 'https://megatrends.jp',
      role: 'Senior PHP Developer',
      tech: 'Laravel, MySQL',
      description: 'Architected a multilingual Laravel-based eCommerce platform with advanced admin controls.',
      image: '🏪',
      color: 'from-violet-500 via-purple-500 to-fuchsia-600'
    },
    {
      name: 'Wisitech',
      url: 'https://wisitech.com',
      role: 'React Developer',
      tech: 'React.js, Next.js',
      description: 'Migrated WordPress site to Next.js for enhanced performance and SEO.',
      image: '⚡',
      color: 'from-amber-500 via-orange-500 to-red-600'
    },
    {
      name: 'Pilgrim Prayers',
      url: 'https://pilgrimprayers.org',
      role: 'WordPress Developer',
      tech: 'WordPress, WooCommerce',
      description: 'Developed a custom order form and optimized checkout process for better user experience.',
      image: '🙏',
      color: 'from-blue-500 via-indigo-500 to-purple-600'
    }
  ];

  const experience = [
    {
      title: 'Technical Lead',
      company: 'STRYV SOLUTIONS PVT. LTD.',
      period: 'May 2025 – Present',
      achievements: [
        'Developed custom CS-Cart add-ons for high-traffic eCommerce platforms',
        'Reduced page load time by 40%, improving SEO rankings',
        'Integrated multiple payment gateways, reducing checkout failures by 25%',
        'Led multilingual WordPress WooCommerce projects'
      ],
      icon: '💼'
    },
    {
      title: 'Senior PHP Developer',
      company: 'WISITECH INFOSOLUTIONS PVT. LTD.',
      period: 'Feb 2020 – Apr 2025',
      achievements: [
        'Developed custom CS-Cart add-ons for high-traffic eCommerce platforms',
        'Reduced page load time by 40%, improving SEO rankings',
        'Integrated multiple payment gateways, reducing checkout failures by 25%',
        'Led multilingual WordPress WooCommerce projects'
      ],
      icon: '💼'
    },
    {
      title: 'PHP Developer',
      company: 'ALIVENET SOLUTION PVT. LTD.',
      period: 'June 2016 – Feb 2020',
      achievements: [
        'Worked on 15+ PHP-based projects',
        'Specialized in Core PHP, WordPress, CodeIgniter, and Laravel',
        'Built custom features and plugins for high-traffic websites'
      ],
      icon: '💻'
    }
  ];

  const achievements = [
    { icon: Award, number: '50+', label: 'Projects Completed', color: 'text-cyan-400' },
    { icon: Users, number: '30+', label: 'Happy Clients', color: 'text-emerald-400' },
    { icon: Clock, number: '8+', label: 'Years Experience', color: 'text-blue-400' },
    { icon: TrendingUp, number: '40%', label: 'Performance Boost', color: 'text-violet-400' },
    { icon: ShoppingCart, number: '25%', label: 'Checkout Improvement', color: 'text-cyan-400' },
    { icon: CheckCircle, number: '15+', label: 'Technologies Mastered', color: 'text-teal-400' }
  ];

  const services = [
    {
      icon: '🛍️',
      title: 'eCommerce Development',
      description: 'Custom online stores with CS-Cart, WooCommerce, and Laravel. Full-featured shopping experiences with payment integration.',
      features: ['Product Management', 'Payment Integration', 'Custom Checkout', 'Multi-currency Support']
    },
    {
      icon: '🎨',
      title: 'WordPress Development',
      description: 'Custom WordPress themes and plugins with advanced functionality. WPML multilingual support and ACF customization.',
      features: ['Custom Themes', 'Plugin Development', 'WPML Integration', 'Performance Optimization']
    },
    {
      icon: '⚡',
      title: 'Performance Optimization',
      description: 'Speed up your website with caching, query optimization, and best practices. Improve SEO rankings and user experience.',
      features: ['Page Speed Optimization', 'Database Optimization', 'Caching Strategies', 'SEO Enhancement']
    },
    {
      icon: '🔌',
      title: 'API Integration',
      description: 'Seamless integration of payment gateways, shipping APIs, and third-party services. RESTful API development.',
      features: ['Payment Gateways', 'Shipping APIs', 'REST API Development', 'OpenAI Integration']
    },
    {
      icon: '🚀',
      title: 'Custom Development',
      description: 'Laravel and PHP custom applications tailored to your business needs. Scalable and maintainable code architecture.',
      features: ['Laravel Apps', 'Custom Solutions', 'Database Design', 'Scalable Architecture']
    },
    {
      icon: '🛠️',
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance, bug fixes, and feature enhancements. Regular updates and security patches.',
      features: ['Bug Fixes', 'Feature Updates', 'Security Patches', '24/7 Support']
    }
  ];

  const testimonials = [
    {
      name: 'Client from Family Leisure',
      role: 'eCommerce Director',
      text: 'Deepak transformed our CS-Cart store with custom features that significantly improved our checkout process. His expertise in eCommerce is exceptional.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Client from IPAA',
      role: 'Project Manager',
      text: 'Working with Deepak was a pleasure. He led the team effectively and delivered a multilingual WooCommerce platform that exceeded our expectations.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Client from Wisitech',
      role: 'CEO',
      text: 'The migration to Next.js was seamless. Our website performance improved dramatically, and Deepak\'s technical skills are top-notch.',
      rating: 5,
      avatar: '👨‍💻'
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white overflow-x-hidden">
      {/* Cursor Glow Effect */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 80%)`
        }}
      />

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-gray-900/80 backdrop-blur-xl shadow-2xl border-b border-blue-500/20' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div 
              className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent cursor-pointer hover:scale-110 transition-transform"
              onClick={() => scrollToSection('home')}
            >
              <Image src={logo} alt='logo' width={200} />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-1">
              {['home', 'about', 'skills', 'experience', 'projects', 'services', 'testimonials', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize px-5 py-2 hover:cursor-pointer rounded-full text-base font-medium transition-all duration-300 ${
                    activeSection === item 
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-blue-500/20">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {['home', 'about', 'skills', 'experience', 'projects', 'services', 'testimonials', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left px-4 py-3 capitalize rounded-lg text-base font-medium transition-all ${
                    activeSection === item
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                      : 'text-gray-300 hover:bg-gray-800/50'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl top-1/2 left-1/2 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute w-96 h-96 bg-teal-500/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Avatar with Glow */}
          <div className="mb-8 mt-10 flex justify-center">
            <Image src={deepak} className="rounded-full" alt='Deepak K Mishra' width={250} height={250} />
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent leading-tight">DEEPAK K. MISHRA</h1>
          <p className="text-2xl md:text-2xl text-gray-200 mb-6">
            Full Stack Web Developer
          </p>
          <p className="text-xl md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Crafting exceptional eCommerce experiences with 8+ years of expertise in PHP, Laravel, WordPress, and modern web technologies
          </p>
          
          <div className="flex flex-wrap justify-center gap-5 mb-10">
            <button 
              onClick={() => scrollToSection('contact')} 
              className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-10 py-5 rounded-full transition-all transform hover:scale-105 shadow-2xl shadow-blue-500/50 text-lg font-bold"
            >
              <MessageSquare size={24} className="group-hover:rotate-12 transition-transform" />
              Hire Me
            </button>
            <a 
              href="mailto:deepak.win8@gmail.com" 
              className="group flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-10 py-5 rounded-full transition-all transform hover:scale-105 shadow-2xl border border-gray-700 text-lg font-bold"
            >
              <Download size={24} className="group-hover:translate-y-1 transition-transform" />
              Download CV
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-gray-300 text-lg mb-10">
            <a href="mailto:deepak.win8@gmail.com" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <Mail size={22} />
              <span className="hidden sm:inline">deepak.win8@gmail.com</span>
            </a>
            <div className="flex items-center gap-2">
              <Phone size={22} />
              <span>9810717027</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={22} />
              <span>New Delhi, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Passionate developer dedicated to building scalable web solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all">
            {/* Left Column */}
            <div className="flex justify-center">
              <Image className='rounded-[20px]' src={deepak} />
            </div>

            {/* Right Column */}
            <div className="">
              <h3 className="text-3xl font-bold mb-6 text-cyan-400">Who I Am</h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Senior PHP Developer with 8+ years of expertise in CS-Cart, WordPress, WooCommerce, and Laravel. I specialize in developing scalable eCommerce solutions, optimizing performance, and integrating APIs to enhance business growth.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <Zap className="text-cyan-400 mt-1 flex-shrink-0" size={28} />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">50+ Online Stores</h4>
                    <p className="text-gray-400">Built using modern frameworks</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="text-cyan-400 mt-1 flex-shrink-0" size={28} />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">40% Faster</h4>
                    <p className="text-gray-400">Performance optimization</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="text-cyan-400 mt-1 flex-shrink-0" size={28} />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Team Leadership</h4>
                    <p className="text-gray-400">Mentoring & collaboration</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Heart className="text-cyan-400 mt-1 flex-shrink-0" size={28} />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Passionate Learner</h4>
                    <p className="text-gray-400">Always evolving</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="achievements" className="py-16 px-4 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Achievements
            </h2>
            <p className="text-gray-400 text-xl">Numbers that speak for themselves</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-blue-500/20 hover:border-cyan-500/60 transition-all transform hover:scale-110 hover:-translate-y-2 text-center cursor-pointer">
                  <Icon className={`${achievement.color} mx-auto mb-4 group-hover:scale-125 transition-transform`} size={40} />
                  <div className="text-4xl font-extrabold mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-gray-400 font-medium">{achievement.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-gray-400 text-xl">My technical toolkit for building amazing solutions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, data]) => {
              const Icon = data.icon;
              return (
                <div key={category} className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-blue-500/20 hover:border-cyan-500/60 transition-all transform hover:scale-105 hover:-translate-y-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/50 group-hover:scale-110 transition-transform">
                      <Icon size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-cyan-400 capitalize">
                      {category.replace(/([A-Z])/g, ' $1').trim()}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {data.items.map((skill) => (
                      <span key={skill} className="bg-blue-900/30 px-4 py-1 rounded-full text-base border border-blue-500/30 hover:bg-blue-900/50 hover:border-cyan-500/50 transition-all hover:scale-105 font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 px-4 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Work Experience
            </h2>
            <p className="text-gray-400 text-xl">My professional journey</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-cyan-500 to-teal-500 hidden md:block rounded-full"></div>

            <div className="space-y-12">
              {experience.map((job, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-7 top-10 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full border-4 border-gray-900 hidden md:block shadow-lg shadow-blue-500/50"></div>

                  <div className="md:ml-24 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-blue-500/20 hover:border-cyan-500/60 transition-all hover:-translate-y-1">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="text-5xl">{job.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold mb-2">{job.title}</h3>
                        <p className="text-cyan-400 text-xl mb-3">{job.company}</p>
                        <p className="text-gray-400 flex items-center gap-2 text-lg">
                          <Clock size={20} />
                          {job.period}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300 text-lg">
                          <CheckCircle className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-xl">Some of my best work</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-blue-500/20 hover:border-cyan-500/60 transition-all transform hover:scale-105 hover:-translate-y-2">
                {/* Project Header */}
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-7xl relative overflow-hidden`}>
                  <span className="relative z-10 group-hover:scale-125 transition-transform duration-500">{project.image}</span>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all"></div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold">{project.name}</h3>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors hover:scale-125 transform">
                      <ExternalLink size={22} />
                    </a>
                  </div>
                  <p className="text-cyan-400 text-base mb-3 font-semibold">{project.role}</p>
                  <p className="text-gray-400 text-sm mb-4 flex items-center gap-2">
                    <Code size={16} />
                    {project.tech}
                  </p>
                  <p className="text-gray-300 text-base leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-400 text-2xl">
              <span className="text-cyan-400 font-bold">+ 20 more projects</span> completed at Wisitech
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Services I Offer
            </h2>
            <p className="text-gray-400 text-xl">Comprehensive web development solutions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-blue-500/20 hover:border-cyan-500/60 transition-all transform hover:scale-105 hover:-translate-y-2">
                <div className="text-6xl mb-6 group-hover:scale-125 transition-transform">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">{service.title}</h3>
                <p className="text-gray-300 text-base mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-400 text-base">
                      <ChevronRight className="text-cyan-400 flex-shrink-0" size={18} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Client Testimonials
            </h2>
            <p className="text-gray-400 text-xl">What clients say about my work</p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-12 md:p-16 shadow-2xl border border-blue-500/20 hover:border-cyan-500/40 transition-all">
              {/* Quote Icon */}
              <div className="text-7xl text-cyan-400 mb-6">"</div>
              
              {/* Testimonial Content */}
              <p className="text-2xl text-gray-300 mb-8 italic leading-relaxed">
                {testimonials[activeTestimonial].text}
              </p>

              {/* Rating */}
              <div className="flex gap-2 mb-8">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="text-amber-400 fill-amber-400" size={24} />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-4xl shadow-lg shadow-blue-500/50">
                  {testimonials[activeTestimonial].avatar}
                </div>
                <div>
                  <h4 className="font-bold text-xl">{testimonials[activeTestimonial].name}</h4>
                  <p className="text-gray-400 text-lg">{testimonials[activeTestimonial].role}</p>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-10">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-3 rounded-full transition-all ${
                    index === activeTestimonial 
                      ? 'bg-cyan-400 w-12 shadow-lg shadow-cyan-500/50' 
                      : 'bg-gray-600 w-3 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-4 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Education
            </h2>
            <p className="text-gray-400 text-xl">Academic background</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-blue-500/20 hover:border-cyan-500/40 transition-all">
            <div className="flex items-start gap-8">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/50">
                <GraduationCap size={48} />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-3">Bachelor in Computer Applications (BCA)</h3>
                <p className="text-cyan-400 text-xl mb-3">IGNOU – New Delhi</p>
                <p className="text-gray-400 flex items-center gap-2 text-lg">
                  <Clock size={20} />
                  Graduated: July 2010
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-gray-400 text-xl">Let's discuss your next project</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-blue-500/20">
                <h3 className="text-2xl font-bold mb-6 text-cyan-400">Contact Information</h3>
                
                <div className="space-y-5">
                  <a href="mailto:deepak.win8@gmail.com" className="flex items-center gap-5 p-5 bg-gray-700/30 rounded-2xl hover:bg-gray-700/50 transition-all group">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/50">
                      <Mail size={28} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-base">Email</p>
                      <p className="font-semibold text-lg">deepak.win8@gmail.com</p>
                    </div>
                  </a>

                  <a href="tel:9810717027" className="flex items-center gap-5 p-5 bg-gray-700/30 rounded-2xl hover:bg-gray-700/50 transition-all group">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/50">
                      <Phone size={28} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-base">Phone</p>
                      <p className="font-semibold text-lg">+91 9810717027</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-5 p-5 bg-gray-700/30 rounded-2xl">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-base">Location</p>
                      <p className="font-semibold text-lg">New Delhi, India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-blue-500/20">
                  <p className="text-gray-400 mb-5 text-lg">Follow me on social media</p>
                  <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/mail2dk/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-xl flex items-center justify-center transition-all transform hover:scale-110 shadow-lg shadow-blue-500/50">
                      <Linkedin size={28} />
                    </a>
                    <a href="https://github.com/mail2dk" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-gray-700 hover:bg-gray-600 rounded-xl flex items-center justify-center transition-all transform hover:scale-110 shadow-lg">
                      <Github size={28} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-blue-500/20">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-base font-semibold mb-3">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full px-5 py-4 bg-gray-700/30 border border-blue-500/20 rounded-xl focus:outline-none focus:border-cyan-500 transition-colors text-base"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-base font-semibold mb-3">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="w-full px-5 py-4 bg-gray-700/30 border border-blue-500/20 rounded-xl focus:outline-none focus:border-cyan-500 transition-colors text-base"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-base font-semibold mb-3">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                    rows="5"
                    className="w-full px-5 py-4 bg-gray-700/30 border border-blue-500/20 rounded-xl focus:outline-none focus:border-cyan-500 transition-colors resize-none text-base"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/50 flex items-center justify-center gap-3 text-lg"
                >
                  <Send size={24} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-blue-500/20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-lg">© 2024 Deepak Mishra. All rights reserved.</p>
              <p className="text-base text-gray-500">Senior Full Stack Developer | eCommerce & Web Solutions Expert</p>
            </div>
            <div className="flex gap-5">
              <a href="https://www.linkedin.com/in/mail2dk/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110">
                <Linkedin size={28} />
              </a>
              <a href="https://github.com/mail2dk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110">
                <Github size={28} />
              </a>
              <a href="mailto:deepak.win8@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110">
                <Mail size={28} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}