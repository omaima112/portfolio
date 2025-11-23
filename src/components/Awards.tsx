import { SectionWrapper } from './SectionWrapper';
import { InteractiveCard } from './InteractiveCard';
import { Trophy, Medal, Star } from 'lucide-react';

export function Awards() {
  const awards = [
    {
      title: 'Best Research Poster - National Biotechnology Symposium',
      subtitle: 'National Biotechnology Society',
      description: 'Awarded for outstanding research presentation on microbial enzyme production. Recognized for innovative approach and comprehensive data analysis.',
      date: 'Sep 2024',
      icon: <Trophy className="w-6 h-6" />,
      hoverPreview: {
        image: 'https://images.unsplash.com/photo-1759560245150-8dcbb7f01142?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJ0aWZpY2F0ZSUyMGF3YXJkJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzYyNjA4MzYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        caption: 'Receiving this award was a validation of months of dedicated research and hard work.',
      },
    },
    {
      title: 'Dean\'s List of Honor',
      subtitle: 'University Recognition - 6 Consecutive Semesters',
      description: 'Consistently maintained high academic performance with GPA above 3.75. Recognized for academic excellence and dedication to studies.',
      date: '2021 - Present',
      icon: <Star className="w-6 h-6" />,
      hoverPreview: {
        image: 'https://images.unsplash.com/photo-1759560245150-8dcbb7f01142?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJ0aWZpY2F0ZSUyMGF3YXJkJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzYyNjA4MzYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        caption: 'Consistent academic excellence throughout my university journey has been deeply rewarding.',
      },
    },
    {
      title: 'Excellence in Laboratory Practices',
      subtitle: 'Department of Biotechnology',
      description: 'Recognized for exceptional laboratory skills, adherence to safety protocols, and meticulous experimental documentation during undergraduate research.',
      date: 'May 2024',
      icon: <Medal className="w-6 h-6" />,
      hoverPreview: {
        image: 'https://images.unsplash.com/photo-1759560245150-8dcbb7f01142?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJ0aWZpY2F0ZSUyMGF3YXJkJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzYyNjA4MzYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        caption: 'Recognition for laboratory excellence reinforced my commitment to precision and safety in research.',
      },
    },
    {
      title: 'Outstanding Student Leader Award',
      subtitle: 'Student Affairs Office',
      description: 'Honored for leadership in student organizations, organizing academic events, and contributing to the university community through various initiatives.',
      date: 'Dec 2023',
      icon: <Trophy className="w-6 h-6" />,
      hoverPreview: {
        image: 'https://images.unsplash.com/photo-1759560245150-8dcbb7f01142?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJ0aWZpY2F0ZSUyMGF3YXJkJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzYyNjA4MzYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        caption: 'Leading and serving the student community has been one of the most fulfilling aspects of my university life.',
      },
    },
    {
      title: 'Merit Scholarship Award',
      subtitle: 'University Scholarship Program',
      description: 'Awarded merit-based scholarship for academic excellence and outstanding performance in biotechnology courses.',
      date: 'Aug 2023',
      icon: <Star className="w-6 h-6" />,
      hoverPreview: {
        image: 'https://images.unsplash.com/photo-1759560245150-8dcbb7f01142?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJ0aWZpY2F0ZSUyMGF3YXJkJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzYyNjA4MzYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        caption: 'This scholarship enabled me to pursue my academic goals with greater focus and dedication.',
      },
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
