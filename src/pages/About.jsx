
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TreeDeciduous, Droplets, Wheat, Recycle, Users, Lightbulb, Heart, Target, Eye, CheckCircle2 } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

export default function About() {
  const objectives = [
    "Promote large-scale tree plantation and afforestation in rural and urban areas.",
    "Support water conservation through rainwater harvesting, watershed development, and sustainable usage.",
    "Encourage climate-smart agriculture and organic farming practices.",
    "Create awareness about waste management and plastic-free living.",
    "Empower local communities through green livelihood training and eco-enterprises.",
    "Promote renewable energy and sustainable rural innovations."
  ];

  const keyPrograms = [
    "Tree Plantation & Ecosystem Restoration",
    "Water Resource Management",
    "Organic & Sustainable Farming",
    "Waste Reduction & Recycling Awareness",
    "Rural Livelihood Training Linked with Climate Action"
  ];

  const boardMembers = [
    {
      name: "NILRATAN RAMBHAU SHENDE",
      role: "Founder & Managing Director"
    },
    {
      name: "VAISHALI NILRATAN SHENDE",
      role: "Director (Community Development)"
    },
    {
      name: "ASHOK KUMAR MOCHERLA",
      role: "Director (Operations & Finance)"
    }
  ];

  const approaches = [
    {
      title: "Community-Centric",
      description: "We believe lasting change begins with people. Every project is built around local participation and ownership.",
      icon: Users,
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "Sustainable & Scalable",
      description: "From tree planting to training, our efforts are designed for long-term ecological balance and measurable outcomes.",
      icon: TreeDeciduous,
      color: "from-teal-500 to-cyan-600"
    },
    {
      title: "Collaborative",
      description: "We partner with governments, corporates, and local organizations to expand the reach and impact of our initiatives.",
      icon: Heart,
      color: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Hero Section with Network Animation */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.2, y: 0 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <img
              src="/images/about-hero-image.jpg"
              alt="Nature conservation"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/95 via-teal-800/95 to-cyan-900/90"></div>

          {/* Animated Network Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20">
            {[...Array(8)].map((_, i) => (
              <motion.line
                key={i}
                x1={`${Math.random() * 100}%`}
                y1={`${Math.random() * 100}%`}
                x2={`${Math.random() * 100}%`}
                y2={`${Math.random() * 100}%`}
                stroke="#10b981"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              />
            ))}
          </svg>

          {/* Growing Tree Animation */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-20">
            <motion.div
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 0.3 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="origin-bottom"
            >
              <TreeDeciduous className="w-64 h-64 text-emerald-400" strokeWidth={1.5} />
            </motion.div>
          </div>

          {/* Ripple Effects */}
          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute border-2 border-emerald-400/20 rounded-full"
                initial={{ width: 100, height: 100, opacity: 0.8 }}
                animate={{
                  width: [100, 600],
                  height: [100, 600],
                  opacity: [0.8, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 1,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>

          {/* Glow Effects */}
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
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
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mb-8"
            >
              <Heart className="w-24 h-24 mx-auto text-emerald-300 drop-shadow-2xl" strokeWidth={2} />
            </motion.div>
            <motion.h1
              className="font-black mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-5xl md:text-7xl lg:text-8xl">
                <span className="bg-gradient-to-r from-emerald-200 via-teal-100 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl">
                  About Us
                </span>
              </div>
            </motion.h1>
            <motion.p
              className="text-2xl md:text-3xl text-emerald-100 max-w-3xl mx-auto leading-relaxed font-semibold drop-shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Building a sustainable future through community empowerment and environmental restoration 🌱
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-28 bg-[#E0F7F4] relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #059669 2px, transparent 0)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={scaleIn}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-10 text-center">
              <span className="bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 bg-clip-text text-transparent">
                Who We Are
              </span>
            </h2>
            <div className="space-y-6 text-xl text-gray-800 leading-relaxed font-medium bg-gradient-to-br from-white to-emerald-50 p-10 rounded-3xl shadow-2xl border-4 border-emerald-200">
              {/* Glow Effect */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-400/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-teal-400/20 rounded-full blur-3xl"></div>

              <p className="relative z-10">
                EAGL Livelihood Foundation is a registered non-profit organization working to protect the environment,
                promote sustainable livelihoods, and build climate-resilient communities across India.
              </p>
              <p className="relative z-10">
                Founded on <span className="font-black text-2xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">8 December 2017</span>, the foundation is registered under
                Section 8 of the Companies Act, 2013 <span className="text-lg text-gray-600 font-semibold">(CIN: U74999MH2017NPL302650)</span> and holds
                <span className="font-black text-2xl bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent"> FCRA Registration No. 083781770</span>.
              </p>
              <p className="text-2xl font-bold bg-gradient-to-br from-emerald-100 to-teal-100 border-l-8 border-emerald-600 pl-8 py-6 rounded-r-2xl shadow-xl relative z-10">
                Our work is driven by one core belief — when communities are empowered to live sustainably,
                both people and the planet thrive together. 🌍
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-28 bg-[#D4F1F4] relative overflow-hidden">
        {/* Animated Background Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-emerald-300/30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-300/30 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
          transition={{ duration: 15, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={scaleIn}
              transition={{ duration: 0.7 }}
              className="bg-gradient-to-br from-white to-emerald-50 p-12 rounded-3xl shadow-2xl border-4 border-emerald-200 hover:shadow-emerald-500/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-emerald-500/50">
                <Target className="w-12 h-12 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-4xl font-black text-gray-900 mb-6 bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">Our Mission</h3>
              <p className="text-xl text-gray-800 leading-relaxed font-medium">
                To protect and restore natural ecosystems through community-led climate action, capacity building,
                and sustainable livelihood opportunities — ensuring a balanced relationship between people and nature.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={scaleIn}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-gradient-to-br from-white to-cyan-50 p-12 rounded-3xl shadow-2xl border-4 border-cyan-200 hover:shadow-cyan-500/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-600 to-blue-700 rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-cyan-500/50">
                <Eye className="w-12 h-12 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-4xl font-black text-gray-900 mb-6 bg-gradient-to-r from-cyan-700 to-blue-700 bg-clip-text text-transparent">Our Vision</h3>
              <p className="text-xl text-gray-800 leading-relaxed font-medium">
                A green and resilient planet where every individual participates in protecting the environment and
                sustaining life through eco-conscious living and livelihood practices.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-28 bg-[#E0F7F4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 bg-clip-text text-transparent">
                Our Objectives
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-5 p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 border-4 border-emerald-200 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-xl shadow-emerald-500/50">
                  <CheckCircle2 className="w-7 h-7 text-white" strokeWidth={3} />
                </div>
                <p className="text-lg text-gray-800 font-bold leading-relaxed">{objective}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-28 bg-[#D4F1F4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={scaleIn}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-10 text-center">
              <span className="bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 bg-clip-text text-transparent">
                What We Do
              </span>
            </h2>
            <p className="text-xl text-gray-800 mb-16 text-center max-w-4xl mx-auto leading-relaxed font-semibold">
              Our programs are designed to connect environmental restoration with community empowerment.
              We work directly with local groups, self-help collectives, and youth networks to implement
              on-ground solutions that protect nature and improve lives.
            </p>

            <div className="bg-gradient-to-br from-white to-emerald-50 p-12 rounded-3xl shadow-2xl border-4 border-teal-200 hover:shadow-teal-500/50 transition-all duration-300">
              <h3 className="text-3xl font-black text-gray-900 mb-8 bg-gradient-to-r from-teal-700 to-cyan-700 bg-clip-text text-transparent">Our Key Programs Include:</h3>
              <ul className="space-y-5">
                {keyPrograms.map((program, index) => (
                  <li key={index} className="flex items-center gap-4 text-xl text-gray-800 font-semibold">
                    <div className="w-5 h-5 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex-shrink-0 shadow-lg"></div>
                    {program}
                  </li>
                ))}
              </ul>
              <div className="mt-12 text-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-emerald-600 via-teal-700 to-cyan-700 hover:from-emerald-700 hover:via-teal-800 hover:to-cyan-800 text-white text-xl px-12 py-8 shadow-2xl hover:shadow-emerald-500/50 font-black hover:scale-110 transition-all">
                  <Link to={createPageUrl("Programs")}>
                    Explore Our Programs →
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-28 bg-[#E0F7F4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={scaleIn}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-10 text-center">
              <span className="bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 bg-clip-text text-transparent">
                Our Story
              </span>
            </h2>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-12 rounded-3xl border-4 border-cyan-200 shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300">
              <p className="text-xl text-gray-800 leading-relaxed font-medium mb-6">
                EAGL Livelihood Foundation began with a small community-led plantation initiative in Maharashtra.
                Over time, it evolved into a larger movement for sustainability, empowering hundreds of volunteers,
                farmers, and rural women to lead environmental action in their regions.
              </p>
              <p className="text-xl text-gray-800 leading-relaxed font-medium">
                Today, our work extends across multiple states — restoring ecosystems, improving green cover,
                and inspiring people to act for the planet.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-28 bg-[#D4F1F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 bg-clip-text text-transparent">
                Our Approach
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {approaches.map((approach, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-emerald-50 p-10 rounded-3xl shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:-translate-y-2 border-4 border-emerald-200"
              >
                <div className={`w-24 h-24 bg-gradient-to-br ${approach.color} rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-emerald-500/50`}>
                  <approach.icon className="w-12 h-12 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-4">{approach.title}</h3>
                <p className="text-xl text-gray-800 leading-relaxed font-medium">{approach.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-28 bg-[#E0F7F4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={scaleIn}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 bg-clip-text text-transparent">
                Our Team
              </span>
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed font-semibold">
              Our leadership is built on dedication, integrity, and decades of combined experience in
              rural development and environmental work.
            </p>
          </motion.div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">Board of Directors</h3>
            <div className="grid md:grid-cols-3 gap-10">
              {boardMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeIn}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-emerald-50 to-teal-50 p-10 rounded-3xl text-center shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 border-4 border-teal-200 hover:-translate-y-2"
                >
                  <div className="w-32 h-32 bg-gradient-to-br from-teal-600 to-cyan-700 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-teal-500/50">
                    <span className="text-6xl text-white font-black">{member.name[0]}</span>
                  </div>
                  <h4 className="text-2xl font-black text-gray-900 mb-2">{member.name}</h4>
                  <p className="text-lg text-gray-700 font-semibold">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-xl text-gray-800 text-center leading-relaxed font-semibold"
          >
            The team works with passionate field volunteers, researchers, and grassroots coordinators
            who bring life to every green mission.
          </motion.p>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-28 bg-gradient-to-br from-emerald-700 via-teal-700 to-cyan-700 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 3px 3px, white 2px, transparent 0)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Glowing Effects */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-400/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-10 drop-shadow-2xl">Our Commitment</h2>
            <div className="space-y-8 text-xl leading-relaxed font-semibold">
              <p className="text-emerald-100 drop-shadow-lg">
                Transparency, accountability, and measurable impact form the foundation of our work.
              </p>
              <p className="text-teal-100 drop-shadow-lg">
                All programs are implemented under legal compliance with FCRA, CSR, and Section 8 NGO norms.
              </p>
              <p className="text-cyan-100 drop-shadow-lg">
                We maintain annual impact reports, open data on plantation counts, and transparent financial disclosures.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 text-white relative overflow-hidden">
        {/* Animated Background */}
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
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-10 drop-shadow-2xl">Join Our Mission</h2>
            <p className="text-2xl text-emerald-100 mb-12 leading-relaxed font-semibold drop-shadow-lg">
              A sustainable future needs action — and it starts with you.
              Be part of the change that restores our planet for future generations. 🌱
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 text-xl px-12 py-8 shadow-2xl hover:shadow-white/50 font-black hover:scale-110 transition-all">
                <Link to={createPageUrl("GetInvolved")}>
                  🌳 Join as Volunteer
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white/10 backdrop-blur-md border-4 border-white text-white hover:bg-white hover:text-emerald-700 text-xl px-12 py-8 font-black hover:scale-110 transition-all">
                <Link to={createPageUrl("GetInvolved")}>
                  💚 Support Our Projects
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
