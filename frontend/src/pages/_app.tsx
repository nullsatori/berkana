import "@/styles/globals.scss";
import "@/styles/header.scss";
import "@/styles/index-page/background-slider.scss";
import "@/styles/index-page/about.scss";
import "@/styles/index-page/video.scss";
import "@/styles/index-page/prices.scss";
import "@/styles/index-page/partners.scss";
import "@/styles/footer.scss";
import "@/styles/index-page/events.scss";
import "@/styles/index-page/agro-video.scss";
import "@/styles/menu.scss";
import "@/styles/index-page/embla-carousel.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
