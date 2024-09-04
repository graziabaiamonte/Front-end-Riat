import ContattiClient from "../components/ContattiClient";
import Head from "next/head";

export default async function Contatti() {
  return (
    <>
      <Head>
        <meta name="description" content="Corsi per professionisti e appassionati" />
        <meta name="keywords" content="corsi, formazione, professionisti, appassionati, alcamo, riat" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Corsi di formazione ed Eventi - Riat Archidecor" />
        <meta property="og:description" content="Corsi per professionisti e appassionati" />
        <meta property="og:image" content="/imgCorsi/formazione.webp" />
        <meta property="og:url" content="https://www.riatarchidecor.it/Formazione/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contatti - Riat Archidecor" />
        <meta name="twitter:description" content="Corsi per professionisti e appassionati" />
        <meta name="twitter:image" content="/imgCorsi/formazione.webp" />

        <title>Corsi di Formazione - Riat Archidecor, Alcamo</title>
      </Head>
      <ContattiClient/>
    </>
  );
}
