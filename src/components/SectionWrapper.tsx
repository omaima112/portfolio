interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionWrapper({ id, title, subtitle, children, className = '' }: SectionWrapperProps) {
  const isEducation = title === 'Education';
  // If the wrapper has a hero-like background (gradient/from-white), render a larger hero-style title
  const isHeroStyled = /bg-gradient-to-|-from-white|from-\[#F6E1F0\]/i.test(className);
  return (
    <section id={id} className={`py-16 md:py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {isHeroStyled ? (
            <h2
              className="hero-name text-[#5A2653] mb-3 font-extrabold leading-tight"
              style={{ fontSize: 'min(6vh, 4rem)', lineHeight: 1 }}
            >
              {title}
            </h2>
          ) : (
            <h2
              className={`page-heading font-heading mb-3 font-extrabold leading-tight ${
                isEducation ? 'page-title-education' : ''
              }`}
            >
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="font-body italic text-[#7E3F74] max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          <div className="w-24 h-1 bg-gradient-to-r from-[#5A2653] via-[#7E3F74] to-[#A86A9A] mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="section-content">{children}</div>
      </div>
    </section>
  );
}
