import SezioneImgDestra from "../components/SezioneImgDestra";
import SezioneImgSinistra from "../components/SezioneImgSinistra";
import Head from "next/head";

export default function ConsulenzaFormazione() {
    return (
    <>
    <Head>
        <meta name="description" content="Corsi per professionisti e appassionati" />
        <meta name="keywords" content="corsi, formazione, professionisti, appassionati, alcamo, riat" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Corsi di formazione ed Eventi - Riat Archidecor" />
        <meta property="og:description" content="Corsi per professionisti e appassionati" />
        <meta property="og:image" content="/imgConsulenza/consulenzaa.webp" />
        <meta property="og:url" content="https://www.riatarchidecor.it/ConsulenzaFormazione/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Consulenza e Formazione - Riat Archidecor" />
        <meta name="twitter:description" content="Corsi per professionisti e appassionati" />
        <meta name="twitter:image" content="/imgConsulenza/consulenzaa.webp" />

        <title>Corsi di Formazione e Consulenza - Riat Archidecor, Alcamo</title>
      </Head>

    {/* HERO */}
    <div className="bg-consulenzaHero text-white h-[100vh] imgBackground flex flex-col justify-center">
        <div className="w-full lg:px-0 h-[100vh] flex flex-col justify-end md:justify-center items-center md:items-start relative">
          <h1 className="fontPrimary  md:w-[70%] text-left  bg-green bg-opacity-75 p-6 text-base lg:text-3xl mt-[20%]">
            <span className="uppercase block text-lg lg:text-5xl">Esperti in materiali edilizi e decorazione architettonica</span> 
            <span className="block">per fornirti il meglio delle soluzioni</span> estetiche, tecnologiche ed ecosostenibili.</h1>
            <div className="h-[40px] w-full "></div>
            <div className="bg-red bg-opacity-55 h-[40px] w-full absolute -bottom-[2%]"></div>
        </div>
    </div>
   

    {/* PRIMA SEZIONE (Ti aiutiamo noi!) */}
    <SezioneImgSinistra
      backgroundColor="bg-text"
      ordineImgText="flex-col-reverse md:flex-row"
      showTitle= {true}
      titleColor="text-white"
      title= "Ti aiutiamo noi!"
      text="Cerchi un supporto esperto per i tuoi progetti? Offriamo consulenza tecnica di alta qualità, 
      accompagnandoti in ogni fase del processo per garantire soluzioni efficienti e su misura 
      che rispondano alle tue specifiche esigenze e superino le tue aspettative."
      ordineTitoloTesto="flex-col"
      direzioneTitolo="text-right lg:text-left"
      direzioneTesto="text-right lg:text-left"
      showButton={true}
      buttonText="Contattaci"
      linkButton="/Contatti"
      buttonColor="bg-green"
      textColor="text-white"
      imgSrc="/imgConsulenza/consulenza.webp"
      imgAlt="Immagine Azienda"
      showDettaglio={true}
      dettaglioColor="bg-green"
    />

   {/* SEZIONE CAMPIONATURE */}
   {/* sistemare ordine immagine-testo */}
    <SezioneImgDestra
      backgroundColor="bg-white"
      ordineImgText="flex-col md:flex-row-reverse"
      showTitle= {true}
      title= "Campionature"
      titleColor="text-white"
      text="Offriamo un servizio completo di campionature, permettendoti di valutare 
      la qualità dei nostri prodotti prima dell'acquisto. Potrai testare e confrontare 
      le nostre soluzioni per assicurarti che siano perfettamente adatte alle tue esigenze e 
      garantiscano il massimo della soddisfazione."
      ordineTitoloTesto="flex-col"
      direzioneTitolo="text-left"
      direzioneTesto="text-left"
      showButton={false}
      textColor="text-text"
      imgSrc="/img/imgAzienda.webp"
      imgAlt="Immagine Azienda"
      showDettaglio={true}
      dettaglioColor="bg-pink"
    /> 
    
      {/* SEZIONE FRASE CONTRASTO */}
      <div className="w-full h-[30vh] p-0 m-0 flex justify-center items-center mt-[5%] mb-[20%] lg:mb-[10%]">
        <h3 className="fontPrimary text-text px-2 lg:px-12 2xl:px-[436px]  text-base lg:text-xl 2xl:text-2xl text-center">
        TI CONSIGLIAMO I MIGLIORI PROFESSIONISTI PER REALIZZARE OGNI IDEA DECORATIVA TRAMITE UNA RETE DI PROFESSIONISTI
        APPLICATORI E DECORATORI CHE SI ESPANDE SEMPRE PIU’ GRAZIE ANCHE ALLA NOSTRA FORMAZIONE.
        </h3>
      </div>
  

     {/* SEZIONE CORSI */}
     <SezioneImgSinistra
      backgroundColor="bg-text"
      ordineImgText="flex-col"
      showTitle= {false}
      text="I nostri corsi di formazione offrono un'opportunità unica per approfondire le tue competenze e acquisire 
      nuove conoscenze. Grazie a programmi strutturati e personalizzati, potrai sviluppare le tue abilità professionali 
      e restare aggiornato sulle ultime novità del settore, garantendo un miglioramento concreto e duraturo delle tue capacità."
      ordineTitoloTesto="flex-col"
      direzioneTitolo="text-right lg:text-left"
      direzioneTesto="text-right lg:text-left"
      showButton={true}
      buttonText="Unisciti a noi"
      linkButton="/Formazione"
      buttonColor="bg-red"
      textColor="text-white"
      imgSrc="/imgCorsi/corsiConsulenza.webp"
      imgAlt="Immagine Azienda"
      showDettaglio={false}
    />
    </>
    );
  }
