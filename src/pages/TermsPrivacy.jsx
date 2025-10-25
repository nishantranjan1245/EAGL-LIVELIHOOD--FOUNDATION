
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FileText, Shield, Lock, Info, Mail } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

export default function TermsPrivacy() {
  return (
    <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.2, x: 20 }}
            animate={{ scale: 1, x: 0 }}
            transition={{ duration: 1.5 }}
          >
            <img 
              src="/images/terms&privacy-hero-image.jpg" 
              alt="Terms and Privacy"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-teal-900/90 to-emerald-900/85"></div>
          
          {/* Floating Documents */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-24 h-32 bg-white/10 border-2 border-emerald-400/30 rounded-lg backdrop-blur-sm"
              style={{
                top: `${10 + (i % 2) * 50}%`,
                left: `${10 + i * 12}%`,
                zIndex: 0 // Ensure they are behind the main content
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [i % 2 === 0 ? -5 : 5, i % 2 === 0 ? 5 : -5, i % 2 === 0 ? -5 : 5],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.3
              }}
            >
              <div className="p-2 space-y-1">
                {[...Array(4)].map((_, j) => (
                  <div key={j} className="h-1 bg-emerald-400/50 rounded"></div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Shield Icons */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-5xl"
              style={{
                top: `${30 + i * 10}%`,
                right: `${10 + i * 15}%`,
                zIndex: 0 // Ensure they are behind the main content
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.4
              }}
            >
              🛡️
            </motion.div>
          ))}

          {/* Glowing Effects */}
          <motion.div
            className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
            animate={{ scale: [1.4, 1, 1.4], opacity: [0.5, 0.3, 0.5] }}
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
                rotate: [0, -5, 5, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mb-8"
            >
              <div className="relative inline-block">
                <Shield className="w-24 h-24 text-emerald-300" strokeWidth={2} />
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  animate={{ scale: [0.8, 1.1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Lock className="w-12 h-12 text-cyan-300" />
                </motion.div>
              </div>
            </motion.div>
            <motion.h1 
              className="text-6xl md:text-8xl font-black mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", bounce: 0.4, duration: 1 }}
            >
              <span className="bg-gradient-to-r from-emerald-200 via-teal-100 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl">
                Terms & Privacy Policy
              </span>
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-3xl text-emerald-100 max-w-3xl mx-auto leading-relaxed font-semibold drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Our commitment to transparency and data protection 🔒
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-gradient-to-b from-white via-emerald-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-emerald-50 to-teal-50 p-10 rounded-3xl shadow-2xl border-4 border-emerald-200"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🌿 1. Introduction</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Welcome to the official website of EAGL Livelihood Foundation ("we", "our", or "us"). 
                By using this website, you agree to comply with the following Terms of Use and Privacy Policy. 
                Please read them carefully before accessing or using our services.
              </p>
              <p>EAGL Livelihood Foundation is a non-profit organization registered under Section 8 of the Companies Act, 2013, with:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span><strong>CIN:</strong> U74999MH2017NPL302650</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span><strong>FCRA Registration No.:</strong> 083781770</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span><strong>Registered Office:</strong> D Wing 1202, Near Pariwar Housing Society, Kanjurmarg East, Maharashtra, India – 400042.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms of Use */}
      <section className="py-24 bg-gradient-to-b from-white via-emerald-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">📜 TERMS OF USE</h2>
            </div>

            <div className="space-y-10">
              {[
                {
                  title: "2. Acceptance of Terms",
                  content: "By accessing this website, you agree to use it for lawful, non-commercial, and ethical purposes only. If you do not agree to these terms, you should not use or access this site."
                },
                {
                  title: "3. Purpose of the Website",
                  content: "The website of EAGL Livelihood Foundation is intended to: Share information about our environmental and livelihood programs, Encourage participation through volunteering and donations, Facilitate transparent communication with donors, CSR partners, and the public. We do not promote or sell any commercial product or service."
                },
                {
                  title: "4. User Responsibilities",
                  content: "When using our website, you agree to: Provide accurate information when filling forms or contacting us, Avoid posting any content that is offensive, misleading, or unlawful, Respect intellectual property rights associated with our materials. You may not use the website for fraudulent purposes or to harm our organization or partners."
                },
                {
                  title: "5. Donations & Contributions",
                  content: "All donations made to EAGL Livelihood Foundation are voluntary and non-refundable. Funds are utilized exclusively for charitable, environmental, and social development programs in compliance with FCRA and CSR regulations. Donations via online payment gateways are processed securely through verified third-party services (e.g., Razorpay, Cashfree, Stripe). Donors will receive an electronic receipt via email after successful transactions. If you face any issue during payment, please contact us at info@eagllivelihood.org within 48 hours."
                },
                {
                  title: "6. Intellectual Property",
                  content: "All text, graphics, logos, photos, and other materials on this website are the property of EAGL Livelihood Foundation unless otherwise credited. Unauthorized copying, distribution, or reproduction of any content is prohibited without prior written consent."
                },
                {
                  title: "7. External Links",
                  content: "Our website may contain links to third-party websites for reference or collaboration. EAGL Livelihood Foundation is not responsible for the content or privacy practices of those external websites. Users are encouraged to read their respective privacy policies."
                },
                {
                  title: "8. Limitation of Liability",
                  content: "EAGL Livelihood Foundation will not be liable for any loss, damage, or inconvenience arising from the use or inability to use our website, services, or donation platforms. We take all precautions to ensure data accuracy and website security but do not guarantee uninterrupted access."
                },
                {
                  title: "9. Policy Changes",
                  content: "We may update or modify these Terms & Privacy Policy from time to time to reflect operational or legal requirements. Changes will be posted on this page with the 'Last Updated' date. Last Updated: January 2025."
                }
              ].map((section, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={scaleIn}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100 hover:border-emerald-200"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{section.content}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section className="py-24 bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 bg-gradient-to-r from-cyan-700 to-blue-700 bg-clip-text text-transparent">🔒 PRIVACY POLICY</h2>
            </div>

            <div className="space-y-10">
              {[
                {
                  title: "10. Information We Collect",
                  content: "We collect limited personal information when you: Fill out a volunteer or contact form, Make a donation, Subscribe to our newsletter, Partner with us under CSR or other programs. The information may include: Full Name, Email Address, Phone Number, Location / Address, Donation or partnership details."
                },
                {
                  title: "11. How We Use Your Information",
                  content: "We use your information to: Process donations and issue receipts, Respond to queries and provide updates, Send reports, newsletters, and event invites, Maintain transparency with donors and volunteers. We do not sell, rent, or trade your information to any third party."
                },
                {
                  title: "12. Data Protection & Security",
                  content: "Your privacy and trust are important to us. We use secure, encrypted payment gateways for online transactions. All stored data is protected with standard SSL and server security protocols. Access to donor and volunteer data is restricted to authorized staff only."
                },
                {
                  title: "13. Use of Cookies",
                  content: "Our website may use cookies to enhance user experience and track non-personal analytics (like page visits, clicks, etc.). You can disable cookies anytime through your browser settings."
                },
                {
                  title: "14. Email Communication",
                  content: "By subscribing or filling a form, you may receive emails related to: Donation confirmations, Project updates and impact stories, Volunteer opportunities. You can unsubscribe anytime by clicking the 'unsubscribe' link in the email."
                },
                {
                  title: "15. Sharing of Information",
                  content: "We may share limited donor or volunteer information with: Payment gateways for secure processing, CSR partners (only with consent) for project reporting, Regulatory authorities, if required by law (e.g., FCRA or audit compliance). We never share or sell personal data for marketing or commercial purposes."
                },
                {
                  title: "16. Data Retention",
                  content: "We retain your information only as long as necessary for project and reporting purposes, as required by law. Upon request, users can ask for correction or deletion of their data. To request deletion or correction: privacy@eagllivelihood.org"
                },
                {
                  title: "17. Children's Privacy",
                  content: "Our website is intended for individuals aged 18 and above. We do not knowingly collect data from minors. Parents or guardians may contact us for removal of any child-related data mistakenly provided."
                },
                {
                  title: "18. Contact for Privacy Concerns",
                  content: "If you have questions or concerns about our privacy or data usage, please contact us: EAGL Livelihood Foundation, D Wing 1202, Near Pariwar Housing Society, Kanjurmarg East, Maharashtra, India – 400042. Email: privacy@eagllivelihood.org | info@eagllivelihood.org"
                }
              ].map((section, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={scaleIn}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-cyan-100 hover:border-cyan-200"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{section.content}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Transparency Commitment */}
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
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mb-8"
            >
              <Shield className="w-24 h-24 mx-auto text-emerald-200" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-2xl">🌏 Transparency Commitment</h2>
            <p className="text-xl text-emerald-100 leading-relaxed font-semibold drop-shadow-lg">
              EAGL Livelihood Foundation upholds complete transparency, accountability, and integrity in all our actions — online and on-ground. 
              By continuing to use our website, you trust us with your information, and we're committed to protecting it.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
