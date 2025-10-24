
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, TreeDeciduous, Droplets, Wheat, Recycle, Users, Heart, ChevronRight, Sparkles, Camera } from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

export default function Home() {
  const focusAreas = [
    {
      icon: TreeDeciduous,
      title: "Tree Plantation & Green Restoration",
      description: "Restoring degraded lands through large-scale tree plantation and community forestry programs.",
      color: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 via-teal-50 to-emerald-100"
    },
    {
      icon: Droplets,
      title: "Water Conservation",
      description: "Promoting rainwater harvesting, watershed management, and efficient water use.",
      color: "from-cyan-500 to-blue-600",
      bgGradient: "from-cyan-50 via-blue-50 to-cyan-100"
    },
    {
      icon: Wheat,
      title: "Sustainable Agriculture",
      description: "Encouraging farmers to adopt climate-smart, organic, and sustainable practices.",
      color: "from-lime-500 to-green-600",
      bgGradient: "from-lime-50 via-green-50 to-lime-100"
    },
    {
      icon: Recycle,
      title: "Waste Management & Clean Living",
      description: "Creating awareness for plastic-free living, segregation, and recycling at the community level.",
      color: "from-teal-500 to-emerald-600",
      bgGradient: "from-teal-50 via-emerald-50 to-teal-100"
    }
  ];

  const impactStats = [
    { number: "25,000+", label: "Trees Planted", icon: "🌳" },
    { number: "40+", label: "Water Bodies Restored", icon: "💧" },
    { number: "5,000+", label: "People Engaged", icon: "👥" },
    { number: "50+", label: "Villages Covered", icon: "🏞️"}
  ];

  const testimonials = [
    {
      text: "With EAGL's plantation program, our village became greener and our youth found purpose in protecting nature.",
      author: "Sangeeta",
      role: "Community Volunteer"
    },
    {
      text: "Their work in sustainable farming has changed how we cultivate — we now earn more and preserve the soil.",
      author: "Ravi",
      role: "Farmer Beneficiary"
    }
  ];

  const whyChoose = [
    { text: "FCRA-registered NGO ensuring full transparency", icon: "✅" },
    { text: "Strong community-based environmental programs", icon: "✅" },
    { text: "Focus on sustainability and livelihood integration", icon: "✅" },
    { text: "Supported by eco-conscious volunteers and CSR partners", icon: "✅" }
  ];

  const recentInitiatives = [
    { image: "/images/image1.jpg", title: "Tree Plantation Drive" },
    { image: "/images/image2.jpg", title: "Water Conservation Project" },
    { image: "/images/image3.jpg", title: "Community Workshop" },
    { image: "/images/image4.jpg", title: "Clean-Up Campaign" }
  ];

  return (
    <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.2, rotate: 2 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
          >
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000" 
              alt="Community planting trees in nature"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-teal-800/90 to-cyan-900/85"></div>
          
          {/* Enhanced Geometric Pattern Overlay */}
          <svg className="absolute inset-0 w-full h-full opacity-20">
            <defs>
              <pattern id="geometric-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <motion.circle 
                  cx="50" 
                  cy="50" 
                  r="30" 
                  fill="none" 
                  stroke="#10b981" 
                  strokeWidth="2"
                  initial={{ scale: 0.8, opacity: 0.3 }}
                  animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.polygon 
                  points="50,20 80,80 20,80" 
                  fill="none" 
                  stroke="#14b8a6" 
                  strokeWidth="2"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#geometric-pattern)" />
          </svg>

          {/* Enhanced Animated Concentric Circles */}
          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute border-2 border-emerald-400/30 rounded-full"
                initial={{ width: 100, height: 100, opacity: 0.8 }}
                animate={{
                  width: [100, 1000],
                  height: [100, 1000],
                  opacity: [0.8, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  delay: i * 1,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>

          {/* Enhanced Gradient Orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-emerald-400/40 to-teal-500/40 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.5, 1], 
              opacity: [0.4, 0.7, 0.4],
              x: [0, 60, 0],
              y: [0, -60, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-cyan-400/40 to-blue-500/40 rounded-full blur-3xl"
            animate={{ 
              scale: [1.5, 1, 1.5], 
              opacity: [0.7, 0.4, 0.7],
              x: [0, -60, 0],
              y: [0, 60, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Diagonal Lines Animation */}
          <svg className="absolute inset-0 w-full h-full opacity-10">
            {[...Array(15)].map((_, i) => (
              <motion.line
                key={i}
                x1="0"
                y1={`${i * 7}%`}
                x2="100%"
                y2={`${(i * 7) + 20}%`}
                stroke="#10b981"
                strokeWidth="3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 0], 
                  opacity: [0, 0.6, 0] 
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              />
            ))}
          </svg>

          {/* Rotating Border Elements */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="absolute w-[500px] h-[500px] border-4 border-emerald-400/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-[400px] h-[400px] border-4 border-cyan-400/20 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Floating Leaves Animation */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-6xl opacity-20"
              initial={{
                x: Math.random() * 100 + "%",
                y: -100,
                rotate: 0
              }}
              animate={{
                y: "120vh",
                x: `${parseFloat(Math.random() * 100 + "%") + (Math.random() > 0.5 ? 10 : -10)}%`,
                rotate: 360
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "linear"
              }}
            >
              🍃
            </motion.div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center gap-3 mb-12"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-10 h-10 text-yellow-300" />
              </motion.div>
              <span className="text-emerald-200 font-black text-2xl tracking-wide drop-shadow-2xl">🌟 Environmental Excellence</span>
              <motion.div
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-10 h-10 text-yellow-300" />
              </motion.div>
            </motion.div>
            
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <h1 className="font-black leading-tight mb-4">
                <motion.div 
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <span className="bg-gradient-to-r from-emerald-200 via-teal-100 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl">
                    Together for a Greener, Sustainable Tomorrow
                  </span>
                </motion.div>
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-2xl md:text-3xl text-cyan-50 mb-14 leading-relaxed font-bold drop-shadow-2xl max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              EAGL Livelihood Foundation is a non-profit organization dedicated to{" "}
              <span className="text-emerald-300 font-black">protecting the environment</span>,{" "}
              <span className="text-teal-300 font-black">combating climate change</span>, and building{" "}
              <span className="text-cyan-300 font-black">climate-resilient communities</span> through sustainable action.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-8 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  asChild 
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white text-2xl px-14 py-10 shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 font-black border-4 border-white/30"
                >
                  <Link to={createPageUrl("GetInvolved")}>
                    <Heart className="w-7 h-7 mr-3" />
                    🌱 Support Our Work
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  asChild 
                  size="lg"
                  className="bg-white/15 backdrop-blur-md border-4 border-white text-white hover:bg-white hover:text-emerald-700 text-2xl px-14 py-10 font-black shadow-2xl hover:shadow-white/50 transition-all duration-300"
                >
                  <Link to={createPageUrl("GetInvolved")}>
                    <Users className="w-7 h-7 mr-3" />
                    🤝 Join as Volunteer
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <div className="w-10 h-16 border-4 border-white/60 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-3 h-3 bg-white rounded-full"
              animate={{ y: [0, 32, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </div>
          <p className="text-white text-sm font-bold mt-3 text-center drop-shadow-lg">Scroll Down</p>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-28 bg-[#E0F7F4] relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #059669 2px, transparent 0)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-black mb-8"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                🌿 About the Foundation
              </span>
            </motion.h2>
            <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-10 border-4 border-emerald-200 relative overflow-hidden">
              {/* Glow Effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-400/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-teal-400/20 rounded-full blur-3xl"></div>
              
              <p className="text-xl text-gray-800 mb-6 leading-relaxed relative z-10">
                Founded on <span className="font-black text-2xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">8 December 2017</span>, EAGL Livelihood Foundation is a registered non-profit organization 
                under Section 8 of the Companies Act, 2013 <span className="text-base text-gray-600 font-semibold">(CIN: U74999MH2017NPL302650)</span> and holds 
                <span className="font-black text-2xl bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent"> FCRA Registration No. 083781770</span>.
              </p>
              <p className="text-xl text-gray-800 leading-relaxed relative z-10">
                We work with communities to <span className="font-bold text-emerald-700">restore ecosystems</span>, promote <span className="font-bold text-teal-700">green livelihoods</span>, and spread <span className="font-bold text-cyan-700">environmental awareness</span> 
                that drives meaningful climate action across India.
              </p>
            </div>
            <Button asChild variant="link" className="mt-8 text-emerald-700 hover:text-teal-700 text-xl group font-bold">
              <Link to={createPageUrl("About")}>
                Learn More → About Us
                <ChevronRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Focus Areas */}
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 bg-clip-text text-transparent">
                🌱 Our Focus Areas
              </span>
            </h2>
            <p className="text-2xl text-gray-700 font-medium">Driving Environmental Change Through Action</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`group bg-gradient-to-br ${area.bgGradient} p-10 rounded-3xl shadow-2xl hover:shadow-emerald-500/50 transition-all duration-500 hover:-translate-y-3 border-4 border-white relative overflow-hidden`}
              >
                {/* Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className={`w-20 h-20 bg-gradient-to-br ${area.color} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl shadow-emerald-500/50 relative z-10`}>
                  <area.icon className="w-11 h-11 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-5 relative z-10">{area.title}</h3>
                <p className="text-lg text-gray-700 leading-relaxed font-medium relative z-10">{area.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild size="lg" className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 text-white text-xl px-12 py-8 shadow-2xl hover:shadow-emerald-500/50 font-bold hover:scale-110 transition-all border-2 border-white/30">
              <Link to={createPageUrl("Programs")}>
                Explore Our Programs →
                <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Impact Highlights */}
      <section className="py-28 bg-gradient-to-br from-emerald-700 via-teal-700 to-cyan-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 3px 3px, white 2px, transparent 0)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <motion.div
          className="absolute top-10 right-10 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-2xl">🌍 Our Impact</h2>
            <p className="text-2xl text-emerald-100 font-semibold drop-shadow-lg">Real Action. Real Change.</p>
            <p className="text-xl text-cyan-100 mt-4 max-w-3xl mx-auto font-medium">From planting trees to training communities, every initiative brings us closer to a cleaner, greener Earth.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-white/15 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl h-full flex flex-col items-center justify-center">
                  <div className="text-7xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                  <div className="text-5xl md:text-6xl font-black mb-4 drop-shadow-2xl">{stat.number}</div>
                  <div className="text-xl text-emerald-100 font-bold text-center">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 text-xl px-12 py-8 shadow-2xl hover:shadow-white/50 font-bold hover:scale-110 transition-all">
              <Link to={createPageUrl("Impact")}>
                See Our Impact →
                <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-28 bg-gradient-to-br from-white via-emerald-50 to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #059669 2px, transparent 0)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-8">
              <span className="bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 bg-clip-text text-transparent">
                🤝 Get Involved
              </span>
            </h2>
            <p className="text-3xl font-black text-gray-900 mb-6">Be a Part of the Green Movement 🌿</p>
            <p className="text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed font-medium mb-12">
              Whether you're an individual, an organization, or a CSR partner — your participation can help protect the planet.
              Volunteer, collaborate, or contribute to our projects and be the change the world needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xl px-12 py-8 shadow-2xl hover:shadow-emerald-500/50 font-bold hover:scale-110 transition-all">
                <Link to={createPageUrl("Volunteer")}>
                  👥 Volunteer With Us
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white text-xl px-12 py-8 shadow-2xl hover:shadow-cyan-500/50 font-bold hover:scale-110 transition-all">
                <Link to={createPageUrl("Contact")}>
                  🤝 Partner With Us
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-xl px-12 py-8 shadow-2xl hover:shadow-purple-500/50 font-bold hover:scale-110 transition-all">
                <Link to={createPageUrl("Donate")}>
                  💚 Donate Now
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-28 bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 bg-clip-text text-transparent">
                💚 Why Choose EAGL Livelihood Foundation
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChoose.map((reason, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-5 p-8 bg-gradient-to-br from-white to-emerald-50 rounded-3xl shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:-translate-y-2 border-4 border-emerald-200"
              >
                <div className="text-5xl flex-shrink-0">{reason.icon}</div>
                <p className="text-xl text-gray-800 font-bold leading-relaxed">{reason.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 bg-gradient-to-br from-white via-teal-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 bg-clip-text text-transparent">
                💬 Voices From the Ground
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-white to-emerald-50 p-10 rounded-3xl shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:-translate-y-2 border-4 border-emerald-200"
              >
                <div className="text-7xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6 font-black">"</div>
                <p className="text-xl text-gray-800 mb-8 italic leading-relaxed font-medium">{testimonial.text}</p>
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-xl shadow-emerald-500/50">
                    <span className="text-white font-black text-2xl">{testimonial.author[0]}</span>
                  </div>
                  <div>
                    <div className="font-black text-xl text-gray-900">— {testimonial.author}</div>
                    <div className="text-base text-gray-600 font-semibold">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Initiatives */}
      <section className="py-28 bg-[#E0F7F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 bg-clip-text text-transparent">
                📸 Recent Initiatives
              </span>
            </h2>
            <p className="text-2xl text-gray-800 font-semibold">Our Latest Campaigns</p>
            <p className="text-xl text-gray-700 mt-4">Glimpses from our recent plantation drives, water restoration projects, and environmental awareness programs.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentInitiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={scaleIn}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-emerald-200" // Removed group and hover effects
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={initiative.image}
                    alt={initiative.title}
                    className="w-full h-full object-cover" // Removed group-hover effect
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/50 to-transparent flex items-end p-6 pointer-events-none">
                  <h3 className="text-white font-black text-xl drop-shadow-2xl">{initiative.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xl px-12 py-8 shadow-2xl hover:shadow-emerald-500/50 font-bold hover:scale-110 transition-all">
              <Link to={createPageUrl("Impact")}>
                <Camera className="w-6 h-6 mr-3" />
                View Gallery →
              </Link>
            </Button>
          </div>
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
        
        {/* Glowing Effects */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-400/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-10 drop-shadow-2xl leading-tight">🪴 Every tree you help plant brings the world one step closer to a sustainable future 🌍</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-16">
              <Button asChild size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 text-xl px-14 py-8 shadow-2xl hover:shadow-white/50 hover:scale-110 transition-all font-black">
                <Link to={createPageUrl("Donate")}>
                  🌱 Donate for Trees
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white/10 backdrop-blur-md border-4 border-white text-white hover:bg-white hover:text-emerald-700 text-xl px-14 py-8 font-black shadow-2xl hover:scale-110 transition-all">
                <Link to={createPageUrl("GetInvolved")}>
                  🤝 Join Our Mission
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
