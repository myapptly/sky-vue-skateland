import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sky-Vue Skateland',
    short_name: 'Sky-Vue',
    description: 'Sky-Vue Skateland in Rocky Mount, NC',
    start_url: '/',
    display: 'standalone',
    background_color: '#1d4ed8',
    theme_color: '#1d4ed8',
    icons: [
      {
        src: '/sky-vue-icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/sky-vue-icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
} 
