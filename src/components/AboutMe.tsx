import { SectionWrapper } from './SectionWrapper';
import { Heart, Microscope, BookOpen, Target } from 'lucide-react';

export function AboutMe() {
  const interests = [
    {
      icon: <Microscope className="w-6 h-6" />,
      title: 'Research',
      description: 'Passionate about molecular biology and genetic engineering research',
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Learning',
      description: 'Continuously expanding knowledge in biotechnology and life sciences',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Innovation',
      description: 'Driven to contribute to advancements in biomedical applications',
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Community',
      description: 'Active in academic communities and volunteer initiatives',
    },
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
          <p className="font-body text-gray-700 mb-6">
            I am currently pursuing my Bachelor of Science in Biotechnology, now in my 8th semester. 
            Throughout my academic journey, I have developed a deep appreciation for the intersection of 
            biology, technology, and innovation. My studies have equipped me with comprehensive knowledge 
            in molecular biology, biochemistry, genetics, and bioprocessing technologies.
          </p>
          
          <p className="font-body text-gray-700 mb-8">
            Beyond the classroom, I have actively participated in research projects, seminars, and 
            workshops that have enhanced my practical skills and broadened my perspective on the field. 
            I am particularly interested in areas such as genetic engineering, pharmaceutical biotechnology, 
            and sustainable bioprocessing solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg bg-[#F6E1F0]/30 hover:bg-[#F6E1F0]/60 transition-all duration-300 border border-[#EED1E6]"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#5A2653] to-[#7E3F74] rounded-lg flex items-center justify-center text-white">
                  {interest.icon}
                </div>
                <div>
                  <h4 className="font-heading text-[#5A2653] mb-1">{interest.title}</h4>
                  <p className="font-body text-gray-600">{interest.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
