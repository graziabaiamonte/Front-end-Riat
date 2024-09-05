import PulsanteMenu from "./components/PulsanteMenuHome";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: 'Riat Archidecor - Alcamo',
  description: 'Il punto di riferimento per i professionisti della riqualificazione, del restauro e della decorazione architettonica',
  openGraph: {
    title: 'Riat Archidecor - Alcamo',
    description: 'Il punto di riferimento per i professionisti della riqualificazione, del restauro e della decorazione architettonica',
    url: 'https://www.riatarchidecor.it', 
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


export default function Home() {
  return (
    <>
      {/* HERO */}
      <div className=" w-full text-white h-[100vh] flex flex-col justify-around items-center">
        <video
          autoPlay
          loop
          muted
          controls={false}
          playsInline  // per garantire che il video venga riprodotto in linea, non a schermo intero su dispositivi iOS.
          className="absolute top-0 left-0 min-w-full h-full object-cover"
        >
          <source src="/riat1.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20 z-10"></div>

        {/* Intestazione */}
        <div className="w-full py-8 mt-0  md:mt-40 h-[30vh] lg:h-[50vh] xl:h-[30vh] z-20">
          <div className="bg-green bg-opacity-75 w-[80%]  lg:w-[70%] py-2 lg:py-6">
            <h1 className="fontPrimary uppercase text-lg lg:text-5xl mx-[12px] lg:mx-[36px]">
              <span className="block ">Bellezza e Sostenibilita'</span>
              per il tuo progetto
            </h1>
          </div>
          <div className="mt-4 w-[80%] lg:w-[60%]">
            <h2 className="fontPrimary text-base lg:text-3xl mx-[12px] lg:mx-[36px]">
              Il punto di riferimento per i professionisti della
              riqualificazione, del restauro e della decorazione architettonica
            </h2>
          </div>
        </div>

        {/* Menu esteso */}
        <div className="hidden md:flex justify-center items-center w-full z-20 mt-[5%]">
          <div className="flex w-full justify-around">
            <Link href="/FinitureDecorative" className="flex-1 mr-[2px]">
              <PulsanteMenu
                titolo="Le nostre Soluzioni"
                descrizione="Isolamento termico decorazione pittura e restauro"
              />
            </Link>
            <Link href="/SoluzioniSostenibili" className="flex-1 mr-[2px]">
              <PulsanteMenu
                titolo="Sostenibilita'"
                descrizione="Le migliori tecniche per rispettare l'ambiente"
              />
            </Link>
            <Link href="/ConsulenzaFormazione" className="flex-1 mr-[2px]">
              <PulsanteMenu
                titolo="Consulenza"
                descrizione="Soluzioni personalizzate per realizzare il tuo progetto"
              />
            </Link>
            <Link href="/Formazione" className="flex-1">
              <PulsanteMenu
                titolo="Formazione"
                descrizione="Corsi per professionisti a tutti i livelli"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* SEZIONE AZIENDA */}
      <div className="h-[100vh] w-full flex gap-12 md:gap-0 flex-col md:flex-row justify-center items-center relative">
        <div className="w-[90%] lg:w-[50%] flex justify-center mx-[36px]">
          <Image
            src="/img/home22.webp"
            width={800}
            height={800}
            alt="foto dell'azienda"
            className="rounded-[36px] object-cover w-[500px] height-[500px] 2xl:w-[700px] 2xl:h-[600px]"
          />
        </div>
        <div className="w-[90%] lg:w-[50%]">
          <h3 className="fontPrimary text-text w-full lg:w-[70%] text-right md:text-left text-sm md:text-xl">
            RIAT ARCHI DECOR è eccellenza nel settore dei materiali per
            l’Architettura. Anni di esperienza per offrire soluzioni innovative
            e di alta qualità a imprese e professionisti. Collaboriamo con una
            rete di applicatori e decoratori per aiutarti a raggiungere ogni
            tipo di risultato.
          </h3>
        </div>
        <div className="bg-pink w-full h-[40px] absolute bottom-[55%] lg:bottom-[10%] 2xl:bottom-[30%] -z-10"></div>
      </div>

      {/* SEZIONE MATERIALI ECOLOGICI */}
      <div className="h-[100vh] bg-materEcol imgBackground text-white">
        <div className=" h-[70%] lg:h-[80%] bg-green bg-opacity-50 flex flex-col-reverse md:flex-row justify-center">
          <div className=" w-[90%] lg:w-[50%] flex justify-end items-center my-6 lg:my-24 border-r-4">
            <h4 className="fontPrimary text-sm lg:text-xl text-right w-[90%] lg:w-[60%] pr-4 lg:pr-12">
              Pitture e rivestimenti per interni ed esterni di altissima qualità
              realizzate con materiali naturali per rivoluzionare l’estetica e
              il comfort di ogni ambiente
            </h4>
          </div>
          <div className=" w-[90%] lg:w-[50%] my-24 flex justify-start items-center">
            <h3 className="fontPrimary text-left text-xl lg:text-2xl pl-12">
              MATERIALI ECOLOGICI
            </h3>
          </div>
        </div>
        <div className="h-[15%]"></div>
        <div className="h-[5%]  bg-red"></div>
      </div>

      {/* SEZIONE SUPERFICI SENZA LIMITI */}
      <div className="h-[100vh] w-full flex flex-col-reverse md:flex-row justify-center gap-12 md:gap-0 items-center relative">
        <div className=" w-[90%] lg:w-[50%] flex justify-end items-start md:items-end flex-col gap-2 md:gap-0">
          <h2 className="text-text fontPrimary text-left lg:text-right uppercase text-xl lg:text-2xl mb-4">
            Superfici Senza Limiti
          </h2>
          <h3 className="fontPrimary text-left md:text-right text-text text-sm lg:text-xl w-full lg:w-[60%]">
            Materiali che permettono di riprodurre effetti decorativi di
            superfici come cemento, metallo, legno, marmo, camoscio, tessuto, e
            tanti altri, per soluzioni creative e senza limite.
          </h3>
        </div>
        <div className="w-[90%] md:w-[50%] flex justify-center lg:mx-[36px]">
          <Image
            src="/img/home.webp"
            width={800}
            height={800}
            alt="foto dell'azienda"
            className="rounded-[36px] object-cover w-[500px] height-[500px] 2xl:w-[700px] 2xl:h-[600px]"
          />
        </div>
      </div>

      {/* SEZIONE VALORI */}
      <div className="h-[100vh] bg-homeValori imgBackground text-white">
        <div className="h-[90%] bg-pink bg-opacity-50 flex flex-col justify-center items-center">
          <Link
            href="/Valori"
            className="text-white text-center text-xl lg:text-3xl fontPrimary"
          >
            Scopri i nostri valori
          </Link>
          <Link href="/Valori">
            <FontAwesomeIcon
              icon={faArrowRight}
              className="w-[24px] h-[24px] text-white"
            />
          </Link>
        </div>
        <div className="h-[10%]"></div>
      </div>
    </>
  );
}
