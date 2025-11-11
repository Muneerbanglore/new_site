import { useState, useEffect } from 'react';
import { ChevronRight, ArrowRight, Star, Building2, TrendingUp, Users, CheckCircle, Globe, Zap, Play, MapPin, Phone, Mail, FileText, DollarSign, Clock, Shield, Lightbulb } from 'lucide-react';
import vedio1 from '../images/city.mp4'
import logo from '../images/logo.png'
import companyformtion from '../images/trade-licence.png'
import dubaiCompany from '../images/business-setup.png'
import sharjah from '../images/free-zone.png'
import background from '../images/back1.png'

export default function MakeYourBrand() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-transparent  border-b border-red-600/20">
        <div className="max-w-7xl mx-auto px-2 py-2 flex justify-between items-center">
          <div className="text-3xl font-black bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
            <img src={logo} alt="MakeYourBrand Logo" className="h-40 w-40 rounded-md inline-block "/>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#services" className="hover:text-red-500 transition">Services</a>
            <a href="#packages" className="hover:text-red-500 transition">Packages</a>
            <a href="#about" className="hover:text-red-500 transition">About</a>
            <a href="#contact" className="hover:text-red-500 transition">Contact</a>
            <button className="px-6 py-2 bg-gradient-to-r from-red-600 to-red-500 rounded-full font-semibold hover:shadow-lg hover:shadow-red-600/50 transition transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{filter: 'brightness(0.4) saturate(1.2)'}}
          >
            <source
              src={vedio1}
              type="video/mp4"
            />
          </video>
        
        
        </div>

        {/* Animated buildings */}
        <div className="absolute inset-0 overflow-hidden opacity-40">
          <div className="absolute left-0 bottom-0 w-64 h-96 bg-gradient-to-t from-red-600 to-transparent rounded-t-3xl" style={{animation: `slideInLeft 8s ease-in-out infinite`}}>
            <div className="w-full h-full grid grid-cols-3 gap-2 p-4">
              {[...Array(9)].map((_, i) => <div key={i} className="bg-red-500/40 rounded animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>)}
            </div>
          </div>
          <div className="absolute left-1/2 bottom-0 w-80 h-full bg-gradient-to-t from-red-700 to-transparent rounded-t-3xl transform -translate-x-1/2" style={{animation: `slideInUp 10s ease-in-out infinite`}}>
            <div className="w-full h-full grid grid-cols-4 gap-2 p-5">
              {[...Array(20)].map((_, i) => <div key={i} className="bg-red-500/50 rounded animate-pulse" style={{animationDelay: `${i * 0.08}s`}}></div>)}
            </div>
          </div>
          <div className="absolute right-0 bottom-0 w-72 h-80 bg-gradient-to-t from-red-500 to-transparent rounded-t-3xl" style={{animation: `slideInRight 8s ease-in-out infinite`, animationDelay: '0.5s'}}>
            <div className="w-full h-full grid grid-cols-3 gap-2 p-4">
              {[...Array(12)].map((_, i) => <div key={i} className="bg-red-400/40 rounded animate-pulse" style={{animationDelay: `${i * 0.12}s`}}></div>)}
            </div>
          </div>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-red-600/25 rounded-full blur-3xl top-20 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-red-500/20 rounded-full blur-3xl bottom-20 -right-48 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="inline-block mb-8 px-5 py-3 rounded-full border border-red-600/60 bg-red-600/20 backdrop-blur-sm animate-fade-in hover:bg-red-600/30 transition">
            <span className="text-red-300 flex items-center gap-2 font-semibold">
              <Zap size={18} /> #1 Business Setup Consultants in Dubai
            </span>
          </div>

          <h1 className="text-7xl md:text-4xl lg:text-4xl font-black mb-8 leading-tight">
            <span className="block text-white animate-fade-in font-raleway" style={{animationDelay: '0.1s'}}>Build Your</span>
            <span className="block bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent animate-fade-in text-8xl md:text-7xl" style={{animationDelay: '0.2s'}}>Brand Empire</span>
            <span className="block text-white animate-fade-in font-raleway" style={{animationDelay: '0.3s'}}>in Dubai</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.4s'}}>
            Transform your entrepreneurial vision into a thriving business. Expert consultants guiding you through every step—from company formation to market dominance.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-20 animate-fade-in" style={{animationDelay: '0.5s'}}>
            <button className="px-10 py-5 bg-gradient-to-r from-red-600 to-red-500 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-red-600/50 transition transform hover:scale-105 flex items-center justify-center gap-2 group">
              Start Your Journey <ArrowRight size={22} className="group-hover:translate-x-1 transition" />
            </button>
            <button className="px-10 py-5 border-2 border-red-500 rounded-full font-bold text-lg hover:bg-red-500/10 transition transform hover:scale-105 flex items-center justify-center gap-2">
              <Play size={20} /> Watch Demo
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-8 mb-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
            {[
              { value: '500+', label: 'Businesses Launched', color: 'from-red-600 to-red-500' },
              { value: '98%', label: 'Success Rate', color: 'from-red-500 to-red-400' },
              { value: '15+', label: 'Years Excellence', color: 'from-red-700 to-red-600' }
            ].map((stat, i) => (
              <div key={i} className={`p-6 md:p-8 rounded-2xl bg-gradient-to-br ${stat.color} opacity-15 border border-white/30 backdrop-blur-md hover:opacity-25 transition transform hover:scale-110 group cursor-pointer`}>
                <div className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition`}>
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-200 mt-2 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-gray-400">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-red-500 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-red-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
     

      {/* Services Section */}
      <section id="services" className="py-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <img 
            src={background} 
            alt="Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-white/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-red-50 to-red-100 text-red-600 rounded-full text-sm font-semibold mb-6 tracking-wider border border-red-100 shadow-sm">
              OUR SERVICES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-raleway mb-4">
              Comprehensive <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-gary-500 text-lg max-w-2xl mx-auto">
              Tailored services designed for Dubai's dynamic business landscape
            </p>
          </div>

          <div className="space-y-24">
            {/* Service 1 */}
            <div className="flex flex-col md:flex-row items-center gap-12  ">
              <div className="w-full md:w-1/2 relative group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src={companyformtion} 
                    alt="Mainland Company Formation" 
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105 border-2 border-white shadow-2xl"
                  />
                 
                </div>
                <div className="absolute -z-10 -inset-4 rounded-3xl bg-gradient-to-br from-red-600 to-red-500 opacity-10 transform group-hover:opacity-20 transition-all duration-500"></div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-16 h-1.5 bg-gradient-to-r from-red-600 to-red-500 mb-6"></div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Trade Licence Formation </h3>
                <p className="text-gray-500 mb-2 leading-relaxed">
                  Establish your business in the UAE mainland with full market access and local sponsorship. 
                  Our experts guide you through the entire process, ensuring compliance with all regulations.
                </p>
                <ul className="space-y-3 mb-8">
                  {['100% foreign ownership in specific sectors', 'No restrictions on business activities', 'Direct access to local markets', 'Option for office or flexi-desk'].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="flex-shrink-0 w-5 h-5 text-red-500 mt-0.5 mr-3" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r from-red-600 to-red-500 hover:shadow-lg hover:shadow-red-500/30 transition-all flex items-center group">
                  Learn More
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="w-full  md:w-1/2 relative group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src={dubaiCompany} // Replace with your freezone image
                    alt="Freezone Setup" 
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                
                </div>
                <div className="absolute -z-10 -inset-4 rounded-3xl bg-gradient-to-br from-blue-600 to-blue-500 opacity-10 transform group-hover:opacity-20 transition-all duration-500"></div>
              </div>
              <div className="w-full md:w-1/2 md:pr-12">
                <div className="w-16 h-1.5 bg-gradient-to-r from-blue-600 to-blue-500 mb-6"></div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Business Set-up</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Set up your business in one of UAE's many free zones with 100% foreign ownership, 
                  tax benefits, and full repatriation of profits.
                </p>
                <ul className="space-y-3 mb-8">
                  {['100% foreign ownership', 'Tax exemptions', 'Full profit repatriation', 'No currency restrictions'].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="flex-shrink-0 w-5 h-5 text-blue-500 mt-0.5 mr-3" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center group">
                  Learn More
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>


             {/* Service 3 */}
             <div className="flex flex-col md:flex-row items-center gap-12  ">
              <div className="w-full md:w-1/2 relative group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src={sharjah} 
                    alt="Mainland Company Formation" 
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105 border-2 border-white shadow-2xl"
                  />
                 
                </div>
                <div className="absolute -z-10 -inset-4 rounded-3xl bg-gradient-to-br from-red-600 to-red-500 opacity-10 transform group-hover:opacity-20 transition-all duration-500"></div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-16 h-1.5 bg-gradient-to-r from-red-600 to-red-500 mb-6"></div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Freezone Company Formation</h3>
                <p className="text-gray-500 mb-2 leading-relaxed">
                  Establish your business in the UAE mainland with full market access and local sponsorship. 
                  Our experts guide you through the entire process, ensuring compliance with all regulations.
                </p>
                <ul className="space-y-3 mb-8">
                  {['100% foreign ownership in specific sectors', 'No restrictions on business activities', 'Direct access to local markets', 'Option for office or flexi-desk'].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="flex-shrink-0 w-5 h-5 text-red-500 mt-0.5 mr-3" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r from-red-600 to-red-500 hover:shadow-lg hover:shadow-red-500/30 transition-all flex items-center group">
                  Learn More
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Add more services following the same pattern */}
          </div>
        </div>
      </section>

      {/* Additional Services - Card Style */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-6 tracking-wider border border-blue-100 shadow-sm">
              MORE SERVICES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-raleway mb-4">
              Expand Your <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Business Horizons</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover additional services to support and grow your business in the UAE
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="h-48 bg-gradient-to-r from-blue-50 to-blue-100 p-6 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <Building2 className="w-12 h-12 text-blue-600" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Visa Services</h3>
                <p className="text-gray-600 mb-6">
                  Streamlined visa processing for you and your employees with end-to-end support.
                </p>
                <ul className="space-y-2 mb-6">
                  {['Employment Visa', 'Investor Visa', 'Family Sponsorship', 'Medical Test Assistance'].map((item, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 px-6 text-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all">
                  Explore Visa Options
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="h-48 bg-gradient-to-r from-green-50 to-green-100 p-6 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <FileText className="w-12 h-12 text-green-600" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Accounting Services</h3>
                <p className="text-gray-600 mb-6">
                  Professional accounting and bookkeeping services to keep your business financially healthy.
                </p>
                <ul className="space-y-2 mb-6">
                  {['Bookkeeping', 'VAT Filing', 'Financial Reporting', 'Audit Support'].map((item, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 px-6 text-center rounded-lg bg-gradient-to-r from-green-600 to-green-500 text-white font-medium hover:shadow-lg hover:shadow-green-500/30 transition-all">
                  Get Accounting Help
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="h-48 bg-gradient-to-r from-purple-50 to-purple-100 p-6 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <Shield className="w-12 h-12 text-purple-600" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Legal Consultancy</h3>
                <p className="text-gray-600 mb-6">
                  Expert legal advice and support for all your business needs in the UAE.
                </p>
                <ul className="space-y-2 mb-6">
                  {['Contract Drafting', 'Legal Compliance', 'Dispute Resolution', 'IP Protection'].map((item, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 px-6 text-center rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all">
                  Get Legal Advice
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section id="packages" className="py-24 relative bg-gradient-to-b from-black to-red-900/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-center">
            Affordable <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">Pricing Plans</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg max-w-2xl mx-auto">
            Flexible packages designed for startups, SMEs, and enterprises
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Startup', price: '19,999 AED', desc: 'Perfect for solo entrepreneurs', features: ['Trade License', 'Memorandum of Association', 'Virtual Office', 'Establishment Card', 'Email Support'] },
              { title: 'Professional', price: '35,999 AED', desc: 'Ideal for small businesses', features: ['All Startup Features', 'PRO Services', 'Bank Account Assistance', 'VAT Registration', '24/7 Support', 'Dedicated Manager'], highlight: true },
              { title: 'Enterprise', price: 'Custom', desc: 'For large corporations', features: ['All Features', 'Multiple Visas', 'Accounting Support', 'Legal Compliance', 'Priority Support', 'Consultation'] }
            ].map((plan, i) => (
              <div key={i} className={`rounded-3xl backdrop-blur p-8 border-2 transition transform hover:scale-105 ${plan.highlight ? 'bg-gradient-to-br from-red-600/30 to-red-500/20 border-red-500 shadow-2xl shadow-red-600/50' : 'bg-red-600/10 border-red-600/40 hover:border-red-500'}`}>
                <h3 className="text-2xl font-black mb-2">{plan.title}</h3>
                <div className="text-4xl font-black bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent mb-2">{plan.price}</div>
                <p className="text-gray-400 mb-6">{plan.desc}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex gap-3 items-start">
                      <CheckCircle size={20} className="text-red-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-bold transition transform hover:scale-105 ${plan.highlight ? 'bg-gradient-to-r from-red-600 to-red-500 hover:shadow-lg hover:shadow-red-600/50' : 'border-2 border-red-500 hover:bg-red-500/10'}`}>
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-center">
            Simple <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">Setup Process</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg max-w-2xl mx-auto">
            Complete your business setup in just 1-3 weeks
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Consultation', desc: 'Discuss your business idea & needs', icon: Lightbulb },
              { step: '02', title: 'Documentation', desc: 'Prepare all required documents', icon: FileText },
              { step: '03', title: 'Registration', desc: 'Complete business registration', icon: CheckCircle },
              { step: '04', title: 'Launch', desc: 'Get your trade license & start trading', icon: Zap }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="bg-gradient-to-br from-red-600/20 to-red-500/10 rounded-2xl p-8 border border-red-500/40 hover:border-red-500 transition">
                  <div className="text-5xl font-black bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
                {i < 3 && <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                  <div className="w-6 h-6 rounded-full bg-red-600 border-4 border-black"></div>
                </div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-b from-black to-red-900/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black mb-16 text-center">
            Why Choose <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">MakeYourBrand</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              {[
                { icon: Clock, text: 'Fast Setup: Complete in 1-3 weeks' },
                { icon: DollarSign, text: 'Affordable: Packages from AED 19,999' },
                { icon: Users, text: '24/7 Dedicated Support with <30min response' },
                { icon: Globe, text: 'Multilingual Team serving global clients' },
                { icon: Shield, text: 'Compliance & Legal Guidance included' },
                { icon: TrendingUp, text: '99% Client Satisfaction Rate' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start animate-fade-in" style={{animationDelay: `${i * 0.1}s`}}>
                  <item.icon className="w-7 h-7 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-200">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 rounded-3xl blur-3xl opacity-40"></div>
              <div className="relative bg-gradient-to-br from-red-600/30 to-red-500/20 p-12 rounded-3xl border-2 border-red-600/60 backdrop-blur-xl">
                <h3 className="text-3xl font-black mb-6">Client Success</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Businesses Launched</span>
                      <span className="text-red-500 font-bold">500+</span>
                    </div>
                    <div className="w-full bg-red-900/30 rounded-full h-2">
                      <div className="bg-gradient-to-r from-red-600 to-red-500 h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Client Satisfaction</span>
                      <span className="text-red-500 font-bold">99%</span>
                    </div>
                    <div className="w-full bg-red-900/30 rounded-full h-2">
                      <div className="bg-gradient-to-r from-red-600 to-red-500 h-2 rounded-full" style={{width: '99%'}}></div>
                    </div>
                  </div>
                  <div className="flex gap-1 pt-4">
                    {[...Array(5)].map((_, i) => <Star key={i} size={24} className="fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-gray-300">Based on 200+ verified client reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black mb-16 text-center">
            Frequently Asked <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">Questions</span>
          </h2>

          <div className="space-y-4">
            {[
              { q: 'What is the cost of business setup in Dubai?', a: 'Mainland setup starts from AED 19,999. Freezone setup ranges from AED 5,999-12,999. Prices vary based on business type and structure.' },
              { q: 'How long does business setup take?', a: 'Typically 1-3 weeks for mainland, faster for freezone. We can register online business setup in 15 minutes.' },
              { q: 'What documents do I need?', a: 'Passport copies, No Objection Certificate (NOC), business plan, Memorandum of Association (MOA), and proof of office address.' },
              { q: 'Do I need a local partner?', a: 'Not required for freezone companies (100% ownership). Mainland may require a local sponsor depending on business activity.' },
              { q: 'What is the Emiratization requirement?', a: 'Private sector companies must include around 2% Emirati workers. We help ensure compliance with all regulations.' }
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-r from-red-600/15 to-red-500/10 rounded-2xl p-6 border border-red-500/30 hover:border-red-500 transition">
                <h3 className="text-lg font-bold mb-3 text-red-400">{item.q}</h3>
                <p className="text-gray-300">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-24 bg-gradient-to-b from-black to-red-900/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black mb-16 text-center">
            Our <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">Offices</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'Business Village', address: 'Office G08, Business Village, Near Deira Clock Tower, Dubai', phone: '+971-4-XXXX-XXXX', email: 'hello@makeyourbrand.ae' },
              { name: 'Al Qusais', address: 'Office#1, Al Hilal Bank Building, Near Al Twar Center, Dubai', phone: '+971-4-XXXX-XXXX', email: 'support@makeyourbrand.ae' },
              { name: 'Sheikh Zayed Rd', address: 'Aspin Commercial Tower - 1103, Sheikh Zayed Rd, Dubai', phone: '+971-4-XXXX-XXXX', email: 'info@makeyourbrand.ae' },
              { name: 'Al Nahda', address: 'Al Nahda Centre, 10th St, Al Qusais, Dubai', phone: '+971-4-XXXX-XXXX', email: 'service@makeyourbrand.ae' }
            ].map((office, i) => (
              <div key={i} className="bg-gradient-to-br from-red-600/15 to-red-500/10 rounded-2xl p-8 border border-red-500/40 hover:border-red-500 transition">
                <h3 className="text-2xl font-bold mb-4 text-red-400">{office.name}</h3>
                <div className="space-y-3">
                  <div className="flex gap-3 items-start">
                    <MapPin size={20} className="text-red-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">{office.address}</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Phone size={20} className="text-red-500" />
                    <a href={`tel:${office.phone}`} className="text-red-400 hover:text-red-300">{office.phone}</a>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Mail size={20} className="text-red-500" />
                    <a href={`mailto:${office.email}`} className="text-red-400 hover:text-red-300">{office.email}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-red-500/10 opacity-50"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            Ready to Build Your <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">Business</span>
            <span className="block mt-2">in Dubai?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Schedule a free consultation with our experts and discover how we can transform your vision into a thriving enterprise. Response within 30 minutes guaranteed.
          </p>
          <button className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-500 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-red-600/50 transition transform hover:scale-105 inline-flex items-center gap-3 group">
            Schedule Free Consultation <ArrowRight size={28} className="group-hover:translate-x-1 transition" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-red-600/20 py-16 px-6 bg-black/50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-red-500 font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-red-500">Mainland Setup</a></li>
              <li><a href="#" className="hover:text-red-500">Freezone Setup</a></li>
              <li><a href="#" className="hover:text-red-500">PRO Services</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-red-500 font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-red-500">About Us</a></li>
              <li><a href="#" className="hover:text-red-500">Blog</a></li>
              <li><a href="#" className="hover:text-red-500">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-red-500 font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-red-500">Privacy</a></li>
              <li><a href="#" className="hover:text-red-500">Terms</a></li>
              <li><a href="#" className="hover:text-red-500">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-red-500 font-bold mb-4">Follow Us</h4>
            <p className="text-gray-400 text-sm">Connect with us on social media</p>
          </div>
        </div>
        <div className="border-t border-red-600/20 pt-8 text-center text-gray-400">
          <p className="mb-2 font-semibold">© 2025 MakeYourBrand. All rights reserved.</p>
          <p className="text-sm">Your #1 Business Setup Consultants in Dubai | Empowering Entrepreneurs Since 2010</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideInLeft {
          0%, 100% {
            transform: translateX(-50px);
          }
          50% {
            transform: translateX(50px);
          }
        }
        @keyframes slideInRight {
          0%, 100% {
            transform: translateX(50px);
          }
          50% {
            transform: translateX(-50px);
          }
        }
        @keyframes slideInUp {
          0%, 100% {
            transform: translateY(30px);
          }
          50% {
            transform: translateY(-30px);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

