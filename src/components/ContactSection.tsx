/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Phone, 
  Globe, 
  Clock, 
  CheckCircle2,
  Navigation
} from 'lucide-react';

export default function ContactSection() {
  const [callbackRequested, setCallbackRequested] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [errorText, setErrorText] = useState<string>('');
  const [currentQueue, setCurrentQueue] = useState<number>(3);
  const [estWaitTime, setEstWaitTime] = useState<string>('12 Mins');

  const handleRequestCallback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber) {
      setErrorText('Please enter your contact number.');
      return;
    }
    if (phoneNumber.length < 8) {
      setErrorText('Please provide a valid phone number.');
      return;
    }
    setErrorText('');
    setCallbackRequested(true);
    // Simulate dynamic countdown wait time changes
    setTimeout(() => {
      setCurrentQueue(2);
      setEstWaitTime('6 Mins');
    }, 15000);
  };

  return (
    <div className="py-8" id="contact-hub">
      <div className="text-center mb-12 space-y-2">
        <span className="font-mono text-[10px] uppercase font-bold text-[#5A5A40] tracking-widest block font-bold">// Address & Location Details</span>
        <h2 className="text-3xl md:text-5xl font-serif text-[#1A1A1A] font-semibold">Connect With Us</h2>
        <div className="w-16 h-[2px] bg-[#1A1A1A] mx-auto mt-4" />
        <p className="text-sm text-[#1A1A1A]/70 max-w-2xl mx-auto font-sans pt-2">
          Visit our modern learning studios located on Calicut Road in Angadipuram, Kerala, or schedule a callback below. We are always here to guide you toward digital excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Side: Contact Information Cards */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-4">
          
          {/* Main Address Card */}
          <div className="p-6 bg-white border border-[#1A1A1A] space-y-4 shadow-[3px_3px_0px_0px_#1A1A1A]">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#F4F0E6] text-[#1A1A1A] border border-[#1A1A1A]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[9px] text-[#5A5A40] font-mono font-bold uppercase block tracking-widest">ACADEMY LOCATION</span>
                <h4 className="text-sm font-serif font-black text-[#1A1A1A] uppercase">CyberWise Skillversity</h4>
              </div>
            </div>

            <div className="border-t border-[#1A1A1A]/10 pt-3 text-xs text-[#1A1A1A]/80 leading-relaxed font-sans space-y-1">
              <p className="font-bold">CyberWise Info Solutions,</p>
              <p>Calicut Road, Pratheeksha Colony,</p>
              <p>Angadipuram, Perinthalmanna,</p>
              <p className="font-bold">Kerala – 679321</p>
            </div>

            <div className="flex gap-1.5 items-center pt-2">
              <span className="w-2 h-2 rounded-none bg-[#5A5A40] shrink-0" />
              <span className="text-[10px] font-mono text-[#5A5A40] font-bold uppercase tracking-widest">
                Open 24 Hours / Live Lab Access
              </span>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 bg-white border border-[#1A1A1A] text-left shadow-[2px_2px_0px_0px_#1A1A1A]">
              <Clock className="w-5 h-5 text-[#5A5A40] mb-2" />
              <span className="text-[8px] font-mono text-[#5A5A40] block uppercase font-bold tracking-wider">AVAILABILITY</span>
              <span className="text-xs font-bold text-[#1A1A1A] block">24h Lab Access</span>
            </div>
            <div className="p-5 bg-white border border-[#1A1A1A] text-left shadow-[2px_2px_0px_0px_#1A1A1A]">
              <Globe className="w-5 h-5 text-[#5A5A40] mb-2" />
              <span className="text-[8px] font-mono text-[#5A5A40] block uppercase font-bold tracking-wider">WEB DOMAIN</span>
              <span className="text-xs font-bold text-[#1A1A1A] block">Official Hub Launch</span>
            </div>
          </div>

          {/* Interactive Phone callback solicitor */}
          <div className="p-6 bg-white border border-[#1A1A1A] space-y-4 flex-grow flex flex-col justify-between shadow-[3px_3px_0px_0px_#5A5A40]">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#5A5A40]" />
                <h4 className="text-[#1A1A1A] font-serif font-black text-xs uppercase tracking-wider">Inquiry callback desk</h4>
              </div>
              <p className="text-xs text-[#1A1A1A]/70 font-sans">
                Request a dedicated counselor callback instantly to discuss dynamic workspace scheduling and enrollment steps:
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!callbackRequested ? (
                <motion.form 
                  key="call-initiation"
                  onSubmit={handleRequestCallback}
                  className="space-y-2 mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="flex gap-2">
                    <input 
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="+91 Mobile number..."
                      className="flex-grow bg-[#FCFAF7] border-2 border-[#1A1A1A] text-[#1A1A1A] text-xs px-3 py-2.5 focus:outline-none focus:bg-white rounded-none transition-colors font-mono"
                    />
                    <button 
                      type="submit"
                      className="px-4 py-2 bg-[#1A1A1A] hover:bg-[#5A5A40] text-[#FCFAF7] font-mono font-bold text-xs rounded-none transition-all cursor-pointer shadow-[2px_2px_0px_0px_#5A5A40] flex shrink-0 items-center justify-center uppercase"
                    >
                      Request Call
                    </button>
                  </div>
                  {errorText && (
                    <span className="text-[9px] text-red-700 font-mono flex items-center gap-1 font-bold">
                      ⚠️ {errorText}
                    </span>
                  )}
                </motion.form>
              ) : (
                <motion.div
                  key="call-requested"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#FCFAF7] p-4 border border-[#1A1A1A] text-xs space-y-2.5 mt-2 shadow-[2px_2px_0px_0px_#1A1A1A]"
                >
                  <div className="flex items-center gap-2 text-[#5A5A40] font-mono font-bold text-[10px] uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-[#5A5A40] shrink-0" /> Call slot successfully booked
                  </div>
                  <p className="text-[#1A1A1A]/80 text-xs leading-relaxed font-sans">
                    Voucher generated for <span className="text-[#1A1A1A] font-bold font-mono">{phoneNumber}</span>. Our desk representatives are currently dialling open lines.
                  </p>
                  <div className="grid grid-cols-2 gap-2 border-t border-[#1A1A1A]/10 pt-2 text-[9px] font-mono font-bold">
                    <div>
                      <span className="text-[#5A5A40] block uppercase tracking-wider">Queue Order</span>
                      <span className="text-[#1A1A1A] text-xs">#{currentQueue} in line</span>
                    </div>
                    <div>
                      <span className="text-[#5A5A40] block uppercase tracking-wider">Est. Response Time</span>
                      <span className="text-[#5A5A40] text-xs">~{estWaitTime}</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Right Side: Dynamic Vector Street Map Layout */}
        <div className="lg:col-span-7 bg-white border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] p-5 md:p-6 flex flex-col justify-between self-stretch relative overflow-hidden">
          
          <div className="space-y-1 relative mb-4">
            <span className="text-[10px] font-mono text-[#5A5A40] uppercase tracking-widest flex items-center gap-1 font-bold">
              <Navigation className="w-3 h-3 text-[#5A5A40]" /> Geography Hub Locator
            </span>
            <h4 className="text-sm font-serif font-black text-[#1A1A1A] uppercase">Angadipuram & Perinthalmanna Hubs</h4>
            <p className="text-xs text-[#1A1A1A]/70">
              Easily accessible coordinates on Calicut Road. Review our local vector mapping:
            </p>
          </div>

          {/* Interactive Stylized Vector Map */}
          <div className="relative bg-[#FCFAF7] border border-[#1A1A1A] flex-grow h-72 md:h-80 overflow-hidden my-3">
            {/* Grid background lines simulating grid layout */}
            <div className="absolute inset-0 bg-[#1A1A1A] opacity-5 bg-[size:20px_20px]" style={{ backgroundImage: 'radial-gradient(#1a1a1a 1px, transparent 1px)' }} />

            {/* Stylized streets inside Angadipuram */}
            <svg className="absolute inset-0 w-full h-full text-slate-800" xmlns="http://www.w3.org/2000/svg">
              {/* Calicut Road Outline */}
              <line x1="-20" y1="180" x2="600" y2="180" stroke="#1A1A1A" strokeWidth="8" strokeLinecap="round" />
              <line x1="-20" y1="180" x2="600" y2="180" stroke="#FCFAF7" strokeWidth="1" strokeDasharray="4,4" opacity="0.6" />
              
              {/* Secondary Street */}
              <path d="M 120 0 Q 150 150 250 180 T 550 350" fill="none" stroke="#5A5A40" strokeWidth="3" strokeDasharray="3,3" />
              {/* Cross colony road */}
              <line x1="285" y1="180" x2="285" y2="350" stroke="#1A1A1A" strokeWidth="4" strokeLinecap="round" />
            </svg>

            {/* Street labels */}
            <div className="absolute top-[148px] left-6 font-mono text-[8px] text-[#1A1A1A] uppercase tracking-widest font-bold">
              Calicut Road (MC Road Hwy)
            </div>
            <div className="absolute bottom-40 right-28 font-mono text-[8px] text-[#5A5A40] uppercase tracking-widest font-bold rotate-45">
              Railway Lane
            </div>

            {/* Landmark 1: CyberWise Info Solutions */}
            <div className="absolute top-[180px] left-[285px] -translate-y-1/2 -translate-x-1/2 z-20">
              <span className="absolute -inset-2.5 bg-[#5A5A40]/15 animate-ping rounded-none" />
              <div className="w-8 h-8 bg-[#1A1A1A] border-2 border-[#FCFAF7] text-white font-serif font-black text-xs flex items-center justify-center cursor-pointer shadow-md hover:scale-110 transition-transform">
                CW
              </div>
              
              {/* Overlay Banner card */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white border border-[#1A1A1A] text-[#1A1A1A] p-2.5 rounded-none text-[10px] w-48 shadow-[2px_2px_0px_0px_#1A1A1A] pointer-events-none">
                <span className="text-[#5A5A40] font-mono font-bold block uppercase tracking-wider text-[8px]">🎯 ACADEMY CENTRE</span>
                <span className="font-serif font-bold block">CyberWise Skillversity</span>
                <span className="text-[#1A1A1A]/80 block pt-0.5 font-sans">Calicut Road, Pratheeksha Colony</span>
              </div>
            </div>

            {/* Landmark 2: Pratheeksha Colony Gate */}
            <div className="absolute top-[215px] left-[328px]">
              <div className="w-3 h-3 bg-[#5A5A40] border border-[#1A1A1A]" />
              <div className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white border border-[#1A1A1A] px-1.5 py-0.5 rounded-none text-[8px] text-[#1A1A1A] font-bold">
                Pratheeksha Colony
              </div>
            </div>

            {/* Landmark 3: Angadipuram Jn */}
            <div className="absolute top-10 left-[110px]">
              <div className="w-3 h-3 bg-[#1A1A1A] border border-[#FCFAF7]" />
              <div className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white border border-[#1A1A1A] px-1.5 py-0.5 rounded-none text-[8px] text-[#1A1A1A] font-bold">
                Angadipuram Jn ←
              </div>
            </div>

            {/* Landmark 4: Perinthalmanna Town */}
            <div className="absolute top-[166px] right-6">
              <div className="whitespace-nowrap bg-white border border-[#1A1A1A] px-2 py-0.5 rounded-none text-[8px] text-[#1A1A1A] font-mono tracking-wider font-bold">
                Perinthalmanna Town →
              </div>
            </div>
            
          </div>

          <div className="text-[10px] text-[#5A5A40] font-mono text-center flex items-center justify-center gap-1.5 select-none pt-2">
            <span>* GPS Anchor: 10.9702° N, 76.2235° E (Opposite Pratheeksha Gate).</span>
          </div>

        </div>
      </div>
    </div>
  );
}
