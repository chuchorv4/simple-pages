import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { CarouselProps } from '@/interfaces/layout'

const Carousel = ({ domain }: CarouselProps) => {
  const images = [
    `/images/${domain}/dummy_1400x800.png`,
    `/images/${domain}/dummy_800x800.png`,
    `/images/${domain}/dummy_720x600.png`,
  ]
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevImage = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    updateCarouselButtons(newIndex)
  }

  const nextImage = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    updateCarouselButtons(newIndex)
  }

  const updateCarouselButtons = (newIndex: number) => {
    const buttons = document.querySelectorAll('[data-carousel-slide-to]')
    buttons.forEach((button, index) => {
      button.setAttribute('aria-current', newIndex === index ? 'true' : 'false')
    })
  }

  const handleCarouselButton = (index: number) => {
    setCurrentIndex(index)
    updateCarouselButtons(index)
  }

  useEffect(() => {
    // Automatically advance to the next image every 5 seconds
    const intervalId = setInterval(() => {
      nextImage()
    }, 5000)

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId)
    }
  }, [currentIndex])

  return (
    <>
      <br></br>
      <div className="relative mx-auto max-w-screen-lg">
        <div className="relative h-64 w-full">
          <button
            onClick={prevImage}
            type="button"
            className="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
              <svg
                className="h-4 w-4 text-white dark:text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <Image
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="h-full w-full object-cover"
            width={1400}
            height={800}
          />
          <button
            onClick={nextImage}
            type="button"
            className="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
              <svg
                className="h-4 w-4 text-white dark:text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 justify-center space-x-2">
            {images.map((image, index) => (
              <button
                key={index}
                type="button"
                className={`h-3 w-3 rounded-full ${
                  currentIndex === index ? 'bg-white' : 'bg-gray-300'
                }`}
                aria-current={currentIndex === index ? 'true' : 'false'}
                aria-label={`Slide ${index + 1}`}
                data-carousel-slide-to={index}
                onClick={() => handleCarouselButton(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Carousel
