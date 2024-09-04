"use client";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Success() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const sendData = async () => {
      // Recupera i dati dal localStorage
      const storedData = localStorage.getItem('formData');
      const data = storedData ? JSON.parse(storedData) : null;

      if (data) {
        // Determina l'endpoint corretto in base ai dati
        const endpoint = data.titolo.includes('Corso') ? 
          'https://www.riatarchidecor.it/wp/wp-json/booking-monitor/v1/prenota-corso' : 
          'https://www.riatarchidecor.it/wp/wp-json/booking-monitor/v1/prenota-evento';

        console.log("Endpoint utilizzato:", endpoint); // Log dell'endpoint scelto

        try {
          const response = await fetch(endpoint, { 
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify(data),
          });

          const result = await response.json();
          
          console.log("Risultato della risposta:", result); // Log del risultato della risposta

          if (result.success) {
            setMessage('Dati inviati con successo!');
          } else {
            setError('Errore nell\'invio dei dati.');
          }
        } catch (error) {
          console.error('Errore durante l\'invio dei dati:', error);
          setError('Errore durante l\'invio dei dati.');
        } finally {
          // Rimuovi i dati da localStorage
          localStorage.removeItem('formData');
        }
      } else {
        setError('Nessun dato trovato nel localStorage.');
      }
    };

    sendData();
  }, []);

  return (
    <>
      <Head>
        <title>Success Page</title>
      </Head>
      <div className="h-[90vh] flex flex-col justify-center items-center">
        <h1 className="text-text fontPrimary text-3xl">{message || error || 'Prenotazione eseguita correttamente!'}</h1>
        <FontAwesomeIcon icon={faCheck} className="w-[5%] h-[5%] text-green" />
      </div>
    </>
  );
}
