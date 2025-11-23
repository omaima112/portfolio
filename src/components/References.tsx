import { SectionWrapper } from './SectionWrapper';
import { Mail, Phone, Building, User } from 'lucide-react';

export function References() {
  const references = [
    {
      name: 'Dr. Sarah Ahmed',
      title: 'Associate Professor',
      department: 'Department of Biotechnology',
      institution: 'University Name',
      email: 'sarah.ahmed@university.edu',
      phone: '+1 (555) 123-4567',
    },
    {
      name: 'Dr. Muhammad Hassan',
      title: 'Research Supervisor',
      department: 'Molecular Biology Lab',
      institution: 'Biotechnology Research Institute',
      email: 'm.hassan@research.org',
      phone: '+1 (555) 234-5678',
    },
    {
      name: 'Dr. Ayesha Khan',
      title: 'Senior Lecturer',
      department: 'Department of Biochemistry',
      institution: 'University Name',
      email: 'ayesha.khan@university.edu',
      phone: '+1 (555) 345-6789',
    },
  ];

  return (
    <SectionWrapper
      id="references"
      title="References"
      subtitle="Academic and professional references available upon request"
      className="bg-gradient-to-br from-white to-[#F6E1F0]"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {references.map((reference, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-[#EED1E6] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5A2653] to-[#7E3F74] rounded-full flex items-center justify-center text-white">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-[#5A2653] text-lg md:text-2xl font-semibold">{reference.name}</h3>
                  <p className="font-body text-[#7E3F74]">{reference.title}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Building className="w-4 h-4 text-[#A86A9A] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-body text-gray-700">{reference.department}</p>
                    <p className="font-body text-gray-600">{reference.institution}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#EED1E6] space-y-2">
                  <a
                    href={`mailto:${reference.email}`}
                    className="flex items-center gap-2 text-[#5A2653] hover:text-[#7E3F74] transition-colors duration-200"
                  >
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <span className="font-body break-all">{reference.email}</span>
                  </a>
                  
                  <a
                    href={`tel:${reference.phone}`}
                    className="flex items-center gap-2 text-[#5A2653] hover:text-[#7E3F74] transition-colors duration-200"
                  >
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span className="font-body">{reference.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="font-body italic text-gray-600">
            Additional references and recommendation letters available upon request
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
