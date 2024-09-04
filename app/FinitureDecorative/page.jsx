import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';

export default function FinitureDecorative() {
    return (
    <>
     <Head>
        <meta name="description" content="Finiture Decorative - Di cosa ci occupiamo, Riat Archidecor, Alcamo" />
        <meta name="keywords" content="stucchi professionali, pitture, smalti, sistemi di isolamento termico, elementi decorativi" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Finiture Decorative - Di cosa ci occupiamo, Riat Archidecor, Alcamo" />
        <meta property="og:description" content="Forniamo stucchi professionali, elementi decorativi, pitture e smalti, sistemi di isolamento termico" />
        <meta property="og:image" content="/imgfiniture/finitureHero.webp" />
        <meta property="og:url" content="https://www.riatarchidecor.it/FinitureDecorative/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Finiture Decorative - Di cosa ci occupiamo, Riat Archidecor, Alcamo" />
        <meta name="twitter:description" content="Forniamo stucchi professionali, elementi decorativi, pitture e smalti, sistemi di isolamento termico" />
        <meta name="twitter:image" content="/imgfiniture/finitureHero.webp" />

        <title>Finiture decoratie - Riat Archidecor, Alcamo</title>
      </Head>

    {/* HERO */}
    <div className="bg-finitureHero text-white h-[100vh] imgBackground flex flex-col justify-center">
        <div className="w-full  lg:px-0 h-[100vh]   flex flex-col justify-end md:justify-center items-center md:items-start relative">
          <h1 className="fontPrimary  md:w-[70%] text-left  bg-green bg-opacity-75 p-6 text-base lg:text-3xl mt-[20%]">
          <span className='uppercase block  text-lg lg:text-5xl'>Di cosa ci occupiamo</span>
          Esplora le nostre proposte per un risultato impeccabile che unisce bellezza e prestazioni
          </h1>
          <div className="h-[40px] w-full "></div>
          <div className="bg-red bg-opacity-55 h-[40px] w-full absolute -bottom-[2%]"></div>
        </div>
    </div>

    

    {/* SEZIONE ISOLAMENTO TERMICO */}
    <div className="h-[70vh] lg:h-[100vh] w-full flex gap-2 md:gap-0 flex-col md:flex-row justify-center items-center relative mt-[25%] md:mt-0">
      
      {/* titolo */}
      <div className="w-[90%] lg:w-[50%]  flex flex-col items-end">
        <Link href="/IsolamentoTermico" className="fontPrimary text-text w-full lg:w-[50%] text-right text-sm md:text-xl uppercase">
          Sistemi di <span className='block'>isolamento termico</span>
          </Link>
        <Link href="/IsolamentoTermico"><FontAwesomeIcon icon={faArrowRight} className="w-[30px] h-[50px] text-text"/></Link>
      </div>

      {/* immagine */}
      <div className="w-[90%] lg:w-[40%] h-[40vh] lg:h-[60vh] flex justify-center mx-[36px]">
        <Image src="/imgFiniture/isolamento.webp" width={800} height={800} alt="foto dell'azienda"
        className="rounded-[36px] object-cover w-[100%] h-[100%] " />
      </div>
    </div>

    {/* SEZIONE PITTURE E SMALTI */}
    <div className="h-[70vh] lg:h-[100vh] w-full flex gap-2 md:gap-0 flex-col-reverse md:flex-row justify-center items-center relative">
      
      {/* immagine  */}
      <div className="w-[90%] lg:w-[40%] h-[40vh] lg:h-[60vh] flex justify-center mx-[36px]">
        <Image src="/imgFiniture/pittureSmalti.webp" width={800} height={800} alt="foto dell'azienda"
         className="rounded-[36px] object-cover w-[100%] h-[100%] " />
      </div>

      {/* titolo */}
      <div className="w-[90%] lg:w-[50%] flex flex-col items-start">
        <Link href="/Pitture" className="fontPrimary text-text w-full lg:w-[50%] text-left md:text-left text-sm md:text-xl uppercase">
          Pitture <span className='block'>e Smalti</span></Link>
          <Link href="/Pitture"><FontAwesomeIcon icon={faArrowRight} className="w-[30px] h-[50px] text-text"/></Link>
      </div>
      <div className="bg-pink w-full h-[40px] absolute bottom-[25%] lg:bottom-[25%] 2xl:bottom-[30%] -z-10"></div>
    </div>

    {/* SEZIONE STUCCHI */}
    <div className="h-[70vh] lg:h-[100vh] w-full flex gap-2 md:gap-0 flex-col md:flex-row justify-center items-center relative">
      
      {/* titolo */}
      <div className="w-[90%] lg:w-[50%] flex flex-col justify-end items-end">
        <Link href="/Stucchi" className="fontPrimary text-text w-full lg:w-[50%] text-right  text-sm md:text-xl uppercase">
         <span className='block'>Stucchi</span>Professionali</Link>
         <Link href="/Stucchi"><FontAwesomeIcon icon={faArrowRight} className="w-[30px] h-[50px] text-text"/></Link>
      </div>

      {/* immagine */}
      <div className="w-[90%] lg:w-[40%] h-[40vh] lg:h-[60vh] flex justify-center mx-[36px]">
        <Image src="/imgStucchi/stucchiC_.webp" width={800} height={800} alt="foto dell'azienda"
         className="rounded-[36px] object-cover w-[100%] h-[100%] " />
      </div>
    </div>

    {/* SEZIONE ELEMENTI DECORATIVI */}
    <div className="h-[70vh] lg:h-[100vh] w-full flex gap-2 md:gap-0 flex-col-reverse md:flex-row justify-center items-center relative">
      
      {/* immagine */}
      <div className="w-[90%] lg:w-[40%] h-[40vh] lg:h-[60vh] flex justify-center mx-[36px]">
        <Image src="/imgFiniture/finiture.webp" width={800} height={800} alt="foto dell'azienda" 
        className="rounded-[36px] object-cover w-[100%] h-[100%] " />
      </div>

      {/* titolo */}
      <div className="w-[90%] lg:w-[50%] flex flex-col items-start">
        <Link href="/ElementiDecorativi" className="fontPrimary text-text w-full lg:w-[50%] text-left md:text-left text-sm md:text-xl uppercase">
          Elementi <span className='block'>Decorativi</span></Link>
          <Link href="/ElementiDecorativi"><FontAwesomeIcon icon={faArrowRight} className="w-[30px] h-[50px] text-text"/></Link>
      </div>
      <div className="bg-green w-full h-[40px] absolute bottom-[25%] lg:bottom-[25%] 2xl:bottom-[30%] -z-10"></div>
    </div>
    </>
    );
  }