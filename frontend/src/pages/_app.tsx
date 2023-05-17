import '@/styles/globals.scss'
import '@/styles/header.scss'
import '@/styles/background-slider.scss'
import '@/styles/about.scss'
import '@/styles/video.scss'
import '@/styles/prices.scss'
import '@/styles/partners.scss'
import '@/styles/footer.scss'
import '@/styles/agro-video.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

// todo: управление точками video-agro
// todo: стили для планшетов
// todo: