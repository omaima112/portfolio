import { SectionWrapper } from './SectionWrapper';
import { InteractiveCard } from './InteractiveCard';
import { Presentation, Video } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Seminars() {
  const seminars = [
    {
      title: 'Breast Cancer Awareness',
      subtitle: 'Organizer | Oct 2024',
      description: 'Awareness and educational seminar on breast cancer',
      icon: <Presentation className="w-6 h-6" />,
      image: '/website/seminar and workshop/yes.PNG',
    },
    {
      title: 'Biotechnology Career Campus: Finding your Way',
      subtitle: 'Organizer | 2024',
      description: 'Career guidance and opportunities in biotechnology',
      icon: <Presentation className="w-6 h-6" />,
      image: '/website/seminar and workshop/Capture5.PNG',
    },
    {
      title: 'Translating Bioinformatics Research into Clinical Practices',
      subtitle: 'Organizer | 2024',
      description: 'Workshop on applying bioinformatics research to clinical settings',
      icon: <Presentation className="w-6 h-6" />,
      image: '/website/seminar and workshop/WhatsApp%20Image%202025-03-11%20at%202.06.00%20AM%20(1).jpeg',
    },
    {
      title: 'International E-Workshop on Molecular Informatics',
      subtitle: 'IIUI 2024',
      description: 'Online workshop on molecular informatics techniques',
      icon: <Video className="w-6 h-6" />,
      image: '/website/seminar and workshop/Capture4.PNG',
    },
    {
      title: 'Hands-on microbiology workshop',
      subtitle: 'IIUI 2024',
      description: 'Practical microbiology laboratory workshop',
      icon: <Video className="w-6 h-6" />,
      image: '/website/seminar and workshop/WhatsApp%20Image%202025-12-24%20at%207.48.34%20PM.jpeg',
    },
    {
      title: 'Bioethics and biosafety workshop',
      subtitle: 'IIUI 2024',
      description: 'Workshop on bioethics principles and biosafety protocols',
      icon: <Video className="w-6 h-6" />,
      image: '/website/seminar and workshop/WhatsApp%20Image%202025-12-24%20at%207.48.34%20PM.jpeg',
    },
  ];

  return (
    <SectionWrapper
      id="seminars"
      title="Seminars & Workshops"
      subtitle="Professional development events and continuous learning"
      className="bg-gradient-to-br from-white to-[#F6E1F0]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {seminars.map((seminar, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#EED1E6]"
            >
              <div className="relative h-64 overflow-hidden bg-[#F6E1F0]">
                {seminar.image ? (
                  <ImageWithFallback
                    src={seminar.image}
                    alt={seminar.title}
                    className="w-full h-full object-cover"
                  />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-shrink-0 mt-1">{seminar.icon}</div>
                  <h3 className="font-heading text-[#5A2653] text-lg md:text-xl font-semibold">{seminar.title}</h3>
                </div>

                <p className="font-body text-[#7E3F74] text-sm mb-2">{seminar.subtitle}</p>
                <p className="font-body text-gray-600 text-sm">{seminar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
