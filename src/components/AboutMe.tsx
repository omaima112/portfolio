import { SectionWrapper } from './SectionWrapper';

export function AboutMe() {
  const researchInterests = [
    'Coliphages',
    'Antimicrobial Resistance',
    'Bacterial Biofilms',
    'Microbial Contaminants',
    'Wastewater-Based Surveillance',
    'Environmental Microbiology',
    'Water Reuse Safety',
    'One Health',
    'Microbial Biotechnology',
  ];

  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle="A glimpse into my academic journey and aspirations"
      className="bg-gradient-to-br from-white to-[#F6E1F0]"
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-[#EED1E6]">

          {/* TEXT */}
          <div className="space-y-6">
            

            <p className="font-body text-gray-700 text-lg md:text-xl leading-relaxed">
              I am currently pursuing a Bachelor of Science in Biotechnology and am in my final semester, with a strong academic interest in the intersection of microbiology, environmental health, and sustainable biotechnological solutions.
            </p>

            <p className="font-body text-gray-700 text-lg md:text-xl leading-relaxed">
              My final year research project, which investigates phage-based biocontrol strategies against multidrug-resistant bacterial biofilms, has allowed me to explore biological alternatives to conventional antimicrobial approaches.
            </p>

            <p className="font-body text-gray-700 text-lg md:text-xl leading-relaxed">
              I am motivated to pursue advanced research training that bridges fundamental microbiology and molecular biology with real-world environmental challenges, particularly those related to water quality, antimicrobial resistance, and public health.
            </p>

            {/* Headings removed from text; shown in cards below */}
          </div>

          {/* FORCED GAP */}
          <div className="h-16 md:h-24" />

          {/* SECTIONS */}
          <div className="space-y-6">
            {/* Research Interests Section */}
            <div className="bg-white rounded-xl p-6 border border-[#EED1E6] shadow-sm">
              <h4 className="font-heading text-[#5A2653] text-xl mb-3">Research Interests</h4>
              <div className="flex flex-wrap gap-2">
                {researchInterests.map((item, idx) => (
                  <span key={idx} className="px-3 py-1 bg-[#F6E1F0] text-[#5A2653] rounded-full font-heading text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Beyond Science Section */}
            <div className="bg-white rounded-xl p-6 border border-[#EED1E6] shadow-sm">
              <h4 className="font-heading text-[#5A2653] text-xl mb-3">Beyond Science</h4>
              <p className="font-body text-gray-700 text-base md:text-lg leading-relaxed">
                Interest in visual storytelling, digital design, and creative projects beyond the laboratory.
              </p>
            </div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}
