import { SectionWrapper } from './SectionWrapper';
import { InteractiveCard } from './InteractiveCard';
import { Briefcase } from 'lucide-react';
import { Slideshow } from './Slideshow';
import { useTranslation } from 'react-i18next';

export function Experiences() {
  const { t } = useTranslation();

  const experiences = (t('experiences.items', { returnObjects: true }) as Array<{
    title: string;
    subtitle: string;
    description: string;
    date: string;
  }>).map((exp) => ({
    ...exp,
    icon: <Briefcase className="w-6 h-6" />,
    images: [
      '/website/Experience/12.png',
      '/website/Experience/13.png',
    ],
  }));

  return (
    <SectionWrapper
      id="experiences"
      title={t('experiences.title')}
      subtitle={t('experiences.subtitle')}
      className="bg-gradient-to-br from-white to-[#F6E1F0]"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <InteractiveCard
                title={exp.title}
                subtitle={exp.subtitle}
                description={exp.description}
                date={exp.date}
                icon={exp.icon}
              />
            </div>
            
            {exp.images && exp.images.length > 0 && (
              <div className="rounded-lg overflow-hidden shadow-md w-64 h-[280px] flex-shrink-0">
                <Slideshow
                  images={exp.images.map((src) => ({ src }))}
                  interval={2000}
                  className="w-full h-full"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
