import { SectionWrapper } from './SectionWrapper';
import { Dna, Microscope, HeartPulse } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Slideshow } from './Slideshow';

export function Projects() {
  const projects = [
    {
      title: 'Undergraduate Researcher - Final Year Project',
      description: 'Conducting an undergraduate research project on coliphage-based strategies against multidrug-resistant E. coli. Isolating bacteriophages from wastewater-associated samples while developing skills in basic experimental design, laboratory documentation, and microbiological data interpretation.',
      supervisor: 'Dr. Bushra Uzair, Associate Professor',
      institution: 'International Islamic University Islamabad',
      technologies: ['Bacteriophage Isolation', 'Microbiological Analysis', 'Experimental Design'],
      image: '/website/Projects/5.png',
      icon: <Dna className="w-6 h-6" />,
      status: 'Ongoing',
      period: 'September 2025 - Ongoing',
    },
    {
      title: 'Understanding Vitiligo: Exploring Self-Esteem & Quality of Life',
      description: 'Conducted data collection through surveys and analyzed relationship between vitiligo and psychological wellbeing.',
      institution: 'Immunology Course Project | IIUI',
      technologies: ['Survey Design', 'Data Collection', 'Psychological Analysis'],
      images: ['/website/Projects/6.png', '/website/Projects/7.png'],
      icon: <HeartPulse className="w-6 h-6" />,
      status: 'Completed',
      period: '2024',
    },
    {
      title: 'Bacterial Isolation from Traditional Fermented Foods',
      description: 'Prepared fermented food samples and performed serial dilutions. Isolated and identified bacterial species using standard laboratory techniques including morphological characterization.',
      institution: 'Microbial Biotechnology Laboratory Project | IIUI',
      technologies: ['Serial Dilution', 'Bacterial Isolation', 'Morphological Analysis'],
      image: '/website/Projects/8.png',
      icon: <Microscope className="w-6 h-6" />,
      status: 'Completed',
      period: '2024',
    },
  ];

  return (
    <SectionWrapper
      id="projects"
      title="Projects"
      subtitle="Research and academic projects demonstrating practical application"
      className="bg-gradient-to-br from-white to-[#F6E1F0]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#EED1E6]"
            >
              <div className="relative h-56 overflow-hidden bg-[#F6E1F0]">
                {project.images && project.images.length > 0 ? (
                  <Slideshow
                    images={project.images.map((src) => ({ src }))}
                    className="w-full h-full"
                    interval={2000}
                  />
                ) : (
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 bg-white/90 backdrop-blur px-3 py-1 rounded-full">
                    {project.icon}
                    <span className="font-heading text-[#5A2653]">{project.status}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-heading text-[#5A2653] mb-3 text-2xl md:text-3xl font-semibold">{project.title}</h3>
                
                {project.supervisor && (
                  <p className="font-body text-gray-700 mb-2">
                    <strong>Supervisor:</strong> {project.supervisor}
                  </p>
                )}
                
                {project.institution && (
                  <p className="font-body text-gray-700 mb-2">
                    <strong>Institution:</strong> {project.institution}
                  </p>
                )}
                
                {project.period && (
                  <p className="font-body text-gray-600 mb-3 italic">
                    {project.period}
                  </p>
                )}
                
                <p className="font-body text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#F6E1F0] text-[#5A2653] rounded-full font-heading"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
