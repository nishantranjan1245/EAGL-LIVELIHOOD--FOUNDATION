
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Building2, Globe, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { base44 } from "@/api/base44Client";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contact Us - EAGL Livelihood Foundation";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await base44.integrations.Core.SendEmail({
        to: "info@eagllivelihood.org",
        subject: `Contact Form: ${formData.subject}`,
        body: `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}
        `
      });

      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "General Inquiry", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
    }

    setSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email (General Enquiries)",
      details: "info@eagllivelihood.org",
      color: "from-green-600 to-green-700"
    },
    {
      icon: Mail,
      title: "CSR & Partnerships",
      details: "csr@eagllivelihood.org",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91 9876543210", // Updated phone number as per request
      color: "from-purple-600 to-purple-700"
    },
    {
      icon: Globe,
      title: "Website",
      details: "www.eagllivelihood.org",
      color: "from-cyan-600 to-cyan-700"
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", url: "#", color: "from-blue-600 to-blue-700" },
    { icon: Twitter, name: "Twitter / X", url: "#", color: "from-sky-500 to-sky-600" },
    { icon: Instagram, name: "Instagram", url: "#", color: "from-pink-600 to-purple-600" },
    { icon: Linkedin, name: "LinkedIn", url: "#", color: "from-blue-700 to-blue-800" },
    { icon: Youtube, name: "YouTube", url: "#", color: "from-red-600 to-red-700" }
  ];

  return (
    <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.2, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2000" 
              alt="Contact us"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/95 via-teal-900/90 to-cyan-900/85"></div>
          
          {/* Spiral Mail Animation */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-16 h-16 border-4 border-cyan-400/30 rounded-lg flex items-center justify-center text-3xl"
              initial={{
                x: typeof window !== 'undefined' ? window.innerWidth / 2 : 500,
                y: typeof window !== 'undefined' ? window.innerHeight / 2 : 400,
                opacity: 0
              }}
              animate={{
                x: [
                  typeof window !== 'undefined' ? window.innerWidth / 2 : 500,
                  Math.cos((i * Math.PI) / 4) * 300 + (typeof window !== 'undefined' ? window.innerWidth / 2 : 500)
                ],
                y: [
                  typeof window !== 'undefined' ? window.innerHeight / 2 : 400,
                  Math.sin((i * Math.PI) / 4) * 300 + (typeof window !== 'undefined' ? window.innerHeight / 2 : 400)
                ],
                opacity: [0, 0.6, 0],
                rotate: [0, 360]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
            >
              ✉️
            </motion.div>
          ))}

          {/* Glowing Orbs */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.4, 1], 
              x: [0, 60, 0],
              y: [0, -60, 0],
              opacity: [0.3, 0.6, 0.3] 
            }}
            transition={{ duration: 7, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-gradient-to-br from-emerald-500/30 to-teal-500/30 rounded-full blur-3xl"
            animate={{ 
              scale: [1.4, 1, 1.4], 
              x: [0, -60, 0],
              y: [0, 60, 0],
              opacity: [0.6, 0.3, 0.6] 
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{
                rotate: [0, 15, -15, 0],
                scale: [1, 1.15, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mb-8"
            >
              <Mail className="w-28 h-28 mx-auto text-cyan-300 drop-shadow-2xl" strokeWidth={2.5} />
            </motion.div>
            <motion.h1 
              className="text-5xl md:text-7xl font-black text-white mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 10, duration: 1 }}
            >
              <span className="bg-gradient-to-r from-emerald-200 via-teal-100 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl">
                📞 CONTACT US
              </span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4"
            >
              <h2 className="text-3xl md:text-4xl text-emerald-200 font-bold">🌿 We'd Love to Hear From You</h2>
              <p className="text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-lg">
                Whether you want to volunteer, collaborate, or simply learn more about our environmental initiatives — we're here to connect.
                Reach out to us and let's take a step together towards a greener, more sustainable world. 🌍
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Registered Office Section */}
      <section className="py-24 bg-gradient-to-b from-white via-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-emerald-50 to-teal-50 p-10 rounded-3xl shadow-2xl border-4 border-emerald-200"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-black text-gray-900 bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">🏢 Registered Office</h2>
            </div>
            
            <div className="space-y-6 text-gray-800">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">EAGL LIVELIHOOD FOUNDATION</h3>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-emerald-700 mb-2">📍 Address:</h4>
                <p className="text-lg leading-relaxed">
                  D Wing 1202, Near Pariwar Housing Society,<br />
                  Kanjurmarg East, Maharashtra, India – 400042
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-emerald-700 mb-2">📋 Legal Details:</h4>
                <ul className="space-y-2 text-lg">
                  <li><strong>CIN:</strong> U74999MH2017NPL302650</li>
                  <li><strong>FCRA Registration No.:</strong> 083781770</li>
                  <li><strong>Registered on:</strong> 08 December 2017</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-24 bg-gradient-to-b from-white via-teal-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">📧 Contact Information</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 border-2 border-emerald-100 hover:border-emerald-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
                <p className="text-gray-700 font-medium break-words">{info.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-24 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="bg-white p-10 rounded-3xl shadow-2xl border-4 border-cyan-200"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <Clock className="w-16 h-16 text-cyan-600" />
              <h2 className="text-4xl font-black text-gray-900 bg-gradient-to-r from-cyan-700 to-blue-700 bg-clip-text text-transparent">🕓 Office Hours</h2>
            </div>
            
            <div className="space-y-4 text-center">
              <div className="flex items-center justify-center gap-3 text-xl">
                <Clock className="w-6 h-6 text-emerald-600" />
                <p className="font-bold text-gray-900">Monday – Friday:</p>
                <p className="text-gray-700">10:00 AM to 6:00 PM</p>
              </div>
              <div className="flex items-center justify-center gap-3 text-xl">
                <Clock className="w-6 h-6 text-emerald-600" />
                <p className="font-bold text-gray-900">Saturday:</p>
                <p className="text-gray-700">10:00 AM to 2:00 PM</p>
              </div>
              <div className="flex items-center justify-center gap-3 text-xl">
                <Clock className="w-6 h-6 text-gray-400" />
                <p className="font-bold text-gray-900">Sunday:</p>
                <p className="text-gray-500">Closed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gradient-to-b from-white via-emerald-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-3xl shadow-2xl border-4 border-emerald-200"
          >
            <div className="bg-white p-10 rounded-3xl shadow-xl">
              <h2 className="text-4xl font-black text-gray-900 mb-3 text-center bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">🌱 Send Us a Message</h2>
              <p className="text-gray-700 text-center mb-8 font-medium text-lg">Fill out the form below and our team will get back to you within 2–3 working days.</p>
              
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-16 h-16 text-green-600" />
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 mb-4">Thank You! 🎉</h3>
                  <p className="text-xl text-gray-700 mb-8">
                    We've received your message and will get back to you soon.
                  </p>
                  <Button onClick={() => setSubmitted(false)} variant="outline" className="text-lg px-8 py-6">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-base font-bold">Full Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Your name"
                        className="h-12 text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-base font-bold">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="your@email.com"
                        className="h-12 text-base"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-base font-bold">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+91 1234567890"
                        className="h-12 text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-base font-bold">Subject *</Label>
                      <Select value={formData.subject} onValueChange={(value) => setFormData({...formData, subject: value})}>
                        <SelectTrigger className="h-12 text-base">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Volunteering">Volunteering</SelectItem>
                          <SelectItem value="Donation / CSR">Donation / CSR</SelectItem>
                          <SelectItem value="Media / Collaboration">Media / Collaboration</SelectItem>
                          <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-base font-bold">Message / Query *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell us more about your inquiry..."
                      className="min-h-[180px] resize-none text-base"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={submitting}
                    className="w-full h-16 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xl font-black shadow-xl"
                  >
                    {submitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-6 h-6 mr-2" />
                        📩 Submit Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-gradient-to-b from-white via-teal-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-black text-gray-900 mb-4 bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">📍 Find Us on Map</h2>
            <p className="text-xl text-gray-700 font-medium">EAGL Livelihood Foundation, Kanjurmarg East, Maharashtra, India – 400042</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            transition={{ duration: 0.6 }}
            className="bg-white p-4 rounded-3xl shadow-2xl border-4 border-emerald-200"
          >
            <div className="aspect-video rounded-2xl overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8282446167217!2d72.8877!3d19.1258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA3JzMyLjkiTiA3MsKwNTMnMTUuNyJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="EAGL Livelihood Foundation Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 bg-clip-text text-transparent">🌏 Connect With Us on Social Media</h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed font-medium">
              Stay updated with our latest drives, green campaigns, and impact stories. Follow us, share our work, and inspire others to act for the Earth. 🌿
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-emerald-100 hover:border-emerald-300 hover:-translate-y-2 group text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <social.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-sm font-bold text-gray-900">{social.name}</h3>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-28 bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 3px 3px, white 2px, transparent 0)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8 drop-shadow-2xl">💬 Join the Conversation</h2>
            <p className="text-2xl text-emerald-100 mb-12 leading-relaxed font-bold drop-shadow-lg max-w-3xl mx-auto">
              "The planet doesn't need a handful of perfect environmentalists — it needs millions of people doing what they can." 🌎
            </p>
            <p className="text-xl text-cyan-100 mb-12 font-semibold drop-shadow-lg">
              Take that first step today — reach out, get involved, and be part of the change.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 text-xl px-12 py-8 font-black shadow-2xl hover:scale-110 transition-all">
                <Link to={createPageUrl("Volunteer")}>
                  🌱 Volunteer With Us
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white/10 backdrop-blur-md border-4 border-white text-white hover:bg-white hover:text-emerald-700 text-xl px-12 py-8 font-black hover:scale-110 transition-all">
                <Link to={createPageUrl("Donate")}>
                  💚 Partner for CSR
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white/10 backdrop-blur-md border-4 border-white text-white hover:bg-white hover:text-emerald-700 text-xl px-12 py-8 font-black hover:scale-110 transition-all">
                <Link to={createPageUrl("Donate")}>
                  💧 Donate for the Environment
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
