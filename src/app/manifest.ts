import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Manish Kumar Kushwaha - Portfolio',
    short_name: 'Manish Kushwaha',
    description: 'Backend Software Engineer with 5+ years experience in large-scale financial systems',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/logo.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
