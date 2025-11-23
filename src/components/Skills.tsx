import { SectionWrapper } from './SectionWrapper';
import { Beaker, Code, BarChart, Globe } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      category: 'Laboratory Techniques',
      icon: <Beaker className="w-6 h-6" />,
      skills: [
        'PCR and qPCR',
        'Gel Electrophoresis',
        'Cell Culture',
        'Microbial Fermentation',
        'Enzyme Assays',
        'Protein Purification',
        'DNA/RNA Extraction',
        'Aseptic Techniques',
      ],
    },
    {
      category: 'Bioinformatics & Software',
      icon: <Code className="w-6 h-6" />,
      skills: [
        'BLAST Analysis',
        'Genome Browsers',
        'Protein Modeling',
        'PyMOL',
        'MEGA (Phylogenetics)',
        'R for Biostatistics',
        'Microsoft Office Suite',
        'Reference Management',
      ],
    },
    {
      category: 'Analytical & Research',
      icon: <BarChart className="w-6 h-6" />,
      skills: [
        'Experimental Design',
        'Data Analysis',
        'Statistical Methods',
        'Literature Review',
        'Technical Writing',
        'Scientific Presentation',
        'Quality Control',
        'Documentation',
      ],
    },
    {
      category: 'Soft Skills',
      icon: <Globe className="w-6 h-6" />,
      skills: [
        'Team Collaboration',
        'Leadership',
        'Project Management',
        'Critical Thinking',
        'Problem Solving',
        'Communication',
        'Time Management',
        'Adaptability',
      ],
    },
  ];

  return (
    <SectionWrapper
      id="skills"
      title="Skills"
      subtitle="Technical expertise and professional competencies"
      className="bg-gradient-to-br from-white to-[#F6E1F0]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-[#EED1E6] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5A2653] to-[#7E3F74] rounded-lg flex items-center justify-center text-white">
                  {category.icon}
                </div>
                <h3 className="font-heading text-[#5A2653]">{category.category}</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-2 p-2 rounded-lg bg-[#F6E1F0]/40 hover:bg-[#F6E1F0] transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-[#A86A9A] rounded-full flex-shrink-0"></div>
                    <span className="font-body text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
