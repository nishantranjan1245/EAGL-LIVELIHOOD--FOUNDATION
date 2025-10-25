
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { HelpCircle, TreeDeciduous, Heart, Users, FileText, Shield, Mail, Phone } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

export default function FAQs() {
  useEffect(() => {
    document.title = "FAQs | EAGL Livelihood Foundation";
  }, []);

  const faqSections = [
    {
      title: "🌱 General Questions",
      icon: HelpCircle,
      questions: [
        {
          q: "What is EAGL Livelihood Foundation?",
          a: "EAGL Livelihood Foundation is a registered non-profit organization (CIN: U74999MH2017NPL302650) working in the fields of environment protection, climate action, and sustainable livelihoods. We focus on community-based projects like tree plantation, water conservation, and sustainable farming that restore nature and improve local livelihoods."
        },
        {
          q: "When was the foundation established?",
          a: "EAGL Livelihood Foundation was founded on 8 December 2017 and has been actively implementing environmental and social impact programs since then."
        },
        {
          q: "Is EAGL Livelihood Foundation a government organization?",
          a: "No. We are a Section 8 Non-Profit Company, operating independently under the Companies Act, 2013, with a focus on social and environmental development."
        },
        {
          q: "Where is EAGL Livelihood Foundation based?",
          a: "Our registered office is located at: D Wing 1202, Near Pariwar Housing Society, Kanjurmarg East, Maharashtra, India – 400042."
        },
        {
          q: "What areas do you work in?",
          a: "We currently work across multiple districts in Maharashtra and nearby states, with programs focused on: Tree Plantation & Ecosystem Restoration, Water Conservation & Resource Management, Sustainable Agriculture & Rural Livelihoods, and Climate Awareness & Waste Management."
        }
      ]
    },
    {
      title: "💚 Donations & Funding",
      icon: Heart,
      questions: [
        {
          q: "Is my donation to EAGL Livelihood Foundation tax-deductible?",
          a: "Donations are used solely for charitable and environmental purposes. Tax exemption eligibility (such as 80G certification) is under process and will be updated once available."
        },
        {
          q: "How can I donate?",
          a: "You can make a donation securely through: Our Online Payment Gateway (Debit/Credit Card, Net Banking), UPI / QR Code Payment, or CSR or Institutional Partnerships. Visit our Donate Page for more details."
        },
        {
          q: "Is it safe to donate online?",
          a: "Absolutely. All online payments are processed through secure, verified payment gateways such as Razorpay, Cashfree, or Stripe. We also share an instant email receipt and confirmation for every online donation."
        },
        {
          q: "How do I know where my money is going?",
          a: "We maintain 100% transparency. Every rupee you donate is utilized for environment-focused projects. Annual impact reports and financial summaries are available to all our supporters."
        },
        {
          q: "Can companies or organizations donate under CSR?",
          a: "Yes! We are eligible for CSR funding under the Companies Act, 2013. Corporates can partner with us for: Tree Plantation Drives, Water Conservation Projects, Waste Management Initiatives, and Sustainable Livelihood Development. For proposals, contact: csr@eagllivelihood.org"
        }
      ]
    },
    {
      title: "🌳 Volunteering & Participation",
      icon: Users,
      questions: [
        {
          q: "How can I volunteer with EAGL Livelihood Foundation?",
          a: "You can register as a volunteer through our Get Involved page. Opportunities include: Tree plantation events, Awareness campaigns, Field documentation & photography, and Online climate advocacy."
        },
        {
          q: "Do I need any special skills to volunteer?",
          a: "Not necessarily. Passion and willingness to contribute are all that matter! Our team provides orientation and guidance to every volunteer before the event."
        },
        {
          q: "Are there internship opportunities for students?",
          a: "Yes. We offer short-term and long-term internships for students interested in sustainability, environment, or social development. Interns gain real-world exposure to field projects, data collection, and community engagement."
        },
        {
          q: "How can I stay updated with your work?",
          a: "Follow us on our social media platforms: Facebook, Twitter, Instagram, and LinkedIn. You can also subscribe to our newsletter for updates on upcoming drives, campaigns, and reports."
        }
      ]
    },
    {
      title: "🌾 Programs & Projects",
      icon: TreeDeciduous,
      questions: [
        {
          q: "What kind of programs do you run?",
          a: "Our key programs include: Tree Plantation & Forest Restoration, Water Conservation & Management, Sustainable Agriculture & Livelihood Training, and Waste Management & Plastic-Free Campaigns. Each program is implemented with measurable impact and community involvement."
        },
        {
          q: "Can we collaborate for joint environment projects?",
          a: "Yes! We frequently partner with schools, universities, corporates, and local authorities for environment-friendly projects. Contact us to plan your next joint green initiative. 🌱"
        },
        {
          q: "Do you provide reports for projects or partnerships?",
          a: "Absolutely. We provide detailed impact reports, photographic evidence, and financial utilization summaries for every CSR or sponsored project."
        }
      ]
    },
    {
      title: "🧭 Transparency & Accountability",
      icon: Shield,
      questions: [
        {
          q: "How do you ensure project transparency?",
          a: "Each project is carefully documented and audited. We also publish annual reports and maintain digital records of our plantation and livelihood activities."
        },
        {
          q: "Are you registered under FCRA?",
          a: "Yes. EAGL Livelihood Foundation is registered under FCRA (Reg. No.: 083781770), allowing us to receive international donations in compliance with legal requirements."
        },
        {
          q: "How can I contact your team?",
          a: "Office: D Wing 1202, Near Pariwar Housing Society, Kanjurmarg East, Maharashtra, India – 400042 | Email: info@eagllivelihood.org | Phone: +91 9876543210"
        }
      ]
    }
  ];

  // Calculate question numbers sequentially
  let questionNumber = 1;

  return (
    <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Hero Section with Question Marks Pattern */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.2, rotate: 3 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.5 }}
          >
            <img 
              src="/images/faq-hero-image.jpg" 
              alt="FAQs"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/95 via-teal-900/90 to-cyan-900/85"></div>

          {/* Bouncing Question Marks */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-6xl font-bold text-emerald-400/20"
              style={{
                top: `${(i % 3) * 30 + 10}%`,
                left: `${Math.floor(i / 3) * 25 + 10}%`
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 10, -10, 0],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2
              }}
            >
              ?
            </motion.div>
          ))}

          {/* Light Bulb Ideas */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-5xl"
              style={{
                top: `${20 + (i % 2) * 60}%`,
                left: `${15 + i * 15}%`
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3
              }}
            >
              💡
            </motion.div>
          ))}

          {/* Pulsing Glow */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
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
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mb-8"
            >
              <HelpCircle className="w-24 h-24 mx-auto text-emerald-300" strokeWidth={2.5} />
            </motion.div>
            <motion.h1 
              className="text-6xl md:text-8xl font-black mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", bounce: 0.5, duration: 1 }}
            >
              <span className="bg-gradient-to-r from-emerald-200 via-teal-100 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl">
                ❓ FAQs
              </span>
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-3xl text-emerald-100 max-w-3xl mx-auto leading-relaxed font-semibold drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Find answers to the most commonly asked questions about EAGL Livelihood Foundation
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-24 bg-gradient-to-b from-white via-emerald-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <section.icon className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{section.title}</h2>
              </div>

              <div className="space-y-6">
                {section.questions.map((item, qIndex) => {
                  const currentNumber = questionNumber++;
                  return (
                    <motion.div 
                      key={qIndex} 
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={scaleIn}
                      transition={{ duration: 0.5, delay: qIndex * 0.1 }}
                      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100 hover:border-emerald-200"
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Q{currentNumber}. {item.q}</h3>
                      <p className="text-gray-700 leading-relaxed">{item.a}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-24 bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 text-white relative overflow-hidden">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-2xl">🌏 Still Have Questions?</h2>
            <p className="text-xl text-emerald-100 mb-10 leading-relaxed font-semibold drop-shadow-lg">
              We'd love to assist you! Reach out to our team with your queries or collaboration ideas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 text-lg px-10 py-6 font-bold shadow-2xl hover:scale-105 transition-all">
                <Link to={createPageUrl("Contact")}>
                  📩 Contact Us
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white/10 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-emerald-700 text-lg px-10 py-6 font-bold hover:scale-105 transition-all">
                <Link to={createPageUrl("Volunteer")}>
                  🌱 Volunteer Now
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white/10 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-emerald-700 text-lg px-10 py-6 font-bold hover:scale-105 transition-all">
                <Link to={createPageUrl("Donate")}>
                  💚 Donate for Environment
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
