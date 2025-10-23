
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TreeDeciduous, Droplets, Users, MapPin, Award, TrendingUp, Heart, Target, Sun, Wheat, Recycle } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

export default function Impact() {
  useEffect(() => {
    document.title = "Our Impact - EAGL Livelihood Foundation";
  }, []);

  const stats = [
    { icon: TreeDeciduous, number: "25,000+", label: "Trees Planted", subtitle: "Through afforestation and green drives across Maharashtra and neighboring states", color: "from-green-600 to-green-700" },
    { icon: Droplets, number: "40+", label: "Water Bodies Revived", subtitle: "Through rainwater harvesting, lake rejuvenation, and watershed initiatives", color: "from-blue-600 to-blue-700" },
    { icon: Users, number: "5,000+", label: "People Engaged", subtitle: "Through awareness programs, clean-up drives, and livelihood training", color: "from-purple-600 to-purple-700" },
    { icon: MapPin, number: "50+", label: "Villages Reached", subtitle: "Reached through sustainability and community development programs", color: "from-orange-600 to-orange-700" }
  ];

  const impactAreas = [
    {
      icon: TreeDeciduous,
      title: "Environmental Restoration",
      description: "Our Tree Plantation and Green Restoration drives have helped transform barren and degraded areas into vibrant green spaces. We ensure that each plantation site receives post-care — because our goal isn't just to plant trees, it's to grow forests.",
      metrics: [
        "Native tree species restored in 12 regions",
        "Over 30% increase in green cover across plantation zones",
        "1,200+ community volunteers engaged in plantation drives"
      ]
    },
    {
      icon: Droplets,
      title: "Water Conservation & Sustainability",
      description: "Our water conservation programs have revived traditional water systems and promoted sustainable water use among communities.",
      metrics: [
        "40+ ponds and wells rejuvenated",
        "20+ villages adopted rainwater harvesting",
        "Local farmers trained in drip irrigation and water recycling"
      ]
    },
    {
      icon: Wheat,
      title: "Sustainable Agriculture & Green Livelihoods",
      description: "We've trained hundreds of farmers and self-help groups to adopt climate-smart agriculture and start eco-friendly livelihood projects.",
      metrics: [
        "1,200+ farmers trained in organic farming",
        "500+ women involved in composting and eco-craft production",
        "15+ rural markets linked to green products"
      ]
    },
    {
      icon: Recycle,
      title: "Waste Reduction & Awareness",
      description: "Through our clean-up drives and waste management campaigns, we're reducing pollution at the grassroots level.",
      metrics: [
        "10,000+ people reached through awareness sessions",
        "30+ schools and villages declared 'plastic-free' zones",
        "20+ tons of waste segregated and recycled"
      ]
    },
    {
      icon: Sun,
      title: "Renewable Energy & Climate Awareness",
      description: "To reduce carbon emissions, we promote solar energy, clean cooking, and rural energy innovation.",
      metrics: [
        "500+ rural homes introduced to solar solutions",
        "100+ youth trained on clean energy awareness",
        "Partnerships with local innovators for sustainable energy models"
      ]
    },
    {
      icon: Users,
      title: "Community Empowerment",
      description: "Change is only sustainable when communities own it. We empower rural youth, women, and local leaders to become ambassadors of environmental change.",
      metrics: [
        "2,000+ people trained through community workshops",
        "80+ volunteers leading green drives",
        "15+ active SHGs supporting eco-livelihoods"
      ]
    }
  ];

  const stories = [
    {
      title: "A Forest From Hope",
      location: "Gadchiroli, Maharashtra",
      description: "What started as a small plantation project is now a thriving community forest of over 8,000 trees. Local youth lead the care and monitoring of the plantation area — turning their village into a green model."
    },
    {
      title: "Water for All",
      location: "Wardha District",
      description: "Our lake rejuvenation project restored 3 village ponds, benefiting 200+ farming families. For the first time in decades, the village reported zero water scarcity during summer."
    },
    {
      title: "Women Leading Green Change",
      location: "Nagpur Rural",
      description: "Local women trained under our green livelihood program now produce organic compost and eco-friendly packaging — generating both income and environmental impact."
    }
  ];

  const futureGoals = [
    { year: "2025", goal: "50,000+ Trees Planted" },
    { year: "2026", goal: "2,000 Women in Green Livelihoods" },
    { year: "2027", goal: "100+ Water Bodies Revived" },
    { year: "2030", goal: "1 Million Trees & 100 Climate-Smart Villages" }
  ];

  return (
    <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Hero Section with Hexagon Pattern */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.2, rotate: 5 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1569163139394-de4798aa62b6?q=80&w=2000" 
              alt="Impact results"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/95 via-teal-800/90 to-cyan-900/85"></div>
          
          {/* Hexagon Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="hexagons" x="0" y="0" width="100" height="86.6" patternUnits="userSpaceOnUse">
                  <polygon points="50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25" fill="none" stroke="#10b981" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hexagons)" />
            </svg>
          </div>

          {/* Animated Achievement Badges */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-20 h-20 border-4 border-yellow-400/30 rounded-full flex items-center justify-center text-4xl"
              style={{
                top: `${20 + (i % 3) * 20}%`,
                left: `${10 + Math.floor(i / 3) * 70}%`
              }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 0.5
              }}
            >
              ⭐
            </motion.div>
          ))}

          {/* Glowing Orbs */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.5, 1], 
              opacity: [0.3, 0.6, 0.3],
              x: [0, 50, 0],
              y: [0, -50, 0]
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl"
            animate={{ 
              scale: [1.5, 1, 1.5], 
              opacity: [0.6, 0.3, 0.6],
              x: [0, -50, 0],
              y: [0, 50, 0]
            }}
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
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="mb-8"
            >
              <Award className="w-28 h-28 mx-auto text-yellow-300 drop-shadow-2xl" strokeWidth={2} />
            </motion.div>
            <motion.h1 
              className="text-6xl md:text-8xl font-black mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", bounce: 0.5, duration: 1 }}
            >
              <span className="bg-gradient-to-r from-yellow-200 via-emerald-200 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl">
                Our Impact
              </span>
            </motion.h1>
            <motion.p 
              className="text-3xl text-emerald-100 mb-6 font-bold drop-shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Turning Commitment Into Action
            </motion.p>
            <motion.p 
              className="text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Every project we run, every tree we plant, and every community we empower brings us closer to a greener, more resilient planet
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-[#E0F7F4] relative overflow-hidden">
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
            <p className="text-xl text-gray-800 leading-relaxed font-medium">
              At EAGL Livelihood Foundation, impact is not just measured in numbers — it's reflected in cleaner air, 
              healthier ecosystems, and stronger livelihoods. Since our founding in 2017, we've worked tirelessly to 
              make climate action a collective responsibility.
            </p>
          </motion.div>
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
            <h2 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-2xl">Key Impact Highlights</h2>
            <p className="text-2xl text-emerald-100 font-semibold drop-shadow-lg">Every sapling, every drop of water conserved, and every family empowered adds up to real change 🌏</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white/15 backdrop-blur-lg rounded-3xl p-8 border-4 border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl h-full flex flex-col items-center justify-center text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl flex-shrink-0`}>
                    <stat.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="text-4xl md:text-5xl lg:text-6xl font-black mb-3 drop-shadow-2xl break-words w-full">{stat.number}</div>
                  <div className="text-xl md:text-2xl text-emerald-100 font-bold mb-4 break-words w-full">{stat.label}</div>
                  <p className="text-sm text-cyan-100 font-medium leading-relaxed">{stat.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-28 bg-[#D4F1F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            {impactAreas.map((area, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 p-10 rounded-3xl shadow-2xl border-4 border-emerald-200 hover:shadow-emerald-500/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-emerald-500/50">
                  <area.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-5 bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">{area.title}</h3>
                <p className="text-lg text-gray-800 mb-6 leading-relaxed font-medium">{area.description}</p>
                <div>
                  <h4 className="font-bold text-xl text-gray-900 mb-4">Impact Snapshot:</h4>
                  <ul className="space-y-3">
                    {area.metrics.map((metric, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2.5 flex-shrink-0"></div>
                        <span className="text-gray-800 font-medium text-lg">{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories of Change */}
      <section className="py-28 bg-[#E0F7F4] relative overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-emerald-300/30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
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
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 bg-clip-text text-transparent">Stories of Change</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {stories.map((story, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-emerald-50 p-10 rounded-3xl shadow-2xl border-4 border-emerald-200 hover:shadow-emerald-500/50 transition-all duration-300 hover:-translate-y-2"
              >
                <h3 className="text-3xl font-black text-gray-900 mb-3">🌳 "{story.title}"</h3>
                <p className="text-emerald-700 font-bold text-lg mb-5">{story.location}</p>
                <p className="text-gray-800 leading-relaxed text-lg font-medium">{story.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-28 bg-[#D4F1F4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 bg-clip-text text-transparent">Our Future Goals</h2>
            <p className="text-2xl text-gray-800 font-semibold">Our mission continues — to expand green cover, conserve resources, and empower communities across India 🌎</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {futureGoals.map((goal, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-3xl shadow-2xl text-center border-4 border-emerald-200 hover:shadow-emerald-500/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-5xl font-black text-emerald-700 mb-3">{goal.year}</div>
                <p className="text-gray-800 font-bold text-lg">{goal.goal}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-28 bg-gradient-to-br from-emerald-700 via-teal-700 to-cyan-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 3px 3px, white 2px, transparent 0)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <motion.div
          className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
          transition={{ duration: 7, repeat: Infinity }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Award className="w-24 h-24 mx-auto mb-8 text-emerald-200" strokeWidth={2} />
            <h2 className="text-5xl md:text-7xl font-black mb-10 drop-shadow-2xl">Recognized for Impact</h2>
            <p className="text-2xl text-emerald-100 max-w-3xl mx-auto mb-16 leading-relaxed font-semibold drop-shadow-lg">
              Our work has been recognized by government bodies, CSR partners, and local communities 
              for creating meaningful environmental and social change.
            </p>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border-4 border-white/30 shadow-2xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                <TrendingUp className="w-16 h-16 mx-auto mb-6 text-emerald-200" strokeWidth={2.5} />
                <h3 className="text-3xl font-black mb-4 drop-shadow-lg">Growing Impact</h3>
                <p className="text-emerald-100 text-lg font-medium">Year-over-year increase in environmental restoration</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border-4 border-white/30 shadow-2xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                <Heart className="w-16 h-16 mx-auto mb-6 text-emerald-200" strokeWidth={2.5} />
                <h3 className="text-3xl font-black mb-4 drop-shadow-lg">Community Trust</h3>
                <p className="text-emerald-100 text-lg font-medium">Strong partnerships with local communities</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border-4 border-white/30 shadow-2xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                <Target className="w-16 h-16 mx-auto mb-6 text-emerald-200" strokeWidth={2.5} />
                <h3 className="text-3xl font-black mb-4 drop-shadow-lg">Measurable Results</h3>
                <p className="text-emerald-100 text-lg font-medium">Data-driven approach with transparent reporting</p>
              </div>
            </div>
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
            <h2 className="text-5xl md:text-7xl font-black mb-10 drop-shadow-2xl">Join the Impact</h2>
            <p className="text-2xl text-emerald-100 mb-12 leading-relaxed font-semibold drop-shadow-lg">
              Every action matters — plant a tree, support a project, or spread awareness. 
              Together, we can restore balance to nature and secure a sustainable future for all.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 text-xl px-12 py-8 shadow-2xl hover:shadow-white/50 font-black hover:scale-110 transition-all">
                <Link to={createPageUrl("Donate")}>
                  🌱 Support Our Projects
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white/10 backdrop-blur-md border-4 border-white text-white hover:bg-white hover:text-emerald-700 text-xl px-12 py-8 font-black hover:scale-110 transition-all">
                <Link to={createPageUrl("Volunteer")}>
                  🤝 Volunteer With Us
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white/10 backdrop-blur-md border-4 border-white text-white hover:bg-white hover:text-emerald-700 text-xl px-12 py-8 font-black hover:scale-110 transition-all">
                <Link to={createPageUrl("Contact")}>
                  💧 Partner for CSR Impact
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
