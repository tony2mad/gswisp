import Section from './ui/Section';
import Card from './ui/Card';

export default function Coverage() {
  return (
    <Section id="pokrivenost" className="bg-white dark:bg-gray-900">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">Područje pokrivenosti</h2>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">Pružamo usluge u Gospiću i okolnim mjestima</p>
      </div>
      
      <div className="mt-12">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <iframe 
            title="GSWISP coverage map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89557.28087071632!2d15.3095991!3d44.5461362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4763706458f29765%3A0x400ad50862bb3c0!2sGospi%C4%87!5e0!3m2!1sen!2shr!4v1677667547312!5m2!1sen!2shr"
            width="100%"
            height="600"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Gospić</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Kompletna pokrivenost grada i prigradskih naselja</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Okolna naselja</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Smiljan, Žabica, Lički Novi, Mušaluk, Smiljansko Polje, Budak, Kaniža Gospićka, Podoštra, Novoselo...</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Širenje mreže</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Širenje mreže u tijeku - kontaktirajte nas za provjeru dostupnosti</p>
          </Card>
        </div>
      </div>
    </Section>
  );
}