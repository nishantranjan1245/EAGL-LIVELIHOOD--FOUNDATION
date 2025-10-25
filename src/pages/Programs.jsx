
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TreeDeciduous, Droplets, Wheat, Recycle, Sun, GraduationCap, ArrowRight, Target } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

export default function Programs() {
  useEffect(() => {
    document.title = "Programs | EAGL Livelihood Foundation";
  }, []);

  const programs = [
    {
      icon: TreeDeciduous,
      number: "1",
      title: "Tree Plantation & Green Restoration",
      description: "Our flagship initiative focuses on increasing green cover through community-led tree plantation and forest restoration programs. We work with schools, panchayats, corporates, and local volunteers to plant native trees that restore biodiversity, improve air quality, and support rural employment.",
      activities: [
        "Establishing community nurseries",
        "Conducting large-scale plantation drives",
        "Adopting degraded forest areas for restoration",
        "Post-plantation maintenance and survival tracking"
      ],
      impactGoal: "1 Million Trees Planted by 2030 🌿",
      color: "from-emerald-600 to-green-700",
      bgColor: "from-emerald-50 via-green-50 to-emerald-100"
    },
    {
      icon: Droplets,
      number: "2",
      title: "Water Conservation & Resource Management",
      description: "Water is life — and conserving it is vital to both people and the planet. EAGL Livelihood Foundation promotes practical, community-driven water solutions to improve groundwater levels and ensure long-term sustainability.",
      activities: [
        "Rainwater harvesting systems",
        "Watershed and lake rejuvenation projects",
        "Awareness programs on efficient water use",
        "Collaboration with local authorities for rural water management"
      ],
      impactGoal: "Restore and sustain 100+ water bodies by 2028",
      color: "from-cyan-600 to-blue-700",
      bgColor: "from-cyan-50 via-blue-50 to-cyan-100"
    },
    {
      icon: Wheat,
      number: "3",
      title: "Sustainable Agriculture & Climate-Smart Farming",
      description: "We help farmers transition to eco-friendly and climate-resilient farming techniques that protect soil health, conserve water, and reduce dependency on chemical inputs.",
      activities: [
        "Organic farming awareness & training",
        "Composting & soil fertility improvement",
        "Climate-smart crop planning",
        "Linking farmers with green markets"
      ],
      impactGoal: "Empower 5,000+ farmers to adopt sustainable agriculture by 2027",
      color: "from-lime-600 to-green-700",
      bgColor: "from-lime-50 via-green-50 to-lime-100"
    },
    {
      icon: Recycle,
      number: "4",
      title: "Waste Management & Plastic-Free Living",
      description: "Waste is one of the biggest threats to our planet. We focus on educating communities about waste segregation, recycling, and plastic alternatives.",
      activities: [
        "Awareness drives in schools and communities",
        "Clean-up campaigns and waste audits",
        "Training on upcycling and composting",
        "Promoting eco-friendly packaging and reusable materials"
      ],
      impactGoal: "Create 100 zero-waste communities by 2030",
      color: "from-teal-600 to-emerald-700",
      bgColor: "from-teal-50 via-emerald-50 to-teal-100"
    },
    {
      icon: Sun,
      number: "5",
      title: "Renewable Energy & Green Innovation",
      description: "To reduce carbon emissions, we promote renewable energy adoption and support small-scale innovations for clean energy in rural areas.",
      activities: [
        "Solar energy awareness workshops",
        "Biogas and clean cooking demonstrations",
        "Promoting energy-efficient rural technologies",
        "Encouraging youth-led climate innovation projects"
      ],
      impactGoal: "Introduce renewable solutions to 10,000+ rural households",
      color: "from-amber-600 to-orange-700",
      bgColor: "from-amber-50 via-orange-50 to-amber-100"
    },
    {
      icon: GraduationCap,
      number: "6",
      title: "Green Livelihoods & Community Empowerment",
      description: "Environmental protection becomes stronger when it supports livelihoods. We enable rural women, youth, and marginalized communities to start green enterprises — from organic composting to eco-craft production.",
      activities: [
        "Skill development in green businesses",
        "Self-help group (SHG) support",
        "Market linkage and mentorship",
        "Promoting sustainable micro-enterprises"
      ],
      impactGoal: "Empower 2,000+ individuals with eco-based livelihoods by 2026",
      color: "from-indigo-600 to-purple-700",
      bgColor: "from-indigo-50 via-purple-50 to-indigo-100"
    }
  ];

  const approach = [
    {
      title: "Act",
      description: "Implement environment-friendly projects on the ground.",
      icon: "🎯"
    },
    {
      title: "Empower",
      description: "Train communities and volunteers to lead the change.",
      icon: "💪"
    },
    {
      title: "Sustain",
      description: "Ensure long-term impact through monitoring and community ownership.",
      icon: "🌱"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Hero Section with Diamond Grid */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
          >
            <img 
              src="/images/programs-hero-image.jpg" 
              alt="Environmental programs"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/95 via-teal-900/95 to-cyan-900/90"></div>

          {/* Diamond Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="diamond-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                  <motion.path
                    d="M 40 0 L 80 40 L 40 80 L 0 40 Z"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#diamond-grid)" />
            </svg>
          </div>

          {/* Spinning Icons */}
          {['🌳', '💧', '🌾', '♻️'].map((icon, i) => (
            <motion.div
              key={i}
              className="absolute text-7xl opacity-20"
              style={{
                top: `${25 + (i * 20)}%`,
                left: `${15 + (i * 20)}%`
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 0.5
              }}
            >
              {icon}
            </motion.div>
          ))}

          {/* Glowing Orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400/30 rounded-full blur-3xl"
            animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl"
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
                rotate: [0, 360],
                scale: [1, 1.15, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="mb-8"
            >
              <Target className="w-24 h-24 mx-auto text-emerald-300 drop-shadow-2xl" strokeWidth={2} />
            </motion.div>
            <motion.h1 
              className="font-black mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", bounce: 0.5, duration: 1 }}
            >
              <div className="text-5xl md:text-7xl lg:text-8xl">
                <span className="bg-gradient-to-r from-emerald-200 via-teal-100 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl">
                  🌱 Programs
                </span>
              </div>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl text-emerald-100 max-w-3xl mx-auto leading-relaxed font-semibold drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Comprehensive environmental initiatives designed to protect nature and empower communities
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-[#E0F7F4] relative overflow-hidden">
        {/* Decorative Background */}
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
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 bg-clip-text text-transparent">🌍 Our Work for a Sustainable Future</h2>
            <div className="space-y-4 text-xl text-gray-800 leading-relaxed font-medium bg-gradient-to-br from-white to-emerald-50 p-10 rounded-3xl shadow-2xl border-4 border-emerald-200">
              <p>
                At EAGL Livelihood Foundation, we believe environmental protection and sustainable livelihoods go hand in hand. 
                Our programs are designed to address the challenges of climate change while creating opportunities for communities 
                to thrive in harmony with nature.
              </p>
              <p>
                Each initiative focuses on real, measurable impact — from planting trees to conserving water and empowering 
                rural families with eco-friendly practices.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-[#D4F1F4] relative overflow-hidden">
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
          <div className="space-y-16">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${program.bgColor} rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-white hover:shadow-emerald-500/50 transition-all duration-300 hover:-translate-y-2`}
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className={`w-24 h-24 bg-gradient-to-br ${program.color} rounded-3xl flex items-center justify-center shadow-2xl`}>
                      <program.icon className="w-12 h-12 text-white" strokeWidth={2.5} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                      {program.number}. {program.title}
                    </h3>
                    <p className="text-lg text-gray-800 mb-6 leading-relaxed font-medium">{program.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Key Activities:</h4>
                      <ul className="space-y-2">
                        {program.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2.5 flex-shrink-0"></div>
                            <span className="text-gray-800 font-medium">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={`inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full font-bold text-lg ${program.color.replace('from-', 'text-').split(' ')[0]} shadow-xl`}>
                      <Target className="w-5 h-5" />
                      <span>Impact Goal: {program.impactGoal}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-[#E0F7F4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 bg-clip-text text-transparent">🌿 How We Work</h2>
            <p className="text-2xl text-gray-800 font-semibold">Our approach is simple yet powerful — Act, Empower, Sustain.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {approach.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 p-10 rounded-3xl text-center shadow-2xl border-4 border-emerald-200 hover:shadow-emerald-500/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-6xl mb-6">{item.icon}</div>
                <h3 className="text-3xl font-black text-gray-900 mb-4 bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">{item.title}</h3>
                <p className="text-lg text-gray-800 font-medium">{item.description}</p>
              </motion.div>
            ))}
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

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-10 drop-shadow-2xl">🌏 Join Our Mission</h2>
            <p className="text-2xl text-emerald-100 mb-10 leading-relaxed font-semibold drop-shadow-lg max-w-3xl mx-auto">
              Each of our programs contributes directly to a greener planet and a stronger community. 
              Whether you wish to volunteer, collaborate, or donate — your support helps turn our vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 text-xl px-12 py-8 shadow-2xl hover:shadow-white/50 font-black hover:scale-110 transition-all">
                <Link to={createPageUrl("Volunteer")}>
                  🌳 Volunteer Now
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white/10 backdrop-blur-md border-4 border-white text-white hover:bg-white hover:text-emerald-700 text-xl px-12 py-8 font-black hover:scale-110 transition-all">
                <Link to={createPageUrl("Donate")}>
                  💧 Support Our Work
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white/10 backdrop-blur-md border-4 border-white text-white hover:bg-white hover:text-emerald-700 text-xl px-12 py-8 font-black hover:scale-110 transition-all">
                <Link to={createPageUrl("Contact")}>
                  🤝 CSR Partnership
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
