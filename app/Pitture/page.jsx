import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: 'Pitture e Smalti professionali - Riat Archidecor, Alcamo',
  description: 'Palette di soluzioni che combinano estetica e resistenza per risultati eccezionali.',
  openGraph: {
    title: 'Pitture e Smalti professionali - Riat Archidecor, Alcamo',
    description: 'Palette di soluzioni che combinano estetica e resistenza per risultati eccezionali.',
    url: 'https://www.riatarchidecor.it/Pitture', 
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
    title: 'Pitture e Smalti professionali - Riat Archidecor, Alcamo',
    description: 'Palette di soluzioni che combinano estetica e resistenza per risultati eccezionali.',
    image: 'https://www.riatarchidecor.it/wp/wp-content/uploads/2024/07/favignana4.jpg', 
  },
  robots: {
    index: true,
    follow: true
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'riqualificazione, restauro, decorazione architettonica, Alcamo, pitture, smalti, soluzioni sostenibili'
    },
    {
      name: 'author',
      content: 'Riat Archidecor'
    }
  ]
};

export default function Pitture() {
    return (
    <>

     {/* HERO */}
     <div className="bg-pittureHero text-white h-[100vh] imgBackground flex flex-col justify-center">
        <div className="w-full  lg:px-0 h-[100vh]   flex flex-col justify-end md:justify-center items-center md:items-start relative">
          <h1 className="fontPrimary  md:w-[70%] text-left  bg-green bg-opacity-75 p-6 text-base lg:text-3xl mt-[20%]">
          <span className="uppercase block text-lg lg:text-5xl">Pitture e Smalti</span>
          palette di soluzioni che combinano estetica e resistenza per risultati eccezionali
          </h1>
          <div className="h-[40px] w-full "></div>
          <div className="bg-red bg-opacity-55 h-[40px] w-full absolute -bottom-[2%]  "></div>
        </div>
     </div>
     

     {/* SEZIONE LOGO */}
     <div className="h-[20vh] md:h-[30vh] mt-[15%] md:mt-[10%]  flex flex-col justify-center items-center px-4 lg:px-12 ">
      <h2 className="fontPrimary w-full lg:w-[40%] text-text text-base lg:text-xl 2xl:text-2xl text-center">
        Illumina i tuoi spazi con i nostri prodotti di eccellenza, realizzati con la qualità certificata di OIKOS
      </h2>
      <Link  target="_blank" rel="noopener noreferrer" href="https://oikos-group.it/it-IT">
        <Image src="/imgPitture/logo-oikos.webp" width={200} height={200} alt="logo partner oikos"
        className="mt-[3%] 2xl:mt-[1%] "
        />
      </Link>
      
     </div>

     {/* PRIMA SEZIONE */}
     <div className="md:h-[100vh] w-full px-4 lg:px-12 flex gap-6 md:gap-0 flex-col-reverse md:flex-row justify-center items-center relative">
        <div className="w-[90%] lg:w-[50%] flex flex-col items-end">
          <p className="fontSecondary text-text pt-[5%] w-full lg:ml-[30%] text-right text-sm md:text-xl">
          Scopri la brillantezza e la resistenza delle nostre pitture, progettate per offrire finiture 
          impeccabili e durature, perfezionando ogni superficie con un tocco di eleganza.
          </p>
          <Link  target="_blank" rel="noopener noreferrer" href="https://www.infoaffreschi.com/">
            <Image src="/imgPitture/affreschiLogo.png" width={200} height={200} alt="logo partner Affreschi & Affreschi"
            className="mt-[3%] 2xl:mt-[1%] "
             />
          </Link>
        </div>
        <div className="w-[90%] lg:w-[50%] flex justify-center mx-[36px]">
          <Image src="/imgPitture/pitture1.webp" width={800} height={800} alt="foto dell'azienda"
           className="rounded-[36px] object-cover w-[600px] height-[500px] 2xl:w-[800px] 2xl:h-[600px]"
          />
        </div>
        <div className="bg-pink w-full h-[40px] absolute bottom-[45%] lg:bottom-[20%] 2xl:bottom-[30%]  -z-10"></div>
     </div>

     {/* SEZIONE IMMAGINE FULL */}
     <div className="bg-pittureInner text-white h-[100vh] imgBackground flex flex-col justify-center items-center relative">
        <div className="w-full py-8 px-4 lg:px-20 h-[100vh] lg:w-[70%] flex flex-col justify-center items-center">
          <h2 className="fontPrimary text-xl lg:text-3xl text-center uppercase lg:w-[50%]">
          Trasforma ogni superficie in un'opera d'arte
          </h2>
        </div>
     </div>
     {/* <div className="bg-red bg-opacity-55 h-[40px] w-full absolute -bottom-4"></div> */}

     {/* SECONDA SEZIONE */}
     <div className="h-[100vh] md:h-[100vh] w-full px-4 lg:px-12 flex gap-6 md:gap-0 flex-col-reverse md:flex-row justify-center items-center relative">
        <div className="w-[90%] lg:w-[50%] flex justify-center mx-[36px]">
          <Image src="/imgPitture/pitture.webp" width={800} height={800} alt="foto dell'azienda"
           className="rounded-[36px] object-cover w-[600px] height-[500px] 2xl:w-[800px] 2xl:h-[600px]"
          />
        </div>
        <div className="w-[90%] lg:w-[50%] flex flex-col">
          <p className="fontSecondary text-text w-full mr-[10%] lg:mr-[40%] text-left text-sm md:text-xl">
          Che tu stia rinnovando la tua casa, decorando un ufficio o completando un progetto su larga scala, i nostri smalti sono la scelta ideale per ottenere un risultato professionale e duraturo. Offriamo esclusivamente prodotti di alta qualità, come quelli di Sigma Coatings, per i quali selezioniamo solo le soluzioni a base acquosa, garantendo finiture eccellenti e rispettose dell'ambiente. Con i nostri prodotti, il tuo progetto avrà quel tocco distintivo che fa davvero la differenza.
          </p>
          <Link  target="_blank" rel="noopener noreferrer" href="https://www.sigmacoatings.it/">
            <Image src="/imgPitture/sigmaLogo.png" width={200} height={200} alt="logo partner Sigma coatings"
            className="mt-[3%] 2xl:mt-[1%] "
             />
          </Link>
        </div>
        <div className="bg-pink w-full h-[40px] absolute bottom-[35%] lg:bottom-[20%] 2xl:bottom-[30%] -z-10"></div>
     </div>
    </>
    );
  }