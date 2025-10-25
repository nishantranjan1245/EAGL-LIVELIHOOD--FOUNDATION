
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from "framer-motion";
import { Users, TreeDeciduous, Camera, Megaphone, Lightbulb, Heart, CheckCircle, Send } from "lucide-react";
import { base44 } from "@/api/base44Client";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

export default function Volunteer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    interests: [],
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const volunteerOpportunities = [
    {
      icon: TreeDeciduous,
      title: "Field Volunteering",
      description: "Join plantation drives, clean-up campaigns, and on-ground environmental projects.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Megaphone,
      title: "Awareness & Outreach",
      description: "Conduct workshops, spread awareness in schools and communities about environmental issues.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Camera,
      title: "Documentation & Media",
      description: "Capture our projects through photography, videography, and content creation.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Lightbulb,
      title: "Research & Innovation",
      description: "Assist in environmental research, data collection, and sustainable innovation projects.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await base44.integrations.Core.SendEmail({
        to: "info@eagllivelihood.org",
        subject: "New Volunteer Registration",
        body: `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
City: ${formData.city}
Interests: ${formData.interests.join(', ')}

Message:
${formData.message}
        `
      });

      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", city: "", interests: [], message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
    }

    setSubmitting(false);
  };

  useEffect(() => {
    document.title = "Volunteer With Us - EAGL Livelihood Foundation";
  }, []);

  return (
    <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.1, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <img
              src="/images/volunteer-hero-image.jpg"
              alt="Volunteers"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/95 via-teal-900/90 to-cyan-900/85"></div>

          {/* Circle of People */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-5xl"
                style={{
                  transform: `rotate(${i * 30}deg) translateY(-150px) rotate(-${i * 30}deg)` // Apply inverse rotation to keep icon upright
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              >
                👤
              </motion.div>
            ))}
          </div>

          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20 z-0">
            {[...Array(6)].map((_, i) => (
              <motion.line
                key={i}
                x1="50%"
                y1="50%"
                x2={`${50 + Math.cos((i * Math.PI) / 3) * 30}%`}
                y2={`${50 + Math.sin((i * Math.PI) / 3) * 30}%`}
                stroke="#10b981"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
              />
            ))}
          </svg>

          {/* Glowing Orbs */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl z-0"
            animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl z-0"
            animate={{ scale: [1.4, 1, 1.4], opacity: [0.6, 0.3, 0.6] }}
            transition={{ duration: 7, repeat: Infinity }}
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
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mb-8"
            >
              <Users className="w-32 h-32 mx-auto text-teal-300 drop-shadow-2xl" strokeWidth={2.5} />
            </motion.div>
            <motion.h1
              className="text-6xl md:text-8xl font-black text-white mb-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", bounce: 0.5, duration: 1 }}
            >
              <span className="bg-gradient-to-r from-teal-200 via-emerald-200 to-green-200 bg-clip-text text-transparent drop-shadow-2xl">
                Volunteer With Us
              </span>
            </motion.h1>
            <motion.p
              className="text-3xl text-teal-100 mb-6 font-bold drop-shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Be Part of Environmental Change 🌱
            </motion.p>
            <motion.p
              className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Join our passionate community of volunteers working towards a greener, more sustainable future.
              Your time and energy can make a real difference in protecting our planet.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-28 bg-gradient-to-b from-white via-emerald-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #059669 2px, transparent 0)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 bg-clip-text text-transparent">Why Volunteer With Us?</h2>
            <p className="text-xl text-gray-800 leading-relaxed font-medium">
              Volunteering with EAGL Livelihood Foundation is more than just giving your time — it's about being part of a
              movement that protects the planet and empowers communities. Whether you have a few hours or want to commit
              long-term, there's a place for you in our green family.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-28 bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 bg-clip-text text-transparent">Volunteer Opportunities</h2>
            <p className="text-2xl text-gray-800 font-semibold">Choose how you want to contribute</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {volunteerOpportunities.map((opportunity, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-emerald-50 p-10 rounded-3xl shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:-translate-y-2 border-4 border-emerald-200"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${opportunity.color} rounded-3xl flex items-center justify-center mb-6 shadow-2xl`}>
                  <opportunity.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-4">{opportunity.title}</h3>
                <p className="text-lg text-gray-800 leading-relaxed font-medium">{opportunity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-28 bg-gradient-to-b from-white via-emerald-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-white to-emerald-50 rounded-3xl shadow-2xl p-10 border-4 border-emerald-200"
          >
            <h2 className="text-4xl font-black text-center mb-8 bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">Register as a Volunteer</h2>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You for Registering!</h3>
                <p className="text-gray-700 mb-8 text-lg">
                  We've received your application. Our team will reach out to you soon with next steps.
                </p>
                <Button onClick={() => setSubmitted(false)} variant="outline">
                  Register Another Person
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your name"
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your@email.com"
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+91 1234567890"
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                      placeholder="Your city"
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Areas of Interest</Label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {['Field Work', 'Awareness Campaigns', 'Documentation', 'Research'].map((interest) => (
                      <div key={interest} className="flex items-center space-x-2 p-3 bg-emerald-50 rounded-lg">
                        <Checkbox
                          id={interest}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setFormData({...formData, interests: [...formData.interests, interest]});
                            } else {
                              setFormData({...formData, interests: formData.interests.filter(i => i !== interest)});
                            }
                          }}
                        />
                        <Label htmlFor={interest} className="cursor-pointer font-medium">{interest}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Why do you want to volunteer?</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your motivation..."
                    className="min-h-[120px] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-14 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-lg font-bold"
                >
                  {submitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Register Now
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 3px 3px, white 2px, transparent 0)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <Heart className="w-20 h-20 mx-auto mb-8 text-emerald-200" strokeWidth={2} />
            <h2 className="text-5xl md:text-7xl font-black mb-10 drop-shadow-2xl">Join Our Green Family</h2>
            <p className="text-2xl text-emerald-100 mb-12 leading-relaxed font-semibold drop-shadow-lg">
              Every volunteer makes a difference. Your time, energy, and passion can help create a better world.
              Let's work together for a sustainable tomorrow! 🌱
            </p>
            <Button asChild size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 text-xl px-12 py-8 shadow-2xl hover:shadow-white/50 font-black hover:scale-110 transition-all">
              <Link to={createPageUrl("Contact")}>
                📧 Have Questions? Contact Us
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
