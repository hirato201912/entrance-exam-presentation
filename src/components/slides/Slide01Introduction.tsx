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

export default function Slide01Introduction() {
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

  // iPad用のタッチ操作
  const handleTouchEnd = (e: React.TouchEvent) => {
    e.preventDefault()
    e.stopPropagation()
    nextStep()
  }

  // iPad用のスワイプ操作
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleSwipe = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    
    if (isLeftSwipe) {
      nextStep()
    }
  }

  useEffect(() => {
    handleSwipe()
  }, [touchEnd])

  // キーボード操作（外部キーボード接続時）
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter' || e.key === 'ArrowRight') {
        e.preventDefault()
        nextStep()
      }
    }
    
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [currentStep])

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center p-3 md:p-6"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* 背景パーティクル効果（iPad用に軽量化） */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/15 rounded-full"
            initial={{ 
              x: i * 200, 
              y: i * 120,
              opacity: 0
            }}
            animate={{
              y: 800,
              opacity: [0, 0.4, 0],
              scale: 1.2
            }}
            transition={{
              duration: 12 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 1,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* メインコンテナ（iPad最適化） */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-6xl bg-white/97 backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-2xl border border-white/30 overflow-hidden mx-auto"
        style={{ maxHeight: '95vh' }}
      >
        {/* ヘッダー（iPad用に高さ調整） */}
        <motion.div 
          className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white p-4 md:p-6 lg:p-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-black/10"></div>
          
          {/* 装飾的な要素（iPad用にサイズ調整） */}
          <div className="absolute top-3 left-3 md:top-4 md:left-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 border-2 border-white/30 rounded-full flex items-center justify-center"
            >
              <BookOpen className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white/70" />
            </motion.div>
          </div>

          <div className="relative z-10 text-center">
            <motion.h1 
              className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-3 md:mb-4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              今年の受験、どうする？
            </motion.h1>
            
            <motion.div 
              className="flex justify-center items-center space-x-3 mt-3 md:mt-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white/60 rounded-full animate-pulse" />
              <span className="text-white/80 text-sm md:text-base lg:text-lg font-medium">中3生のための重要な話</span>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white/60 rounded-full animate-pulse" />
            </motion.div>
          </div>
        </motion.div>

        {/* メインコンテンツエリア（iPad用にスクロール対応） */}
        <div className="p-4 md:p-6 lg:p-8 xl:p-12 flex flex-col" style={{ minHeight: '60vh', maxHeight: 'calc(95vh - 200px)' }}>
          {/* サブタイトル（iPad用にサイズ調整） */}
          <motion.div 
            className="text-center mb-6 md:mb-8 lg:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent leading-tight mb-4 md:mb-6">
              君の受験準備、
            </h2>
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              本当に大丈夫？
            </motion.h2>

            {/* 注意を引く装飾（iPad用にサイズ調整） */}
            <motion.div
              className="mt-6 md:mt-8 flex justify-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.div
                animate={{ scale: 1.03 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                className="bg-orange-100 border-2 border-orange-300 rounded-full p-3 md:p-4"
              >
                <AlertTriangle className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-orange-500" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ステップコンテンツ（iPad用にレスポンシブ調整） */}
          <div className="flex-1 flex flex-col justify-center overflow-y-auto">
            <div className="grid gap-4 md:gap-5 lg:gap-6 max-w-5xl mx-auto w-full">
              <AnimatePresence mode="wait">
                {steps.map((step, index) => {
                  const Icon = step.icon
                  const isVisible = index < currentStep
                  const isCurrent = index === currentStep - 1
                  
                  if (!isVisible && !isCurrent) return null

                  return (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, x: -80, scale: 0.9 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0, 
                        scale: isCurrent ? 1.02 : 1,
                        y: isCurrent ? -2 : 0
                      }}
                      exit={{ opacity: 0, x: 80, scale: 0.9 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: step.delay,
                        ease: "easeOut"
                      }}
                      className={`relative overflow-hidden rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 transition-all duration-400 touch-manipulation ${
                        isCurrent 
                          ? `bg-white shadow-xl md:shadow-2xl ring-3 md:ring-4 ring-offset-2 md:ring-offset-4 ${step.bgColor.replace('bg-', 'ring-').replace('-50', '-200')}` 
                          : "bg-slate-50/90 shadow-md md:shadow-lg hover:shadow-lg md:hover:shadow-xl"
                      }`}
                      style={{ 
                        WebkitTapHighlightColor: 'transparent',
                        userSelect: 'none'
                      }}
                    >
                      {/* 背景グラデーション */}
                      <div className={`absolute inset-0 bg-gradient-to-r opacity-5 ${step.color}`} />
                      
                      {/* 装飾的な背景要素（iPad用にサイズ調整） */}
                      <div className="absolute top-3 right-3 md:top-4 md:right-4 opacity-8 md:opacity-10">
                        <Icon className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-slate-400" />
                      </div>
                      
                      {/* コンテンツ */}
                      <div className="relative z-10 flex items-center space-x-4 md:space-x-6 lg:space-x-8">
                        <motion.div
                          initial={{ rotate: -180, scale: 0.6 }}
                          animate={{ 
                            rotate: isCurrent ? 360 : 0,
                            scale: isCurrent ? 1.05 : 1
                          }}
                          transition={{ 
                            duration: 0.7, 
                            delay: 0.3,
                            ease: "easeOut"
                          }}
                          className={`p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl bg-gradient-to-r flex-shrink-0 shadow-lg md:shadow-xl ${step.color}`}
                        >
                          <Icon className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
                        </motion.div>
                        
                        <div className="flex-1 min-w-0">
                          <motion.p 
                            className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-slate-700 font-semibold leading-relaxed break-words"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                          >
                            {step.text}
                            {step.highlight && (
                              <motion.span
                                initial={{ opacity: 0, scale: 0.8, y: 8 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.9 }}
                                className={`mx-1 md:mx-2 px-3 md:px-4 lg:px-6 py-2 md:py-3 bg-gradient-to-r ${step.color} text-white rounded-lg md:rounded-xl font-bold shadow-md md:shadow-lg inline-block transform active:scale-95 transition-transform text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl border border-white/20 md:border-2 md:border-white/20`}
                                style={{ WebkitTapHighlightColor: 'transparent' }}
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
                          transition={{ duration: 0.7, delay: 0.5 }}
                        />
                      )}
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* コントロールエリア（iPad用に最適化） */}
        <motion.div 
          className="bg-gradient-to-r from-slate-50 via-white to-slate-50 border-t border-slate-200 p-4 md:p-6 lg:p-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-col lg:flex-row justify-center items-center gap-4 md:gap-6">
            {/* ステップインジケーター（iPad用にサイズ調整） */}
            <div className="flex items-center space-x-3 md:space-x-4 bg-white rounded-xl md:rounded-2xl px-4 md:px-6 py-2 md:py-3 shadow-md md:shadow-lg border border-slate-200">
              <span className="text-xs md:text-sm font-semibold text-slate-600 flex items-center">
                <BookOpen className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                ステップ
              </span>
              <div className="flex space-x-2 md:space-x-3">
                {steps.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                      index < currentStep 
                        ? "bg-gradient-to-r from-indigo-500 to-purple-500 shadow-md scale-110" 
                        : "bg-slate-300 active:bg-slate-400"
                    }`}
                    initial={{ scale: 0 }}
                    animate={{ scale: index < currentStep ? 1.1 : 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.8 }}
                    whileTap={{ scale: 1.2 }}
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                  />
                ))}
              </div>
              <span className="text-xs md:text-sm text-slate-500 font-medium">
                {currentStep} / {steps.length}
              </span>
            </div>

            {/* アクションボタン（iPad用に大きくタッチしやすく） */}
            <div className="flex items-center gap-3 md:gap-4">
              {currentStep < steps.length && (
                <motion.button
                  onClick={nextStep}
                  className="group bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 hover:from-indigo-600 hover:via-purple-600 hover:to-blue-600 active:from-indigo-700 active:via-purple-700 active:to-blue-700 text-white px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 rounded-xl md:rounded-2xl font-bold text-base md:text-lg lg:text-xl shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 md:space-x-3 touch-manipulation"
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  style={{ 
                    WebkitTapHighlightColor: 'transparent',
                    minHeight: '48px' // iPad用の最小タッチターゲットサイズ
                  }}
                >
                  <span>続きを見る</span>
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              )}
              
              {currentStep === steps.length && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="group bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 active:from-green-700 active:to-emerald-700 text-white px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 rounded-xl md:rounded-2xl font-bold text-base md:text-lg lg:text-xl shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 md:space-x-3 touch-manipulation"
                  whileTap={{ scale: 0.97 }}
                  style={{ 
                    WebkitTapHighlightColor: 'transparent',
                    minHeight: '48px'
                  }}
                >
                  <span>次のスライド</span>
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              )}
            </div>
          </div>

          {/* 操作ヒント（iPad用に調整） */}
          <motion.div 
            className="mt-4 md:mt-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            <div className="inline-flex items-center space-x-3 md:space-x-4 bg-slate-100 rounded-xl md:rounded-2xl px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm text-slate-600">
              <div className="flex items-center space-x-1 md:space-x-2">
                <div className="w-6 h-4 md:w-8 md:h-6 bg-slate-300 rounded border flex items-center justify-center text-xs">TAP</div>
                <span>タップで続行</span>
              </div>
              <div className="w-px h-3 md:h-4 bg-slate-300"></div>
              <div className="flex items-center space-x-1 md:space-x-2">
                <div className="w-6 h-4 md:w-8 md:h-6 bg-slate-300 rounded border flex items-center justify-center text-xs">←</div>
                <span>左スワイプで進む</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}