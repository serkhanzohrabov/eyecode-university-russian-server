import "@/app/global.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Header } from "@/widgets/header";
import Container from "@/Components/organisms/Containers/container/Container";
import YandexMetrika from "@/entities/yandex-metrics/yandex-metrics";
import SupportChat from "@/entities/support/support";
import { Analytics } from "@vercel/analytics/next";


export const metadata = {
  title: "EyeCode University",
  description: "EyeCode University - это университет нового поколения. Здесь нет потока. Есть ты, твой наставник и результат. Мы обучаем так, как хотели бы учиться сами.",
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "It Courses",
      "name": "EyeCode university",
      "url": "https://www.eyecodeuniversity.ru",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Russia",
        "addressLocality": "Russia",
        "addressCountry": "RU"
      },
      "telephone": "+7 928 352 65 84"
    }),
  },
    icons: {
      icon:'/favicon.ico',
    }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    
    
        <html  lang="ru">
        <body>
        
          <SupportChat/>
     
          <Container>
               <Header/> 
          </Container>
                                {children}
        <Analytics/>
        <YandexMetrika/>
        <SpeedInsights />
         

       
        </body>
        </html>
   

  );
}
