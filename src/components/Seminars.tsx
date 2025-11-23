import { SectionWrapper } from './SectionWrapper';
import { InteractiveCard } from './InteractiveCard';
import { Presentation, Video } from 'lucide-react';
import { Slideshow } from './Slideshow';

export function Seminars() {
  const seminars = [
    {
      title: 'CRISPR Technology: Future of Genetic Engineering',
      subtitle: 'National Biotechnology Conference 2024',
      description: 'Attended an in-depth seminar on CRISPR-Cas9 applications in medicine, agriculture, and research. Learned about ethical considerations and recent breakthroughs in gene therapy.',
      date: 'Oct 2024',
      icon: <Presentation className="w-6 h-6" />,
      hoverPreview: {
        images: [
          {
            src: 'https://images.unsplash.com/photo-1585829364012-1d7f3bbd3e9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
            caption: 'Keynote: CRISPR applications discussed by leading scientists.',
          },
          {
            src: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
            caption: 'Panel discussion and demonstrations of gene-editing workflows.',
          },
          {
            src: 'https://images.unsplash.com/photo-1581091012184-7a6c8b6f3d3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
            caption: 'Poster session showcasing CRISPR research projects.',
          },
          {
            src: 'https://images.unsplash.com/photo-1526378729331-8e7e7a2a9a2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
            caption: 'Networking and hands-on demos with lab prototypes.',
          },
        ],
      },
    },
    {
      title: 'Sustainable Biomanufacturing Workshop',
      subtitle: 'Industrial Biotechnology Forum',
      description: 'Interactive workshop on green biotechnology practices, bio-based product development, and sustainable fermentation processes. Hands-on training in bioprocess optimization.',
      date: 'Jul 2024',
      icon: <Video className="w-6 h-6" />,
      hoverPreview: {
        images: [
          {
            src: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
            caption: 'Hands-on sustainable biomanufacturing exercises.',
          },
          {
            src: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
            caption: 'Group work and fermentation optimisation sessions.',
          },
          {
            src: 'https://images.unsplash.com/photo-1542831371-d531d36971e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
            caption: 'Sustainable process design and pilot-scale demonstrations.',
          },
          {
            src: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
            caption: 'Showcase of bio-based products and circular workflows.',
          },
        ],
      },
    },
    {
      title: 'Immunology and Vaccine Development',
      subtitle: 'Medical Sciences Symposium',
      description: 'Comprehensive seminar covering immune response mechanisms, vaccine design principles, and recent advances in mRNA vaccine technology. Networking with immunology researchers.',
      date: 'Apr 2024',
      icon: <Presentation className="w-6 h-6" />,
      hoverPreview: {
        images: [
          {
            src: 'https://images.unsplash.com/photo-1759456629213-3db5a7bb53ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMHNlbWluYXJ8ZW58MXx8fHwxNzYyNTAzOTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            caption: 'Inspiring insights into vaccine technology from leading researchers in the field.',
          },
          {
            src: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
            caption: 'Laboratory demonstrations of immunological assays.',
          },
          {
            src: 'https://images.unsplash.com/photo-1582719478179-2903d8a6f6f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
            caption: 'mRNA vaccine design and delivery discussions.',
          },
          {
            src: 'https://images.unsplash.com/photo-1581093448795-7c8a8f3f2b3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
            caption: 'Poster presentations and networking with immunologists.',
          },
        ],
      },
    },
    {
      title: 'Biostatistics and Research Methodology',
      subtitle: 'Academic Skills Development Series',
      description: 'Workshop focused on statistical analysis for biological research, experimental design, and data interpretation. Practical training in statistical software for life sciences.',
      date: 'Feb 2024',
      icon: <Video className="w-6 h-6" />,
      hoverPreview: {
        images: [
          {
            src: 'https://images.unsplash.com/photo-1759456629213-3db5a7bb53ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMHNlbWluYXJ8ZW58MXx8fHwxNzYyNTAzOTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            caption: 'Essential skills gained for conducting rigorous and statistically sound research.',
          },
          {
            src: 'https://images.unsplash.com/photo-1555967523-3f3b6f9a3b09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
            caption: 'Hands-on sessions with statistical software tools.',
          },
          {
            src: 'https://images.unsplash.com/photo-1526378729331-8e7e7a2a9a2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
            caption: 'Small-group problem solving on experimental design.',
          },
          {
            src: 'https://images.unsplash.com/photo-1555949963-aa79dcee981d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
            caption: 'Data visualisation best practices and interpretation.',
          },
        ],
      },
    },
    {
      title: 'Nanotechnology in Drug Delivery',
      subtitle: 'Pharmaceutical Sciences Conference',
      description: 'Seminar exploring nanoparticle-based drug delivery systems, targeted therapy approaches, and nanomedicine applications in treating complex diseases.',
      date: 'Nov 2023',
      icon: <Presentation className="w-6 h-6" />,
      hoverPreview: {
        images: [
          {
            src: 'https://images.unsplash.com/photo-1759456629213-3db5a7bb53ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMHNlbWluYXJ8ZW58MXx8fHwxNzYyNTAzOTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            caption: 'Amazed by the potential of nanotechnology to revolutionize medical treatments.',
          },
          {
            src: 'https://images.unsplash.com/photo-1581093448795-7c8a8f3f2b3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
            caption: 'Nanoparticle formulation demonstrations and posters.',
          },
          {
            src: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
            caption: 'Targeted delivery strategies and imaging techniques.',
          },
          {
            src: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
            caption: 'Industry talks on translation to clinical applications.',
          },
        ],
      },
    },
  ];

  return (
    <SectionWrapper
      id="seminars"
      title="Seminars & Workshops"
      subtitle="Continuous learning through professional development events"
      className="bg-gradient-to-br from-white to-[#F6E1F0]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {seminars.map((seminar, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#EED1E6]"
            >
              <div className="relative h-64 overflow-hidden bg-[#F6E1F0]">
                {seminar.hoverPreview?.images ? (
                  <Slideshow images={seminar.hoverPreview.images} className="h-full" />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-shrink-0 mt-1">{seminar.icon}</div>
                  <h3 className="font-heading text-[#5A2653] text-xl md:text-2xl font-semibold">{seminar.title}</h3>
                </div>

                <p className="font-body text-[#7E3F74] mb-3">{seminar.subtitle} • {seminar.date}</p>
                <p className="font-body text-gray-600">{seminar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
