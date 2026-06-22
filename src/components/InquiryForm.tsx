/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROGRAMS } from '../data';
import { InquiryFormData } from '../types';
import { 
  Send, 
  Check, 
  MapPin, 
  Clock, 
  Users, 
  Barcode, 
  AlertCircle,
  RefreshCw
} from 'lucide-react';

interface InquiryFormProps {
  preselectedCourseId: string;
}

export default function InquiryForm({ preselectedCourseId }: InquiryFormProps) {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    email: '',
    phone: '',
    course: 'digital-marketing',
    experience: 'beginner',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [ticketData, setTicketData] = useState<any | null>(null);

  // Sync preselectedCourseId when changed
  useEffect(() => {
    if (preselectedCourseId) {
      setFormData(prev => ({ ...prev, course: preselectedCourseId }));
    }
  }, [preselectedCourseId]);

  const validateForm = (): boolean => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) errors.name = 'Please enter your beautiful name.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please provide a valid email address.';
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      errors.phone = 'Phone number is required (at least 8 digits).';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API registration delay
    setTimeout(() => {
      setIsSubmitting(false);
      const selectedProgramName = PROGRAMS.find(p => p.id === formData.course)?.title || formData.course;
      const receiptId = `CW-${Math.floor(100000 + Math.random() * 900000)}`;
      
      setTicketData({
        id: receiptId,
        candidateName: formData.name,
        candidatePhone: formData.phone,
        email: formData.email,
        track: selectedProgramName,
        experience: formData.experience,
        dateSubmitted: new Date().toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        }),
        duration: PROGRAMS.find(p => p.id === formData.course)?.duration || '3 Months'
      });
      
      // Reset form fields
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: 'digital-marketing',
        experience: 'beginner',
        message: ''
      });
    }, 1200);
  };

  return (
    <div className="section-container" id="admission-inquiry">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Text and Institutional Commitment specifications */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-8">
          <span className="font-mono text-[9px] uppercase font-bold text-[#5A5A40] tracking-widest block font-bold">// Admission Desk</span>
          <h2 className="text-3xl md:text-5xl font-serif text-[#1A1A1A] font-semibold leading-tight text-left">
            Launch Your Digital Career Today
          </h2>
          <div className="w-16 h-[2px] bg-[#1A1A1A]" />
          <p className="text-sm text-[#1A1A1A]/80 leading-relaxed font-sans text-justify">
            Whether you want to specialize in high-impact Facebook campaigns, master motion curves in Premiere or Code secure bespoke WordPress applications, CyberWise provides the structure, the experts, and the client briefs to get you there.
          </p>

          <div className="space-y-4 pt-4 border-t border-[#1A1A1A]/20">
            <div className="flex items-start gap-4">
              <div className="p-2.5 bg-[#F4F0E6] border border-[#1A1A1A] text-[#1A1A1A]">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold text-[#1A1A1A] uppercase tracking-wider">Small Agency Batches</h4>
                <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">Mentorship operates better when limits exist. We hold spaces to only 12-15 candidates per expert track to focus on projects quality.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2.5 bg-[#F4F0E6] border border-[#1A1A1A] text-[#1A1A1A]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold text-[#1A1A1A] uppercase tracking-wider">Flex Scheduling</h4>
                <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">Choose between morning workshops or customized weekend laboratories designed for freelancers and active professionals.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2.5 bg-[#F4F0E6] border border-[#1A1A1A] text-[#1A1A1A]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold text-[#1A1A1A] uppercase tracking-wider">Integrated Angadipuram Hub</h4>
                <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">Train side-by-side with CyberWise Info Solutions creative engineers inside real operating agency environments.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Inquiry Form OR Instant Boarding Ticket */}
        <div className="lg:col-span-7 bg-white border-2 border-[#1A1A1A] p-6 md:p-8 relative shadow-[4px_4px_0px_0px_#1A1A1A]">
          <AnimatePresence mode="wait">
            {!ticketData ? (
              <motion.div
                key="inquiry-form"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <div className="mb-6 pb-4 border-b border-[#1A1A1A]/10">
                  <h3 className="text-base md:text-lg font-serif font-bold text-[#1A1A1A] mb-1.5 flex items-center gap-2">
                    <Send className="w-4 h-4 text-[#5A5A40]" /> Apply or Inquire
                  </h3>
                  <p className="text-xs text-[#1A1A1A]/75">
                    Provide your details below. A career counselor from our Perinthalmanna academy will contact you to discuss scheduling and fees.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label className="text-[10px] font-mono font-bold text-[#5A5A40] block mb-1 uppercase tracking-wider">Full Name</label>
                    <input 
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                      placeholder="e.g., Jishnu Dev"
                      className={`w-full bg-[#FCFAF7] border-2 ${
                        formErrors.name ? 'border-red-500' : 'border-[#1A1A1A]'
                      } text-[#1A1A1A] text-xs px-3.5 py-2.5 focus:outline-none focus:bg-white rounded-none transition-colors font-mono`}
                    />
                    {formErrors.name && (
                      <span className="text-[10px] text-red-700 flex items-center gap-1 mt-1 font-mono">
                        <AlertCircle className="w-3 h-3" /> {formErrors.name}
                      </span>
                    )}
                  </div>

                  {/* Dual Inputs: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-mono font-bold text-[#5A5A40] block mb-1 uppercase tracking-wider">Email Address</label>
                      <input 
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                        placeholder="e.g., jishnu@gmail.com"
                        className={`w-full bg-[#FCFAF7] border-2 ${
                          formErrors.email ? 'border-red-500' : 'border-[#1A1A1A]'
                        } text-[#1A1A1A] text-xs px-3.5 py-2.5 focus:outline-none focus:bg-white rounded-none transition-colors font-mono`}
                      />
                      {formErrors.email && (
                        <span className="text-[10px] text-red-700 flex items-center gap-1 mt-1 font-mono">
                          <AlertCircle className="w-3 h-3" /> {formErrors.email}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="text-[10px] font-mono font-bold text-[#5A5A40] block mb-1 uppercase tracking-wider">Phone Number</label>
                      <input 
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))}
                        placeholder="e.g., +91 944..."
                        className={`w-full bg-[#FCFAF7] border-2 ${
                          formErrors.phone ? 'border-red-500' : 'border-[#1A1A1A]'
                        } text-[#1A1A1A] text-xs px-3.5 py-2.5 focus:outline-none focus:bg-white rounded-none transition-colors font-mono`}
                      />
                      {formErrors.phone && (
                        <span className="text-[10px] text-red-700 flex items-center gap-1 mt-1 font-mono">
                          <AlertCircle className="w-3 h-3" /> {formErrors.phone}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Program Selector */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-mono font-bold text-[#5A5A40] block mb-1 uppercase tracking-wider">Desired Track</label>
                      <select
                        value={formData.course}
                        onChange={(e) => setFormData(p => ({ ...p, course: e.target.value }))}
                        className="w-full bg-[#FCFAF7] border-2 border-[#1A1A1A] text-[#1A1A1A] text-xs px-3.5 py-2.5 focus:outline-none rounded-none cursor-pointer font-mono"
                      >
                        {PROGRAMS.map(p => (
                          <option key={p.id} value={p.id}>{p.title}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] font-mono font-bold text-[#5A5A40] block mb-1 uppercase tracking-wider">Experience Level</label>
                      <select
                        value={formData.experience}
                        onChange={(e) => setFormData(p => ({ ...p, experience: e.target.value }))}
                        className="w-full bg-[#FCFAF7] border-2 border-[#1A1A1A] text-[#1A1A1A] text-xs px-3.5 py-2.5 focus:outline-none rounded-none cursor-pointer font-mono"
                      >
                        <option value="beginner">Beginner (No past coding or design background)</option>
                        <option value="intermediate">Intermediate (Amateur practice / self-taught)</option>
                        <option value="advanced">Freelancer (Seeking agency setup standards)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message details */}
                  <div>
                    <label className="text-[10px] font-mono font-bold text-[#5A5A40] block mb-1 uppercase tracking-wider">Specific Questions? (Optional)</label>
                    <textarea 
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                      placeholder="e.g., I would like to attend weekend classes. Please advise course fee patterns."
                      className="w-full bg-[#FCFAF7] border-2 border-[#1A1A1A] text-[#1A1A1A] text-xs px-3.5 py-2.5 focus:outline-none focus:bg-white rounded-none transition-colors resize-none font-sans"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-[#1A1A1A] hover:bg-[#5A5A40] disabled:opacity-50 text-[#FCFAF7] rounded-none font-mono font-bold text-xs tracking-wider transition-all uppercase flex items-center justify-center gap-2 cursor-pointer shadow-[3px_3px_0px_0px_#5A5A40]"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin text-[#FCFAF7]" /> Transmitting Application...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#FCFAF7]" /> Submit Admission Request
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            ) : (
              /* Success Voucher/Ticket Details */
              <motion.div
                key="success-ticket"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Vintage Boarding Ticket Layout */}
                <div className="bg-[#FCFAF7] border-2 border-[#1A1A1A] overflow-hidden relative shadow-[4px_4px_0px_0px_#1A1A1A]">
                  {/* Decorative cutouts representing real ticket punch */}
                  <div className="absolute top-1/2 -left-3.5 w-7 h-7 bg-[#FCFAF7] border-2 border-[#1A1A1A] rounded-full -translate-y-1/2 z-10" />
                  <div className="absolute top-1/2 -right-3.5 w-7 h-7 bg-[#FCFAF7] border-2 border-[#1A1A1A] rounded-full -translate-y-1/2 z-10" />
                  
                  {/* Ticket Header */}
                  <div className="p-5 border-b-2 border-dashed border-[#1A1A1A] flex justify-between items-center bg-[#F4F0E6]">
                    <div className="space-y-0.5">
                      <h4 className="font-serif font-black text-sm text-[#1A1A1A] tracking-wider uppercase">CyberWise Skillversity</h4>
                      <p className="text-[9px] text-[#5A5A40] font-mono uppercase tracking-widest font-bold">Angadipuram Terminal desk</p>
                    </div>
                    <span className="px-3 py-1 bg-[#1A1A1A] text-[#FCFAF7] font-mono text-[9px] font-bold tracking-wider">
                      CW-PASS // CONFIRMED
                    </span>
                  </div>

                  {/* Ticket Body details */}
                  <div className="p-5 grid grid-cols-2 gap-y-4 gap-x-2 text-xs">
                    <div>
                      <span className="text-[8px] text-[#5A5A40] block font-mono uppercase font-bold tracking-wider">CANDIDATE NAME</span>
                      <span className="text-[#1A1A1A] font-serif font-bold text-sm block">{ticketData.candidateName}</span>
                    </div>
                    <div>
                      <span className="text-[8px] text-[#5A5A40] block font-mono uppercase font-bold tracking-wider">REGISTRATION ID</span>
                      <span className="text-[#1A1A1A] font-bold font-mono text-sm block">{ticketData.id}</span>
                    </div>
                    <div>
                      <span className="text-[8px] text-[#5A5A40] block font-mono uppercase font-bold tracking-wider">DESIRED CERTIFIED TRACK</span>
                      <span className="text-[#1A1A1A] font-bold block">{ticketData.track}</span>
                    </div>
                    <div>
                      <span className="text-[8px] text-[#5A5A40] block font-mono uppercase font-bold tracking-wider">EST. LENGTH</span>
                      <span className="text-[#1A1A1A] font-bold block">{ticketData.duration}</span>
                    </div>
                    <div>
                      <span className="text-[8px] text-[#5A5A40] block font-mono uppercase font-bold tracking-wider">EXPERIENCE PROFILE</span>
                      <span className="text-[#1A1A1A] font-mono text-[10px] font-bold uppercase">{ticketData.experience}</span>
                    </div>
                    <div>
                      <span className="text-[8px] text-[#5A5A40] block font-mono uppercase font-bold tracking-wider">CAMPUS LOCATION</span>
                      <span className="text-[#1A1A1A] font-bold text-[10px]">Angadipuram Premium Lab</span>
                    </div>
                  </div>

                  {/* Dashboard barcode element */}
                  <div className="px-5 pb-5 pt-3 border-t-2 border-dashed border-[#1A1A1A] flex justify-between items-center bg-[#F4F0E6]/55">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[8px] text-[#5A5A40] font-mono uppercase font-bold tracking-wider">VERIFY CODE TYPE</span>
                      <span className="text-[#1A1A1A] font-mono text-[10px] font-bold tracking-tight">CYBER-WISE-DIGITAL-LAB-ADMISSION</span>
                    </div>
                    <Barcode className="w-20 h-8 text-[#1A1A1A] flex shrink-0" />
                  </div>
                </div>

                <div className="space-y-3.5 text-center">
                  <div className="inline-flex items-center justify-center p-2 bg-[#5A5A40]/10 text-[#5A5A40] border border-[#5A5A40]/20 rounded-none">
                    <Check className="w-5 h-5 text-[#5A5A40]" />
                  </div>
                  <h4 className="text-base font-serif font-bold text-[#1A1A1A] uppercase tracking-wide">Application Recorded Successfully!</h4>
                  <p className="text-xs text-[#1A1A1A]/70 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-[#1A1A1A] font-bold">{ticketData.candidateName}</span>. A training mentor from CyberWise Info Solutions Academy will phone you shortly at <span className="text-[#1A1A1A] font-mono font-bold underline decoration-[#5A5A40]">{ticketData.candidatePhone}</span> or message <span className="text-[#1A1A1A] font-bold">{ticketData.email}</span> to schedule your physical lab visit.
                  </p>

                  <button
                    onClick={() => setTicketData(null)}
                    className="mt-2 text-xs font-mono font-bold text-[#5A5A40] hover:text-[#1A1A1A] transition-colors flex items-center justify-center gap-1 mx-auto uppercase tracking-widest border-b border-[#5A5A40]"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
