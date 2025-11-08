import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Rizzer - Your AI Dating Coach',
    short_name: 'Rizzer',
    description: 'Master modern dating with AI-powered conversation starters, personalized date ideas, and intelligent relationship management.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#FE3C72',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
