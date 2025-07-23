'use client'

import { useState } from 'react'
import Slide01Introduction from '../components/slides/Slide01Introduction'
import Slide02ExamSystem from '../components/slides/Slide02ExamSystem'
import Slide03FormatChange from '../components/slides/Slide03FormatChange'
import Slide04Difficulty from '../components/slides/Slide04Difficulty'
import Slide05Danger from '../components/slides/Slide05Danger'
import Slide06WideRange from '../components/slides/Slide06WideRange'
import Slide07TimeUrgency from '../components/slides/Slide07TimeUrgency'
import Slide08Solution from '../components/slides/Slide08Solution'
import Slide09CourseEffect from '../components/slides/Slide09CourseEffect'
import Slide10CallToAction from '../components/slides/Slide10CallToAction'

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

  // スライドコンポーネントの配列（全10枚完成！）
  const slides = [
    <Slide01Introduction key="slide1" onNext={nextSlide} />,
    <Slide02ExamSystem key="slide2" onNext={nextSlide} onPrev={prevSlide} />,
    <Slide03FormatChange key="slide3" onNext={nextSlide} onPrev={prevSlide} />,
    <Slide04Difficulty key="slide4" onNext={nextSlide} onPrev={prevSlide} />,
    <Slide05Danger key="slide5" onNext={nextSlide} onPrev={prevSlide} />,
    <Slide06WideRange key="slide6" onNext={nextSlide} onPrev={prevSlide} />,
    <Slide07TimeUrgency key="slide7" onNext={nextSlide} onPrev={prevSlide} />,
    <Slide08Solution key="slide8" onNext={nextSlide} onPrev={prevSlide} />,
    <Slide09CourseEffect key="slide9" onNext={nextSlide} onPrev={prevSlide} />,
    <Slide10CallToAction key="slide10" onNext={nextSlide} onPrev={prevSlide} />,
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