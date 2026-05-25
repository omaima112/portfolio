import { SectionWrapper } from './SectionWrapper';
import { InteractiveCard } from './InteractiveCard';
import { Trophy, Medal, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const GOLDEN_BADGE: React.CSSProperties = {
  background: 'linear-gradient(135deg, #F5D060, #C8960C)',
  color: '#4a2c00',
};

export function Awards() {
  const { t } = useTranslation();

  const iconMap = [<Medal className="w-6 h-6" />, <Trophy className="w-6 h-6" />, <Star className="w-6 h-6" />];

  const awards = (t('awards.items', { returnObjects: true }) as Array<{
    title: string;
    subtitle: string;
    description: string;
    date: string;
  }>).map((award, idx) => ({
    ...award,
    icon: iconMap[idx],
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
          >
            {index === 0 && (
              <div
                className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-bold"
                style={GOLDEN_BADGE}
              >
                🏅 2nd Place
              </div>
            )}
          </InteractiveCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
