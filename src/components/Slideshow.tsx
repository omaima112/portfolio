import { useEffect, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Slide {
  src: string;
  caption?: string;
}

interface SlideshowProps {
  images: Slide[];
  interval?: number;
  className?: string;
}

export function Slideshow({ images, interval = 3000, className = '' }: SlideshowProps) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const t = window.setInterval(() => setIdx((i) => (i + 1) % images.length), interval);
    return () => window.clearInterval(t);
  }, [images, interval]);

  if (!images || images.length === 0) return null;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="relative h-full w-full">
        <ImageWithFallback
          src={images[idx].src}
          alt={images[idx].caption ?? `slide-${idx}`}
          className="w-full h-full object-cover transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

        {images.length > 1 && (
          <div
            className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10"
            onClick={e => e.stopPropagation()}
          >
            <button
              aria-label="Prev"
              onClick={() => setIdx((i) => (i - 1 + images.length) % images.length)}
              className="bg-white/80 rounded-full p-1 shadow hover:bg-white transition-colors"
            >◀</button>
            <button
              aria-label="Next"
              onClick={() => setIdx((i) => (i + 1) % images.length)}
              className="bg-white/80 rounded-full p-1 shadow hover:bg-white transition-colors"
            >▶</button>
          </div>
        )}

        {images[idx].caption && (
          <div className="absolute left-4 bottom-4 text-white text-sm pointer-events-none">
            {images[idx].caption}
          </div>
        )}
      </div>
    </div>
  );
}
