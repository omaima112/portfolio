import { SectionWrapper } from './SectionWrapper';
import { InteractiveCard } from './InteractiveCard';
import { Trophy, Medal, Star } from 'lucide-react';

export function Awards() {
  const awards = [
    {
      title: '2nd Position',
      subtitle: 'Inter-University Innovent 2025',
      description: 'Secured second position at the Inter-University Innovent 2025 competition.',
      date: '2025',
      icon: <Medal className="w-6 h-6" />,
      hoverPreview: undefined,
    },
    {
      title: 'Merit-Based Laptop Award',
      subtitle: 'IIUI 2023',
      description: 'Received a merit-based laptop award from IIUI.',
      date: '2023',
      icon: <Trophy className="w-6 h-6" />,
      hoverPreview: undefined,
    },
    {
      title: 'Gold Medalist',
      subtitle: 'Highschool | 2022',
      description: 'Awarded gold medal distinction in high school.',
      date: '2022',
      icon: <Star className="w-6 h-6" />,
      hoverPreview: undefined,
    },
  ];

  return (
    <SectionWrapper
      id="awards"
      title="Awards & Achievements"
      subtitle="Recognition for academic excellence and contributions"
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
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
