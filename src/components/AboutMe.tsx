import { useTranslation } from 'react-i18next';
import { SectionWrapper } from './SectionWrapper';

export function AboutMe() {
  const { t } = useTranslation();

  const researchInterests = [
    {
      key: 'coliphages',
      fallback: 'Coliphages',
    },
    {
      key: 'antimicrobialResistance',
      fallback: 'Antimicrobial Resistance',
    },
    {
      key: 'bacterialBiofilms',
      fallback: 'Bacterial Biofilms',
    },
    {
      key: 'microbialContaminants',
      fallback: 'Microbial Contaminants',
    },
    {
      key: 'wastewaterBasedSurveillance',
      fallback: 'Wastewater-Based Surveillance',
    },
    {
      key: 'environmentalMicrobiology',
      fallback: 'Environmental Microbiology',
    },
    {
      key: 'waterReuseSafety',
      fallback: 'Water Reuse Safety',
    },
    {
      key: 'oneHealth',
      fallback: 'One Health',
    },
    {
      key: 'microbialBiotechnology',
      fallback: 'Microbial Biotechnology',
    },
  ];

  return (
    <SectionWrapper
      id="about"
      title={t('about.title')}
      subtitle={t('about.subtitle')}
      className="bg-gradient-to-br from-white to-[#F6E1F0]"
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-[#EED1E6]">

          {/* TEXT */}
          <div className="space-y-6">

            <p className="font-body text-gray-700 text-lg md:text-xl leading-relaxed">
              {t('about.paragraph1')}
            </p>

            <p className="font-body text-gray-700 text-lg md:text-xl leading-relaxed">
              {t('about.paragraph2')}
            </p>

            <p className="font-body text-gray-700 text-lg md:text-xl leading-relaxed">
              {t('about.paragraph3')}
            </p>

          </div>

          {/* FORCED GAP */}
          <div className="h-16 md:h-24" />

          {/* SECTIONS */}
          <div className="space-y-6">

            {/* Research Interests Section */}
            <div className="bg-white rounded-xl p-6 border border-[#EED1E6] shadow-sm">
              <h4 className="font-heading text-[#5A2653] text-xl mb-3">
                {t('about.researchInterests')}
              </h4>

              <div className="flex flex-wrap gap-2">
                {researchInterests.map((item, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 bg-[#F6E1F0] text-[#5A2653] rounded-full font-heading text-sm ${
                      document.documentElement.lang === 'ar' ? 'ar' : ''
                    }`}
                  >
                    {t(`about.terms.${item.key}`, item.fallback)}
                  </span>
                ))}
              </div>
            </div>

            {/* Beyond Science Section */}
            <div className="bg-white rounded-xl p-6 border border-[#EED1E6] shadow-sm">
              <h4 className="font-heading text-[#5A2653] text-xl mb-3">
                {t('about.beyondScience')}
              </h4>

              <p className="font-body text-gray-700 text-base md:text-lg leading-relaxed">
                {t('about.beyondScienceText')}
              </p>
            </div>

          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}
