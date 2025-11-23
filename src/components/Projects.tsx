import { SectionWrapper } from './SectionWrapper';
import { Dna, Leaf, Pill, Database } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: 'Enzyme Optimization for Biofuel Production',
      description: 'Developed and optimized enzyme cocktails for efficient cellulose degradation in biofuel production. Conducted comparative analysis of different microbial strains and fermentation conditions.',
      technologies: ['Fermentation', 'Enzyme Assays', 'Bioprocessing'],
      image: 'https://images.unsplash.com/photo-1668600372069-e39ec2ab28af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaW90ZWNobm9sb2d5JTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NjI1MjgzMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: <Leaf className="w-6 h-6" />,
      status: 'Completed',
    },
    {
      title: 'Genetic Analysis of Disease Resistance in Plants',
      description: 'Investigated genetic markers associated with disease resistance in crop plants using molecular techniques. Applied PCR and gel electrophoresis for genetic characterization.',
      technologies: ['PCR', 'DNA Extraction', 'Genetic Markers'],
      image: 'https://images.unsplash.com/photo-1668600372069-e39ec2ab28af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaW90ZWNobm9sb2d5JTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NjI1MjgzMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: <Dna className="w-6 h-6" />,
      status: 'Completed',
    },
    {
      title: 'Development of Probiotic Formulations',
      description: 'Researched and formulated probiotic supplements with enhanced stability and efficacy. Evaluated bacterial strains for their beneficial properties and survival in simulated gastrointestinal conditions.',
      technologies: ['Microbiology', 'Formulation', 'Quality Control'],
      image: 'https://images.unsplash.com/photo-1668600372069-e39ec2ab28af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaW90ZWNobm9sb2d5JTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NjI1MjgzMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: <Pill className="w-6 h-6" />,
      status: 'In Progress',
    },
    {
      title: 'Bioinformatics Database for Local Medicinal Plants',
      description: 'Created a comprehensive database cataloging medicinal plants native to the region, including their bioactive compounds, traditional uses, and scientific research findings.',
      technologies: ['Database Design', 'Data Collection', 'Web Development'],
      image: 'https://images.unsplash.com/photo-1668600372069-e39ec2ab28af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaW90ZWNobm9sb2d5JTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NjI1MjgzMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: <Database className="w-6 h-6" />,
      status: 'Completed',
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
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
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
