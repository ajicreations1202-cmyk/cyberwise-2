/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Layers, 
  ArrowRight, 
  Trophy, 
  BookOpen, 
  Clock, 
  Flame, 
  ShieldCheck, 
  Laptop, 
  Tv, 
  Lightbulb, 
  PhoneCall, 
  HelpCircle,
  GraduationCap,
  Briefcase,
  Workflow,
  HeartHandshake
} from 'lucide-react';

// Import our custom sub-components
import InteractiveExplorer from './components/InteractiveExplorer';
import InteractiveQuiz from './components/InteractiveQuiz';
import InquiryForm from './components/InquiryForm';
import ContactSection from './components/ContactSection';
import { CAREER_ROLES } from './data';

export default function App() {
  const [selectedTrackId, setSelectedTrackId] = useState<string>('');

  const handleSelectTrack = (trackId: string) => {
    setSelectedTrackId(trackId);
    // Smooth scroll down to inquiry section
    const target = document.getElementById('admission-inquiry');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFAF7] text-[#1A1A1A] font-sans selection:bg-[#5A5A40] selection:text-[#FCFAF7] overflow-x-hidden pb-12">
      
      {/* 1. Header Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[#FCFAF7]/90 backdrop-blur-md border-b-2 border-[#1A1A1A] px-4 py-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 bg-[#1A1A1A] text-[#FCFAF7] font-serif font-black text-lg tracking-wider border border-[#1A1A1A]">
              CW
            </span>
            <div>
              <h1 className="text-xs font-bold tracking-widest text-[#1A1A1A] uppercase leading-none">
                CyberWise Skillversity
              </h1>
              <span className="text-[9px] text-[#5A5A40] font-mono tracking-widest uppercase">
                Angadipuram Academy // AGENCY-POWERED
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-[11px] font-mono tracking-wider uppercase text-[#1A1A1A]/80">
            <button onClick={() => scrollToSection('the-academy-edge')} className="hover:text-[#5A5A40] transition-colors cursor-pointer font-bold">The Edge</button>
            <button onClick={() => scrollToSection('interactive-programs')} className="hover:text-[#5A5A40] transition-colors cursor-pointer font-bold">Programs</button>
            <button onClick={() => scrollToSection('career-routes')} className="hover:text-[#5A5A40] transition-colors cursor-pointer font-bold">Careers</button>
            <button onClick={() => scrollToSection('career-quiz')} className="hover:text-[#5A5A40] transition-colors cursor-pointer font-bold">Pathfinder</button>
            <button onClick={() => scrollToSection('contact-hub')} className="hover:text-[#5A5A40] transition-colors cursor-pointer font-bold">Connect Hub</button>
          </div>

          <button 
            onClick={() => scrollToSection('admission-inquiry')}
            className="px-4 py-2 border border-[#1A1A1A] bg-[#1A1A1A] text-[#FCFAF7] font-mono font-bold text-[10px] tracking-widest uppercase transition-all hover:bg-transparent hover:text-[#1A1A1A] cursor-pointer"
          >
            Apply Now
          </button>
        </div>
      </header>

      {/* 2. Stunning Agency-Style Hero Section */}
      <section className="relative pt-12 pb-20 px-4 md:px-8 max-w-7xl mx-auto border-b border-[#1A1A1A]/30 overflow-hidden">
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 border border-[#1A1A1A] px-3.5 py-1 rounded-none bg-[#F4F0E6] select-none">
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5A5A40] opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#5A5A40]" />
              </span>
              <span className="text-[9px] uppercase font-mono tracking-widest font-extrabold text-[#5A5A40]">
                Agency-Based Digital & Multimedia Institute
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-[#1A1A1A] leading-[1.05] tracking-tight">
              Empowering Future <br />
              <span className="italic block mt-1 font-normal text-[#5A5A40]">
                Digital Professionals.
              </span>
            </h1>

            <p className="text-sm md:text-base text-[#1A1A1A]/80 max-w-xl font-sans leading-relaxed">
              Located in Angadipuram, Perinthalmanna, Kerala. Powered by <strong className="text-[#1A1A1A] font-bold">CyberWise Info Solutions</strong>. We bridge the critical gap between mock exercises and real workspace deliverables through hands-on campaign assignments.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={() => scrollToSection('interactive-programs')}
                className="px-6 py-3.5 border border-[#1A1A1A] bg-[#1A1A1A] text-[#FCFAF7] font-mono font-bold text-[10px] uppercase tracking-widest transition-all hover:bg-transparent hover:text-[#1A1A1A] cursor-pointer shadow-[3px_3px_0px_0px_#5A5A40]"
              >
                Browse Programs Modules
              </button>
              <button
                onClick={() => scrollToSection('career-quiz')}
                className="px-6 py-3.5 border border-[#1A1A1A] bg-transparent text-[#1A1A1A] font-mono font-bold text-[10px] uppercase tracking-widest transition-all hover:bg-[#1A1A1A] hover:text-[#FCFAF7] cursor-pointer"
              >
                Run Career Pathfinder Quiz
              </button>
            </div>

            {/* Micro stats banner */}
            <div className="grid grid-cols-3 gap-0 border border-[#1A1A1A] max-w-md divide-x divide-[#1A1A1A] bg-white">
              <div className="p-4 text-center">
                <span className="text-[#1A1A1A] font-serif font-bold text-lg block">15 Seat</span>
                <span className="text-[8px] text-[#5A5A40] uppercase font-mono tracking-wider block mt-1">Batch Max Limit</span>
              </div>
              <div className="p-4 text-center">
                <span className="text-[#1A1A1A] font-serif font-bold text-lg block">100%</span>
                <span className="text-[8px] text-[#5A5A40] uppercase font-mono tracking-wider block mt-1">Project Training</span>
              </div>
              <div className="p-4 text-center">
                <span className="text-[#5A5A40] font-serif font-bold text-lg block">24H</span>
                <span className="text-[8px] text-[#5A5A40] uppercase font-mono tracking-wider block mt-1">Laboratory Slot</span>
              </div>
            </div>
          </div>

          {/* Right Side: Immersive Graphical Workspace Representation */}
          <div className="lg:col-span-5 relative self-stretch flex items-center justify-center">
            <div className="w-full bg-white border-2 border-[#1A1A1A] p-6 relative overflow-hidden shadow-[4px_4px_0px_0px_#1A1A1A] space-y-5">
              <div className="flex justify-between items-center text-[10px] pb-3 border-b border-[#1A1A1A]">
                <span className="text-[#1A1A1A]/80 font-mono font-bold flex items-center gap-1.5 uppercase tracking-wider">
                  <Laptop className="w-3.5 h-3.5 text-[#5A5A40]" /> LIVE AGENCY MONITOR
                </span>
                <span className="px-2 py-0.5 bg-[#5A5A40]/10 text-[#5A5A40] border border-[#5A5A40]/30 font-mono text-[8px] font-bold uppercase select-none">
                  Kerala Active Campaign
                </span>
              </div>

              {/* Graphic Mock */}
              <div className="space-y-3">
                <div className="p-4 bg-[#FCFAF7] border border-[#1A1A1A] relative overflow-hidden">
                  <div className="flex justify-between items-center mb-1 text-[8px] text-[#5A5A40] font-mono uppercase tracking-wider">
                    <span>Meta Ads Account Node</span>
                    <span className="text-[#5A5A40] font-bold">• Active</span>
                  </div>
                  <h5 className="font-serif font-bold text-xs text-[#1A1A1A] uppercase">CyberWise Multi-campaign #21</h5>
                  <div className="w-full bg-[#E5DFD3] h-2 overflow-hidden mt-3 border border-[#1A1A1A]">
                    <div className="bg-[#5A5A40] h-full w-[82%]" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-[#FCFAF7] border border-[#1A1A1A]">
                    <span className="text-[8px] text-[#5A5A40] font-mono block uppercase tracking-wider">Real Ad Budget</span>
                    <span className="text-xs font-bold text-[#1A1A1A] font-mono block mt-1">₹45,200.00</span>
                  </div>
                  <div className="p-3 bg-[#FCFAF7] border border-[#1A1A1A]">
                    <span className="text-[8px] text-[#5A5A40] font-mono block uppercase tracking-wider">Est. CTR Index</span>
                    <span className="text-xs font-bold text-[#5A5A40] font-mono block mt-1">3.45% ROI</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#F4F0E6] border border-[#1A1A1A] text-left">
                <div className="flex items-center gap-1.5 text-xs text-[#1A1A1A] font-bold uppercase tracking-wider mb-1.5 font-mono">
                  <Flame className="w-4 h-4 text-[#5A5A40]" />
                  Why Traditional Classrooms Fail:
                </div>
                <p className="text-[11px] text-[#1A1A1A]/80 leading-relaxed font-sans">
                  Simply listening to lectures can never train you to respond to sudden changes in CPC bids or live software bugs. At CyberWise, we integrate you directly into our Info Solutions workspace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Pillars & Bento Grid Section (Vision, Mission, Why Choose Us) */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-b border-[#1A1A1A]/30" id="the-academy-edge">
        <div className="text-center mb-12 space-y-2">
          <span className="font-mono text-[10px] uppercase font-bold text-[#5A5A40] tracking-widest block">// The Academic Philosophy</span>
          <h2 className="text-3xl md:text-5xl font-serif text-[#1A1A1A] font-semibold">Our Vision & Mission</h2>
          <div className="w-16 h-[2px] bg-[#1A1A1A] mx-auto mt-4" />
          <p className="text-sm text-[#1A1A1A]/70 max-w-2xl mx-auto font-sans pt-2">
            Discover the principles guiding CyberWise Skillversity as one of India's most trusted digital skill development institutions.
          </p>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-white border border-[#1A1A1A] space-y-4 shadow-[4px_4px_0px_0px_#1A1A1A]">
            <div className="p-3 bg-[#5A5A40]/10 text-[#5A5A40] w-fit border border-[#5A5A40]/30">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#1A1A1A] tracking-tight">Our Vision</h3>
            <p className="text-xs text-[#1A1A1A]/85 leading-relaxed font-sans">
              To become one of India's most trusted digital skill development institutions by nurturing creative professionals and equipping them with future-ready skills that drive innovation and digital transformation.
            </p>
          </div>

          <div className="p-8 bg-white border border-[#1A1A1A] space-y-4 shadow-[4px_4px_0px_0px_#5A5A40]">
            <div className="p-3 bg-[#5A5A40]/10 text-[#5A5A40] w-fit border border-[#5A5A40]/30">
              <Trophy className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#1A1A1A] tracking-tight">Our Mission</h3>
            <p className="text-xs text-[#1A1A1A]/85 leading-relaxed font-sans">
              To deliver industry-focused education through practical training, creating job-ready professionals with real-world experience, nurturing custom entrepreneurship, and building a community of digital experts.
            </p>
          </div>
        </div>

        {/* Why Choose Us Bento Grid Nodes */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto mb-8 border-t-4 border-double border-[#1A1A1A] pt-8">
            <h3 className="text-xl font-serif font-bold text-[#1A1A1A]">Why Choose CyberWise Skillversity?</h3>
            <p className="text-xs text-[#5A5A40] mt-1 font-mono uppercase tracking-wider">Unlike traditional theory institutes, we focus on genuine client pipelines.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Bento Block 1: Agency Based Learning */}
            <div className="md:col-span-2 p-6 bg-white border border-[#1A1A1A] shadow-[3px_3px_0px_0px_#1A1A1A] flex flex-col justify-between">
              <div className="space-y-2">
                <span className="px-2 py-0.5 bg-[#5A5A40] text-[#FCFAF7] text-[9px] font-mono font-bold uppercase tracking-wider">
                  Agency-Driven
                </span>
                <h4 className="text-lg font-serif font-bold text-[#1A1A1A]">Agency-Based Learning Model</h4>
                <p className="text-xs text-[#1A1A1A]/80 leading-relaxed font-sans">
                  We follow an agency-driven training model where students gain hands-on exposure to real client workflows from CyberWise Info Solutions rather than just studying textbooks.
                </p>
              </div>
              <div className="border-[#1A1A1A] border-t border-dotted pt-3 mt-4 text-[10px] font-mono text-[#5A5A40] flex items-center gap-1.5 uppercase font-bold tracking-wider">
                <Workflow className="w-3.5 h-3.5" />
                Live campaign access month begins at week 12.
              </div>
            </div>

            {/* Bento Block 2: Updated Curriculum */}
            <div className="p-6 bg-white border border-[#1A1A1A] shadow-[3px_3px_0px_0px_#1A1A1A] flex flex-col justify-between">
              <div className="space-y-2">
                <span className="px-2.5 py-1 bg-[#5A5A40]/10 border border-[#5A5A40]/30 text-[#5A5A40] text-[9px] font-mono font-bold rounded-none uppercase tracking-wide">
                  Up-To-Date
                </span>
                <h4 className="text-base font-serif font-bold text-[#1A1A1A]">Industry-Relevant Syllabus</h4>
                <p className="text-xs text-[#1A1A1A]/85 leading-relaxed">
                  Our courses are continuously updated to meet the latest system patterns, search crawlers algorithms, tracking APIs, and technology advances.
                </p>
              </div>
              <div className="text-[10px] font-mono text-[#5A5A40] mt-4 flex items-center gap-1 font-bold uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5 text-[#5A5A40]" />
                Updated: June 2026.
              </div>
            </div>

            {/* Bento Block 3: Practical Training */}
            <div className="p-6 bg-white border border-[#1A1A1A] shadow-[3px_3px_0px_0px_#1A1A1A] flex flex-col justify-between">
              <div className="space-y-2">
                <span className="px-2.5 py-1 bg-[#5A5A40]/10 border border-[#5A5A40]/30 text-[#5A5A40] text-[9px] font-mono font-bold rounded-none uppercase tracking-wide">
                  True Sandbox
                </span>
                <h4 className="text-base font-serif font-bold text-[#1A1A1A]">Live Client Assignments</h4>
                <p className="text-xs text-[#1A1A1A]/85 leading-relaxed">
                  Students manage real assignments, text different creatives, optimize bidding thresholds, and execute live portfolios.
                </p>
              </div>
              <div className="text-[10px] font-mono text-[#5A5A40] mt-4 flex items-center gap-1 font-bold uppercase tracking-wider">
                <Laptop className="w-3.5 h-3.5 text-[#5A5A40]" />
                Weekly review checkpoints.
              </div>
            </div>

            {/* Bento Block 4: Expert Mentorship */}
            <div className="p-6 bg-white border border-[#1A1A1A] shadow-[3px_3px_0px_0px_#1A1A1A] flex flex-col justify-between">
              <div className="space-y-2">
                <span className="px-2.5 py-1 bg-[#5A5A40]/10 border border-[#5A5A40]/30 text-[#5A5A40] text-[9px] font-mono font-bold rounded-none uppercase tracking-wide">
                  True Experts
                </span>
                <h4 className="text-base font-serif font-bold text-[#1A1A1A]">Experienced Agency leads</h4>
                <p className="text-xs text-[#1A1A1A]/85 leading-relaxed">
                  Learn from active practitioners who have experience driving high-velocity conversion campaigns across India and international markets.
                </p>
              </div>
              <div className="text-[10px] font-mono text-[#5A5A40] mt-4 flex items-center gap-1 font-bold uppercase tracking-wider">
                <HeartHandshake className="w-3.5 h-3.5 text-[#5A5A40]" />
                Direct 1:1 desk slots.
              </div>
            </div>

            {/* Bento Block 5: Career Placement Support */}
            <div className="p-6 bg-white border border-[#1A1A1A] shadow-[3px_3px_0px_0px_#1A1A1A] flex flex-col justify-between">
              <div className="space-y-2">
                <span className="px-2.5 py-1 bg-[#5A5A40]/10 border border-[#5A5A40]/30 text-[#5A5A40] text-[9px] font-mono font-bold rounded-none uppercase tracking-wide">
                  Placement Hub
                </span>
                <h4 className="text-base font-serif font-bold text-[#1A1A1A]">Comprehensive Career Support</h4>
                <p className="text-xs text-[#1A1A1A]/85 leading-relaxed">
                  From audit certifications and portfolio styling to interview setups, we help candidates navigate their next successful career shift.
                </p>
              </div>
              <div className="text-[10px] font-mono text-[#5A5A40] mt-4 flex items-center gap-1 font-bold uppercase tracking-wider">
                <Briefcase className="w-3.5 h-3.5 text-[#5A5A40]" />
                Mock interviews included.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Interactive Program Explorer Component */}
      <section className="bg-white border-y border-[#1A1A1A] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <InteractiveExplorer />
        </div>
      </section>

      {/* 5. Career Opportunities Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-b border-[#1A1A1A]/30" id="career-routes">
        <div className="text-center mb-12">
          <span className="font-mono text-[10px] uppercase font-bold text-[#5A5A40] tracking-widest block font-bold">// Industry Opportunities</span>
          <h2 className="text-3xl md:text-5xl font-serif text-[#1A1A1A] font-semibold">Target Roles & Prospects</h2>
          <div className="w-16 h-[2px] bg-[#1A1A1A] mx-auto mt-4" />
          <p className="text-sm text-[#1A1A1A]/70 max-w-2xl mx-auto font-sans pt-2">
            Our agency model trains you specifically for roles high in demand across digital creative centers in Perinthalmanna, Kochi, Bangalore, and globally.
          </p>
        </div>

        {/* Roles list Grid representing career positions requested by user */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAREER_ROLES.map((role, idx) => (
            <div 
              key={idx} 
              className="p-6 bg-white border border-[#1A1A1A] hover:bg-[#F4F0E6] flex flex-col justify-between transition-colors group shadow-[3px_3px_0px_0px_#1A1A1A]"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <span className="text-[9px] font-mono text-[#5A5A40] font-extrabold block">ROLE TRACK {String(idx + 1).padStart(2, '0')}</span>
                  <span className={`px-2 py-0.5 text-[9px] font-mono font-bold border ${
                    role.demandLevel === 'Very High' ? 'bg-red-50 text-red-700 border-red-200' : 'bg-amber-50 text-amber-8050 text-amber-800 border-amber-200'
                  }`}>
                    {role.demandLevel} Demand
                  </span>
                </div>
                
                <h3 className="text-base font-serif font-bold text-[#1A1A1A] group-hover:text-[#5A5A40] transition-colors">
                  {role.title}
                </h3>
                
                <p className="text-xs text-[#1A1A1A]/70 leading-relaxed font-sans font-light">
                  {role.description}
                </p>
              </div>

              {/* Sub niche roles list */}
              <div className="border-[#1A1A1A]/10 border-t pt-4 mt-5 space-y-2">
                <span className="text-[8px] font-mono text-[#5A5A40] block uppercase font-bold tracking-widest">Key Sub-specialties:</span>
                <div className="flex flex-wrap gap-1.5">
                  {role.roles.map((subRole, sIdx) => (
                    <span key={sIdx} className="text-[10px] font-medium bg-[#FCFAF7] font-mono text-[#1A1A1A] px-2 py-0.5 border border-[#1A1A1A]/20">
                      {subRole}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center text-[10px] font-mono text-[#5A5A40] pt-1.5 border-t border-dotted border-[#1A1A1A]/10 mt-2">
                  <span>Typical Growth Index</span>
                  <span className="font-bold">{role.growth}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white border border-[#1A1A1A] p-5 rounded-none text-center max-w-xl mx-auto shadow-[3px_3px_0px_0px_#5A5A40]">
          <p className="text-xs text-[#1A1A1A]/80 font-mono">
            💼 <strong>Freelancing Ecosystems:</strong> We also offer structural training on setting up Upwork / Fiverr profiles, building legal contract scopes, and invoicing international clientele.
          </p>
        </div>
      </section>

      {/* 6. Career Pathfinder Quiz Component */}
      <section className="bg-[#F4F0E6] border-y border-[#1A1A1A] py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <InteractiveQuiz onSelectTrack={handleSelectTrack} />
        </div>
      </section>

      {/* 7. Hands-on Learning Experience Information Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto" id="experience-details">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Dynamic visual checkpoints */}
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-[10px] uppercase font-bold text-[#5A5A40] tracking-widest block font-bold">// Learning Paradigm</span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#1A1A1A] font-semibold text-left">Hands-On Learning Experience</h2>
            <p className="text-sm text-[#1A1A1A]/80 leading-relaxed font-sans pl-1">
              At CyberWise, we believe that learning should extend far beyond traditional classroom walls. Candidates actively participate in several hands-on channels that simulate working in professional digital agencies.
            </p>

            {/* Checkpoints List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white border border-[#1A1A1A] space-y-1 shadow-[3px_3px_0px_0px_#1A1A1A]">
                <h4 className="text-xs font-mono font-bold text-[#1A1A1A] uppercase tracking-widest flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#5A5A40] rounded-full" /> Live Campaigns
                </h4>
                <p className="text-[11px] text-[#1A1A1A]/70">Manage paid budgets to structure, schedule, and launch target campaigns.</p>
              </div>
              
              <div className="p-4 bg-white border border-[#1A1A1A] space-y-1 shadow-[3px_3px_0px_0px_#1A1A1A]">
                <h4 className="text-xs font-mono font-bold text-[#1A1A1A] uppercase tracking-widest flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#5A5A40] rounded-full" /> Curation Guilds
                </h4>
                <p className="text-[11px] text-[#1A1A1A]/70">Build interactive creative libraries and get structural 1:1 mentorship feedback.</p>
              </div>

              <div className="p-4 bg-white border border-[#1A1A1A] space-y-1 shadow-[3px_3px_0px_0px_#1A1A1A]">
                <h4 className="text-xs font-mono font-bold text-[#1A1A1A] uppercase tracking-widest flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#5A5A40] rounded-full" /> Bootcamps
                </h4>
                <p className="text-[11px] text-[#1A1A1A]/70">Dynamic weekend sprints covering new speed models and automation APIs.</p>
              </div>

              <div className="p-4 bg-white border border-[#1A1A1A] space-y-1 shadow-[3px_3px_0px_0px_#1A1A1A]">
                <h4 className="text-xs font-mono font-bold text-[#1A1A1A] uppercase tracking-widest flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#5A5A40] rounded-full" /> Client Briefs
                </h4>
                <p className="text-[11px] text-[#1A1A1A]/70">Pitch solutions directly to real clients of CyberWise Info Solutions.</p>
              </div>
            </div>
          </div>

          {/* Right Side illustration representation */}
          <div className="lg:col-span-6 bg-white border-2 border-[#1A1A1A] p-6 shadow-[4px_4px_0px_0px_#5A5A40] self-stretch flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-[9px] font-mono text-[#5A5A40] uppercase tracking-widest font-bold block">ACTIVE PIPELINE CHECKS</span>
              <h3 className="text-lg font-serif font-bold text-[#1A1A1A]">The Curation Workspace Walkthrough</h3>
              <p className="text-xs text-[#1A1A1A]/75 leading-relaxed font-sans font-light">
                Our learning environment mimics an agency bullpen. Instead of desks arranged in rows facing a blackboard, our Kerala lab is a collaborative, high-end multimedia setup.
              </p>

              {/* Progress timeline checkpoints */}
              <div className="space-y-4 pt-2">
                <div className="flex gap-3">
                  <div className="flex flex-col items-center shrink-0">
                    <span className="w-6 h-6 rounded-none bg-[#5A5A40] text-[#FCFAF7] flex items-center justify-center font-mono text-[10px] font-bold">01</span>
                    <div className="w-0.5 h-6 bg-[#1A1A1A]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-[#1A1A1A] uppercase tracking-wider">The Fundamentals Sprint (Month 1)</h4>
                    <p className="text-[11px] text-[#1A1A1A]/70">Nail down typography, spatial balance, SEO crawlers logic, and code structures.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex flex-col items-center shrink-0">
                    <span className="w-6 h-6 rounded-none bg-[#5A5A40] text-[#FCFAF7] flex items-center justify-center font-mono text-[10px] font-bold">02</span>
                    <div className="w-0.5 h-6 bg-[#1A1A1A]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-[#1A1A1A] uppercase tracking-wider">The Live Sandbox integration (Month 2)</h4>
                    <p className="text-[11px] text-[#1A1A1A]/70">Implement real client designs, configure live budgets, and deployment tests.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex flex-col items-center shrink-0">
                    <span className="w-6 h-6 rounded-none bg-[#1A1A1A] text-[#FCFAF7] flex items-center justify-center font-mono text-[10px] font-bold">03</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-[#1A1A1A] uppercase tracking-wider">The Portfolio Showcase Launch (Month 3+)</h4>
                    <p className="text-[11px] text-[#1A1A1A]/70">Audits verification, custom domain setup, and resume submission with placement drives.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Admission / Inquiry Section with custom tracking state */}
      <section className="bg-white border-y border-[#1A1A1A] py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <InquiryForm preselectedCourseId={selectedTrackId} />
        </div>
      </section>

      {/* 9. Contact Section with Phone and Location coordinates */}
      <section className="bg-[#FCFAF7] py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ContactSection />
        </div>
      </section>

      {/* 10. Footer Section */}
      <footer className="bg-white border-t-2 border-[#1A1A1A] px-4 py-12 text-xs text-[#1A1A1A]/70 text-center">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#1A1A1A]/10 pb-8">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-none bg-[#1A1A1A] text-[#FCFAF7] font-serif font-black text-xs flex items-center justify-center select-none">CW</span>
              <div className="text-left font-sans">
                <span className="text-[#1A1A1A] font-extrabold text-sm block tracking-widest uppercase leading-none">CyberWise Skillversity</span>
                <span className="text-[9px] text-[#5A5A40] font-mono tracking-widest uppercase block mt-1">Learn. Create. Innovate. Succeed.</span>
              </div>
            </div>
            
            <div className="text-center sm:text-right font-mono text-[10px] text-[#1A1A1A]">
              📍 Calicut Road, Pratheeksha Colony, Angadipuram, Kerala
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[11px]">
            <p className="font-light">
              &copy; {new Date().getFullYear()} CyberWise Skillversity. All Rights Reserved. Powered by CyberWise Info Solutions Group.
            </p>
            <div className="flex gap-4 font-mono">
              <span className="text-[#5A5A40]">Open 24 Hours</span>
              <span className="text-[#1A1A1A] font-bold">Kerala Education Ecosystem</span>
            </div>
          </div>
        </div>
      </footer>
      
    </div>
  );
}
