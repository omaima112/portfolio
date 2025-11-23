import { SectionWrapper } from './SectionWrapper';
import { FileText, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function PosterPresentations() {
  const posters = [
    {
      title: 'Microbial Enzyme Production for Industrial Applications',
      conference: 'National Biotechnology Symposium 2024',
      description: 'Research on optimizing fermentation conditions for enhanced amylase production using Bacillus subtilis.',
      image: 'https://images.unsplash.com/photo-1710429112585-68a9c850a8a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMGNvbmZlcmVuY2UlMjBwb3N0ZXJ8ZW58MXx8fHwxNzYyNjA4MzYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      award: 'Best Poster Award',
    },
    {
      title: 'Antimicrobial Properties of Plant-Derived Compounds',
      conference: 'Regional Science Fair 2024',
      description: 'Investigation of antibacterial activity of selected medicinal plant extracts against common pathogens.',
      image: 'https://images.unsplash.com/photo-1710429112585-68a9c850a8a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMGNvbmZlcmVuY2UlMjBwb3N0ZXJ8ZW58MXx8fHwxNzYyNjA4MzYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'CRISPR-Based Gene Editing: A Literature Review',
      conference: 'University Research Day 2023',
      description: 'Comprehensive review of CRISPR applications in genetic disease treatment and agricultural improvement.',
      image: 'https://images.unsplash.com/photo-1710429112585-68a9c850a8a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMGNvbmZlcmVuY2UlMjBwb3N0ZXJ8ZW58MXx8fHwxNzYyNjA4MzYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <SectionWrapper
      id="posters"
      title="Poster Presentations"
      subtitle="Research showcased at academic conferences"
      className="bg-gradient-to-br from-white to-[#F6E1F0]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posters.map((poster, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#EED1E6]"
            >
              <div className="relative h-64 overflow-hidden bg-[#F6E1F0]">
                <ImageWithFallback
                  src={poster.image}
                  alt={poster.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {poster.award && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#5A2653] to-[#7E3F74] text-white px-3 py-1 rounded-full flex items-center gap-2 shadow-lg">
                    <TrendingUp className="w-4 h-4" />
                    <span className="font-heading">{poster.award}</span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <FileText className="w-5 h-5 text-[#5A2653] flex-shrink-0 mt-1" />
                  <h3 className="font-heading text-[#5A2653] text-xl md:text-2xl font-semibold">{poster.title}</h3>
                </div>
                
                <p className="font-body text-[#7E3F74] mb-3">{poster.conference}</p>
                <p className="font-body text-gray-600">{poster.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
