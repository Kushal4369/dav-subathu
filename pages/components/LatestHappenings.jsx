import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Calendar,
  MapPin,
  Sparkles,
  ArrowRight,
  Camera,
  Layers,
  ExternalLink,
} from "lucide-react";

// Load latest happenings from data/happenings.json
import happeningsData from "@/data/happenings.json";

export default function LatestHappenings() {
  const [selectedHappening, setSelectedHappening] = useState(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const carouselRef = useRef(null);
  const detailsRef = useRef(null);

  // Handle keyboard navigation for modal (Esc to close, Left/Right for photos)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedHappening) return;
      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowLeft") {
        prevPhoto();
      } else if (e.key === "ArrowRight") {
        nextPhoto();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedHappening, activePhotoIndex]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedHappening) {
      document.body.style.overflow = "hidden";
      if (detailsRef.current) {
        detailsRef.current.scrollTop = 0;
      }
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedHappening]);

  // Open modal with specific happening
  const openHappening = (happening) => {
    setSelectedHappening(happening);
    setActivePhotoIndex(0);
    if (detailsRef.current) {
      detailsRef.current.scrollTop = 0;
    }
  };

  const closeModal = () => {
    setSelectedHappening(null);
    setActivePhotoIndex(0);
  };

  // Switch between photos in modal
  const nextPhoto = () => {
    if (!selectedHappening) return;
    setActivePhotoIndex((prev) =>
      prev === selectedHappening.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevPhoto = () => {
    if (!selectedHappening) return;
    setActivePhotoIndex((prev) =>
      prev === 0 ? selectedHappening.images.length - 1 : prev - 1
    );
  };

  // Switch to next or previous happening directly within modal
  const switchHappening = (direction) => {
    if (!selectedHappening) return;
    const currentIndex = happeningsData.findIndex(
      (h) => h.id === selectedHappening.id
    );
    let newIndex;
    if (direction === "next") {
      newIndex = currentIndex === happeningsData.length - 1 ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 0 ? happeningsData.length - 1 : currentIndex - 1;
    }
    setSelectedHappening(happeningsData[newIndex]);
    setActivePhotoIndex(0);
    if (detailsRef.current) {
      detailsRef.current.scrollTop = 0;
    }
  };

  // Touch gesture handling for swipable photos
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // Swiped Left -> Next Photo
      nextPhoto();
    } else if (distance < -minSwipeDistance) {
      // Swiped Right -> Previous Photo
      prevPhoto();
    }
  };

  // Carousel manual scroll controls
  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -380 : 380;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs md:text-sm font-semibold tracking-wide uppercase mb-3 shadow-sm">
              <Sparkles className="w-4 h-4 text-blue-600 animate-spin-slow" />
              Campus Life & Activities
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Latest Happenings
            </h2>
            <p className="mt-2 text-slate-600 text-base md:text-lg max-w-2xl">
              Discover the vibrant moments, student achievements, and cultural
              celebrations making waves at D.A.V. Subathu. Click any card to explore!
            </p>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollCarousel("left")}
              aria-label="Previous happenings"
              className="p-3 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 shadow-sm active:scale-95 transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollCarousel("right")}
              aria-label="Next happenings"
              className="p-3 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 shadow-sm active:scale-95 transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <Link
              href="/events-gallery"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 ml-2 group"
            >
              View Full Gallery
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth snap-x snap-mandatory scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent -mx-4 px-4 md:mx-0 md:px-0"
          style={{ scrollbarWidth: "thin" }}
        >
          {happeningsData.map((item) => (
            <div
              key={item.id}
              onClick={() => openHappening(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openHappening(item);
                }
              }}
              className="group relative flex-none w-[290px] sm:w-[330px] md:w-[360px] snap-start bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <img
                  src={item.coverImage}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md shadow-sm border ${item.tagColor}`}
                  >
                    {item.category}
                  </span>
                </div>

                {/* Photo Count Badge */}
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow">
                  <Camera className="w-3.5 h-3.5" />
                  <span>{item.images.length} Photos</span>
                </div>

                {/* Date on Image */}
                <div className="absolute bottom-3 left-3 text-white/90 text-xs font-medium flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.date}</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                  <span className="flex items-center gap-1">
                    Expand Details & Photos
                  </span>
                  <div className="w-7 h-7 rounded-full bg-blue-50 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-4 text-center sm:hidden">
          <Link
            href="/events-gallery"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800"
          >
            Explore Complete Events Gallery
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Expanded Modal / Sub-Version View */}
      <AnimatePresence>
        {selectedHappening && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeModal}
              className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              className="relative w-full max-w-5xl bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col lg:flex-row max-h-[92vh] border border-slate-200"
            >
              {/* Close Button Top Right */}
              <button
                onClick={closeModal}
                aria-label="Close details"
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2.5 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-slate-900 shadow-md backdrop-blur-md transition-all hover:rotate-90 duration-200"
              >
                <X className="w-5 h-5" />
              </button>

              {/* LEFT SIDE: Swipable & Interactive Photos Gallery */}
              <div className="lg:w-7/12 bg-slate-950 flex flex-col justify-between relative select-none">
                {/* Main Photo Display Area */}
                <div
                  className="relative flex-1 min-h-[280px] sm:min-h-[360px] lg:min-h-[460px] flex items-center justify-center overflow-hidden bg-black/40"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activePhotoIndex}
                      src={selectedHappening.images[activePhotoIndex]}
                      alt={`${selectedHappening.title} - Photo ${activePhotoIndex + 1}`}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.25 }}
                      className="max-h-[280px] sm:max-h-[360px] lg:max-h-[460px] w-full object-contain pointer-events-none"
                    />
                  </AnimatePresence>

                  {/* Left & Right Nav Buttons on Image */}
                  {selectedHappening.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          prevPhoto();
                        }}
                        aria-label="Previous photo"
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-transform active:scale-90 shadow-lg"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          nextPhoto();
                        }}
                        aria-label="Next photo"
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-transform active:scale-90 shadow-lg"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}

                  {/* Photo Counter Badge */}
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow">
                    <Camera className="w-3.5 h-3.5" />
                    <span>
                      Photo {activePhotoIndex + 1} of{" "}
                      {selectedHappening.images.length}
                    </span>
                  </div>

                  {/* Mobile Swipe Tip */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white/70 text-[11px] bg-black/40 backdrop-blur-sm px-2.5 py-0.5 rounded-full sm:hidden pointer-events-none">
                    Swipe left/right to view photos
                  </div>
                </div>

                {/* Thumbnails Row */}
                {selectedHappening.images.length > 1 && (
                  <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2 overflow-x-auto scrollbar-none">
                    {selectedHappening.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActivePhotoIndex(idx)}
                        className={`relative flex-none w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all ${
                          activePhotoIndex === idx
                            ? "border-blue-500 ring-2 ring-blue-500/50 scale-105"
                            : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* RIGHT SIDE: Rich Description & Details */}
              <div
                ref={detailsRef}
                className="lg:w-5/12 p-6 sm:p-7 lg:p-8 pr-12 sm:pr-14 flex flex-col justify-between overflow-y-auto max-h-[380px] sm:max-h-[420px] lg:max-h-[580px] scroll-smooth"
              >
                <div>
                  {/* Category & Date Header */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${selectedHappening.tagColor}`}
                    >
                      {selectedHappening.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {selectedHappening.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                    {selectedHappening.title}
                  </h3>

                  {/* Location */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-2 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                    <span>{selectedHappening.location}</span>
                  </div>

                  <hr className="my-4 border-slate-100" />

                  {/* Full Description */}
                  <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
                    <p>{selectedHappening.description}</p>
                  </div>

                  {/* Key Highlights */}
                  {selectedHappening.highlights && (
                    <div className="mt-5">
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                        Key Highlights
                      </h4>
                      <ul className="space-y-2">
                        {selectedHappening.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="text-xs sm:text-sm text-slate-600 flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Modal Footer Controls */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                  {/* Prev / Next Happening Switcher */}
                  <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
                    <button
                      onClick={() => switchHappening("prev")}
                      className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg border border-slate-200 transition-colors flex items-center gap-1"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      Prev Event
                    </button>
                    <button
                      onClick={() => switchHappening("next")}
                      className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg border border-slate-200 transition-colors flex items-center gap-1"
                    >
                      Next Event
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Link to Full Gallery */}
                  <Link
                    href="/events-gallery"
                    onClick={closeModal}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs sm:text-sm font-semibold hover:bg-blue-700 shadow-md shadow-blue-600/20 active:scale-95 transition-all text-center"
                  >
                    All Events & Gallery
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
