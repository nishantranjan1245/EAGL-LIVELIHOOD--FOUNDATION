
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Users, Heart, Briefcase, HandshakeIcon, TreeDeciduous, Mail, Phone, Lightbulb, MessageSquare } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

export default function GetInvolved() {
  // Set page title when component mounts
  useEffect(() => {
    document.title = "Get Involved - Make a Difference | Green Earth Project"; 
    // Favicon is typically set globally in public/index.html or through a favicon management library.
    // Dynamic favicon changes within a component are generally not recommended for SEO or performance.
  }, []);

  const ways = [
    {
      icon: Users,
      title: "Volunteer With Us",
      description: "Volunteers are the heart of our movement. From plantation drives and clean-up campaigns to awareness workshops and rural training programs — our volunteers help us turn ideas into action.",
      activities: [
        "Participating in local tree plantation or environment drives",
        "Conducting awareness sessions in schools or communities",
        "Supporting event coordination or photography/documentation",
        "Becoming an online advocate for climate action"
      ],
      color: "from-emerald-600 to-teal-700",
      link: createPageUrl("Volunteer")
    },
    {
      icon: Heart,
      title: "Donate to Support Our Work",
      description: "Every contribution — big or small — helps us plant trees, restore ecosystems, and support community-driven sustainability projects. 100% of all donations go directly toward on-ground programs.",
      impact: [
        "₹100 plants and maintains one tree for a year 🌳",
        "₹500 supports one participant in a sustainability workshop",
        "₹1,000 helps revive 100 sq. meters of degraded land",
        "₹5,000 supports a mini rainwater harvesting system"
      ],
      color: "from-cyan-600 to-blue-700",
      link: createPageUrl("Donate")
    },
    {
      icon: Briefcase,
      title: "Partner With Us (CSR / Institutional)",
      description: "Corporates, institutions, and community organizations are powerful allies in the fight against climate change. We invite socially responsible companies to collaborate with us through CSR partnerships.",
      offerings: [
        "End-to-end project execution",
        "Branding and co-credit for partners",
        "Transparent reporting and impact data",
        "Compliance with CSR Act 2013"
      ],
      color: "from-purple-600 to-indigo-700",
      link: createPageUrl("Contact")
    },
    {
      icon: Lightbulb,
      title: "Start a Green Campaign",
      description: "Have an idea to create change in your community? We support passionate individuals and local groups to start small-scale climate action campaigns — from waste clean-ups to urban gardening.",
      color: "from-lime-600 to-green-700",
      link: createPageUrl("Contact")
    }
  ];

  const whyChoose = [
    "FCRA & CSR-registered NGO (Legal & Transparent)",
    "On-ground environmental impact since 2017",
    "25,000+ Trees Planted • 40+ Water Projects • 5,000+ Lives Reached",
    "Run by passionate environmentalists and community leaders"
  ];

  return (
    <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Hero Section with Heart Beat Animation */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.1, x: -30 }}
            animate={{ scale: 1, x: 0 }}
            transition={{ duration: 1.8 }}
          >
            <img 
              src="/images/getinvolved-hero-image.jpg" 
              alt="Join us"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/95 via-teal-800/90 to-cyan-900/85"></div>

          {/* Heartbeat Pulse */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              animate={{
                scale: [1, 2.5],
                opacity: [0.6, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeOut"
              }}
            >
              <Heart className="w-32 h-32 text-emerald-400" />
            </motion.div>
          ))}

          {/* Connecting Hands Pattern */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-6xl"
                style={{
                  top: `${(i % 4) * 25}%`,
                  left: `${Math.floor(i / 4) * 33}%`
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              >
                🤝
              </motion.div>
            ))}
          </div>

          {/* Glowing Effects */}
          <motion.div
            className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-gradient-to-br from-emerald-500/30 to-teal-500/30 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1], 
              rotate: [0, 90, 0],
              opacity: [0.3, 0.6, 0.3] 
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl"
            animate={{ 
              scale: [1.3, 1, 1.3], 
              rotate: [90, 0, 90],
              opacity: [0.6, 0.3, 0.6] 
            }}
            transition={{ duration: 10, repeat: Infinity }}
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
                y: [0, -15, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="mb-8"
            >
              <Users className="w-28 h-28 mx-auto text-emerald-300 drop-shadow-2xl" strokeWidth={2.5} />
            </motion.div>
            <motion.h1 
              className="text-6xl md:text-8xl font-black text-white mb-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", bounce: 0.4, duration: 1 }}
            >
              <span className="bg-gradient-to-r from-emerald-200 via-teal-100 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl">
                Get Involved
              </span>
            </motion.h1>
            <motion.p 
              className="text-3xl text-emerald-100 mb-6 font-bold drop-shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", bounce: 0.4, duration: 1.1, delay: 0.2 }}
            >
              Join the Movement for a Greener Planet 🌿
            </motion.p>
            <motion.p 
              className="text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", bounce: 0.4, duration: 1.2, delay: 0.4 }}
            >
              Real change starts when people come together for a common cause. Whether you plant a tree, volunteer your time, 
              or contribute funds, your involvement makes a real difference.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Ways to Contribute */}
      <section className="py-28 bg-[#E0F7F4] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #059669 2px, transparent 0)',
            backgroundSize: '50px 50px'
          }}></div>
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
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 bg-clip-text text-transparent">Ways to Contribute</h2>
            <p className="text-2xl text-gray-800 max-w-3xl mx-auto font-semibold">
              Choose how you want to make a difference. Every contribution counts towards a sustainable future.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {ways.map((way, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-emerald-50 p-10 rounded-3xl shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:-translate-y-2 border-4 border-emerald-200"
              >
                <div className={`w-24 h-24 bg-gradient-to-br ${way.color} rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-emerald-500/50`}>
                  <way.icon className="w-12 h-12 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-5">{way.title}</h3>
                <p className="text-lg text-gray-800 mb-6 leading-relaxed font-medium">{way.description}</p>
                
                {way.activities && (
                  <div className="mb-6">
                    <h4 className="font-bold text-xl text-gray-900 mb-4">You Can Help Us By:</h4>
                    <ul className="space-y-3">
                      {way.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2.5 flex-shrink-0"></div>
                          <span className="text-gray-800 font-medium">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {way.impact && (
                  <div className="mb-6">
                    <h4 className="font-bold text-xl text-gray-900 mb-4">How Your Donation Helps:</h4>
                    <ul className="space-y-3">
                      {way.impact.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2.5 flex-shrink-0"></div>
                          <span className="text-gray-800 font-medium text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {way.offerings && (
                  <div className="mb-6">
                    <h4 className="font-bold text-xl text-gray-900 mb-4">What We Offer Partners:</h4>
                    <ul className="space-y-3">
                      {way.offerings.map((offering, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2.5 flex-shrink-0"></div>
                          <span className="text-gray-800 font-medium">{offering}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Button asChild className={`w-full bg-gradient-to-r ${way.color} text-white hover:opacity-90 text-lg py-6 font-bold shadow-xl`}>
                  <Link to={way.link}>
                    Learn More
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Opportunities */}
      <section className="py-28 bg-[#D4F1F4] relative overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-emerald-300/30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-white to-emerald-50 p-12 rounded-3xl border-4 border-emerald-200 shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-4xl font-black text-gray-900 mb-5 bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">👩‍💻 Internships & Youth Engagement</h3>
              <p className="text-xl text-gray-800 mb-6 leading-relaxed font-medium">
                We actively engage students, professionals, and young environmentalists through our internship and fellowship programs.
              </p>
              <ul className="space-y-3 mb-8">
                {["Environmental Research Assistance", "Campaign Management & Social Media", "Community Outreach Support", "Documentation & Field Reporting"].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-gray-800 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white text-lg py-6 px-8 font-bold shadow-xl hover:opacity-90">
                <Link to={createPageUrl("Contact")}>Apply for Internship</Link>
              </Button>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-white to-cyan-50 p-12 rounded-3xl border-4 border-cyan-200 shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-4xl font-black text-gray-900 mb-5 bg-gradient-to-r from-cyan-700 to-blue-700 bg-clip-text text-transparent">🌎 Spread the Word</h3>
              <p className="text-xl text-gray-800 mb-6 leading-relaxed font-medium">
                You don't always need to be in the field to make an impact. Share our mission, talk about climate action, 
                and help us reach more changemakers.
              </p>
              <ul className="space-y-3 mb-8">
                {["Follow and share on social media", "Organize digital awareness campaigns", "Use hashtags: #EAGLLivelihood #ActForEarth #GreenIndia"].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-gray-800 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <a key={i} href="#" className="w-14 h-14 bg-gradient-to-br from-cyan-600 to-blue-700 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-28 bg-[#E0F7F4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 bg-clip-text text-transparent">Why Get Involved With Us?</h2>
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
                className="flex items-start gap-5 p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl shadow-2xl border-4 border-emerald-200 hover:shadow-emerald-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-xl">
                  <span className="text-white font-black text-2xl">✓</span>
                </div>
                <p className="text-xl text-gray-800 font-bold leading-relaxed">{reason}</p>
              </motion.div>
            ))}
          </div>
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
            <TreeDeciduous className="w-24 h-24 mx-auto mb-8 text-emerald-200" strokeWidth={2} />
            <h2 className="text-5xl md:text-7xl font-black mb-10 drop-shadow-2xl">Take the First Step</h2>
            <p className="text-2xl text-emerald-100 mb-12 leading-relaxed font-semibold drop-shadow-lg">
              Every action matters. Whether you plant one tree or start a campaign — your participation brings us closer 
              to a cleaner, greener India 🌿
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 text-xl px-12 py-8 shadow-2xl hover:shadow-white/50 font-black hover:scale-110 transition-all">
                <Link to={createPageUrl("Volunteer")}>
                  🌳 Volunteer Now
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white/10 backdrop-blur-md border-4 border-white text-white hover:bg-white hover:text-emerald-700 text-xl px-12 py-8 font-black hover:scale-110 transition-all">
                <Link to={createPageUrl("Donate")}>
                  💧 Donate for Environment
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white/10 backdrop-blur-md border-4 border-white text-white hover:bg-white hover:text-emerald-700 text-xl px-12 py-8 font-black hover:scale-110 transition-all">
                <Link to={createPageUrl("Contact")}>
                  🤝 CSR Collaboration
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 bg-gradient-to-b from-white via-emerald-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-5xl font-black text-gray-900 mb-8 bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">Have Questions?</h2>
            <p className="text-xl text-gray-800 mb-12 font-semibold">
              Our team is here to help you find the best way to contribute to our mission
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <div className="flex items-center gap-4 text-gray-800 p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl shadow-xl border-4 border-emerald-200">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center shadow-xl">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-600 font-semibold">Email Us</div>
                  <div className="font-bold text-lg">info@eagllivelihood.org</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-800 p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl shadow-xl border-4 border-cyan-200">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center shadow-xl">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-600 font-semibold">Call Us</div>
                  <div className="font-bold text-lg">+91 9876543210</div>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <Button asChild size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white text-xl px-12 py-8 font-bold shadow-2xl hover:opacity-90">
                <Link to={createPageUrl("Contact")}>
                  Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
