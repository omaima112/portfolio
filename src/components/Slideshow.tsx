import { useEffect, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ZoomIn } from 'lucide-react';

interface Slide {
  src: string;
  caption?: string;
}

interface SlideshowProps {
  images: Slide[];
  interval?: number;
  className?: string;
  onImageClick?: (currentIndex: number) => void;
}

export function Slideshow({ images, interval = 3000, className = '', onImageClick }: SlideshowProps) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const t = window.setInterval(() => setIdx((i) => (i + 1) % images.length), interval);
    return () => window.clearInterval(t);
  }, [images, interval]);

  if (!images || images.length === 0) return null;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className={`relative h-full w-full ${onImageClick ? 'cursor-pointer' : ''}`}
        onClick={onImageClick ? () => onImageClick(idx) : undefined}
      >
        <ImageWithFallback src={images[idx].src} alt={images[idx].caption ?? `slide-${idx}`} className="w-full h-full object-cover transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

        {onImageClick && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
            <div className="bg-black/50 rounded-full p-2">
              <ZoomIn className="w-6 h-6 text-white" />
            </div>
          </div>
        )}

        {images.length > 1 && (
          <div
            className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-2"
            onClick={e => e.stopPropagation()}
          >
            <button aria-label="Prev" onClick={() => setIdx((i) => (i - 1 + images.length) % images.length)} className="bg-white/80 rounded-full p-1 shadow">◀</button>
            <button aria-label="Next" onClick={() => setIdx((i) => (i + 1) % images.length)} className="bg-white/80 rounded-full p-1 shadow">▶</button>
          </div>
        )}

        {images[idx].caption && (
          <div className="absolute left-4 bottom-4 text-white">{images[idx].caption}</div>
        )}
      </div>
    </div>
  );
}
