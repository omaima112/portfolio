import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
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

function LightboxContent({ images, title, startIndex = 0, onClose }: ImageLightboxProps) {
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
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  return (
    <div
      style={{ position: 'fixed', inset: 0, zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.78)', backdropFilter: 'blur(4px)' }} />

      {/* Modal */}
      <div
        style={{ position: 'relative', zIndex: 1, background: '#FDF5FB', borderRadius: '1rem', boxShadow: '0 25px 60px rgba(0,0,0,0.4)', width: '100%', maxWidth: '48rem', maxHeight: '90vh', overflowY: 'auto', padding: '1.5rem' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '1rem', right: '1rem', background: '#5A2653', color: 'white', borderRadius: '50%', width: '2rem', height: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer', zIndex: 2 }}
          aria-label="Close"
        >
          <X size={16} />
        </button>

        {/* Title */}
        <h2 className="font-heading text-[#5A2653] text-xl md:text-2xl font-semibold text-center mb-5" style={{ paddingRight: '2.5rem' }}>
          {title}
        </h2>

        {/* Image row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {images.length > 1 && (
            <button
              onClick={prev}
              className="flex-shrink-0 bg-white border border-[#EED1E6] text-[#5A2653] rounded-full flex items-center justify-center hover:bg-[#F6E1F0] transition-colors shadow"
              style={{ width: '2.5rem', height: '2.5rem', border: '1px solid #EED1E6', borderRadius: '50%', background: 'white', cursor: 'pointer', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
          )}

          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ImageWithFallback
              src={images[idx].src}
              alt={images[idx].caption ?? title}
              style={{ maxWidth: '100%', maxHeight: '55vh', objectFit: 'contain', borderRadius: '0.5rem' }}
            />
          </div>

          {images.length > 1 && (
            <button
              onClick={next}
              style={{ width: '2.5rem', height: '2.5rem', border: '1px solid #EED1E6', borderRadius: '50%', background: 'white', cursor: 'pointer', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>

        {/* Caption */}
        {images[idx].caption && (
          <p className="font-body text-[#7E3F74] text-sm mt-3 text-center">{images[idx].caption}</p>
        )}

        {/* Dot indicators */}
        {images.length > 1 && (
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem' }}>
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                style={{ width: '0.625rem', height: '0.625rem', borderRadius: '50%', border: 'none', cursor: 'pointer', background: i === idx ? '#5A2653' : '#EED1E6', transition: 'background 0.2s' }}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function ImageLightbox(props: ImageLightboxProps) {
  return createPortal(<LightboxContent {...props} />, document.body);
}
