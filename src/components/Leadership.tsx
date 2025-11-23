import { SectionWrapper } from './SectionWrapper';
import { InteractiveCard } from './InteractiveCard';
import { Users, Heart, Award, Sparkles } from 'lucide-react';

export function Leadership() {
  const leadership = [
    {
      title: 'President, Biotechnology Society',
      subtitle: 'University Student Organization',
      description: 'Led a team of 50+ members in organizing academic events, seminars, and workshops. Coordinated with industry professionals for guest lectures and career guidance sessions.',
      date: '2024 - Present',
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: 'Volunteer Coordinator',
      subtitle: 'Community Health Awareness Program',
      description: 'Organized health awareness campaigns in local communities, educating people about disease prevention and healthy lifestyle practices. Coordinated with healthcare professionals for free medical camps.',
      date: '2023 - 2024',
      icon: <Heart className="w-6 h-6" />,
    },
    {
      title: 'Team Lead, Science Festival',
      subtitle: 'Annual University Event',
      description: 'Managed logistics and coordination for the biotechnology exhibition at the annual science festival. Supervised a team of 15 volunteers and ensured successful execution of interactive displays.',
      date: '2023',
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
      title: 'Peer Mentor',
      subtitle: 'New Student Orientation Program',
      description: 'Guided first-year biotechnology students through their transition to university life. Provided academic advice, shared study strategies, and helped create a supportive learning environment.',
      date: '2022 - 2023',
      icon: <Users className="w-6 h-6" />,
    },
  ];

  return (
    <SectionWrapper
      id="leadership"
      title="Leadership & Volunteer Work"
      subtitle="Contributing to communities and leading with purpose"
      className="bg-gradient-to-br from-white to-[#F6E1F0]"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        {leadership.map((item, index) => (
          <InteractiveCard
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            date={item.date}
            icon={item.icon}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
