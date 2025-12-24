import { SectionWrapper } from './SectionWrapper';
import { InteractiveCard } from './InteractiveCard';
import { Briefcase } from 'lucide-react';
import { Slideshow } from './Slideshow';

export function Experiences() {
  const experiences = [
    {
      title: 'Laboratory Intern',
      subtitle: 'National Institutes of Health (NIH), Islamabad - Nutrition Division (WHO Focal Point for Food Safety)',
      description: 'Completed internship in food and water chemical and microbiological laboratories. Conducted sample handling and safety testing procedures while maintaining laboratory data and sample records. Performed microbiological testing of food and water samples, including pathogen and coliform detection, while gaining hands-on experience in sample preparation, microbial culture, and water analysis for food safety and water quality monitoring.',
      date: 'July 2025 - Aug 2025',
      icon: <Briefcase className="w-6 h-6" />,
      images: [
        '/website/Experience/12.png',
        '/website/Experience/13.png',
      ],
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
