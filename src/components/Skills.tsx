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

    return null;
}
