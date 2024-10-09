import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: 'Elementi Decorativi, Riat Archidecor, Alcamo',
  description: 'Decorazioni per pareti e abbellimenti',
  openGraph: {
    title: 'Elementi Decorativi, Riat Archidecor, Alcamo',
    description: 'Decorazioni per pareti e abbellimenti',
    url: 'https://www.riatarchidecor.it/ElementiDecorativi', 
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
    title: 'Elementi Decorativi, Riat Archidecor, Alcamo',
    description: 'Decorazioni per pareti e abbellimenti',
    image: 'https://www.riatarchidecor.it/wp/wp-content/uploads/2024/07/favignana4.jpg', 
  },
  robots: {
    index: true,
    follow: true
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'elementi decorativi, decorazioni pareti, alcamo, riat'
    },
    {
      name: 'author',
      content: 'Riat Archidecor'
    }
  ]
};


export default function ElementiDecorativi() {
    return (
    <>
     {/* HERO */}
     <div className="bg-decorativiHero text-white h-[100vh] imgBackground flex flex-col justify-center">
        <div className="w-full lg:px-0 h-[100vh] flex flex-col justify-end md:justify-center items-center md:items-start relative">
          <h1 className="fontPrimary md:w-[70%] text-left  bg-green bg-opacity-75 p-6 text-base lg:text-3xl mt-[20%]">
          <span className="block uppercase text-lg lg:text-5xl">
            Elementi Decorativi </span>
            <span>Esplora la bellezza del design e lascia che ogni angolo della tua casa parli di te</span>
          </h1>
          <div className="h-[40px] w-full "></div>
          <div className="bg-red bg-opacity-55 h-[40px] w-full absolute -bottom-[2%]  "></div>
        </div>
     </div>
    

     {/* SEZIONE LOGO PARTNER*/}
     <div className="h-[50vh] md:h-[70vh] flex flex-col justify-center items-center px-4 lg:px-12 ">
        <h2 className="fontPrimary w-full lg:w-[40%] text-text text-base lg:text-xl 2xl:text-2xl text-center mb-4">
        Scopri la magia dei nostri elementi decorativi, realizzati con la qualità garantita dal nostri partner Noel & Marquet e Affreschi e Affreschi
        </h2>
        <div className="flex gap-[10%] flex-col md:flex-row ">
           <Link target="_blank" rel="noopener noreferrer" href="https://noel-marquet.it/architects/">
              <Image src="/imgDecorativi/noel-logo.webp" width={200} height={200} alt="logo partner oikos"/>
           </Link>

            <Link  target="_blank" rel="noopener noreferrer" href="https://www.infoaffreschi.com/">
                <Image src="/imgPitture/affreschiLogo.png" width={200} height={200} alt="logo partner Affreschi & Affreschi"
                className="mt-[3%] 2xl:mt-[1%] "
                />
              </Link>
        </div>
       
     </div>

     {/* SEZIONE FOTO PICCOLE DESTRA */}
     
     {/* mobile */}
     <div className="md:hidden flex flex-col gap-1">
        <div>
          <Image src="/imgFiniture/finitt1.webp" width={800} height={800} alt="immagine applicazione stucchi"
            className="object-cover h-full w-full"
          />
        </div>
        <div className=" h-[13px] bg-pink"></div>
        <div className="flex gap-1 w-full">
          <Image src="/imgDecorativi/orac.webp" className="flex-1" width={100} height={100} alt="immagine applicazione stucchi"/>
          <Image src="/imgDecorativi/orac3.webp" className="flex-1" width={100} height={100} alt="immagine applicazione stucchi"/>
          <Image src="/imgDecorativi/orac4.webp" className="flex-1" width={100} height={100} alt="immagine applicazione stucchi"/>
        </div>
      </div>

     {/* desktop */}
     <div className="hidden md:flex w-full h-full">
      {/* foto grande con dettaglio */}
      <div className="flex flex-col gap-2 w-[80%]">
        <div className="w-full">
          <Image src="/imgFiniture/finitt1.webp" width={800} height={800} alt="immagine elementi decorativi"
          className=" object-cover w-[80vw] h-[95vh]"
          />
        </div>
        <div className="bg-pink h-[20px] lg:h-[40px]"></div>
      </div>

      {/* foto piccole */}
      <div className="w-[20%] flex flex-col gap-1 justify-center items-center">
        <Image src="/imgDecorativi/orac.webp" className="flex-1" width={250} height={200} alt="immagine elementi decorativi"/>
        <Image src="/imgDecorativi/orac3.webp" className="flex-1" width={250} height={200} alt="immagine elementi decorativi"/>
        <Image src="/imgDecorativi/orac4.webp" className="flex-1" width={250} height={200} alt="immagine elementi decorativi"/>
      </div>
     </div>

     {/* SEZIONE LOGO PARTNER*/}
     <div className="h-[50vh] md:h-[70vh] flex flex-col justify-center items-center px-4 lg:px-12 ">
        <h2 className="fontPrimary w-full lg:w-[40%] text-text text-base lg:text-xl 2xl:text-2xl text-center mb-4">
        La bellezza prende forma con i nostri dettagli ornamentali, realizzati in collaborazione con Orac, sinonimo di eccellenza.
        </h2>
        <Link target="_blank" rel="noopener noreferrer" href="https://www.oracdecor.com/it_it/">
            <Image src="/imgDecorativi/orac-logo.webp" width={100} height={100} alt="logo partner Orac"/>
        </Link>
        
     </div>

      {/* SEZIONE FOTO PICCOLE SINISTRA */}
      
      {/* mobile */}
      <div className="md:hidden flex flex-col gap-1">
        <div>
          <Image src="/imgFiniture/finit22.webp" width={800} height={800} alt="immagine applicazione stucchi"
            className="object-cover h-full w-full"
          />
        </div>
        <div className=" h-[13px] bg-green bg-opacity-75 -mt-2"></div>
        <div className="flex gap-1 w-full">
          <Image src="/imgDecorativi/orac5.webp" className="flex-1" width={100} height={100} alt="immagine applicazione stucchi"/>
          <Image src="/imgDecorativi/decor.webp" className="flex-1" width={100} height={100} alt="immagine applicazione stucchi"/>
          <Image src="/imgDecorativi/orac5.webp" className="flex-1" width={100} height={100} alt="immagine applicazione stucchi"/>
        </div>
      </div>

      {/* desktop */}
      <div className="hidden md:flex w-full">
        
         {/* foto piccole */}
         <div className="w-[20%] h-[80vh] flex flex-col justify-center items-center">
          <Image src="/imgDecorativi/orac5.webp" width={250} height={200} alt="immagine elementi decorativi"
          className=" h-[33%] "
          />
          <Image src="/imgDecorativi/decor.webp" width={250} height={200} alt="immagine elementi decorativi"
           className="h-[33%]"
          />
          <Image src="/imgDecorativi/orac5.webp" width={250} height={200} alt="immagine elementi decorativi"
           className=" h-[33%]"
          />
        </div>
        
        {/* foto grande con dettaglio */}
        <div className="flex flex-col w-[80%]">
          <div className="w-full ">
            <Image src="/imgFiniture/finit22.webp" width={800} height={700} alt="immagine elementi decorativi"
            className="w-[80vw] h-[80vh] object-cover "
            />
          </div>
          <div className="bg-green bg-opacity-75 h-[20px] lg:h-[40px]  lg:-mt-4"></div>
        </div>
     </div>
    </>
    );
  }