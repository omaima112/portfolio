import { useState } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Dna, Microscope, HeartPulse, ZoomIn } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Slideshow } from './Slideshow';
import { useTranslation } from 'react-i18next';
import { ImageLightbox, LightboxImage } from './ImageLightbox';

export function Projects() {
  const { t } = useTranslation();
  const [lightbox, setLightbox] = useState<{ images: LightboxImage[]; title: string; startIndex: number } | null>(null);

  const iconMap: { [key: number]: React.ReactNode } = {
    0: <Dna className="w-6 h-6" />,
    1: <HeartPulse className="w-6 h-6" />,
    2: <Microscope className="w-6 h-6" />,
  };

  const imageMap: { [key: number]: { image?: string; images?: string[] } } = {
    0: { image: '/website/Projects/KAUST CV.png' },
    1: { images: ['/website/Projects/6.png', '/website/Projects/7.png'] },
    2: { image: '/website/Projects/8.png' },
  };

  const projects = (t('projects.items', { returnObjects: true }) as Array<{
    title: string;
    description: string | string[];
    institution: string;
    technologies: string[];
    status: string;
    period: string;
    supervisor?: string;
  }>).map((project, idx) => ({
    ...project,
    icon: iconMap[idx],
    tags: [],
    ...imageMap[idx],
  }));

  return (
    <SectionWrapper
      id="projects"
      title={t('projects.title')}
      subtitle={t('projects.subtitle')}
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
                {project.images && project.images.length > 0 ? (
                  <Slideshow
                    images={project.images.map((src) => ({ src }))}
                    className="w-full h-full"
                    interval={2000}
                    onImageClick={(currentIdx) =>
                      setLightbox({
                        images: project.images!.map((src) => ({ src })),
                        title: project.title,
                        startIndex: currentIdx,
                      })
                    }
                  />
                ) : (
                  <div
                    className="relative w-full h-full cursor-pointer"
                    onClick={() =>
                      setLightbox({
                        images: [{ src: project.image! }],
                        title: project.title,
                        startIndex: 0,
                      })
                    }
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/20">
                      <div className="bg-black/50 rounded-full p-2">
                        <ZoomIn className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <div className="flex items-center gap-2 bg-white/90 backdrop-blur px-3 py-1 rounded-full">
                    {project.icon}
                    <span className="font-heading text-[#5A2653]">{project.status}</span>
                  </div>
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex gap-2 ml-2">
                      {project.tags.map((tag, tagIdx) => (
                        <span key={tagIdx} className="px-2 py-0.5 bg-green-200 text-green-800 rounded-full text-xs font-semibold border border-green-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-heading text-[#5A2653] mb-3 text-2xl md:text-3xl font-semibold">{project.title}</h3>

                {project.supervisor && (
                  <p className="font-body text-gray-700 mb-2">
                    <strong>{t('projects.supervisor')}:</strong> {project.supervisor}
                  </p>
                )}

                {project.institution && (
                  <p className="font-body text-gray-700 mb-2">
                    <strong>{t('projects.institution')}:</strong> {project.institution}
                  </p>
                )}

                {project.period && (
                  <p className="font-body text-gray-600 mb-3 italic">
                    {project.period}
                  </p>
                )}

                {Array.isArray(project.description) ? (
                  <ul className="list-disc pl-5 text-gray-600 mb-4">
                    {project.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="font-body text-gray-600 mb-4">{project.description}</p>
                )}

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

      {lightbox && (
        <ImageLightbox
          images={lightbox.images}
          title={lightbox.title}
          startIndex={lightbox.startIndex}
          onClose={() => setLightbox(null)}
        />
      )}
    </SectionWrapper>
  );
}
