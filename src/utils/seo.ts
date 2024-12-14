export function generateMetaTags(config: {
  title: string;
  description: string;
  url: string;
  image?: string;
}) {
  return {
    title: `${config.title} | GSWISP Internet`,
    meta: [
      {
        name: 'description',
        content: config.description
      },
      {
        property: 'og:title',
        content: config.title
      },
      {
        property: 'og:description',
        content: config.description
      },
      {
        property: 'og:url',
        content: config.url
      },
      {
        property: 'og:image',
        content: config.image || 'https://gswisp.net/og-image.jpg'
      }
    ]
  };
}