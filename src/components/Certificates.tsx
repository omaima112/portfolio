import { SectionWrapper } from './SectionWrapper';
import { InteractiveCard } from './InteractiveCard';
import { Award, CheckCircle } from 'lucide-react';
import { Badge } from './ui/badge';

export function Certificates() {
  const certificates = [
    {
      title: 'Advanced Molecular Biology Techniques',
      subtitle: 'International Biotechnology Institute',
      description: 'Comprehensive training in CRISPR-Cas9 gene editing, next-generation sequencing, and advanced PCR techniques. Hands-on laboratory experience with cutting-edge molecular tools.',
      date: 'Aug 2024',
      icon: <Award className="w-6 h-6" />,
      hoverPreview: {
        image: 'https://images.unsplash.com/photo-1759560245150-8dcbb7f01142?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJ0aWZpY2F0ZSUyMGF3YXJkJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzYyNjA4MzYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        caption: 'Receiving the certificate was a proud moment, validating months of dedicated learning in molecular techniques.',
      },
      skills: [' CRISPR ',   ' NGS',   'PCR',   'Lab Techniques'],
    },
    {
      title: 'Bioinformatics and Computational Biology',
      subtitle: 'Online Learning Platform - Coursera',
      description: 'Mastered genome analysis, protein structure prediction, and biological database utilization. Applied computational approaches to solve real biological problems.',
      date: 'May 2024',
      icon: <CheckCircle className="w-6 h-6" />,
      hoverPreview: {
        image: 'https://images.unsplash.com/photo-1759560245150-8dcbb7f01142?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJ0aWZpY2F0ZSUyMGF3YXJkJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzYyNjA4MzYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        caption: 'This course opened new horizons in understanding how computational tools enhance biological research.',
      },
      skills: ['Genome Analysis', 'Python', 'Databases'],
    },
    {
      title: 'Good Laboratory Practice (GLP)',
      subtitle: 'National Accreditation Board',
      description: 'Certified in standard laboratory safety protocols, quality assurance procedures, and documentation practices essential for research and industrial laboratories.',
      date: 'Mar 2024',
      icon: <Award className="w-6 h-6" />,
      hoverPreview: {
        image: 'https://images.unsplash.com/photo-1759560245150-8dcbb7f01142?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJ0aWZpY2F0ZSUyMGF3YXJkJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzYyNjA4MzYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        caption: 'GLP certification equipped me with critical safety and quality standards for professional laboratory work.',
      },
      skills: ['GLP', 'Safety', 'QA/QC'],
    },
    {
      title: 'Pharmaceutical Biotechnology',
      subtitle: 'Professional Development Institute',
      description: 'In-depth training on drug development processes, vaccine technology, and therapeutic protein production. Focus on industrial applications of biotechnology.',
      date: 'Jan 2024',
      icon: <CheckCircle className="w-6 h-6" />,
      hoverPreview: {
        image: 'https://images.unsplash.com/photo-1759560245150-8dcbb7f01142?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJ0aWZpY2F0ZSUyMGF3YXJkJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzYyNjA4MzYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        caption: 'Understanding pharmaceutical applications deepened my appreciation for biotechnology\'s real-world impact.',
      },
      skills: ['Bioprocessing', 'Vaccine Tech', 'Drug Dev'],
    },
  ];

  return (
    <SectionWrapper
      id="certificates"
      title="Certificates"
      subtitle="Professional certifications and specialized training"
      className="bg-gradient-to-br from-white to-[#F6E1F0]"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates.map((cert, index) => (
          <InteractiveCard
            key={index}
            title={cert.title}
            subtitle={cert.subtitle}
            description={cert.description}
            date={cert.date}
            icon={cert.icon}
            hoverPreview={cert.hoverPreview}
          >
            {/* image + skills passed as children so certificates behave like interactive cards */}
            {cert.hoverPreview?.image && (
              <div className="w-full mb-4 flex justify-center">
                <img
                  src={cert.hoverPreview.image}
                  alt={cert.title}
                  className="w-full h-40 md:h-48 object-cover rounded-md border"
                />
              </div>
            )}

            {cert.skills && (
              <div className="mt-3 flex flex-wrap gap-3">
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
          </InteractiveCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
