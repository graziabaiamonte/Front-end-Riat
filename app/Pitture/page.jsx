import Image from "next/image";
import Head from "next/head";

export default function Pitture() {
    return (
    <>
     <Head>
        <meta name="description" content="Pitture e Smalti professionali - Riat Archidecor, Alcamo" />
        <meta name="keywords" content="pitture, smalti, soluzioni sostenibili" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Pitture e Smalti professionali - Riat Archidecor, Alcamo" />
        <meta property="og:description" content="Palette di soluzioni che combinano estetica e resistenza per risultati eccezionali." />
        <meta property="og:image" content="/imgPitture/pitt.webp" />
        <meta property="og:url" content="https://www.riatarchidecor.it/Pitture/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pitture e Smalti professionali - Riat Archidecor, Alcamo" />
        <meta name="twitter:description" content="Palette di soluzioni che combinano estetica e resistenza per risultati eccezionali." />
        <meta name="twitter:image" content="/imgPitture/pitt.webp" />

        <title>Pitture e Smalti professionali - Riat Archidecor, Alcamo</title>
      </Head>

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
      <Image src="/imgPitture/logo-oikos.webp" width={200} height={200} alt="logo partner oikos"
      className="mt-[3%] 2xl:mt-[1%] "
      />
     </div>

     {/* PRIMA SEZIONE */}
     <div className="h-[70vh] md:h-[100vh] w-full px-4 lg:px-12 flex gap-6 md:gap-0 flex-col-reverse md:flex-row justify-center items-center relative">
        <div className="w-[90%] lg:w-[50%] flex items-end">
          <p className="fontSecondary text-text w-full lg:ml-[30%] text-right text-sm md:text-xl">
          Scopri la brillantezza e la resistenza delle nostre pitture, progettate per offrire finiture 
          impeccabili e durature, perfezionando ogni superficie con un tocco di eleganza.
          </p>
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
     <div className="h-[70vh] md:h-[100vh] w-full px-4 lg:px-12 flex gap-6 md:gap-0 flex-col-reverse md:flex-row justify-center items-center relative">
        <div className="w-[90%] lg:w-[50%] flex justify-center mx-[36px]">
          <Image src="/imgPitture/pitture.webp" width={800} height={800} alt="foto dell'azienda"
           className="rounded-[36px] object-cover w-[600px] height-[500px] 2xl:w-[800px] 2xl:h-[600px]"
          />
        </div>
        <div className="w-[90%] lg:w-[50%] flex">
          <p className="fontSecondary text-text w-full mr-[10%] lg:mr-[40%] text-left text-sm md:text-xl">
           Che tu stia rinnovando casa, decorando un ufficio o completando un progetto di grande scala, i nostri smalti 
           sono la scelta ideale per un risultato professionale e duraturo. Con i nostri prodotti, il tuo progetto avrà 
           quel tocco in più che fa la differenza.
          </p>
        </div>
        <div className="bg-pink w-full h-[40px] absolute bottom-[35%] lg:bottom-[20%] 2xl:bottom-[30%] -z-10"></div>
     </div>
    </>
    );
  }