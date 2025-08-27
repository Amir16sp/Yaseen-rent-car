"use client"
import React, { useState, useEffect } from 'react';
import { Star, ArrowRight } from 'lucide-react';

export default function AnimatedHeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 0,
      image: "/images/carone.png",
      title: " One Way Drop-off Car",
      subtitle: "Rental",
      description: "Going city to city? Book your ride without the hassle of a return. Flexible one-way drop services designed for your convenience.",
      badge: "No Return? No Problem."
    },
    {
      id: 1,
      image: "/images/cartwo.jpg",
      title: "Premium City Tours",
      subtitle: "Experience",
      description: "Discover the beauty of urban landscapes with our premium vehicle fleet. Comfortable rides for sightseeing and business trips.",
      badge: "Luxury Fleet Available."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
      title: "Airport Transfer",
      subtitle: "Service",
      description: "Reliable and punctual airport transfers with professional drivers. Start your journey stress-free with our premium service.",
      badge: "24/7 Available Service."
    }
  ];

  // Auto slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gray-700">
      {/* Background Images with Animation */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === activeSlide 
                ? 'opacity-100 transform translate-x-0' 
                : index < activeSlide 
                  ? 'opacity-0 transform -translate-x-full'
                  : 'opacity-0 transform translate-x-full'
            }`}
          >
            <img
              src={slide.image}
              alt={`Background ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Top Badge */}
        <div className="text-center pt-4 text-2xl font-semibold  sm:pt-8 mb-4 sm:mb-8 px-4">
          <div 
            key={`badge-${activeSlide}`}
            className="inline-flex items-center text-white  sm:text-base animate-fade-in-slide"
          >
            <Star className="w-6 h-6 mr-1 fill-current text-[#ff3e00]" />
            <span>{slides[activeSlide].badge}</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Heading with Animation */}
            <h1 
              key={`title-${activeSlide}`}
              className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 animate-slide-in-left"
            >
              {slides[activeSlide].title}
              <br />
              <span className="text-[#ff3e00]">{slides[activeSlide].subtitle}</span>
            </h1>

            {/* Description with Animation */}
            <p 
              key={`desc-${activeSlide}`}
              className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-slide-in-right opacity-90"
            >
              {slides[activeSlide].description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-16">
              <button className="bg-[#ff3e00] hover:bg-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg inline-flex items-center justify-center transition-all transform hover:scale-105 animate-fade-in-up">
                Book A Rental
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg inline-flex items-center justify-center transition-all border border-white/30 animate-fade-in-up">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Slider Dots */}
            <div className="flex justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === activeSlide
                      ? 'bg-[#ff3e00] scale-125'
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>

            {/* Progress Bar */}
            <div className="w-full max-w-xs mx-auto h-1 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#ff3e00] rounded-full transition-all duration-300 ease-linear"
                style={{ 
                  width: `${((activeSlide + 1) / slides.length) * 100}%`,
                  animation: `progress 5s linear infinite`
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-slide {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes progress {
          0% { width: 0%; }
          100% { width: 33.33%; }
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }

        .animate-fade-in-slide {
          animation: fade-in-slide 0.6s ease-out forwards;
        }

        /* Mobile Responsive Improvements */
        @media (max-width: 640px) {
          .animate-slide-in-left,
          .animate-slide-in-right,
          .animate-fade-in-up {
            animation-duration: 0.6s;
          }
        }

        /* Smooth transitions for better performance */
        * {
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
      `}</style>
    </div>
  );
}