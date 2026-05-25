import { useState } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { InteractiveCard } from './InteractiveCard';
import { Trophy, Medal, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ImageLightbox, LightboxImage } from './ImageLightbox';

export function Awards() {
  const { t } = useTranslation();
  const [lightbox, setLightbox] = useState<{ images: LightboxImage[]; title: string } | null>(null);

  const iconMap = [<Medal className="w-6 h-6" />, <Trophy className="w-6 h-6" />, <Star className="w-6 h-6" />];

  const awards = (t('awards.items', { returnObjects: true }) as Array<{
    title: string;
    subtitle: string;
    description: string;
    date: string;
    images?: string[];
  }>).map((award, idx) => ({
    ...award,
    icon: iconMap[idx],
    hoverPreview: undefined,
  }));

  return (
    <SectionWrapper
      id="awards"
      title={t('awards.title')}
      subtitle={t('awards.subtitle')}
      className="bg-gradient-to-br from-white to-[#F6E1F0]"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        {awards.map((award, index) => (
          <InteractiveCard
            key={index}
            title={award.title}
            subtitle={award.subtitle}
            description={award.description}
            date={award.date}
            icon={award.icon}
            hoverPreview={award.hoverPreview}
            onImagesClick={
              award.images && award.images.length > 0
                ? () => setLightbox({ images: award.images!.map((src) => ({ src })), title: award.title })
                : undefined
            }
          />
        ))}
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
