import Image from "next/image";

export const metadata = {
  title: 'Isolamento Termico - Riat Archidecor, Alcamo',
  description: 'Scopri come possiamo aiutarti a mantenere la temperatura ideale e ridurre l’impatto ambientale.',
  openGraph: {
    title: 'Isolamento Termico - Riat Archidecor, Alcamo',
    description: 'Scopri come possiamo aiutarti a mantenere la temperatura ideale e ridurre l’impatto ambientale.',
    url: 'https://www.riatarchidecor.it/IsolamentoTermico', 
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
    title: 'Isolamento Termico - Riat Archidecor, Alcamo',
    description: 'Scopri come possiamo aiutarti a mantenere la temperatura ideale e ridurre l’impatto ambientale.',
    image: 'https://www.riatarchidecor.it/wp/wp-content/uploads/2024/07/favignana4.jpg', 
  },
  robots: {
    index: true,
    follow: true
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'riqualificazione, restauro, decorazione architettonica, Alcamo, isolamento termico, soluzioni sostenibili, green'
    },
    {
      name: 'author',
      content: 'Riat Archidecor'
    }
  ]
};

export default function IsolamentoTermico() {
    return (
    <>
     {/* HERO */}
     <div className="bg-isolamentoHero text-white h-[100vh] imgBackground flex flex-col justify-center">
        <div className="w-full  lg:px-0 h-[100vh]   flex flex-col justify-end md:justify-center items-center md:items-start relative">
          <h1 className="fontPrimary  md:w-[70%] text-left  bg-green bg-opacity-75 p-6 text-base lg:text-3xl mt-[20%]">
          <span className="uppercase block text-lg lg:text-5xl">Sistemi di isolamento termico</span>
          Scopri come possiamo aiutarti a mantenere la temperatura ideale e ridurre l’impatto ambientale.
          </h1>
          <div className="h-[40px] w-full "></div>
          <div className="bg-red bg-opacity-55 h-[40px] w-full absolute -bottom-[2%]  "></div>
        </div>
     </div>
     

     {/* SEZIONE CLAIM */}
     <div className="h-[50vh] flex flex-col justify-center items-center px-4 lg:px-12 ">
      <h2 className="fontPrimary w-full lg:w-[40%] text-text text-base lg:text-xl 2xl:text-2xl text-center">
      Assicura il benessere della tua casa con i nostri sistemi di isolamento termico, frutto della nostra partnership con l’azienda Oikos</h2>
     </div>

     {/* SEZIONE IMMAGINE FULL */}
     <div className="bg-isolamentoInner text-white h-[80vh] imgBackground flex flex-col justify-center items-center relative">
        <div className="w-full py-8 px-4 lg:px-20 h-[100vh] lg:w-[70%] flex flex-col justify-center items-center">
        </div>
        <div className="bg-red h-[40px] w-full absolute -bottom-4 z-100"></div>
     </div>
    

     {/* SECONDA SEZIONE */}
     <div className="h-[70vh] md:h-[100vh] w-full md:mt-[5%] px-4 lg:px-12 flex gap-6 md:gap-0 flex-col-reverse md:flex-row justify-center items-center relative">
        <div className="w-[90%] lg:w-[50%] h-[40vh] lg:h-[60vh] flex justify-center mx-[36px]">
          <Image src="/imgIsolamento/isolamentoo.webp" width={800} height={800} alt="foto dell'azienda"
            className="rounded-[36px] object-cover w-[600px] height-[500px] 2xl:w-[800px] 2xl:h-[600px]"
          />
        </div>
        <div className="w-[90%] lg:w-[50%] flex">
          <p className="fontSecondary px-[10px] text-text w-full  text-left text-sm md:text-xl">
          I nostri sistemi di isolamento termico offrono un'eccellente protezione contro le perdite di calore 
          e il rumore, garantendo efficienza energetica e comfort abitativo superiori, grazie all'innovazione 
          e alla qualità dei materiali selezionati.
          </p>
        </div>
        <div className="bg-green  md:block w-full h-[40px] absolute bottom-[35%]  2xl:bottom-[30%] -z-10"></div>
     </div>
    </>
   
    );
  }