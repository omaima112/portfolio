import { useState } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Presentation, Video, ZoomIn } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useTranslation } from 'react-i18next';
import { ImageLightbox, LightboxImage } from './ImageLightbox';

export function Seminars() {
  const { t } = useTranslation();
  const [lightbox, setLightbox] = useState<{ images: LightboxImage[]; title: string } | null>(null);

  const iconMap = [
    <Presentation className="w-6 h-6" />, <Presentation className="w-6 h-6" />, <Presentation className="w-6 h-6" />,
    <Video className="w-6 h-6" />, <Video className="w-6 h-6" />, <Video className="w-6 h-6" />
  ];

  const images = [
    '/website/seminar and workshop/yes.PNG',
    '/website/seminar and workshop/Capture5.PNG',
    '/website/seminar and workshop/WhatsApp%20Image%202025-03-11%20at%202.06.00%20AM%20(1).jpeg',
    '/website/seminar and workshop/6.PNG',
    '/website/seminar and workshop/WhatsApp%20Image%202025-12-24%20at%207.48.34%20PM.jpeg',
    '/website/seminar and workshop/WhatsApp Image 2025-03-11 at 2.06.00 AM.jpeg'
  ];

  const seminars = (t('seminars.items', { returnObjects: true }) as Array<{
    title: string;
    subtitle: string;
    description: string;
  }>).map((seminar, idx) => ({
    ...seminar,
    icon: iconMap[idx],
    image: images[idx],
  }));

  return (
    <SectionWrapper
      id="seminars"
      title={t('seminars.title')}
      subtitle={t('seminars.subtitle')}
      className="bg-gradient-to-br from-white to-[#F6E1F0]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {seminars.map((seminar, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#EED1E6]"
            >
              <div
                className={`relative h-64 overflow-hidden bg-[#F6E1F0] ${seminar.image ? 'cursor-pointer' : ''}`}
                onClick={seminar.image ? () => setLightbox({ images: [{ src: seminar.image }], title: seminar.title }) : undefined}
              >
                {seminar.image ? (
                  <>
                    <ImageWithFallback
                      src={seminar.image}
                      alt={seminar.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="bg-black/50 rounded-full p-2">
                        <ZoomIn className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </>
                ) : null}
              </div>

              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-shrink-0 mt-1">{seminar.icon}</div>
                  <h3 className="font-heading text-[#5A2653] text-lg md:text-xl font-semibold">{seminar.title}</h3>
                </div>

                <p className="font-body text-[#7E3F74] text-sm mb-2">{seminar.subtitle}</p>
                <p className="font-body text-gray-600 text-sm">{seminar.description}</p>
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
