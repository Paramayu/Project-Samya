import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Linkedin, Send, CheckCircle2, Mail, MapPin } from 'lucide-react';
import PrimaryLogo from './PrimaryLogo';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    // Simulate real database or email submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <footer id="contact-us" className="bg-[#FAFAFA] border-t border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-24">
        {/* Contact Header */}
        <div className="mb-16 text-center">
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-red-500 font-semibold bg-red-50 px-3 py-1 rounded-full">
            Connect
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-gray-900 font-bold tracking-tight mt-3">
            Walk With Us
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-sm mt-3 font-light leading-relaxed">
            Whether you want to volunteer, partner, support our school work, or share feedback, our youth coordinators want to hear from you.
          </p>
        </div>

        {/* Form and Info Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.01)]">
            <h3 className="font-display text-lg font-bold text-gray-900 mb-6">
              Send a Direct Message
            </h3>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="contact-form"
                  onSubmit={handleSubmit} 
                  className="flex flex-col gap-5"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Name input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs font-mono uppercase tracking-wider text-gray-400">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Aarav Sharma"
                        className="px-4 py-3 rounded-xl border border-gray-100 bg-[#FAFAFA] text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-red-200 focus:bg-white transition-all duration-300"
                      />
                    </div>

                    {/* Email input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-gray-400">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. aarav@domain.com"
                        className="px-4 py-3 rounded-xl border border-gray-100 bg-[#FAFAFA] text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-red-200 focus:bg-white transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Message input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-mono uppercase tracking-wider text-gray-400">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How would you like to build equity together?"
                      className="px-4 py-3 rounded-xl border border-gray-100 bg-[#FAFAFA] text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-red-200 focus:bg-white transition-all duration-300 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gray-900 hover:bg-red-500 text-sm font-semibold text-white transition-all duration-300 cursor-pointer disabled:opacity-50 select-none shadow-md hover:shadow-lg active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <span className="font-mono text-xs animate-pulse">Delivering footprints...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="submitted-state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center flex flex-col items-center gap-4 bg-red-50/10 rounded-2xl border border-red-100/50"
                >
                  <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-gray-900">Message Delivered Safely</h4>
                  <p className="text-xs text-gray-500 max-w-sm px-6 leading-relaxed">
                    Thank you for your response! A Project SAMYA youth representative will respond to your inquiry via email within 48 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-mono text-red-500 hover:underline mt-2 focus:outline-none cursor-pointer"
                  >
                    Send another response
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Info Panel */}
          <div className="lg:col-span-5 flex flex-col gap-8 lg:pl-4">
            <div className="flex flex-col gap-6 bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.01)]">
              <h3 className="font-display text-lg font-bold text-gray-900">
                Official Channels
              </h3>

              <div className="flex flex-col gap-5">
                {/* Email Support */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 border border-gray-100 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono tracking-wider uppercase text-gray-400">E-mail Correspondence</p>
                    <p className="text-sm font-medium text-gray-800 mt-0.5 font-mono">
                      <a href="mailto:projectsamya2425@gmail.com" className="hover:text-red-500 transition-colors">
                        projectsamya2425@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Main office location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 border border-gray-100 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono tracking-wider uppercase text-gray-400">Headquarters Hub</p>
                    <p className="text-sm font-medium text-gray-800 mt-0.5">Kathmandu & Kailali, Nepal</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Link cards */}
            <div className="flex flex-col gap-4">
              <span className="text-xs font-mono uppercase tracking-widest text-gray-400 pl-1">
                Follow our footprints
              </span>
              <div className="grid grid-cols-2 gap-4">
                {/* Instagram Direct Link */}
                <a
                  href="https://www.instagram.com/project_samya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-gray-100 bg-white hover:border-red-200 hover:bg-red-50/5 flex items-center gap-3 group transition-all duration-300 shadow-sm"
                  id="instagram-link"
                >
                  <div className="w-9 h-9 rounded-lg bg-pink-50 text-pink-500 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-gray-800 leading-tight">Instagram</span>
                    <span className="text-[10px] text-gray-400 mt-0.5 font-mono">@project_samya</span>
                  </div>
                </a>

                {/* LinkedIn Direct Link */}
                <a
                  href="https://www.linkedin.com/company/project-samya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-gray-100 bg-white hover:border-blue-200 hover:bg-blue-50/5 flex items-center gap-3 group transition-all duration-300 shadow-sm"
                  id="linkedin-link"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-gray-800 leading-tight">LinkedIn</span>
                    <span className="text-[10px] text-gray-400 mt-0.5 font-mono">Project SAMYA</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Global Footer Subtext and Copyright */}
        <div className="border-t border-gray-100/80 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-2">
            <PrimaryLogo className="w-8 h-8" />
            <p className="text-xs text-gray-400 font-medium">
              © 2026 Project SAMYA (समानताको पाइला). All Rights Reserved.
            </p>
          </div>
          <p className="text-[11px] font-mono text-gray-400 tracking-wider">
            YOUTH-LED SOCIAL IMPACT • NEPAL
          </p>
        </div>
      </div>
    </footer>
  );
}
