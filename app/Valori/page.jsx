import Image from "next/image";

export const metadata = {
  title: 'I nostri valori - Riat Archidecor, Alcamo',
  description: 'Il punto di riferimento per i professionisti della riqualificazione, del restauro e della decorazione architettonica',
  openGraph: {
    title: 'I nostri valori: sostenibilià, design e creatività, qualità',
    description: 'Il punto di riferimento per i professionisti della riqualificazione, del restauro e della decorazione architettonica',
    url: 'https://www.riatarchidecor.it/Valori', 
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
    title: 'I nostri valori: sostenibilià, design e creatività, qualità',
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
      content: 'riqualificazione, restauro, decorazione architettonica, Alcamo, valori, in cosa crediamo, qualità, materiali sostenibili, ecologia, design, creatività'
    },
    {
      name: 'author',
      content: 'Riat Archidecor'
    }
  ]
};


export default function Valori() {
    return (
    <>
    {/* HERO */}
    <div className="bg-valoriHero text-white h-[100vh] imgBackground flex flex-col justify-end items-center relative">
        <div className="w-full py-8 px-4 bg-red h-[30px] mb-[5%] flex flex-col justify-center items-center">
          <h1 className="fontPrimary   text-xl lg:text-2xl 2xl:text-4xl py-1 uppercase text-center">
         Ciò che ci distingue</h1>
        </div>
      </div>
      

    {/* ECOLOGIA */}
    <div className="h-[100vh] w-full flex gap-12 md:gap-0 flex-col md:flex-row justify-center items-center relative">
    <div className="w-[90%] lg:w-[50%] flex justify-center mx-[36px]">
      <Image src="/imgValori/ecol.webp" width={800} height={800} alt="foto dell'azienda"
       className="rounded-[36px] object-cover w-[600px] height-[500px] 2xl:w-[800px] 2xl:h-[600px]"
      />
    </div>
    <div className="w-[90%] lg:w-[50%] text-text">
      <h3 className="lg:text-xl mb-2 uppercase fontPrimary">Ecologia</h3>
      <h4 className="w-full lg:w-[70%] text-left md:text-left 2xl:mr-80 text-sm md:text-xl fontSecondary">La sostenibilità e 
      l'ecologia sono valori centrali che guidano ogni nostra scelta. Offriamo stucchi, pitture, smalti e 
      sistemi di isolamento realizzati con materiali ecocompatibili e processi produttivi a basso impatto ambientale. 
      Crediamo fermamente che la qualità debba andare di pari passo con il rispetto per il pianeta. Per questo, 
      investiamo continuamente in ricerca e innovazione per sviluppare soluzioni che contribuiscano a un futuro 
      più verde e sostenibile.</h4>
    </div>
    <div className="bg-pink  md:block w-full h-[40px] absolute bottom-[55%] lg:bottom-[10%] 2xl:bottom-[25%] -z-10"></div>
  </div>

    {/* DESIGN E CREATIVITA' */} 
    <div className="h-[100vh] bg-materEcol imgBackground text-white">
      <div className=" h-[70%] lg:h-[80%] bg-green bg-opacity-50 flex flex-col-reverse md:flex-row justify-center">
          <div className=" w-[90%] lg:w-[50%] flex justify-end items-center my-2 lg:my-24">
            <h4 className="fontSecondary text-sm lg:text-xl text-right w-[90%] lg:w-[60%] pr-4 lg:pr-12">
            Crediamo che ogni ambiente meriti un tocco di bellezza e originalità. Per questo, 
            il design e la creatività sono al centro delle nostre proposte. Le nostre pitture, 
            smalti e stucchi non sono solo funzionali, ma anche esteticamente ispirati, per trasformare gli spazi 
            in veri e propri capolavori.
            </h4>
          </div>
          <div className="md:hidden w-[90%] lg:w-[50%] my-24 flex justify-start items-center">
            <h3 className="fontPrimary text-left text-xl lg:text-2xl pl-12 uppercase">Design <span className=" block">e Creativita'</span></h3>
          </div>
          <div className=" w-[90%] lg:w-[50%] my-24 "></div>
      </div>
      <div className="h-[2%]"></div>
      <div className="h-[5%] bg-pink bg-opacity-75"></div>
      
      {/* nascosto in mobile */}
      <div className="hidden md:flex lg:mt-4 px-4 lg:px-12  justify-end w-full">
        <div className="w-[50%]"></div>
        <div className="w-[50%] flex justify-start">
          <h3 className="fontPrimary text-left text-xl lg:text-2xl pl-12 uppercase">Design e Creativita'</h3>
        </div>
      </div>
      
    </div>

    {/* MATERIALI */}
    <div className="h-[100vh] w-full flex gap-12 md:gap-0 flex-col-reverse md:flex-row justify-center items-center relative">
    <div className="w-[90%] lg:w-[50%] text-text">
      <h3 className="lg:text-xl lg:text-right uppercase fontPrimary mb-2">Qualita' dei materiali</h3>
      <h4 className=" lg:ml-[30%] text-left md:text-right text-sm md:text-xl 2xl:ml-80 fontSecondary">Ogni prodotto che offriamo è frutto di 
      un'attenta selezione e di rigorosi controlli, per garantire prestazioni superiori e una lunga durata. 
      Siamo impegnati a fornire soluzioni all'avanguardia che soddisfino le esigenze dei nostri clienti, combinando 
      innovazione, sostenibilità e resistenza.Affidati alla nostra esperienza e professionalità per valorizzare al meglio 
      i tuoi progetti.</h4>
    </div>
    <div className="w-[90%] lg:w-[50%] h-[40%] md:h-[60%] flex justify-center mx-[36px]">
      <Image src="/imgValori/valori.jpg" width={800} height={800} alt="foto dell'azienda"
      className="rounded-[36px] object-cover w-[600px] height-[500px] 2xl:w-[800px] 2xl:h-[600px]"
      />
    </div>
    <div className="bg-pink md:block w-full h-[40px] absolute bottom-[55%] md:bottom-[10%] 2xl:bottom-[25%] -z-10"></div>
  </div>
    </>
    );
  }