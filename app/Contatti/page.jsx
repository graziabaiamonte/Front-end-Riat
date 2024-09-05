import ContattiClient from "../components/ContattiClient";

export const metadata = {
  title: 'Riat Archidecor - Alcamo',
  description: 'Il punto di riferimento per i professionisti della riqualificazione, del restauro e della decorazione architettonica',
  openGraph: {
    title: 'Riat Archidecor - Alcamo',
    description: 'Il punto di riferimento per i professionisti della riqualificazione, del restauro e della decorazione architettonica',
    url: 'https://www.riatarchidecor.it/Contatti', 
    images: [
      {
        url: 'https://www.riatarchidecor.it/wp/wp-content/uploads/2024/07/favignana4.jpg', 
        width: 1200,
        height: 630,
        alt: 'Riat Archidecor - Alcamo'
      }
    ],
    siteName: 'Riat Archidecor',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Riat Archidecor - Alcamo',
    description: 'Il punto di riferimento per i professionisti della riqualificazione, del restauro e della decorazione architettonica',
    image: 'https://www.riatarchidecor.it/wp/wp-content/uploads/2024/07/favignana4.jpg', 
  },
  robots: {
    index: true,
    follow: true
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'riqualificazione, restauro, decorazione architettonica, Alcamo'
    },
    {
      name: 'author',
      content: 'Riat Archidecor'
    }
  ]
};


export default async function Contatti() {
  return (
    <>
      <ContattiClient/>
    </>
  );
}
