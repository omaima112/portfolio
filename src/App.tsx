import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { Education } from './components/Education';
import { Experiences } from './components/Experiences';
import { Leadership } from './components/Leadership';
import { Certificates } from './components/Certificates';
import { Seminars } from './components/Seminars';
import { PosterPresentations } from './components/PosterPresentations';
import { Projects } from './components/Projects';
import { Awards } from './components/Awards';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

type PageKey =
  | 'Homepage'
  | 'About Me'
  | 'Experiences'
  | 'Education'
  | 'Extracurricular Activities'
  | 'Certificates'
  | 'Seminars & Workshops'
  | 'Poster Presentations'
  | 'Projects'
  | 'Awards'
  | 'Contact';

const pageOrder: PageKey[] = [
  'Homepage',
  'About Me',
  'Education',
  'Projects',
  'Experiences',
  'Extracurricular Activities',
  'Certificates',
  'Seminars & Workshops',
  'Poster Presentations',
  'Awards',
  'Contact',
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageKey>('Homepage');

  const renderPage = (page: PageKey) => {
    switch (page) {
          case 'Homepage':
        return <Hero onNavigate={(p) => setCurrentPage(p as PageKey)} />;
      case 'About Me':
        return <AboutMe />;
      case 'Experiences':
        return <Experiences />;
      case 'Education':
        return <Education />;
      case 'Extracurricular Activities':
        return <Leadership />;
      case 'Certificates':
        return <Certificates />;
      case 'Seminars & Workshops':
        return <Seminars />;
      case 'Poster Presentations':
        return <PosterPresentations />;
      case 'Projects':
        return <Projects />;
      case 'Awards':
        return <Awards />;
      case 'Contact':
        return <Contact />;
      default:
            return <Hero onNavigate={(p) => setCurrentPage(p as PageKey)} />;
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-white flex flex-col">
      <Header
        pages={pageOrder}
        currentPage={currentPage}
        onNavigate={(p) => setCurrentPage(p as PageKey)}
      />

      <main className="flex-1 w-full flex items-start justify-start overflow-y-auto">
        <div className="w-full h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="w-full h-full"
            >
              {renderPage(currentPage)}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <Footer onNavigate={(p) => setCurrentPage(p as PageKey)} />
    </div>
  );
}
