"use client"

import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  CheckCircle,
  Users,
  Calendar,
  BarChart3,
  Zap,
  Star,
  Twitter,
  Linkedin,
  Github,
  Mail,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function ProjectManagementLanding() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [email, setEmail] = useState("")
  const [isYearlyBilling, setIsYearlyBilling] = useState(false)
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)
  const [emailError, setEmailError] = useState("")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const features = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Team Collaboration",
      description:
        "Seamlessly collaborate with your team members in real-time with advanced sharing and communication tools.",
    },
    {
      icon: <Calendar className="h-8 w-8 text-blue-600" />,
      title: "Smart Scheduling",
      description: "Intelligent project scheduling with automated timeline adjustments and deadline tracking.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
      title: "Advanced Analytics",
      description: "Get detailed insights into project progress, team performance, and resource utilization.",
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Workflow Automation",
      description: "Automate repetitive tasks and streamline your workflow with intelligent automation features.",
    },
  ]

  const pricingPlans = [
    {
      name: "Basic",
      price: "Free",
      yearlyPrice: "Free",
      description: "Perfect for small teams getting started",
      features: ["Up to 5 team members", "3 projects", "Basic reporting", "Email support"],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: "$29",
      yearlyPrice: "$290",
      period: isYearlyBilling ? "/year" : "/month",
      description: "Best for growing teams and businesses",
      features: [
        "Up to 50 team members",
        "Unlimited projects",
        "Advanced analytics",
        "Priority support",
        "Custom integrations",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      yearlyPrice: "Custom",
      description: "For large organizations with specific needs",
      features: [
        "Unlimited team members",
        "Advanced security",
        "Custom workflows",
        "Dedicated support",
        "On-premise deployment",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  const testimonials = [
    {
      quote:
        "ProjectFlow has transformed how our team manages projects. The intuitive interface and powerful features have increased our productivity by 40%.",
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
    },
    {
      quote:
        "The best project management tool we've ever used. The real-time collaboration features are game-changing for our remote team.",
      name: "Michael Chen",
      role: "CEO at StartupXYZ",
    },
    {
      quote:
        "Finally, a project management solution that scales with our business. The enterprise features are exactly what we needed.",
      name: "Emily Rodriguez",
      role: "Operations Director at GlobalTech",
    },
  ]

  const faqs = [
    {
      question: "How does the free trial work?",
      answer: "Our 14-day free trial gives you full access to all features. No credit card required. At the end of the trial, you can choose to upgrade to a paid plan or continue with the basic free plan."
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes take effect at the start of the next billing cycle."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We offer email support for all plans, with priority support for Pro users and dedicated support for Enterprise customers. Our average response time is under 2 hours."
    },
    {
      question: "Is there a limit on team members?",
      answer: "The Basic plan supports up to 5 team members, Pro plan up to 50 members, and Enterprise plan has unlimited team members."
    }
  ]

  // Auto-scroll testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address")
      return
    }
    setEmailError("")
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  return (
    <div className="min-h-screen bg-neutral">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-neutral/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-2"
              >
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-blue-600">ProjectFlow</span>
              </motion.div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Pricing
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Testimonials
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/signin">
                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                  Sign In
                </Button>
              </Link>
              <Link href="/signup">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="sm" className="bg-accent hover:bg-accent/90 text-white">
                    Get Started
                  </Button>
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            {/* Left side - Text content */}
            <motion.div initial="initial" animate="animate" variants={staggerContainer} className="mb-12 lg:mb-0">
              <motion.h1
                variants={fadeInLeft}
                className="text-4xl lg:text-6xl font-bold text-blue-600 leading-tight mb-6"
              >
                Manage Projects Like a Pro
              </motion.h1>
              <motion.p variants={fadeInLeft} className="text-xl text-gray-600 leading-relaxed mb-8 max-w-lg">
                Streamline your workflow, boost team productivity, and deliver projects on time with our intuitive
                project management platform.
              </motion.p>
              <motion.div variants={fadeInLeft}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={() => scrollToSection("features")}
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </motion.div>
              <motion.p variants={fadeInLeft} className="text-sm text-gray-500 mt-4">
                No credit card required • 14-day free trial
              </motion.p>
            </motion.div>

            {/* Right side - Product mockup */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative mx-auto w-full max-w-lg">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-green-300/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
                <div className="relative bg-white rounded-2xl p-4 md:p-8 shadow-lg overflow-hidden">
                  <Image
                    src="/dashboard.jpg"
                    alt="Project Management Dashboard"
                    width={1920}
                    height={1080}
                    className="w-full rounded-xl transform hover:scale-105 transition-transform duration-300"
                    priority
                    quality={100}
                    style={{ 
                      maxHeight: '500px',
                      objectFit: 'contain',
                      imageRendering: 'crisp-edges'
                    }}
                    unoptimized
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl lg:text-4xl font-bold text-blue-600 mb-4">
              Everything you need to manage projects
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive suite of tools helps teams of all sizes deliver exceptional results
            </motion.p>
          </motion.div>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-blue-600 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your team's needs
            </motion.p>
            
            {/* Billing Toggle */}
            <motion.div variants={fadeInUp} className="flex items-center justify-center mt-8 space-x-4">
              <span className={`text-sm ${!isYearlyBilling ? 'text-blue-600 font-semibold' : 'text-gray-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsYearlyBilling(!isYearlyBilling)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  isYearlyBilling ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isYearlyBilling ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm ${isYearlyBilling ? 'text-blue-600 font-semibold' : 'text-gray-500'}`}>
                Yearly <span className="text-green-500 font-medium">(Save 20%)</span>
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                variants={fadeInUp}
                className={`relative rounded-2xl border ${
                  plan.popular ? 'border-blue-600 shadow-lg' : 'border-gray-200'
                } p-8`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                )}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-500 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      {isYearlyBilling ? plan.yearlyPrice : plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-gray-500 text-base ml-1">{plan.period}</span>
                    )}
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      className={`w-full ${
                        plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'
                      } text-white`}
                    >
                      {plan.cta}
                    </Button>
                  </motion.div>
                </div>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Loved by Teams Worldwide
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600">
              See what our customers have to say about ProjectFlow
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="relative"
          >
            <div className="overflow-hidden">
              <motion.div
                variants={fadeInUp}
                className="relative w-full"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="bg-neutral rounded-2xl p-8 md:p-12"
                  >
                    <div className="max-w-3xl mx-auto text-center">
                      <Star className="h-12 w-12 text-yellow-400 mx-auto mb-6" />
                      <blockquote>
                        <p className="text-xl md:text-2xl text-gray-900 font-medium mb-8">
                          "{testimonials[currentTestimonial].quote}"
                        </p>
                        <footer>
                          <div className="font-semibold text-lg text-blue-600">
                            {testimonials[currentTestimonial].name}
                          </div>
                          <div className="text-gray-600 mt-1">
                            {testimonials[currentTestimonial].role}
                          </div>
                        </footer>
                      </blockquote>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      currentTestimonial === index ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 lg:py-24 bg-neutral">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl lg:text-4xl font-bold text-blue-600 mb-4">
              Frequently Asked Questions
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600">
              Everything you need to know about ProjectFlow
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform ${
                      expandedFAQ === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {expandedFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 bg-gray-50 text-gray-600 border-t border-gray-200">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-16 lg:py-24 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl lg:text-4xl font-bold text-blue-600 mb-4">
              Stay Updated
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 mb-8">
              Get the latest updates and news about ProjectFlow
            </motion.p>
            <motion.form variants={fadeInUp} onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (emailError) setEmailError("")
                  }}
                  className={`w-full px-4 py-3 rounded-lg ${
                    emailError ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                  }`}
                />
                {emailError && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute text-sm text-red-500 mt-1"
                  >
                    {emailError}
                  </motion.p>
                )}
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Subscribe
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <span className="text-2xl font-bold text-blue-600">ProjectFlow</span>
              </div>
              <p className="text-gray-600 mb-6 max-w-md">
                The ultimate project management solution for teams who want to deliver exceptional results.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <Github className="h-6 w-6" />
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-600 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("features")}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("pricing")}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Pricing
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("testimonials")}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Testimonials
                  </button>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-600 mb-4">Newsletter</h4>
              <p className="text-gray-600 mb-4">Stay updated with our latest features and news.</p>
              <form onSubmit={handleNewsletterSubmit} className="flex">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-r-none border-gray-300 focus:border-blue-600"
                  required
                />
                <Button type="submit" className="rounded-l-none bg-blue-600 hover:bg-blue-700 text-white">
                  <Mail className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
            <p>&copy; 2024 ProjectFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 