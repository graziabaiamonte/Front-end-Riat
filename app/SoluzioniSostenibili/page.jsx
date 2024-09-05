import Image from "next/image";

export const metadata = {
  title: 'Soluzioni Sostenibli - Riat Archidecor, Alcamo',
  description: 'Il punto di riferimento per i professionisti della riqualificazione, del restauro e della decorazione architettonica',
  openGraph: {
    title: 'Soluzioni Sostenibli - Riat Archidecor, Alcamo',
    description: 'Il punto di riferimento per i professionisti della riqualificazione, del restauro e della decorazione architettonica',
    url: 'https://www.riatarchidecor.it/SoluzioniSostenibili', 
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
    title: 'Soluzioni Sostenibli - Riat Archidecor, Alcamo',
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
      content: 'soluzioni sostenibili, ecologia, materiali sostenibili'
    },
    {
      name: 'author',
      content: 'Riat Archidecor'
    }
  ]
};

export default function SoluzioniSostenibili() {
    return (
    <>
     {/* HERO */}
     <div className="bg-sostenibiliHero text-white h-[100vh] imgBackground flex flex-col justify-center">
        <div className="w-full  lg:px-0 h-[100vh]   flex flex-col justify-end md:justify-center items-center md:items-start relative">
          <h1 className="fontPrimary  md:w-[70%] text-left  bg-green bg-opacity-75 p-6 text-base lg:text-3xl mt-[20%]">
          <span  className="uppercase block text-lg lg:text-5xl">Soluzioni Sostenibili per l'edilizia Sostenibile</span>
          ti aiutiamo a costruire con consapevolezza e a ridurre l’impronta ecologica dei tuoi progetti.
          </h1>
          <div className="h-[40px] w-full "></div>
          <div className="bg-red bg-opacity-55 h-[40px] w-full absolute -bottom-[2%]"></div>
        </div>
     </div>
     

     {/* SEZIONE LOGO */}
     <div className="h-[50vh] md:h-[70vh] flex flex-col justify-center items-center px-4 lg:px-12 ">
      <h2 className="fontPrimary w-full lg:w-[40%] text-text text-base lg:text-xl 2xl:text-2xl text-center mb-2">
      Con le nostre soluzioni sostenibili per l'edilizia, realizzate grazie alla partnership con Cabrè, 
      potrai creare edifici ecologici e all'avanguardia, rispettando l'ambiente e migliorando la qualità della vita
      </h2>
      <Image src="/imgSostenibili/cabre-logo.webp" width={150} height={150} alt="logo partner oikos"
      />
     </div>

     {/* SEZIONE IMMAGINE FULL */}
     <div className="bg-sostenibiliInner text-white h-[80vh] imgBackground flex flex-col justify-center items-center relative">
        <div className="w-full py-8 px-4 lg:px-20 h-[100vh] lg:w-[70%] flex flex-col justify-center items-center">
        </div>
        <div className="bg-pink h-[40px] w-full absolute -bottom-4"></div>
     </div>
     
     {/* PRIMA SEZIONE */}
     <div className="h-[70vh] md:h-[100vh] w-full px-4 lg:px-12 flex gap-6 md:gap-0 flex-col md:flex-row justify-center items-center relative">
        <div className="w-[90%] lg:w-[50%] flex items-end">
          <p className="fontSecondary text-text w-full  lg:ml-[50%] text-right text-sm md:text-xl">
          Scopri la brillantezza e la resistenza delle nostre pitture, progettate per offrire finiture 
          impeccabili e durature, perfezionando ogni superficie con un tocco di eleganza.
          </p>
        </div>

        {/* desktop */}
        <div className=" hidden md:flex w-[90%] lg:w-[50%] gap-1 justify-center mx-[36px]">
          <div className="">
            <Image src="/imgSostenibili/sostenBig.webp" width={800} height={800} alt="foto dell'azienda"
            className="h-full object-cover rounded-tl-[36px] rounded-bl-[36px]"
            />
          </div>
          <div className="flex flex-col gap-1 h-[30%]">
            <Image  src="/imgSostenibili/sosten1.webp" width={300} height={800} alt="foto dell'azienda"
            className="rounded-tr-[36px]"
            />
            <Image  src="/imgSostenibili/sosten2.webp" width={300} height={800} alt="foto dell'azienda"/>
            <Image  src="/imgSostenibili/sosten3.webp" width={300} height={800} alt="foto dell'azienda"
            className="rounded-br-[36px]"
            />
          </div>
        </div>

         {/* mobile */}
         <div className="w-[90%] lg:w-[50%] flex flex-col md:hidden gap-1 justify-center mx-[36px]">
          <div className="">
            <Image src="/imgSostenibili/sostenBig.webp" width={800} height={800} alt="foto dell'azienda"
            className="h-full object-cover "
            />
          </div>
          <div className="flex  gap-1 h-[40%]">
            <Image  src="/imgSostenibili/sosten1.webp" width={100} height={800} alt="foto dell'azienda"
            className="flex-1"
            />
            <Image  src="/imgSostenibili/sosten2.webp" width={100} height={800} alt="foto dell'azienda"
            className="flex-1"
            />
            <Image  src="/imgSostenibili/sosten3.webp" width={100} height={800} alt="foto dell'azienda"
            className="flex-1"
            />
          </div>
        </div>

        <div className="bg-green hidden md:block w-full h-[40px] absolute bottom-[85%] lg:bottom-[20%] 2xl:bottom-[30%]  -z-10"></div>
     </div>
    </>
    );
  }