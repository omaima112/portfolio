import { SectionWrapper } from './SectionWrapper';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Education() {
  const { t } = useTranslation();

  const education = t('education.items', { returnObjects: true }) as Array<{
    degree: string;
    institution: string;
    location: string;
    period: string;
    currentSemester?: string;
    cgpa?: string;
    expectedGraduation?: string;
    coursework?: string[];
    grade?: string;
    coreSubjects?: string[];
    highlights?: string[];
  }>;

  return (
    <SectionWrapper
      id="education"
      title={t('education.title')}
      subtitle={t('education.subtitle')}
      className="bg-gradient-to-br from-white to-[#F6E1F0]"
    >
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl p-6 md:p-8 ltr:border-l-4 rtl:border-r-4 border-[#5A2653] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
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
                {edu.expectedGraduation && (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#A86A9A]" />
                    <span className="font-body">Expected Graduation: {edu.expectedGraduation}</span>
                  </div>
                )}
              </div>

              {edu.cgpa && (
                  <p className="font-body text-gray-700 mb-4">
                  <strong>{t('education.cgpa')}:</strong> {edu.cgpa}
                </p>
              )}

              {edu.grade && (
                <p className="font-body text-gray-700 mb-4">
                  <strong>{t('education.grade')}:</strong> {edu.grade}
                </p>
              )}

              {edu.coursework && (
                <div className="mb-4">
                  <p className="font-heading text-[#5A2653] mb-2">{t('education.relevantCoursework')}:</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, cIndex) => (
                      <span key={cIndex} className="inline-block px-2 py-1 bg-[#F6E1F0]/50 text-[#5A2653] rounded-full text-xs font-body">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {edu.coreSubjects && (
                <div className="mb-4">
                  <p className="font-heading text-[#5A2653] mb-2">{t('education.coreSubjects')}:</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.coreSubjects.map((subject, sIndex) => (
                      <span key={sIndex} className="inline-block px-3 py-1 bg-[#F6E1F0]/50 text-[#5A2653] rounded-full text-sm font-body">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {edu.highlights && (
                <ul className="space-y-2">
                  {edu.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#A86A9A] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="font-body text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
