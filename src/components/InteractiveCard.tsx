import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HoverPreviewImage {
  src: string;
  caption?: string;
}

interface HoverPreview {
  // single image (legacy) or multiple images for slideshow
  image?: string;
  images?: HoverPreviewImage[];
  caption?: string;
}

interface InteractiveCardProps {
  title: string;
  subtitle?: string;
  description: string;
  date?: string;
  icon?: React.ReactNode;
  hoverPreview?: HoverPreview;
  children?: React.ReactNode;
}

export function InteractiveCard({
  title,
  subtitle,
  description,
  date,
  icon,
  hoverPreview,
  children,
}: InteractiveCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  const images = hoverPreview?.images ?? (hoverPreview?.image ? [{ src: hoverPreview.image, caption: hoverPreview.caption }] : []);

  useEffect(() => {
    let timer: number | undefined;
    if (isHovered && images.length > 1) {
      timer = window.setInterval(() => {
        setCurrentIdx((i) => (i + 1) % images.length);
      }, 3000);
    }
    return () => {
      if (timer) window.clearInterval(timer);
    };
  }, [isHovered, images.length]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white rounded-xl p-6 border border-[#EED1E6] shadow-sm hover:shadow-lg transition-all duration-300 hover:border-[#A86A9A] hover:-translate-y-1">
        <div className="flex items-start gap-4">
          {icon && (
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#5A2653] to-[#7E3F74] rounded-lg flex items-center justify-center text-white">
              {icon}
            </div>
          )}
          
          <div className="flex-1">
              <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-heading text-[#5A2653] text-xl md:text-2xl font-semibold">{title}</h3>
              {date && (
                <span className="text-sm text-[#A86A9A] font-heading flex-shrink-0">{date}</span>
              )}
            </div>
            
            {subtitle && (
              <p className="font-body text-[#7E3F74] mb-2">{subtitle}</p>
            )}
            
            <p className="font-body text-gray-600">{description}</p>
            {children}
          </div>
        </div>
      </div>

      {/* Hover Preview Card */}
      <AnimatePresence>
        {isHovered && hoverPreview && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-full ml-4 top-0 z-50 w-80 glassmorphism rounded-xl shadow-2xl overflow-hidden border-2 border-[#A86A9A]"
          >
            {/* Slideshow / single preview support */}
            <div className="relative h-48 overflow-hidden bg-gray-100">
              {images.length > 0 && (
                <>
                  <ImageWithFallback
                    src={images[currentIdx].src}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {/* Controls */}
                  {images.length > 1 && (
                    <>
                      <button
                        aria-label="Previous"
                        onClick={() => setCurrentIdx((i) => (i - 1 + images.length) % images.length)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 shadow"
                      >
                        ◀
                      </button>
                      <button
                        aria-label="Next"
                        onClick={() => setCurrentIdx((i) => (i + 1) % images.length)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 shadow"
                      >
                        ▶
                      </button>
                    </>
                  )}
                </>
              )}
            </div>
            <div className="p-4 bg-white/90 backdrop-blur">
              <p className="font-body italic text-[#5A2653]">
                {images.length > 0 ? (images[currentIdx].caption ?? hoverPreview.caption) : hoverPreview.caption}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
