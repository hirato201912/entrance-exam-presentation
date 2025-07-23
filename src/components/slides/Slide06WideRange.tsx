'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  BarChart3, 
  BookOpen, 
  Clock,
  AlertCircle,
  ChevronRight,
  Calendar
} from 'lucide-react'

interface SlideProps {
  onNext?: () => void
  onPrev?: () => void
}

export default function Slide06WideRange({ onNext }: SlideProps) {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    {
      id: 1,
      text: "愛知県入試は",
      highlight: "中1・中2内容が約70％",
      suffix: "",
      icon: BarChart3,
      color: "from-blue-400 to-cyan-400",
      bgColor: "bg-blue-50",
      delay: 0
    },
    {
      id: 2,
      text: "中1の最初に習った内容も",
      highlight: "普通に出題される",
      suffix: "",
      icon: BookOpen,
      color: "from-cyan-400 to-teal-400",
      bgColor: "bg-cyan-50",
      delay: 0.2
    },
    {
      id: 3,
      text: "忘れてしまった内容の",
      highlight: "復習が急務",
      suffix: "",
      icon: Clock,
      color: "from-teal-400 to-green-400",
      bgColor: "bg-teal-50",
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
      className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 flex items-center justify-center p-4"
      onTouchEnd={handleTouchEnd}
    >
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-300/40 rounded-full"
            initial={{ 
              x: i * 80, 
              y: i * 50,
              opacity: 0
            }}
            animate={{
              y: 1100,
              opacity: [0, 0.9, 0],
              scale: [1, 2, 1]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.4,
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
          className="relative bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white p-4 md:p-6"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-black/10"></div>
          
          <div className="absolute top-3 left-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 border-2 border-white/30 rounded-full flex items-center justify-center"
            >
              <Calendar className="w-4 h-4 text-white/70" />
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
                中1・中2の内容が7割も出る
              </motion.h1>
              
              <motion.div 
                className="flex justify-center items-center space-x-3 mt-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse" />
                <span className="text-white/80 text-sm md:text-base font-medium">知ってた？この事実</span>
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
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent leading-tight mb-4">
                  想像以上に広い
                </h2>
                <motion.h2 
                  className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-500 to-teal-600 bg-clip-text text-transparent mb-4"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                >
                  出題範囲
                </motion.h2>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.15, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="bg-blue-100 border-2 border-blue-300 rounded-full p-2 inline-flex"
                  >
                    <BarChart3 className="w-5 h-5 text-blue-600" />
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
                  className="relative bg-gradient-to-r from-blue-50 via-cyan-50 to-teal-50 border-2 border-blue-200 rounded-2xl p-4 md:p-6 shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                    animate={{ 
                      y: [0, -3, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="bg-cyan-400 rounded-full p-2 shadow-lg border-2 border-white">
                      <AlertCircle className="w-5 h-5 text-white" />
                    </div>
                  </motion.div>

                  <div className="text-center pt-4">
                    <motion.h3 
                      className="text-lg md:text-xl lg:text-2xl font-bold text-slate-800 mb-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      え？
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mx-2">
                        中1の内容なんて忘れてる...
                      </span>
                    </motion.h3>
                    
                    <motion.p 
                      className="text-sm md:text-base text-slate-600 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      中3の内容だけで大丈夫と思っていませんか？<br className="hidden md:block" />
                      実は<strong className="text-blue-600">3年間すべて</strong>の復習が必要です
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
                className="group bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 hover:from-blue-600 hover:via-cyan-600 hover:to-teal-600 text-white px-6 py-3 rounded-xl font-bold text-base shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2"
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