import { SectionWrapper } from './SectionWrapper';
import { Award, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';

export function Certificates() {
  const certificates = [
    {
      title: 'Bacteria and Chronic Infections',
      subtitle: 'University of Copenhagen | Coursera',
      date: '2025',
      icon: <Award className="w-6 h-6" />,
      skills: ['Infection Biology', 'Host-Pathogen'],
      image: '/website/certificates/Capture8.PNG',
    },
    {
      title: 'Antimicrobial Resistance: Theory and Methods',
      subtitle: 'Technical University of Denmark (DTU) | Coursera',
      date: '2025',
      icon: <CheckCircle className="w-6 h-6" />,
      skills: ['AMR', 'Surveillance', 'Lab Methods'],
      image: '/website/certificates/Capture5.PNG',
    },
    {
      title: 'New Paradigms in Wastewater Management',
      subtitle: 'Politecnico di Milano | Coursera',
      date: '2025',
      icon: <Award className="w-6 h-6" />,
      skills: ['Wastewater', 'Sustainability'],
      image: '/website/certificates/Capture3.PNG',
    },
    {
      title: 'Algae Biotechnology',
      subtitle: 'University of California San Diego | Coursera',
      date: '2025',
      icon: <CheckCircle className="w-6 h-6" />,
      skills: ['Algae', 'Biofuels', 'Bioproducts'],
      image: '/website/certificates/7.PNG',
    },
    {
      title: 'Social Dimensions of Antimicrobial Resistance',
      subtitle: 'University of Amsterdam | Coursera',
      date: '2025',
      icon: <Award className="w-6 h-6" />,
      skills: ['Public Health', 'Policy', 'AMR'],
      image: '/website/certificates/Capture6.PNG',
    },
    {
      title: 'Circular Economy: Sustainable Materials Management',
      subtitle: 'Lund University | Coursera',
      date: '2025',
      icon: <CheckCircle className="w-6 h-6" />,
      skills: ['Circular Economy', 'Sustainability'],
      image: '/website/certificates/Capture9.PNG',
    },
    {
      title: 'Environmental Health: The Foundation of Global Public Health',
      subtitle: 'University of Michigan | Coursera',
      date: '2025',
      icon: <Award className="w-6 h-6" />,
      skills: ['Environmental Health', 'Risk'],
      image: '/website/certificates/Capture4.PNG',
    },
    {
      title: 'Whole Genome Sequencing of Bacterial Genomes: Tools and Applications',
      subtitle: 'Technical University of Denmark (DTU) | Coursera',
      date: '2025',
      icon: <CheckCircle className="w-6 h-6" />,
      skills: ['WGS', 'Bioinformatics', 'Surveillance'],
      image: '/website/certificates/Capture2.PNG',
    },
    {
      title: 'Scientific Research Writing Course',
      subtitle: 'Multiomics | 2023',
      date: '2023',
      icon: <Award className="w-6 h-6" />,
      skills: ['Sci Writing', 'Communication'],
      image: '/website/certificates/Capture10.PNG',
    },
    {
      title: 'Aspire Leaders Program',
      subtitle: 'Aspire Institute | 2025',
      date: '2025',
      icon: <CheckCircle className="w-6 h-6" />,
      skills: ['Leadership', 'Collaboration'],
      image: '/website/certificates/Capture1.PNG',
    },
    {
      title: 'Fundamental Skills in Bioinformatics',
      subtitle: 'Ongoing',
      date: 'Ongoing',
      icon: <Award className="w-6 h-6" />,
      skills: ['Bioinformatics', 'Sequence Analysis'],
      // No image while ongoing
    },
  ];

  return (
    <SectionWrapper
      id="certificates"
      title="Certificates"
      subtitle="Professional certifications and specialized training"
      className="bg-gradient-to-br from-white to-[#F6E1F0]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#EED1E6]"
            >
              <div className="relative h-64 overflow-hidden bg-white">
                {cert.image ? (
                  <ImageWithFallback
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain p-2"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-white">
                    <span className="font-heading text-[#5A2653]">Ongoing</span>
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-2">
                  {cert.icon}
                  <span className="font-heading text-[#5A2653]">{cert.date}</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full">
                  <span className="font-heading text-[#5A2653] text-xs">{((cert.subtitle || '').split('|')[0]).trim()}</span>
                </div>
              </div>

              <div className="p-4 min-h-40">
                <h3 className="font-heading text-[#5A2653] text-sm font-semibold line-clamp-2 mb-2">{cert.title}</h3>
                <p className="font-body text-[#7E3F74] text-xs line-clamp-2 mb-3">{cert.subtitle}</p>

                {cert.skills && (
                  <div className="flex flex-wrap gap-1.5">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
