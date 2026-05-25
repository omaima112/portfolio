import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export interface LightboxImage {
  src: string;
  caption?: string;
}

interface ImageLightboxProps {
  images: LightboxImage[];
  title: string;
  startIndex?: number;
  onClose: () => void;
}

export function ImageLightbox({ images, title, startIndex = 0, onClose }: ImageLightboxProps) {
  const [idx, setIdx] = useState(startIndex);

  const prev = useCallback(() => setIdx(i => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setIdx(i => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, prev, next]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

      <div
        className="relative z-10 bg-[#FDF5FB] rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-[#5A2653] text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#7E3F74] transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <h2 className="font-heading text-[#5A2653] text-xl md:text-2xl font-semibold text-center mb-5 pr-8">
          {title}
        </h2>

        <div className="flex items-center gap-3">
          {images.length > 1 && (
            <button
              onClick={prev}
              className="flex-shrink-0 bg-white border border-[#EED1E6] text-[#5A2653] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#F6E1F0] transition-colors shadow"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          <div className="flex-1 flex items-center justify-center">
            <ImageWithFallback
              src={images[idx].src}
              alt={images[idx].caption ?? title}
              className="max-w-full max-h-[55vh] object-contain rounded-lg"
            />
          </div>

          {images.length > 1 && (
            <button
              onClick={next}
              className="flex-shrink-0 bg-white border border-[#EED1E6] text-[#5A2653] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#F6E1F0] transition-colors shadow"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {images[idx].caption && (
          <p className="text-center font-body text-[#7E3F74] text-sm mt-3">{images[idx].caption}</p>
        )}

        {images.length > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === idx ? 'bg-[#5A2653]' : 'bg-[#EED1E6] hover:bg-[#c8a0be]'}`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
