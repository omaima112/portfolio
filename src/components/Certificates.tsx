import { useState } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Award, CheckCircle, ZoomIn } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { useTranslation } from 'react-i18next';
import { ImageLightbox, LightboxImage } from './ImageLightbox';

export function Certificates() {
  const { t } = useTranslation();
  const [lightbox, setLightbox] = useState<{ images: LightboxImage[]; title: string } | null>(null);

  const iconMap = [
    <Award className="w-6 h-6" />, <CheckCircle className="w-6 h-6" />, <Award className="w-6 h-6" />, <CheckCircle className="w-6 h-6" />,
    <Award className="w-6 h-6" />, <CheckCircle className="w-6 h-6" />, <Award className="w-6 h-6" />, <CheckCircle className="w-6 h-6" />,
    <Award className="w-6 h-6" />, <CheckCircle className="w-6 h-6" />, <Award className="w-6 h-6" />
  ];

  const images = [
    '/website/certificates/Capture8.PNG', '/website/certificates/Capture5.PNG', '/website/certificates/Capture3.PNG',
    '/website/certificates/7.PNG', '/website/certificates/Capture6.PNG', '/website/certificates/Capture9.PNG',
    '/website/certificates/Capture4.PNG', '/website/certificates/Capture2.PNG', '/website/certificates/Capture10.PNG',
    '/website/certificates/Capture1.PNG'
  ];

  const certificates = (t('certificates.items', { returnObjects: true }) as Array<{
    title: string;
    subtitle: string;
    date: string;
    skills: string[];
  }>).map((cert, idx) => ({
    ...cert,
    icon: iconMap[idx],
    image: images[idx],
  }));

  return (
    <SectionWrapper
      id="certificates"
      title={t('certificates.title')}
      subtitle={t('certificates.subtitle')}
      className="bg-gradient-to-br from-white to-[#F6E1F0]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#EED1E6]"
            >
              <div
                className={`relative h-64 overflow-hidden bg-white ${cert.image ? 'cursor-pointer' : ''}`}
                onClick={cert.image ? () => setLightbox({ images: [{ src: cert.image }], title: cert.title }) : undefined}
              >
                {cert.image ? (
                  <>
                    <ImageWithFallback
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-contain p-2"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/20">
                      <div className="bg-black/50 rounded-full p-2">
                        <ZoomIn className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-white">
                    <span className="font-heading text-[#5A2653]">{t('certificates.ongoing') || 'Ongoing'}</span>
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-2">
                  {cert.icon}
                  <span className="font-heading text-[#5A2653]">{cert.date}</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full">
                  <span className="font-heading text-[#5A2653] text-xs">{((cert.subtitle || '').split('|')[0]).trim()}</span>
                </div>
              </div>

              <div className="p-4 min-h-40">
                <h3 className="font-heading text-[#5A2653] text-sm font-semibold line-clamp-2 mb-2">{cert.title}</h3>
                <p className="font-body text-[#7E3F74] text-xs line-clamp-2 mb-3">{cert.subtitle}</p>

                {cert.skills && (
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((s, i) => (
                      <Badge
                        key={i}
                        className="bg-[#F6E1F0] text-[#5A2653] px-2 py-0.5 text-xs"
                      >
                        {s.trim()}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <ImageLightbox
          images={lightbox.images}
          title={lightbox.title}
          onClose={() => setLightbox(null)}
        />
      )}
    </SectionWrapper>
  );
}
