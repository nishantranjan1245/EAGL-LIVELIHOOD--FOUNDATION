
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { motion } from "framer-motion";
import { Heart, TreeDeciduous, Droplets, Leaf, CreditCard, Smartphone, Building2, Shield, CheckCircle, FileText } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

export default function Donate() {
  const [amount, setAmount] = useState("");
  const [donationType, setDonationType] = useState("one-time");

  useEffect(() => {
    document.title = "Donate - EAGL Livelihood Foundation";
  }, []);

  const impactExamples = [
    { amount: "₹100", impact: "Plants and maintains 1 tree for a year 🌳", color: "from-green-500 to-green-600" },
    { amount: "₹500", impact: "Supports 1 participant in sustainability workshop 📚", color: "from-blue-500 to-blue-600" },
    { amount: "₹1,000", impact: "Helps revive 100 sq. meters of degraded land 🌾", color: "from-purple-500 to-purple-600" },
    { amount: "₹5,000", impact: "Supports a mini rainwater harvesting system 💧", color: "from-cyan-500 to-cyan-600" }
  ];

  const donationOptions = [
    "Tree Plantation Drives",
    "Water Conservation Projects",
    "Sustainable Agriculture Training",
    "Waste Management Campaigns",
    "Community Empowerment Programs",
    "Where Most Needed"
  ];

  return (
    <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Hero Section with Coin Rain */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.2, x: -20 }}
            animate={{ scale: 1, x: 0 }}
            transition={{ duration: 1.5 }}
          >
            <img 
              src="/images/donate-hero-image.jpg" 
              alt="Donate"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/95 via-teal-900/90 to-cyan-900/85"></div>

          {/* Floating Hearts */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-5xl"
              initial={{
                x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1000,
                y: typeof window !== 'undefined' ? window.innerHeight + 100 : 900,
                opacity: 0.3
              }}
              animate={{
                y: -100,
                opacity: [0.3, 0.7, 0.3],
                rotate: [0, 360],
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                delay: Math.random() * 3
              }}
            >
              💚
            </motion.div>
          ))}

          {/* Growing Plant Animation */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-15">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bottom-0"
                style={{ left: `${i * 30 - 60}px` }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: [0, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  repeatType: "reverse"
                }}
              >
                <TreeDeciduous className="w-24 h-32 text-emerald-400" />
              </motion.div>
            ))}
          </div>

          {/* Glowing Effects */}
          <motion.div
            className="absolute top-1/4 left-1/3 w-[450px] h-[450px] bg-emerald-500/30 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/3 w-[450px] h-[450px] bg-cyan-500/30 rounded-full blur-3xl"
            animate={{ scale: [1.3, 1, 1.3], opacity: [0.6, 0.3, 0.6] }}
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
                y: [0, -20, 0],
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mb-8"
            >
              <Heart className="w-32 h-32 mx-auto text-yellow-300 drop-shadow-2xl" strokeWidth={2.5} fill="currentColor" />
            </motion.div>
            <motion.h1 
              className="text-6xl md:text-8xl font-black text-white mb-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", bounce: 0.5, duration: 1 }}
            >
              <span className="bg-gradient-to-r from-yellow-200 via-green-200 to-emerald-200 bg-clip-text text-transparent drop-shadow-2xl">
                Donate for Nature
              </span>
            </motion.h1>
            <motion.p 
              className="text-3xl text-green-100 mb-6 font-bold drop-shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Your Contribution Creates Real Impact 🌱
            </motion.p>
            <motion.p 
              className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Every donation helps us plant trees, restore ecosystems, and build sustainable communities. 
              Join us in creating a greener, healthier planet for future generations.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Why Donate */}
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
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 bg-clip-text text-transparent">Why Your Donation Matters</h2>
            <p className="text-xl text-gray-800 leading-relaxed font-medium">
              EAGL Livelihood Foundation relies on compassionate individuals and organizations to support our mission of 
              environmental protection and community development. Your donation directly funds projects that restore nature 
              and empower people.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Examples */}
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
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 bg-clip-text text-transparent">Your Contribution Creates Impact</h2>
            <p className="text-2xl text-gray-800 font-semibold">See how your donation makes a difference</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactExamples.map((example, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-emerald-50 p-8 rounded-3xl shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:-translate-y-2 border-4 border-emerald-200 text-center"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${example.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl`}>
                  <span className="text-3xl font-black text-white">{example.amount.replace('₹', '')}</span>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">{example.amount}</h3>
                <p className="text-gray-800 font-medium text-lg">{example.impact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
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
            <h2 className="text-4xl font-black text-center mb-8 bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">Make Your Donation</h2>
            
            <div className="space-y-8">
              {/* Donation Type */}
              <div>
                <Label className="text-lg font-bold mb-4 block">Donation Type</Label>
                <RadioGroup value={donationType} onValueChange={setDonationType} className="grid grid-cols-2 gap-4">
                  <div className={`flex items-center space-x-2 p-4 rounded-xl border-2 cursor-pointer transition-all ${donationType === 'one-time' ? 'border-emerald-600 bg-emerald-50' : 'border-gray-300'}`}>
                    <RadioGroupItem value="one-time" id="one-time" />
                    <Label htmlFor="one-time" className="cursor-pointer font-semibold">One-Time Donation</Label>
                  </div>
                  <div className={`flex items-center space-x-2 p-4 rounded-xl border-2 cursor-pointer transition-all ${donationType === 'monthly' ? 'border-emerald-600 bg-emerald-50' : 'border-gray-300'}`}>
                    <RadioGroupItem value="monthly" id="monthly" />
                    <Label htmlFor="monthly" className="cursor-pointer font-semibold">Monthly Donation</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Amount Selection */}
              <div>
                <Label className="text-lg font-bold mb-4 block">Choose Amount</Label>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {['500', '1000', '2500'].map((amt) => (
                    <button
                      key={amt}
                      onClick={() => setAmount(amt)}
                      className={`p-4 rounded-xl border-2 font-bold text-lg transition-all ${amount === amt ? 'border-emerald-600 bg-emerald-50 text-emerald-700' : 'border-gray-300 hover:border-emerald-400'}`}
                    >
                      ₹{amt}
                    </button>
                  ))}
                </div>
                <Input
                  type="number"
                  placeholder="Enter custom amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="h-14 text-lg"
                />
              </div>

              {/* Purpose */}
              <div>
                <Label className="text-lg font-bold mb-4 block">Choose Purpose (Optional)</Label>
                <select className="w-full h-14 rounded-xl border-2 border-gray-300 px-4 text-lg">
                  {donationOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              {/* Payment Methods */}
              <div>
                <Label className="text-lg font-bold mb-4 block">Payment Method</Label>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex flex-col items-center p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border-2 border-emerald-200 hover:shadow-lg transition-all cursor-pointer">
                    <CreditCard className="w-12 h-12 text-emerald-600 mb-3" />
                    <span className="font-bold text-gray-900">Card Payment</span>
                  </div>
                  <div className="flex flex-col items-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl border-2 border-cyan-200 hover:shadow-lg transition-all cursor-pointer">
                    <Smartphone className="w-12 h-12 text-cyan-600 mb-3" />
                    <span className="font-bold text-gray-900">UPI</span>
                  </div>
                  <div className="flex flex-col items-center p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl border-2 border-purple-200 hover:shadow-lg transition-all cursor-pointer">
                    <Building2 className="w-12 h-12 text-purple-600 mb-3" />
                    <span className="font-bold text-gray-900">Bank Transfer</span>
                  </div>
                </div>
              </div>

              <Button className="w-full h-16 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 text-white text-xl font-bold shadow-2xl">
                <Heart className="w-6 h-6 mr-3" fill="currentColor" />
                Proceed to Donate ₹{amount || '0'}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Accountability Section */}
      <section className="py-28 bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Shield className="w-20 h-20 mx-auto mb-6 text-emerald-600" />
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 bg-clip-text text-transparent">🌿 Our Commitment to Accountability</h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed font-medium">
              Transparency is at the heart of what we do. All funds received through digital gateways or UPI are managed 
              securely under NGO compliance norms, and audited annually under FCRA and CSR guidelines.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FileText, title: "Digital Donation Receipts", desc: "Instant email receipts for all online donations" },
              { icon: CheckCircle, title: "Impact Reports for Major Contributors", desc: "Detailed reports on how your funds are used" },
              { icon: Shield, title: "CSR Compliance Certificates", desc: "Full compliance documentation for corporate partners" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-emerald-50 p-8 rounded-3xl shadow-2xl border-4 border-emerald-200 text-center hover:shadow-emerald-500/50 transition-all duration-300 hover:-translate-y-2"
              >
                <item.icon className="w-16 h-16 mx-auto mb-6 text-emerald-600" />
                <h3 className="text-2xl font-black text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-800 font-medium">{item.desc}</p>
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

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-10 drop-shadow-2xl">Every Rupee Counts</h2>
            <p className="text-2xl text-emerald-100 mb-12 leading-relaxed font-semibold drop-shadow-lg">
              Your generosity creates lasting change — for communities, for nature, and for future generations. 
              Thank you for believing in our mission! 🌍💚
            </p>
            <Button asChild size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 text-xl px-12 py-8 shadow-2xl hover:shadow-white/50 font-black hover:scale-110 transition-all">
              <Link to={createPageUrl("Contact")}>
                💼 Explore CSR Partnerships
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
