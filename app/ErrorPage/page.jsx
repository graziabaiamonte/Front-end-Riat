import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Error(){
  return (
    <>
      <Head>
        <title>Error Page</title>
      </Head>
      <div className="h-[90vh] flex flex-col justify-center items-center">
        <h1 className="text-text fontPrimary text-3xl">Si è verificato un errore. Per favore riprova.</h1>
        <FontAwesomeIcon icon={faXmark} className="w-[5%] h-[5%] text-red " />
        <Link href="/FormIscrizione" className="text-text fontPrimary uppercase underline mt-[10%]">Torna indietro</Link>
      </div>
    </>
  );
};
