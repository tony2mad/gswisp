import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import AnimatedButton from '../components/ui/AnimatedButton';

interface SectionData {
  id: string;
  title: string;
  content: string | React.ReactNode;
}

export default function InterestForm() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string>('intro');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = () => {
    navigate('/');
  };

  const sections: SectionData[] = [
    {
      id: 'intro',
      title: 'UVOD',
      content: (
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-center mb-8 text-foreground">
            POZIV NA ISKAZIVANJE INTERESA ZA IZGRADNJU<br />
            BRZOG INTERNETA U STAMBENIM ZGRADAMA
          </h1>
          <p className="text-xl font-semibold mb-8 text-foreground">
            Poštovani stanari stambenih zgrada!
          </p>
          <div>
            <p className="font-semibold text-primary">
              Sve informacije možete pronaći na našoj web stranici:{' '}
              <a
                href="https://gswisp.net"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                gswisp.net
              </a>
            </p>
            <p className="font-bold mt-2 text-white">
              Podržite domaće jer domaće je najbolje!
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'tko',
      title: 'TKO?',
      content: 'Mi smo GSWISP - jedina domaća telekomunikacijska firma iz Gospića. Već 11 godina pružamo usluge pristupa internetu na području Gospića i okolnih naselja i do danas smo stekli i zadržali povjerenje nekoliko stotina korisnika.'
    },
    {
      id: 'sto',
      title: 'ŠTO?',
      content: 'Pozivamo Vas da iskažete interes za uvođenje optičke mreže i u vaše zgrade. Uvođenje optike za stanare je BESPLATNO. Uvođenja optike i izvođenje radova su naš trošak. Ostvarite dodatne uštede na povoljnijoj cijeni usluge interneta. Bez ugovorne obaveze.'
    },
    {
      id: 'kada',
      title: 'KADA?',
      content: 'Pozivamo vas da nam se odmah javite na 098 535 333 ukoliko ste zainteresirani za uvođenje optike i u vašu stambenu zgradu/stan. Kako bismo mogli planirati realizaciju projekta potrebno je da nas što prije nazovete na naš broj telefona i iskažete svoj interes za optičku mrežu ili uputite predstavnika stanara da nam se javi radi sastanka i prezentacije projekta. S izvođenjem radova krećemo odmah po prikupljenim zahtjevima.'
    },
    {
      id: 'gdje',
      title: 'GDJE?',
      content: 'Stambene zgrade u Gospiću koje nisu pokrivene optičkom mrežom.'
    },
    {
      id: 'zasto',
      title: 'ZAŠTO?',
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Stambene zgrade se nalaze u sivim zonama, a time nisu predviđene za skoro uvođenje optike.</li>
          <li>Stanje instalacija u stambenim zgradama loše je kvalitete, što značajno utječe i na kvalitetu interneta.</li>
          <li>Optika je najnovija tehnologija koja ima brojne prednosti, jer nudi puno veću stabilnost i veće brzine interneta, a sve po istoj ili povoljnijoj cijeni od postojeće.</li>
        </ul>
      )
    },
    {
      id: 'kako',
      title: 'KAKO?',
      content: (
        <div className="space-y-4">
          <p>Sad je pravo vrijeme kako biste uhvatili svoj priključak na brzine budućnosti. Nazovite nas kako biste dobili detaljne informacije i upute za podnošenje zahtjeva.</p>
          <p>Mi ćemo po iskazivanju interesa izgraditi optičku mrežu u vašem kvartu - zgradi o našem trošku. Nakon izgradnje možete pozvati vaše postojeće telekom operatere da vam pruže uslugu preko optičke mreže.</p>
          <p>Također se možete odlučiti i za usluge našeg GSWISP interneta, po istoj ili čak povoljnijoj cijeni nego internet koji imate sada, a kod nas nemate ugovorne obaveze.</p>
        </div>
      )
    }
  ];

  const handleSectionChange = (sectionId: string) => {
    if (isTransitioning || sectionId === activeSection) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSection(sectionId);
      setIsTransitioning(false);
    }, 300); // Match this with the CSS transition duration
  };

  const currentSection = sections.find(section => section.id === activeSection);

  return (
    <div className="min-h-screen bg-background">
      <Section className="pt-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 space-y-4">
            <AnimatedButton onClick={handleBack}>
              Povratak na početnu
            </AnimatedButton>

            {/* Section Navigation */}
            <div className="flex flex-wrap gap-2 justify-center bg-card/80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleSectionChange(section.id)}
                  className={`
                    px-4 py-2 rounded-lg font-bold text-lg transition-all duration-200
                    ${activeSection === section.id
                      ? 'bg-primary text-primary-foreground scale-105'
                      : 'bg-card hover:bg-primary/10 text-foreground'
                    }
                  `}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>

          <Card className="p-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div
                className={`transition-opacity duration-300 ${
                  isTransitioning ? 'opacity-0' : 'opacity-100'
                }`}
              >
                {currentSection && (
                  <div className="space-y-4">
                    {activeSection !== 'intro' && (
                      <h2 className="text-2xl font-bold mb-4 text-foreground">
                        {currentSection.title}
                      </h2>
                    )}
                    <div className="text-lg text-muted-foreground">
                      {currentSection.content}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 text-center">
              <AnimatedButton onClick={handleBack}>
                Povratak na početnu
              </AnimatedButton>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
}