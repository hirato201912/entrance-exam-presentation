'use client'

import { useState } from 'react'
import Slide01Introduction from '../components/slides/Slide01Introduction'
import Slide02ExamSystem from '../components/slides/Slide02ExamSystem'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(1)

  const nextSlide = () => {
    setCurrentSlide(prev => prev + 1)
  }

  const prevSlide = () => {
    setCurrentSlide(prev => Math.max(1, prev - 1))
  }

  const goToSlide = (slideNumber: number) => {
    setCurrentSlide(slideNumber)
  }

  // スライドコンポーネントの配列
  const slides = [
    <Slide01Introduction key="slide1" onNext={nextSlide} />,
    <Slide02ExamSystem key="slide2" onNext={nextSlide} onPrev={prevSlide} />,
  ]

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 現在のスライドを表示 */}
      {slides[currentSlide - 1]}
      
      {/* スライドナビゲーション（開発用） */}
      <div className="fixed bottom-4 left-4 z-50 bg-black/70 text-white px-4 py-2 rounded-lg">
        <span className="text-sm">
          スライド {currentSlide} / {slides.length}
        </span>
        <div className="flex gap-2 mt-2">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 1}
            className="px-2 py-1 bg-gray-600 rounded text-xs disabled:opacity-50"
          >
            前
          </button>
          <button 
            onClick={nextSlide}
            disabled={currentSlide === slides.length}
            className="px-2 py-1 bg-gray-600 rounded text-xs disabled:opacity-50"
          >
            次
          </button>
        </div>
      </div>
    </div>
  )
}