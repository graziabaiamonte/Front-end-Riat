import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: 'Stucchi Professionali eleganza senza tempo, dettagli sofisticati e finiture impeccabili',
  description: 'Stucchi Professionali eleganza senza tempo, dettagli sofisticati e finiture impeccabili',
  openGraph: {
    title: 'Stucchi Professionali eleganza senza tempo, dettagli sofisticati e finiture impeccabili',
    description: 'Stucchi Professionali eleganza senza tempo, dettagli sofisticati e finiture impeccabili',
    url: 'https://www.riatarchidecor.it/Stucchi', 
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
    title: 'Stucchi Professionali eleganza senza tempo, dettagli sofisticati e finiture impeccabili',
    description: 'Stucchi Professionali eleganza senza tempo, dettagli sofisticati e finiture impeccabili',
    image: 'https://www.riatarchidecor.it/wp/wp-content/uploads/2024/07/favignana4.jpg', 
  },
  robots: {
    index: true,
    follow: true
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'riqualificazione, restauro, decorazione architettonica, Alcamo, stucchi professionali, dettagli, riat, alcamo'
    },
    {
      name: 'author',
      content: 'Riat Archidecor'
    }
  ]
};

export default function Stucchi() {
    return (
    <>
    {/* HERO */}
    <div className="bg-stucchiHero text-white h-[100vh] imgBackground flex flex-col justify-center">
        <div className="w-full  lg:px-0 h-[100vh]   flex flex-col justify-end md:justify-center items-center md:items-start relative">
          <div>
            <h1 className="fontPrimary  md:w-[70%] text-left  bg-green bg-opacity-75 p-6 text-base lg:text-3xl mt-[20%]">
            <span className="block uppercase text-lg lg:text-5xl"> Stucchi Professionali</span>
            eleganza senza tempo, dettagli sofisticati e finiture impeccabili
            </h1>
            <div className="h-[40px] w-full "></div>
            <div className="bg-red bg-opacity-55 h-[40px] w-full absolute -bottom-[2%]"></div>
          </div>
        </div>
     </div>
     

      {/* SEZIONE LOGO PARTNER*/}
      <div className="h-[50vh] md:h-[70vh] flex flex-col justify-center items-center px-4 lg:px-12 ">
        <h2 className="fontPrimary w-full lg:w-[40%] text-text text-base lg:text-xl 2xl:text-2xl text-center mb-4">
          Per finiture perfette, scegli i nostri stucchi di qualità, sviluppati insieme alla rinomata azienda Baixens
        </h2>
        <Link target="_blank" rel="noopener noreferrer" href="https://www.baixens.com/">
            <Image src="/imgStucchi/baixens-logo.webp" width={200} height={200} alt="logo partner oikos"/>
        </Link>
       
      </div>

      {/* SEZIONE FOTO (PICCOLE A SINISTRA) ---immagini cliccabili per ingrandirle?(solo in mobile casomai) */}
      
      {/* mobile */}
      <div className="md:hidden flex flex-col gap-1">
        <div>
          <Image src="/imgStucchi/stucchi.webp" width={800} height={800} alt="immagine applicazione stucchi"
            className="object-cover h-full  w-full"
          />
        </div>
        <div className=" h-[13px] bg-red"></div>
        <div className="flex gap-1 w-full">
          <Image src="/imgStucchi/stucchiA.webp" className="flex-1" width={100} height={100} alt="immagine applicazione stucchi"/>
          <Image src="/imgStucchi/stucchiB.webp" className="flex-1" width={100} height={100} alt="immagine applicazione stucchi"/>
          <Image src="/imgStucchi/stucchiF.webp" className="flex-1" width={100} height={100} alt="immagine applicazione stucchi"/>
        </div>
      </div>
      
      {/* desktop */}
      <div className=" w-full gap-2 hidden md:flex">
        {/* 3 foto */}
        <div className="w-[20%] flex flex-col gap-1">
          <Image src="/imgStucchi/stucchiA.webp"   width={400} height={200} alt="immagine applicazione stucchi"
           className="flex-1 object-cover"
          />
          <Image src="/imgStucchi/stucchiB.webp"   width={400} height={200} alt="immagine applicazione stucchi"
           className="flex-1 object-cover"
          />
          <Image src="/imgStucchi/stucchiF.webp"   width={400} height={200} alt="immagine applicazione stucchi"
           className="flex-1 object-cover"
          />
        </div>

        {/* decoro */}
        <div className="w-[2%] bg-red"></div>

        {/* foto quasi full */}
        <div className="h-[90vh] w-full">
          <Image src="/imgStucchi/stucchi.webp" width={800} height={800} alt="immagine applicazione stucchi"
          className="object-cover h-full w-full"
          />
        </div>
      </div>

      {/* SEZIONE LOGO PARTNER*/}
      <div className="h-[50vh] md:h-[70vh] flex flex-col justify-center items-center px-4 lg:px-12 ">
        <h2 className="fontPrimary w-full lg:w-[40%] text-text text-base lg:text-xl 2xl:text-2xl text-center mb-4">
        Rendi ogni dettaglio unico con i nostri stucchi, frutto della collaborazione con il nostro partner di fiducia, Italcover
        </h2>
        <Link target="_blank" rel="noopener noreferrer" href="https://colorificioitalcover.it/">
            <Image src="/imgStucchi/italcover-logo.webp" width={200} height={200} alt="logo partner Ital Cover"/>
        </Link>
        
      </div>

      {/* SEZIONE FOTO (PICCOLE A DESTRA)*/}
      
      {/* mobile */}
      <div className="md:hidden flex flex-col gap-1">
        <div>
          <Image src="/imgStucchi/stucchiFull2.webp" width={800} height={800} alt="immagine applicazione stucchi"
            className="object-cover h-full w-full"
          />
        </div>
        <div className=" h-[13px] bg-red"></div>
        <div className="flex gap-1 w-full">
          <Image src="/imgStucchi/stucchiA.webp" width={100} height={100} alt="immagine applicazione stucchi"
          className="flex-1 object-cover"
          />
          <Image src="/imgStucchi/stucchiE.webp"  width={100} height={100} alt="immagine applicazione stucchi"
           className="flex-1 object-cover"
          />
          <Image src="/imgStucchi/stucchiF.webp"  width={100} height={100} alt="immagine applicazione stucchi"
           className="flex-1 object-cover"
          />
        </div>
      </div>

      {/* desktop */}
      <div className="hidden md:flex w-full gap-2">
        
        {/* foto quasi full */}
        <div className="h-[90vh] w-full">
          <Image src="/imgStucchi/stucchiFull2.webp" width={800} height={800} alt="immagine applicazione stucchi"
          className="object-cover h-full w-full"
          />
        </div>

        {/* decoro */}
        <div className="w-[2%] bg-red"></div>
        
        {/* 3 foto */}
        <div className="w-[20%] flex flex-col gap-1">
          <Image src="/imgStucchi/stucchiA.webp" width={400} height={200} alt="immagine applicazione stucchi"
           className="flex-1 object-cover"/>
          <Image src="/imgStucchi/stucchiE.webp"  width={400} height={200} alt="immagine applicazione stucchi"
           className="flex-1 object-cover"
          />
          <Image src="/imgStucchi/stucchiF.webp"  width={400} height={200} alt="immagine applicazione stucchi"
           className="flex-1 object-cover"
          />
        </div>
      </div>
    </>
    );
  }