
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
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
    { image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800", title: "Tree Plantation Drive" },
    { image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800", title: "Water Conservation Project" },
    { image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=800", title: "Community Workshop" },
    { image: "https://images.unsplash.com/photo-1536147116438-62679a5e01f2?q=80&w=800", title: "Clean-Up Campaign" }
  ];

  return (
    <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0" style={{ willChange: 'auto', transform: 'translateZ(0)' }}>
          <motion.div
            initial={{ scale: 1.2, rotate: 2 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            style={{ willChange: 'transform', transform: 'translateZ(0)' }}
          >
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000" 
              alt="Community planting trees in nature"
              className="w-full h-full object-cover"
              loading="eager"
              style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-teal-800/90 to-cyan-900/85" style={{ transform: 'translateZ(0)' }}></div>
          
          {/* Enhanced Geometric Pattern Overlay */}
          <svg className="absolute inset-0 w-full h-full opacity-20" style={{ transform: 'translateZ(0)' }}>
            <defs>
              <pattern id="geometric-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle 
                  cx="50" 
                  cy="50" 
                  r="30" 
                  fill="none" 
                  stroke="#10b981" 
                  strokeWidth="2"
                >
                  <animate
                    attributeName="r"
                    values="24;36;24"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.3;0.8;0.3"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </circle>
                <polygon 
                  points="50,20 80,80 20,80" 
                  fill="none" 
                  stroke="#14b8a6" 
                  strokeWidth="2"
                >
                  <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="rotate"
                    from="0 50 50"
                    to="360 50 50"
                    dur="20s"
                    repeatCount="indefinite"
                  />
                </polygon>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#geometric-pattern)" />
          </svg>

          {/* Enhanced Animated Concentric Circles */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'translateZ(0)' }}>
            {[...Array(isMobile ? 4 : 8)].map((_, i) => (
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
                style={{ 
                  willChange: 'transform, opacity',
                  transform: 'translate3d(0, 0, 0)',
                  backfaceVisibility: 'hidden'
                }}
              />
            ))}
          </div>

          {/* Enhanced Gradient Orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-80 h-80 md:w-[500px] md:h-[500px] bg-gradient-to-br from-emerald-400/40 to-teal-500/40 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.5, 1], 
              opacity: [0.4, 0.7, 0.4],
              x: [0, 60, 0],
              y: [0, -60, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            style={{ 
              willChange: 'transform, opacity',
              transform: 'translate3d(0, 0, 0)',
              backfaceVisibility: 'hidden'
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 md:w-[500px] md:h-[500px] bg-gradient-to-br from-cyan-400/40 to-blue-500/40 rounded-full blur-3xl"
            animate={{ 
              scale: [1.5, 1, 1.5], 
              opacity: [0.7, 0.4, 0.7],
              x: [0, -60, 0],
              y: [0, 60, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            style={{ 
              willChange: 'transform, opacity',
              transform: 'translate3d(0, 0, 0)',
              backfaceVisibility: 'hidden'
            }}
          />

          {/* Diagonal Lines Animation */}
          <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" style={{ transform: 'translateZ(0)' }}>
            {[...Array(isMobile ? 8 : 15)].map((_, i) => (
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
                style={{ vectorEffect: 'non-scaling-stroke' }}
              />
            ))}
          </svg>

          {/* Rotating Border Elements */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ transform: 'translateZ(0)' }}>
            <motion.div
              className="absolute w-80 h-80 md:w-[500px] md:h-[500px] border-4 border-emerald-400/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              style={{ 
                willChange: 'transform',
                transform: 'translate3d(0, 0, 0)',
                backfaceVisibility: 'hidden'
              }}
            />
            <motion.div
              className="absolute w-64 h-64 md:w-[400px] md:h-[400px] border-4 border-cyan-400/20 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              style={{ 
                willChange: 'transform',
                transform: 'translate3d(0, 0, 0)',
                backfaceVisibility: 'hidden'
              }}
            />
          </div>

          {/* Floating Leaves Animation */}
          {[...Array(isMobile ? 6 : 12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl md:text-6xl opacity-20 pointer-events-none"
              initial={{
                x: `${Math.random() * 100}%`,
                y: -100,
                rotate: 0
              }}
              animate={{
                y: ['0vh', '120vh'],
                x: [`${parseFloat(Math.random() * 100) + (Math.random() > 0.5 ? 10 : -10)}%`, `${Math.random() * 100}%`], // Adjust x for a "swaying" effect
                rotate: [0, 360]
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "linear"
              }}
              style={{ 
                willChange: 'transform',
                transform: 'translate3d(0, 0, 0)',
                backfaceVisibility: 'hidden'
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
                style={{ willChange: 'transform', transform: 'translateZ(0)' }}
              >
                <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-yellow-300" />
              </motion.div>
              <span className="text-emerald-200 font-black text-xl md:text-2xl tracking-wide drop-shadow-2xl">🌟 Environmental Excellence</span>
              <motion.div
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{ willChange: 'transform', transform: 'translateZ(0)' }}
              >
                <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-yellow-300" />
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
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  style={{ willChange: 'transform, opacity' }}
                >
                  <span className="bg-gradient-to-r from-emerald-200 via-teal-100 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl">
                    Together for a Greener,
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-emerald-200 via-teal-100 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl">
                    Sustainable Tomorrow
                  </span>
                </motion.div>
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-lg md:text-2xl lg:text-3xl text-cyan-50 mb-14 leading-relaxed font-bold drop-shadow-2xl max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              style={{ willChange: 'transform, opacity' }}
            >
              EAGL Livelihood Foundation is a non-profit organization dedicated to{" "}
              <span className="text-emerald-300 font-black">protecting the environment</span>,{" "}
              <span className="text-teal-300 font-black">combating climate change</span>, and building{" "}
              <span className="text-cyan-300 font-black">climate-resilient communities</span> through sustainable action.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  asChild 
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white text-lg md:text-2xl px-10 md:px-14 py-7 md:py-10 shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 font-black border-4 border-white/30"
                >
                  <Link to={createPageUrl("GetInvolved")}>
                    <Heart className="w-5 h-5 md:w-7 md:h-7 mr-2 md:mr-3" />
                    🌱 Support Our Work
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  asChild 
                  size="lg"
                  className="bg-white/15 backdrop-blur-md border-4 border-white text-white hover:bg-white hover:text-emerald-700 text-lg md:text-2xl px-10 md:px-14 py-7 md:py-10 font-black shadow-2xl hover:shadow-white/50 transition-all duration-300"
                >
                  <Link to={createPageUrl("GetInvolved")}>
                    <Users className="w-5 h-5 md:w-7 md:h-7 mr-2 md:mr-3" />
                    🤝 Join as Volunteer
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: 'transform', transform: 'translateZ(0)' }}
        >
          <div className="w-8 h-14 md:w-10 md:h-16 border-3 md:border-4 border-white/60 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full"
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <p className="text-white text-xs md:text-sm font-bold mt-2 md:mt-3 text-center drop-shadow-lg">Scroll Down</p>
        </motion.div>
      </section>

      {/* About Section - Enhanced Design */}
      <section className="py-28 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
        {/* Decorative Background */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="absolute top-10 right-10 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          style={{ willChange: 'transform' }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="absolute bottom-10 left-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl"
          animate={{ scale: [1.3, 1, 1.3], x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
          style={{ willChange: 'transform' }}
        />

        {/* Decorative Pattern */}
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
            <motion.div
              initial={{ scale: 0.8, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="text-7xl">🌿</span>
            </motion.div>
            <motion.h2
              className="text-5xl sm:text-6xl md:text-7xl font-black mb-8"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent drop-shadow-lg">
                About the Foundation
              </span>
            </motion.h2>
            <motion.div
              className="max-w-5xl mx-auto bg-gradient-to-br from-white via-emerald-50 to-white rounded-3xl shadow-2xl p-10 border-4 border-emerald-200 relative overflow-hidden"
              whileHover={{ scale: 1.02, boxShadow: '0 30px 60px rgba(16,185,129,0.3)' }}
              transition={{ duration: 0.3 }}
            >
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
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild variant="link" className="mt-8 text-emerald-700 hover:text-teal-700 text-xl group font-bold">
                <Link to={createPageUrl("About")}>
                  Learn More → About Us
                  <ChevronRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Focus Areas - Enhanced Design */}
      <section className="py-28 bg-gradient-to-br from-white via-teal-50 to-emerald-50 relative overflow-hidden">
        {/* Animated Background Shapes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-emerald-300/30 to-teal-300/30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          style={{ willChange: 'transform' }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-cyan-300/30 to-blue-300/30 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90], x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          style={{ willChange: 'transform' }}
        />

        {/* Floating Icons Background */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-5xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            >
              {['🌳', '💧', '🌾', '♻️'][i % 4]}
            </motion.div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="inline-block mb-6"
            >
              <span className="text-8xl">🌱</span>
            </motion.div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 bg-clip-text text-transparent drop-shadow-lg">
                Our Focus Areas
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
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  boxShadow: '0 30px 60px rgba(16,185,129,0.3)',
                  transition: { duration: 0.3 }
                }}
                className={`group bg-gradient-to-br ${area.bgGradient} p-10 rounded-3xl shadow-2xl transition-all duration-500 border-4 border-white relative overflow-hidden`}
              >
                {/* Animated Glow on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Sparkle Effect on Hover */}
                <motion.div
                  className="absolute inset-0 w-full h-full"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-white rounded-full"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </motion.div>

                <motion.div
                  className={`w-20 h-20 bg-gradient-to-br ${area.color} rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-emerald-500/50 relative z-10`}
                  whileHover={{ scale: 1.25, rotate: 12 }}
                  transition={{ duration: 0.5 }}
                >
                  <area.icon className="w-11 h-11 text-white" strokeWidth={2.5} />
                </motion.div>
                <h3 className="text-3xl font-black text-gray-900 mb-5 relative z-10 group-hover:text-emerald-700 transition-colors duration-300">{area.title}</h3>
                <p className="text-lg text-gray-700 leading-relaxed font-medium relative z-10">{area.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 text-white text-xl px-12 py-8 shadow-2xl hover:shadow-emerald-500/50 font-bold rounded-2xl border-2 border-white/30">
                <Link to={createPageUrl("Programs")}>
                  Explore Our Programs →
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Impact Highlights - Enhanced Design */}
      <section className="py-28 bg-gradient-to-br from-emerald-700 via-teal-700 to-cyan-700 text-white relative overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 3px 3px, white 2px, transparent 0)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Floating Orbs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="absolute top-10 right-10 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2], x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          style={{ willChange: 'transform, opacity' }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"
          animate={{ scale: [1.3, 1, 1.3], opacity: [0.4, 0.2, 0.4], x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ willChange: 'transform, opacity' }}
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
            <motion.div
              initial={{ scale: 0, rotate: -360 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="text-8xl drop-shadow-2xl">🌍</span>
            </motion.div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 drop-shadow-2xl">Our Impact</h2>
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
                whileHover={{
                  scale: 1.1,
                  y: -10,
                  boxShadow: '0 30px 60px rgba(255,255,255,0.3)',
                  transition: { duration: 0.3 }
                }}
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-white/15 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-300 shadow-xl h-full flex flex-col items-center justify-center">
                    <motion.div
                      className="text-7xl mb-6 transform transition-transform duration-300"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {stat.icon}
                    </motion.div>
                    <motion.div
                      className="text-5xl md:text-6xl font-black mb-4 drop-shadow-2xl break-words w-full"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-xl md:text-2xl text-emerald-100 font-bold text-center">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 text-xl px-12 py-8 shadow-2xl hover:shadow-white/50 font-bold rounded-2xl">
                <Link to={createPageUrl("Impact")}>
                  See Our Impact →
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Link>
              </Button>
            </motion.div>
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
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-8">
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

      {/* Why Choose - Enhanced Design */}
      <section className="py-28 bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 relative overflow-hidden">
        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="absolute top-20 left-20 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.4, 1], rotate: [0, 180, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          style={{ willChange: 'transform' }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl"
          animate={{ scale: [1.4, 1, 1.4], rotate: [180, 0, 180] }}
          transition={{ duration: 25, repeat: Infinity }}
          style={{ willChange: 'transform' }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0, y: 50 }}
              whileInView={{ scale: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="inline-block mb-6"
            >
              <span className="text-8xl">💚</span>
            </motion.div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 bg-clip-text text-transparent drop-shadow-lg">
                Why Choose EAGL Livelihood Foundation
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
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: '0 25px 50px rgba(16,185,129,0.3)',
                  transition: { duration: 0.3 }
                }}
                className="flex items-start gap-5 p-8 bg-gradient-to-br from-white to-emerald-50 rounded-3xl shadow-2xl transition-all duration-300 border-4 border-emerald-200 relative overflow-hidden group"
              >
                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 0.8 }}
                />

                <motion.div
                  className="text-5xl flex-shrink-0"
                  whileHover={{ scale: 1.3, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {reason.icon}
                </motion.div>
                <p className="text-xl text-gray-800 font-bold leading-relaxed relative z-10">{reason.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Enhanced Design */}
      <section className="py-28 bg-gradient-to-br from-white via-teal-50 to-emerald-50 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="2" fill="currentColor" className="text-emerald-600"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0, rotate: 180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="inline-block mb-6"
            >
              <span className="text-8xl">💬</span>
            </motion.div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 bg-clip-text text-transparent drop-shadow-lg">
                Voices From the Ground
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
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  boxShadow: '0 30px 60px rgba(16,185,129,0.3)',
                  transition: { duration: 0.3 }
                }}
                className="bg-gradient-to-br from-white to-emerald-50 p-10 rounded-3xl shadow-2xl transition-all duration-300 border-4 border-emerald-200 relative overflow-hidden group"
              >
                {/* Quote Mark with Animation */}
                <motion.div
                  className="text-7xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6 font-black"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  "
                </motion.div>

                {/* Floating Sparkles */}
                <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-2xl"
                      style={{
                        top: `${Math.random() * 100}%`,
                        right: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    >
                      ✨
                    </motion.div>
                  ))}
                </div>

                <p className="text-xl text-gray-800 mb-8 italic leading-relaxed font-medium relative z-10">{testimonial.text}</p>
                <div className="flex items-center gap-5 relative z-10">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-xl shadow-emerald-500/50"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-white font-black text-2xl">{testimonial.author[0]}</span>
                  </motion.div>
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

      {/* Recent Initiatives - Enhanced Design */}
      <section className="py-28 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.5, 1], rotate: [0, 360, 0] }}
          transition={{ duration: 30, repeat: Infinity }}
          style={{ willChange: 'transform' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="inline-block mb-6"
            >
              <span className="text-8xl">📸</span>
            </motion.div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 bg-clip-text text-transparent drop-shadow-lg">
                Recent Initiatives
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
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  boxShadow: '0 30px 60px rgba(16,185,129,0.4)',
                  transition: { duration: 0.3 }
                }}
                className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-emerald-200 group"
              >
                <div className="aspect-square overflow-hidden relative">
                  <motion.img
                    src={initiative.image}
                    alt={initiative.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Overlay on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/50 to-transparent opacity-100 group-hover:opacity-90 transition-opacity duration-300"
                  />
                </div>

                <div className="absolute inset-0 flex items-end p-6 pointer-events-none">
                  <motion.h3
                    className="text-white font-black text-xl drop-shadow-2xl"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {initiative.title}
                  </motion.h3>
                </div>

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 0.8 }}
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xl px-12 py-8 shadow-2xl hover:shadow-emerald-500/50 font-bold rounded-2xl">
                <Link to={createPageUrl("Impact")}>
                  <Camera className="w-6 h-6 mr-3" />
                  View Gallery →
                </Link>
              </Button>
            </motion.div>
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-400/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ willChange: 'transform, opacity' }}
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-10 drop-shadow-2xl leading-tight">🪴 Every tree you help plant brings the world one step closer to a sustainable future 🌍</h2>
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
