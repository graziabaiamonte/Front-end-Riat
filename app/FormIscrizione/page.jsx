"use client";
import { useState, useEffect } from "react";
import { fetchAllCorsi, fetchAllEventi } from "../../api/fetchCorso";
import { format, parseISO } from 'date-fns';
import { it } from 'date-fns/locale';
import CheckoutButton1 from "../Checkout/page";

export default function Form() {
  const [formData, setFormData] = useState({
    titolo: '',
    nome: '',
    cognome: '',
    email: ''
  });

  const [selectedItem, setSelectedItem] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [corsi, setCorsi] = useState([]);
  const [eventi, setEventi] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const corsiData = await fetchAllCorsi();
        const eventiData = await fetchAllEventi();
        setCorsi(corsiData);
        setEventi(eventiData);
      } catch (error) {
        console.error("Errore nel recupero dei corsi o eventi:", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    validateForm();
  }, [formData, selectedItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "titolo") {
      const allItems = [...corsi, ...eventi];
      const selected = allItems.find(item => item.acf.nome_corso === value || item.acf.nome_evento === value);
      setSelectedItem(selected);
    }
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid) {
      setErrorMessage('Per procedere, compila tutti i campi richiesti e seleziona un corso o evento.');
      return;
    }

    setErrorMessage('');

    const data = {
      nome: formData.nome,
      cognome: formData.cognome,
      data: selectedItem.acf.data_corso || selectedItem.acf.data_evento,
      ora: selectedItem.acf.ora_corso || selectedItem.acf.ora_evento,
      email: formData.email,
      titolo: formData.titolo
    };


    const endpoint = selectedItem.acf.data_corso ? 
    'https://www.riatarchidecor.it/wp/wp-json/booking-monitor/v1/prenota-corso' : 
    'https://www.riatarchidecor.it/wp/wp-json/booking-monitor/v1/prenota-evento';

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

      if (result.success) {
        setSuccessMessage('Prenotazione effettuata con successo!');
        resetForm();
      } else {
        setErrorMessage('Errore nella prenotazione. Per favore riprova.');
      }
    } catch (error) {
      console.error('Errore durante l\'invio della prenotazione:', error);
      setErrorMessage('Errore nella prenotazione. Per favore riprova.');
    }
  };

  const validateForm = () => {
    const { titolo, nome, cognome, email } = formData;
    const isValid = titolo && nome && cognome && email && selectedItem;
    setIsFormValid(isValid);
  };

  const resetForm = () => {
    setFormData({
      titolo: '',
      nome: '',
      cognome: '',
      email: ''
    });
    setSelectedItem(null);
  };

  const formatDataCorso = (data) => {
    try {
      return format(parseISO(data), 'dd MMMM yyyy', { locale: it });
    } catch (error) {
      console.error('Errore nella formattazione della data:', error);
      return data;
    }
  };

  const costo = selectedItem?.acf.costo_corso || selectedItem?.acf.costo_evento;

  return (
    <>
      <div className="bg-contattiHero text-white h-[100vh] imgBackground flex flex-col justify-center items-center relative">
        <div className="w-full py-8 px-4 lg:px-20 h-[100vh] flex flex-col justify-end md:justify-center top-0 md:mt-[20%]">
          <div className="bg-red fontPrimary bg-opacity-75 w-[90%] lg:w-[75%] px-6 py-6">
            <h1 className="uppercase text-lg lg:text-5xl">Siamo felici che tu sia interessato ai nostri corsi e eventi!</h1>
            <h2 className="text-xl 2xl:text-2xl">Per completare la tua iscrizione, ti preghiamo di riempire il modulo qui sotto. Inviaci i tuoi dettagli e 
              seleziona l'opzione desiderata, e noi ci occuperemo del resto.</h2>
          </div>
        </div>
      </div>

      <div className="w-full h-[100vh] flex flex-col justify-center items-center">
        <h1 className="fontPrimary text-xl uppercase text-text">Fai la tua scelta!</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4 w-[80%] lg:w-[30%]">
          <div>
            <select
              id="titolo"
              name="titolo"
              value={formData.titolo}
              onChange={handleChange}
              className="bg-grey appearance-none w-full py-2 px-3 text-white leading-tight focus:outline-none placeholder-white"
              required
            >
              <option value="">Seleziona un corso o evento</option>
              <optgroup label="Corsi">
                {corsi.length > 0 ? (
                  corsi.map((corso) => (
                    <option key={corso.id} value={corso.acf.nome_corso}>
                      {corso.acf.nome_corso}
                    </option>
                  ))
                ) : (
                  <option disabled>Nessun corso disponibile</option>
                )}
              </optgroup>
              <optgroup label="Eventi">
                {eventi.length > 0 ? (
                  eventi.map((evento) => (
                    <option key={evento.id} value={evento.acf.nome_evento}>
                      {evento.acf.nome_evento}
                    </option>
                  ))
                ) : (
                  <option disabled>Nessun evento disponibile</option>
                )}
              </optgroup>
            </select>
          </div>

          <div className="input-container">
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className="bg-grey appearance-none w-full py-2 px-3 text-white leading-tight focus:outline-none placeholder-white"
              placeholder="Nome"
              required
            />
          </div>

          <div>
            <input
              type="text"
              id="cognome"
              name="cognome"
              value={formData.cognome}
              onChange={handleChange}
              className="bg-grey appearance-none w-full py-2 px-3 text-white leading-tight focus:outline-none placeholder-white"
              placeholder="Cognome"
              required
            />
          </div>

          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-grey appearance-none w-full py-2 px-3 text-white leading-tight focus:outline-none placeholder-white"
              placeholder="Email"
              required
            />
          </div>

          {selectedItem && (
            <div className="p-4 text-text rounded-md mt-[20%]">
              <h2 className="fontPrimary">Riepilogo</h2>
              <h2 className="text-xl fontPrimary uppercase font-bold">{selectedItem.acf.nome_corso || selectedItem.acf.nome_evento}</h2>
              <p>Data: {formatDataCorso(selectedItem.acf.data_corso || selectedItem.acf.data_evento)}</p>
              <p>Ora: {selectedItem.acf.ora_corso || selectedItem.acf.ora_evento}</p>
              <p>Luogo: {selectedItem.acf.luogo_corso || selectedItem.acf.luogo_evento}</p>
              {(selectedItem.acf.costo_corso || selectedItem.acf.costo_evento) && (
                <p>costo: € {selectedItem.acf.costo_corso || selectedItem.acf.costo_evento}</p>
              )}
            </div>
          )}

          <div className="flex items-center justify-between">
            {costo === 0 || costo == null ? (
              <button
                type="submit"
                className="bg-green hover:bg-pink text-white w-full uppercase fontPrimary p-2 focus:outline-none 
                focus:shadow-outline transition duration-300 ease-in-out"
              >
                Conferma Iscrizione
              </button>
            ) : (
              <CheckoutButton1
                amount={costo}
                description={selectedItem?.acf.nome_corso || selectedItem?.acf.nome_evento || 'Event'}
                disabled={!isFormValid}
                formData={formData}
                selectedItem={selectedItem}
              />
            )}
          </div>
        </form>

        <div className="text-text text-xl mt-[5%] fontPrimary">
          {(errorMessage || successMessage) && <p className="text-text">{errorMessage || successMessage}</p>}
        </div>
      </div>
    </>
  );
}
