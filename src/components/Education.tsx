import { SectionWrapper } from './SectionWrapper';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: 'Bachelor of Science in Biotechnology',
      institution: 'University Name',
      location: 'City, Country',
      period: '2021 - Present',
      currentSemester: '8th Semester',
      highlights: [
        'CGPA: 3.8/4.0',
        'Dean\'s List: 6 semesters',
        'Research Assistant in Molecular Biology Lab',
        'Member of Biotechnology Society',
      ],
    },
    {
      degree: 'Higher Secondary Certificate (HSSC)',
      institution: 'PAEC Model College',
      location: 'Islamabad, Pakistan',
      period: '2019 - 2021',
      highlights: [
        'Pre-Medical Science Group',
        'A+ Grade',
        'Science Club President',
      ],
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'AL-Farabi Islamic School',
      location: 'Islamabad, Pakistan',
      period: '2017 - 2019',
      highlights: [
        'Science Group',
        'A+ Grade',
        'Outstanding Academic Achievement Award',
      ],
    },
  ];

  return (
    <SectionWrapper
      id="education"
      title="Education"
      subtitle="My academic foundation and achievements"
      className="bg-gradient-to-br from-white to-[#F6E1F0]"
    >
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl p-6 md:p-8 border-l-4 border-[#5A2653] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="w-5 h-5 text-[#5A2653]" />
                    <h3 className="font-heading text-[#5A2653]">{edu.degree}</h3>
                  </div>
                  <p className="font-body text-[#7E3F74] mb-2">{edu.institution}</p>
                </div>
                
                {edu.currentSemester && (
                  <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#5A2653] to-[#7E3F74] text-white rounded-full font-heading">
                    {edu.currentSemester}
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#A86A9A]" />
                  <span className="font-body">{edu.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#A86A9A]" />
                  <span className="font-body">{edu.location}</span>
                </div>
              </div>

              <ul className="space-y-2">
                {edu.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#A86A9A] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="font-body text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
