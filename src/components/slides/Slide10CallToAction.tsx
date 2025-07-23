'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Rocket, 
  Users, 
  Star,
  Heart,
  ChevronRight,
  Trophy
} from 'lucide-react'

interface SlideProps {
  onNext?: () => void
  onPrev?: () => void
}

export default function Slide10CallToAction({ onNext }: SlideProps) {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    {
      id: 1,
      text: "今から始めれば",
      highlight: "間に合う",
      suffix: "",
      icon: Rocket,
      color: "from-yellow-400 to-orange-400",
      bgColor: "bg-yellow-50",
      delay: 0
    },
    {
      id: 2,
      text: "先輩たちも同じ講座で",
      highlight: "合格している",
      suffix: "",
      icon: Users,
      color: "from-orange-400 to-red-400",
      bgColor: "bg-orange-50",
      delay: 0.2
    },
    {
      id: 3,
      text: "君も",
      highlight: "絶対に合格できる",
      suffix: "",
      icon: Star,
      color: "from-red-400 to-pink-400",
      bgColor: "bg-red-50",
      delay: 0.4
    }
  ]

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleNextSlide = () => {
    if (onNext) {
      onNext()
    }
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    e.preventDefault()
    nextStep()
  }

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-slate-900 via-yellow-900 to-orange-900 flex items-center justify-center p-4"
      onTouchEnd={handleTouchEnd}
    >
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-300/70 rounded-full"
            initial={{ 
              x: i * 50, 
              y: i * 30,
              opacity: 0
            }}
            animate={{
              y: 1100,
              opacity: [0, 1, 0],
              scale: [1, 3, 1]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-6xl bg-white/96 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 overflow-hidden"
      >
        <motion.div 
          className="relative bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 text-white p-4 md:p-6"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-black/10"></div>
          
          <div className="absolute top-3 left-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 border-2 border-white/30 rounded-full flex items-center justify-center"
            >
              <Trophy className="w-4 h-4 text-white/70" />
            </motion.div>
          </div>

          <div className="relative z-10">
            <div className="text-center">
              <motion.h1 
                className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                一緒に合格を目指そう
              </motion.h1>
              
              <motion.div 
                className="flex justify-center items-center space-x-3 mt-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse" />
                <span className="text-white/80 text-sm md:text-base font-medium">君の夢を現実にしよう</span>
                <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="p-3 md:p-4 lg:p-6">
          <AnimatePresence>
            {currentStep === 0 && (
              <motion.div 
                key="subtitle"
                className="text-center mb-6 md:mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ 
                  opacity: 0, 
                  scale: 0.9, 
                  y: -30,
                  transition: { duration: 0.5 }
                }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent leading-tight mb-4">
                  さあ、一緒に始めよう！
                </h2>
                <motion.h2 
                  className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent mb-4"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                >
                  合格への第一歩を踏み出そう
                </motion.h2>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="bg-yellow-100 border-2 border-yellow-300 rounded-full p-2 inline-flex"
                  >
                    <Rocket className="w-5 h-5 text-yellow-600" />
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="space-y-3 md:space-y-4 max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              {steps.map((step, index) => {
                const Icon = step.icon
                const isVisible = index < currentStep
                const isCurrent = index === currentStep - 1
                
                if (!isVisible && !isCurrent) return null

                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: -150, scale: 0.8 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0, 
                      scale: isCurrent ? 1.02 : 1,
                      y: isCurrent ? -2 : 0
                    }}
                    exit={{ opacity: 0, x: 150, scale: 0.8 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: step.delay,
                      ease: "easeOut"
                    }}
                    className={`relative overflow-hidden rounded-2xl p-4 md:p-6 transition-all duration-500 ${
                      isCurrent 
                        ? `bg-white shadow-2xl ring-2 ring-offset-2 ${step.bgColor.replace('bg-', 'ring-').replace('-50', '-200')}` 
                        : "bg-slate-50/90 shadow-xl hover:shadow-2xl"
                    }`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r opacity-5 ${step.color}`} />
                    
                    <div className="absolute top-2 right-2 opacity-8">
                      <Icon className="w-12 h-12 md:w-16 md:h-16 text-slate-400" />
                    </div>
                    
                    <div className="relative z-10 flex items-center space-x-3 md:space-x-4">
                      <motion.div
                        initial={{ rotate: -180, scale: 0.5 }}
                        animate={{ 
                          rotate: isCurrent ? 360 : 0,
                          scale: isCurrent ? 1.08 : 1
                        }}
                        transition={{ 
                          duration: 0.9, 
                          delay: 0.3,
                          ease: "easeOut"
                        }}
                        className={`p-3 md:p-4 rounded-xl bg-gradient-to-r flex-shrink-0 shadow-xl ${step.color}`}
                      >
                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </motion.div>
                      
                      <div className="flex-1 min-w-0">
                        <motion.p 
                          className="text-base md:text-lg lg:text-xl text-slate-700 font-semibold leading-relaxed break-words"
                          initial={{ opacity: 0, y: 25 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.7, delay: 0.6 }}
                        >
                          {step.text}
                          {step.highlight && (
                            <motion.span
                              initial={{ opacity: 0, scale: 0.7, y: 12 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 1.0 }}
                              className={`mx-1 px-2 md:px-3 py-1 bg-gradient-to-r ${step.color} text-white rounded-lg font-bold shadow-xl inline-block transform hover:scale-105 transition-transform text-sm md:text-base lg:text-lg border border-white/20`}
                            >
                              {step.highlight}
                            </motion.span>
                          )}
                          {step.suffix}
                        </motion.p>
                      </div>
                    </div>

                    {isCurrent && (
                      <motion.div
                        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color}`}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.9, delay: 0.5 }}
                      />
                    )}
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          <AnimatePresence>
            {currentStep === steps.length && (
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-6 md:mt-8 max-w-4xl mx-auto"
              >
                <motion.div 
                  className="relative bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 border-2 border-yellow-300 rounded-2xl p-4 md:p-6 shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                    animate={{ 
                      y: [0, -5, 0],
                      scale: [1, 1.15, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="bg-yellow-500 rounded-full p-2 shadow-lg border-2 border-white">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                  </motion.div>

                  <div className="text-center pt-4">
                    <motion.h3 
                      className="text-lg md:text-xl lg:text-2xl font-bold text-slate-800 mb-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      この入試対策講座で、
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mx-2">
                        多くの先輩が志望校に合格
                      </span>
                    </motion.h3>
                    
                    <motion.p 
                      className="text-sm md:text-base text-slate-600 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      一人で悩まず、一緒に頑張ろう。<br className="hidden md:block" />
                      <strong className="text-yellow-600">君なら絶対にできる</strong>、<strong className="text-orange-600">一緒に頑張れば必ず合格できる</strong>
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div 
          className="bg-gradient-to-r from-slate-50 via-white to-slate-50 border-t border-slate-200 p-3 md:p-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex justify-center items-center">
            {currentStep < steps.length && (
              <motion.button
                onClick={nextStep}
                className="group bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-xl font-bold text-base shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <span>続きを見る</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}