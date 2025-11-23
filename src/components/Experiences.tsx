import { SectionWrapper } from './SectionWrapper';
import { InteractiveCard } from './InteractiveCard';
import { Briefcase, TestTube, Users } from 'lucide-react';

export function Experiences() {
  const experiences = [
    {
      title: 'Research Intern',
      subtitle: 'Biotechnology Research Institute',
      description: 'Conducted research on microbial fermentation processes and assisted in developing protocols for enzyme production. Collaborated with senior researchers on genetic modification studies.',
      date: 'Jun 2024 - Aug 2024',
      icon: <TestTube className="w-6 h-6" />,
    },
    {
      title: 'Laboratory Assistant',
      subtitle: 'University Molecular Biology Lab',
      description: 'Assisted in maintaining laboratory equipment, preparing samples for experiments, and conducting routine molecular biology procedures including PCR, gel electrophoresis, and cell culture.',
      date: 'Jan 2023 - Present',
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      title: 'Teaching Assistant',
      subtitle: 'Department of Biotechnology',
      description: 'Supported undergraduate students in practical laboratory sessions, explained core concepts in biochemistry and molecular biology, and helped grade assignments and lab reports.',
      date: 'Sep 2023 - Dec 2023',
      icon: <Users className="w-6 h-6" />,
    },
  ];

  return (
    <SectionWrapper
      id="experiences"
      title="Experiences"
      subtitle="Professional and academic experiences that shaped my journey"
      className="bg-gradient-to-br from-white to-[#F6E1F0]"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        {experiences.map((exp, index) => (
          <InteractiveCard
            key={index}
            title={exp.title}
            subtitle={exp.subtitle}
            description={exp.description}
            date={exp.date}
            icon={exp.icon}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
