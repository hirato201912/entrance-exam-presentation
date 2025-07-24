'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  AlertTriangle, 
  Users, 
  TrendingUp,
  BookOpen,
  ChevronRight
} from 'lucide-react'

interface SlideProps {
  onNext?: () => void
  onPrev?: () => void
}

export default function Slide01Introduction({ onNext }: SlideProps) {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    {
      id: 1,
      text: "みんな、受験の準備はどう？",
      icon: Users,
      color: "from-blue-400 to-cyan-400",
      bgColor: "bg-blue-50",
      delay: 0
    },
    {
      id: 2,
      text: "実は、知らないと",
      highlight: "絶対に困ること",
      suffix: "がある",
      icon: AlertTriangle,
      color: "from-orange-400 to-red-400",
      bgColor: "bg-orange-50",
      delay: 0.2
    },
    {
      id: 3,
      text: "知ってる子と知らない子で",
      highlight: "合格に大きな差",
      suffix: "が出る",
      icon: TrendingUp,
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

  // タッチ操作のみ
  const handleTouchEnd = (e: React.TouchEvent) => {
    e.preventDefault()
    nextStep()
  }

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4"
      onTouchEnd={handleTouchEnd}
    >
      {/* 背景パーティクル効果 */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{ 
              x: i * 280, 
              y: i * 160,
              opacity: 0
            }}
            animate={{
              y: 1100,
              opacity: [0, 0.6, 0],
              scale: 1.5
            }}
            transition={{
              duration: 15 + Math.random() * 8,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* メインコンテナ */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-6xl bg-white/96 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 overflow-hidden"
      >
        {/* ヘッダー（次のスライドボタンを同じ行に配置） */}
        <motion.div 
          className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white p-4 md:p-6"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-black/10"></div>
          
          {/* 装飾的な要素 */}
          <div className="absolute top-3 left-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 border-2 border-white/30 rounded-full flex items-center justify-center"
            >
              <BookOpen className="w-4 h-4 text-white/70" />
            </motion.div>
          </div>

          <div className="relative z-10 flex justify-between items-center">
            {/* タイトル */}
            <div className="flex-1 text-center">
              <motion.h1 
                className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                今年の受験、どうする？
              </motion.h1>
              
              <motion.div 
                className="flex justify-center items-center space-x-3 mt-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse" />
                <span className="text-white/80 text-sm md:text-base font-medium">中3生のための重要な話</span>
                <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse" />
              </motion.div>
            </div>

            {/* 次のスライドボタン（全メッセージ表示後に表示） */}
            <AnimatePresence>
              {currentStep === steps.length && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: 20 }}
                  transition={{ duration: 0.5 }}
                  className="group bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 border border-white/30"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleNextSlide}
                >
                  {/* <span>次へ</span> */}
                  {/* <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> */}
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* メインコンテンツエリア */}
        <div className="p-3 md:p-4 lg:p-6">
          {/* サブタイトル（最初のメッセージ表示後に消失） */}
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
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent leading-tight mb-4">
                  君の受験準備、
                </h2>
                <motion.h2 
                  className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent mb-4"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                >
                  本当に大丈夫？
                </motion.h2>
                
                {/* 注意アイコン */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="bg-orange-100 border-2 border-orange-300 rounded-full p-2 inline-flex"
                  >
                    <AlertTriangle className="w-5 h-5 text-orange-500" />
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ステップコンテンツ（コンパクト化） */}
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
                    {/* 背景グラデーション */}
                    <div className={`absolute inset-0 bg-gradient-to-r opacity-5 ${step.color}`} />
                    
                    {/* 装飾的な背景要素 */}
                    <div className="absolute top-2 right-2 opacity-8">
                      <Icon className="w-12 h-12 md:w-16 md:h-16 text-slate-400" />
                    </div>
                    
                    {/* コンテンツ */}
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

                    {/* 下部の装飾線 */}
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
        </div>

        {/* コントロールエリア（コンパクト化） */}
        <motion.div 
          className="bg-gradient-to-r from-slate-50 via-white to-slate-50 border-t border-slate-200 p-3 md:p-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex justify-center items-center">
            {/* 続きを見るボタン */}
            {currentStep < steps.length && (
              <motion.button
                onClick={nextStep}
                className="group bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 hover:from-indigo-600 hover:via-purple-600 hover:to-blue-600 text-white px-6 py-3 rounded-xl font-bold text-base shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2"
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