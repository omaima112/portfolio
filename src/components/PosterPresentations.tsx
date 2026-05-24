import { SectionWrapper } from './SectionWrapper';
import { FileText, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Slideshow } from './Slideshow';
import { useTranslation } from 'react-i18next';

export function PosterPresentations() {
  const { t } = useTranslation();
  
  const posters = (t('posters.items', { returnObjects: true }) as Array<{
    title: string;
    conference: string;
    description: string;
    award?: string;
  }>).map((poster, idx) => {
    const slideshows: { [key: number]: { images: Array<{ src: string; caption: string }> } } = {
      0: {
        images: [
          { src: '/website/poster presentation/9.png', caption: 'Poster design and presentation' },
          { src: '/website/poster presentation/10.png', caption: 'Team coordination and Q&A' },
        ],
      },
    };

    const images: { [key: number]: string } = {
      1: '/website/poster presentation/11.png',
    };

    return {
      ...poster,
      slideshow: slideshows[idx],
      image: images[idx],
    };
  });

  return (
    <SectionWrapper
      id="posters"
      title={t('posters.title')}
      subtitle={t('posters.subtitle')}
      className="bg-gradient-to-br from-white to-[#F6E1F0]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {posters.map((poster, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#EED1E6]"
            >
              <div className="relative h-64 overflow-hidden bg-[#F6E1F0]">
                {poster.slideshow?.images ? (
                  <Slideshow images={poster.slideshow.images} className="h-full" />
                ) : (
                  <ImageWithFallback
                    src={poster.image}
                    alt={poster.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
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
