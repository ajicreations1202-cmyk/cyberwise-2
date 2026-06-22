/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROGRAMS } from '../data';
import { Program, Tool } from '../types';
import { 
  BookOpen, 
  Calendar, 
  Layers, 
  Activity, 
  Flame, 
  ChevronRight, 
  Cpu, 
  CheckCircle2, 
  Sliders, 
  MousePointerClick, 
  TrendingUp, 
  RefreshCw,
  Eye, 
  Terminal 
} from 'lucide-react';

export default function InteractiveExplorer() {
  const [selectedProgramId, setSelectedProgramId] = useState<string>('digital-marketing');
  
  // States for Lab Sandboxes
  // 1. Digital Marketing Ad Simulator State
  const [budget, setBudget] = useState<number>(5000);
  const [channelsCount, setChannelsCount] = useState<number>(3);
  
  // 2. Creative Suite Slide State
  const [hue, setHue] = useState<number>(0);
  const [blur, setBlur] = useState<number>(0);
  const [scale, setScale] = useState<number>(1);
  const [grayscale, setGrayscale] = useState<number>(0);

  // 3. Web Dev CSS State
  const [radius, setRadius] = useState<string>('rounded-none');
  const [cardColor, setCardColor] = useState<string>('from-stone-800 to-black');
  const [isGlossy, setIsGlossy] = useState<boolean>(false);

  // 4. AI Workspace Prompt State
  const [promptInput, setPromptInput] = useState<string>('Write a high-converting Meta Ad hook for Perinthalmanna coffee shop');
  const [isAiProcessing, setIsAiProcessing] = useState<boolean>(false);
  const [aiResult, setAiResult] = useState<string>('');

  const activeProgram = PROGRAMS.find(p => p.id === selectedProgramId) || PROGRAMS[0];

  // Ad Sim Calculations
  const calcImpressions = Math.floor(budget * 240);
  const calcCTR = 1.8 + (channelsCount * 0.4);
  const calcClicks = Math.floor(calcImpressions * (calcCTR / 100));
  const calcCostPerClick = Number((budget / calcClicks).toFixed(2)) || 0.15;
  const calcConversions = Math.floor(calcClicks * 0.08);

  const handleAiTrigger = () => {
    setIsAiProcessing(true);
    setAiResult('');
    setTimeout(() => {
      setIsAiProcessing(false);
      if (promptInput.toLowerCase().includes('coffee') || promptInput.toLowerCase().includes('shop')) {
        setAiResult(`[Meta Blueprint Output]
☕️ TASTE THE COFFEE. FEEL THE BEAT.
📍 Right here in Angadipuram, Perinthalmanna!

Stuck in study rut? Re-energize with our premium slow-drip single origin brew.
🎁 Show this post at the counter for 15% OFF your first cold brew!

⚡️ Copy: Grab yours before classes fill up.
🎯 Audience: Students & Creatives, 18-34, 5km Radius.`);
      } else {
        setAiResult(`[Automated AI Workflow Trigger]
🤖 Prompt: "${promptInput}"
✅ Intent: Creative Copywriting & Campaign Plan
🚀 Pipeline: Generating ad group ideas, checking Local Kerala demographics, and selecting optimal CTA ("Learn More").

Suggested Hook: "Don't let yesterday's systems control your tomorrow. Master agency workflows with CyberWise Skillversity!"`);
      }
    }, 1500);
  };

  return (
    <div className="section-container" id="interactive-programs">
      <div className="text-center mb-12 space-y-2">
        <span className="font-mono text-[10px] uppercase font-bold text-[#5A5A40] tracking-widest block font-bold">// Practical Syllabus</span>
        <h2 className="text-3xl md:text-5xl font-serif text-[#1A1A1A] font-semibold">Explore Agency-Based Programs</h2>
        <div className="w-16 h-[2px] bg-[#1A1A1A] mx-auto mt-4" />
        <p className="text-sm text-[#1A1A1A]/70 max-w-2xl mx-auto font-sans pt-2">
          Our specialized training tracks are designed to move you from theoretical basics straight to real client briefs. Click a discipline to explore modules, industry tools, and try our practical lab.
        </p>
      </div>

      {/* Program Selector Tabs - Editorial Newspaper Style */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
        {PROGRAMS.map((program) => {
          const isActive = program.id === selectedProgramId;
          return (
            <button
              key={program.id}
              onClick={() => setSelectedProgramId(program.id)}
              className={`p-5 rounded-none text-left transition-all duration-300 relative overflow-hidden group border-2 ${
                isActive 
                  ? 'bg-[#1A1A1A] text-[#FCFAF7] border-[#1A1A1A] shadow-[4px_4px_0px_0px_#5A5A40]' 
                  : 'bg-white border-[#1A1A1A] hover:bg-[#F4F0E6] text-[#1A1A1A]'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <span className={`px-2 py-0.5 text-[9px] font-mono font-bold uppercase ${
                  isActive ? 'bg-[#FCFAF7] text-[#1A1A1A]' : 'bg-[#E5DFD3] text-[#1A1A1A]'
                }`}>
                  {program.id === 'digital-marketing' && '🚀 Commerce'}
                  {program.id === 'multimedia-design' && '🎨 Media'}
                  {program.id === 'website-development' && '💻 Coding'}
                  {program.id === 'ai-integration' && '🧠 Future'}
                </span>
                <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                  isActive ? 'text-[#FCFAF7] translate-x-1' : 'text-[#1A1A1A]/50 group-hover:text-[#1A1A1A]'
                }`} />
              </div>
              <h3 className={`font-serif font-bold text-sm mb-1 ${isActive ? 'text-[#FCFAF7]' : 'text-[#1A1A1A]'}`}>
                {program.title}
              </h3>
              <p className={`text-xs ${isActive ? 'text-[#FCFAF7]/80' : 'text-[#1A1A1A]/70'} line-clamp-2`}>
                {program.shortDescription}
              </p>
            </button>
          );
        })}
      </div>

      {/* Main Container Grid: Details on Left, Interactive Simulation on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Detail Specifications */}
        <div className="lg:col-span-7 bg-white border border-[#1A1A1A] p-6 md:p-8 shadow-[3px_3px_0px_0px_#1A1A1A] self-stretch flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProgram.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-2xl md:text-3xl font-serif font-semibold text-[#1A1A1A] tracking-tight">
                    {activeProgram.title}
                  </h3>
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-[#5A5A40]/10 text-[#5A5A40] text-xs font-mono font-bold border border-[#5A5A40]/20">
                    <Calendar className="w-3.5 h-3.5" />
                    {activeProgram.duration}
                  </span>
                </div>
                <p className="text-sm text-[#1A1A1A]/80 leading-relaxed font-sans font-light">
                  {activeProgram.detailedDescription}
                </p>
              </div>

              {/* Course Syllabus outline */}
              <div>
                <h4 className="flex items-center gap-2 text-xs font-mono font-bold text-[#5A5A40] uppercase tracking-widest mb-3">
                  <BookOpen className="w-4 h-4 text-[#5A5A40]" /> Key Topics & Modules
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeProgram.topics.map((topic, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-2 bg-[#FCFAF7] border border-[#1A1A1A]/10">
                      <span className="flex items-center justify-center w-5 h-5 bg-[#5A5A40] text-[#FCFAF7] text-[10px] font-mono font-bold shrink-0 mt-0.5">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="text-xs text-[#1A1A1A] font-medium">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools Taught Grid */}
              <div>
                <h4 className="flex items-center gap-2 text-xs font-mono font-bold text-[#5A5A40] uppercase tracking-widest mb-3">
                  <Layers className="w-4 h-4 text-[#5A5A40]" /> Professional Agency Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProgram.tools.map((tool, idx) => (
                    <div 
                      key={idx} 
                      className="px-3 py-2 bg-[#FCFAF7] border border-[#1A1A1A] flex flex-col text-left hover:bg-[#F4F0E6] transition-colors"
                    >
                      <span className="text-xs font-bold text-[#1A1A1A]">{tool.name}</span>
                      <span className="text-[9px] text-[#5A5A40] font-mono uppercase tracking-wider">{tool.category}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="border-t border-[#1A1A1A]/30 pt-5">
                <div className="flex flex-wrap gap-4">
                  {activeProgram.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-[#F4F0E6] px-3.5 py-1.5 border border-[#1A1A1A]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#5A5A40] shrink-0" />
                      <span className="text-xs text-[#1A1A1A] font-bold">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Hands-On Simulator Box - Editorial Canvas */}
        <div className="lg:col-span-5 bg-white border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] overflow-hidden relative self-stretch flex flex-col">
          {/* Header Bar of Simulator */}
          <div className="bg-[#F4F0E6] border-b-2 border-[#1A1A1A] px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#1A1A1A] font-bold flex items-center gap-1.5 uppercase tracking-wider">
                <Sliders className="w-3.5 h-3.5 text-[#5A5A40]" /> CyberWise LABS // Core Simulator
              </span>
            </div>
            <span className="px-2 py-0.5 bg-[#5A5A40] text-[#FCFAF7] font-mono text-[9px] uppercase font-bold tracking-wider select-none">
              Live Preview
            </span>
          </div>

          <div className="p-6 flex-grow flex flex-col justify-between space-y-6">
            {/* Conditional Sandbox Render dependent on Selected Tab */}
            {selectedProgramId === 'digital-marketing' && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-[#1A1A1A] flex items-center gap-2 mb-2 font-serif font-extrabold uppercase tracking-wide">
                    <TrendingUp className="w-4 h-4 text-[#5A5A40]" /> Meta & Google Ads Budget Planner
                  </h4>
                  <p className="text-xs text-[#1A1A1A]/80 font-sans font-light">
                    Students configure real target groups and calculate potential return indices on live campaign briefs. Try adjusting variables:
                  </p>
                </div>

                <div className="space-y-4 bg-[#FCFAF7] p-4 border border-[#1A1A1A]">
                  {/* Budget Slider */}
                  <div>
                    <div className="flex justify-between text-xs font-bold text-[#1A1A1A] mb-1.5 font-mono">
                      <span>Monthly Spend:</span>
                      <span className="text-[#5A5A40] font-bold">₹{budget.toLocaleString('en-IN')}</span>
                    </div>
                    <input 
                      type="range" 
                      min="1000" 
                      max="15000" 
                      step="500" 
                      value={budget} 
                      onChange={(e) => setBudget(Number(e.target.value))}
                      className="w-full accent-[#5A5A40] h-1.5 bg-[#E2DEC9] cursor-pointer"
                    />
                  </div>

                  {/* Channels selection count */}
                  <div>
                    <div className="flex justify-between text-xs font-bold text-[#1A1A1A] mb-1.5 font-mono">
                      <span>Multi-Channel Sync:</span>
                      <span className="text-[#5A5A40] font-bold">{channelsCount} Platforms</span>
                    </div>
                    <input 
                      type="range" 
                      min="1" 
                      max="4" 
                      step="1" 
                      value={channelsCount} 
                      onChange={(e) => setChannelsCount(Number(e.target.value))}
                      className="w-full accent-[#5A5A40] h-1.5 bg-[#E2DEC9] cursor-pointer"
                    />
                  </div>
                </div>

                {/* Instant Calculation Output Card */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-white border border-[#1A1A1A] text-left">
                    <span className="text-[9px] text-[#5A5A40] font-mono uppercase font-bold block">Est. Impressions</span>
                    <span className="text-sm font-bold text-[#1A1A1A] font-mono">{(calcImpressions * 10).toLocaleString()}</span>
                  </div>
                  <div className="p-3 bg-white border border-[#1A1A1A] text-left">
                    <span className="text-[9px] text-[#5A5A40] font-mono uppercase font-bold block">Avg CTR Index</span>
                    <span className="text-sm font-bold text-[#5A5A40] font-mono">{calcCTR.toFixed(1)}%</span>
                  </div>
                  <div className="p-3 bg-white border border-[#1A1A1A] text-left">
                    <span className="text-[9px] text-[#5A5A40] font-mono uppercase font-bold block">Qualified Clicks</span>
                    <span className="text-sm font-bold text-[#1A1A1A] font-mono">{calcClicks.toLocaleString()}</span>
                  </div>
                  <div className="p-3 bg-[#FCFAF7] border-2 border-[#1A1A1A] text-left">
                    <span className="text-[9px] text-[#5A5A40] font-mono uppercase font-bold block">Est. Conversions</span>
                    <span className="text-sm font-bold text-[#5A5A40] font-mono">{calcConversions.toLocaleString()} rval</span>
                  </div>
                </div>

                <div className="text-[10px] text-[#5A5A40] italic text-center p-2 border-t border-dotted border-[#1A1A1A]/20">
                  * High accuracy metrics predictor backed by local Kerala audience metrics.
                </div>
              </div>
            )}

            {selectedProgramId === 'multimedia-design' && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-[#1A1A1A] flex items-center gap-2 mb-2 font-serif font-extrabold uppercase tracking-wide">
                    <Layers className="w-4 h-4 text-[#5A5A40]" /> Creative Suite Interactive Sandbox
                  </h4>
                  <p className="text-xs text-[#1A1A1A]/80 font-sans font-light">
                    Master keyframe dynamics, color balancing, and adjustments in After Effects and Premiere. Change settings below to adjust vector outputs:
                  </p>
                </div>

                {/* Simulated Image Asset */}
                <div className="relative h-40 border border-[#1A1A1A] flex items-center justify-center bg-white select-none overflow-hidden">
                  <div 
                    className="absolute inset-0 transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, #1A1A1A, #5A5A40, #FCFAF7)`,
                      filter: `hue-rotate(${hue}deg) blur(${blur}px) grayscale(${grayscale}%)`,
                      transform: `scale(${scale})`,
                      opacity: 0.85
                    }}
                  />
                  <div className="absolute inset-0 bg-[#FCFAF7]/30" />
                  <div className="relative z-10 text-center space-y-1 p-4 bg-white/95 border border-[#1A1A1A] px-6 py-4">
                    <h5 className="font-serif font-bold text-[#1A1A1A] text-sm uppercase">
                      CYBERWISE BROADCAST
                    </h5>
                    <p className="text-[8px] font-mono text-[#5A5A40] uppercase tracking-widest font-bold">
                      Angadipuram Broadcast Studio
                    </p>
                  </div>
                </div>

                {/* Adjusting Slider Grid */}
                <div className="space-y-3 bg-[#FCFAF7] p-4 border border-[#1A1A1A] text-xs">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="flex justify-between text-[#1A1A1A] font-bold font-mono text-[9px] mb-1">
                        <span>Hue Rotation</span>
                        <span>{hue}°</span>
                      </label>
                      <input 
                        type="range" 
                        min="0" 
                        max="360" 
                        value={hue} 
                        onChange={(e) => setHue(Number(e.target.value))}
                        className="w-full accent-[#5A5A40] h-1 bg-[#E2DEC9] cursor-pointer"
                      />
                    </div>
                    <div>
                      <label className="flex justify-between text-[#1A1A1A] font-bold font-mono text-[9px] mb-1">
                        <span>Blur Index</span>
                        <span>{blur}px</span>
                      </label>
                      <input 
                        type="range" 
                        min="0" 
                        max="8" 
                        value={blur} 
                        onChange={(e) => setBlur(Number(e.target.value))}
                        className="w-full accent-[#5A5A40] h-1 bg-[#E2DEC9] cursor-pointer"
                      />
                    </div>
                    <div>
                      <label className="flex justify-between text-[#1A1A1A] font-bold font-mono text-[9px] mb-1">
                        <span>Zoom Ratio</span>
                        <span>{scale.toFixed(1)}x</span>
                      </label>
                      <input 
                        type="range" 
                        min="0.8" 
                        max="1.4" 
                        step="0.1" 
                        value={scale} 
                        onChange={(e) => setScale(Number(e.target.value))}
                        className="w-full accent-[#5A5A40] h-1 bg-[#E2DEC9] cursor-pointer"
                      />
                    </div>
                    <div>
                      <label className="flex justify-between text-[#1A1A1A] font-bold font-mono text-[9px] mb-1">
                        <span>Black & White</span>
                        <span>{grayscale}%</span>
                      </label>
                      <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={grayscale} 
                        onChange={(e) => setGrayscale(Number(e.target.value))}
                        className="w-full accent-[#5A5A40] h-1 bg-[#E2DEC9] cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedProgramId === 'website-development' && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-[#1A1A1A] flex items-center gap-2 mb-2 font-serif font-extrabold uppercase tracking-wide">
                    <MousePointerClick className="w-4 h-4 text-[#5A5A40]" /> Tailwind CSS UI Prototyper
                  </h4>
                  <p className="text-xs text-[#1A1A1A]/80 font-sans font-light">
                    Modern website design uses modular utilities in code. Try clicking components values below to refactor the live UI card immediately:
                  </p>
                </div>

                {/* Target Interactive Card to be styled */}
                <div className="p-5 flex items-center justify-center bg-[#FCFAF7] border border-[#1A1A1A]">
                  <div className={`w-full max-w-sm p-5 border border-[#1A1A1A] bg-white transition-all duration-300 ${radius} ${
                    isGlossy ? 'shadow-[4px_4px_0px_0px_#5A5A40] bg-[#F4F0E6]' : 'shadow-none'
                  }`}>
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-[9px] font-mono font-bold bg-[#1A1A1A] text-[#FCFAF7] py-0.5 px-2.5 uppercase tracking-wider">
                        Live Web Component
                      </span>
                      <div className="w-2.5 h-2.5 bg-[#5A5A40] animate-pulse" />
                    </div>
                    <h5 className="font-serif font-bold text-sm text-[#1A1A1A] leading-snug uppercase">
                      Responsive Web UI
                    </h5>
                    <p className="text-[#1A1A1A]/80 font-sans text-xs mt-1.5 leading-relaxed">
                      This element updates dynamically using reactive Tailwind CSS utility states. Learn responsive layout structures securely.
                    </p>
                  </div>
                </div>

                {/* Styling Controller Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 bg-[#FCFAF7] p-3 border border-[#1A1A1A] text-xs text-center select-none">
                  {/* Border Radius */}
                  <div className="flex flex-col gap-1.5 p-1">
                    <span className="text-[9px] text-[#5A5A40] uppercase font-mono tracking-tight font-bold">Corner Style</span>
                    <button 
                      onClick={() => setRadius(r => r === 'rounded-none' ? 'rounded-lg' : r === 'rounded-lg' ? 'rounded-2xl' : 'rounded-none')}
                      className="py-1 px-2.5 bg-white border border-[#1A1A1A] font-mono text-[9px] text-[#1A1A1A] font-bold"
                    >
                      {radius === 'rounded-none' && 'Square sharp'}
                      {radius === 'rounded-lg' && 'Small Curv'}
                      {radius === 'rounded-2xl' && 'Smooth Curv'}
                    </button>
                  </div>

                  {/* Tailwind Gradient color toggle */}
                  <div className="flex flex-col gap-1.5 p-1">
                    <span className="text-[9px] text-[#5A5A40] uppercase font-mono tracking-tight font-bold">Color Theme</span>
                    <button 
                      onClick={() => {
                        setIsGlossy(g => !g);
                      }}
                      className="py-1 px-2.5 bg-white border border-[#1A1A1A] font-mono text-[9px] text-[#1A1A1A] font-bold"
                    >
                      {isGlossy ? 'Soft Cream' : 'Crisp White'}
                    </button>
                  </div>

                  {/* Glossy Backdrop Toggle */}
                  <div className="flex flex-col gap-1.5 p-1">
                    <span className="text-[9px] text-[#5A5A40] uppercase font-mono tracking-tight font-bold">Layout Frame</span>
                    <button 
                      onClick={() => setRadius('rounded-none')}
                      className="py-1 px-2.5 bg-white border border-[#1A1A1A] font-mono text-[9px] text-[#1A1A1A] font-bold"
                    >
                      Reset Clean
                    </button>
                  </div>
                </div>
              </div>
            )}

            {selectedProgramId === 'ai-integration' && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-[#1A1A1A] flex items-center gap-2 mb-2 font-serif font-extrabold uppercase tracking-wide">
                    <Cpu className="w-4 h-4 text-[#5A5A40]" /> Prompt Engineering Playpen
                  </h4>
                  <p className="text-xs text-[#1A1A1A]/80 font-sans font-light">
                    Learn to embed automated AI processors inside legacy sales and content pipelines. Enter prompt instructions below:
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="relative">
                    <input 
                      type="text" 
                      value={promptInput}
                      onChange={(e) => setPromptInput(e.target.value)}
                      placeholder="Ask the AI Lab system..."
                      className="w-full bg-[#FCFAF7] border-2 border-[#1A1A1A] text-[#1A1A1A] text-xs pl-3 pr-12 py-3 focus:outline-none placeholder-stone-500 font-mono"
                    />
                    <button 
                      onClick={handleAiTrigger}
                      disabled={isAiProcessing}
                      className="absolute right-2 top-2 p-1.5 bg-[#1A1A1A] text-[#FCFAF7] hover:bg-[#5A5A40] transition-colors disabled:opacity-50"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 ${isAiProcessing ? 'animate-spin' : ''}`} />
                    </button>
                  </div>

                  {/* Terminal Console Printout */}
                  <div className="bg-white border border-[#1A1A1A] p-4 font-mono text-left text-xs text-[#1A1A1A] h-40 overflow-y-auto relative scrollbar-thin">
                    <div className="absolute top-2 right-3 flex items-center gap-1.5 text-[8px] text-[#5A5A40] select-none uppercase tracking-wide font-bold">
                      <Terminal className="w-3 h-3 text-[#5A5A40]" /> console_trace
                    </div>
                    {isAiProcessing ? (
                      <div className="space-y-2 text-stone-500 py-4 font-mono text-[11px]">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#5A5A40] rounded-full animate-pulse" />
                          <span>Establishing workspace context...</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#5A5A40]">
                          <span className="w-1.5 h-1.5 bg-[#5A5A40] rounded-full animate-ping" />
                          <span>Mapping local Perinthalmanna geo-nodes...</span>
                        </div>
                      </div>
                    ) : aiResult ? (
                      <pre className="whitespace-pre-wrap text-[11px] font-mono leading-relaxed text-[#1A1A1A]">
                        {aiResult}
                      </pre>
                    ) : (
                      <div className="text-stone-400 italic py-10 text-center font-mono text-[11px]">
                        💡 Waiting for user pipeline instruction. Click the circle refresh above!
                      </div>
                    )}
                  </div>
                </div>

                <div className="text-[9px] text-[#5A5A40] text-center pt-2 border-t border-[#1A1A1A]/10 font-mono">
                  ⚡️ Trained on advanced Gemini generative workflow matrices.
                </div>
              </div>
            )}

            {/* Simulated Lab Bottom Link */}
            <div className="mt-6 pt-5 border-t border-[#1A1A1A]/20 flex justify-between items-center text-xs">
              <span className="text-[#5A5A40] flex items-center gap-1.5 font-mono text-[10px] uppercase font-bold tracking-wider">
                <Activity className="w-3.5 h-3.5 text-[#5A5A40] animate-pulse" />
                Live Campaigns Queue
              </span>
              <a 
                href="#admission-inquiry"
                className="text-[#1A1A1A] font-mono font-bold hover:text-[#5A5A40] transition-colors flex items-center gap-0.5 uppercase text-[10px] tracking-widest border-b-2 border-[#1A1A1A]"
              >
                Enroll in Track <ChevronRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
