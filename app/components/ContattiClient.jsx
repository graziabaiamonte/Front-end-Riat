"use client";
import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

export default function Contatti() {
  const form = useRef();

  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    messaggio: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const resetForm = () => {
    setFormData({
      nome: "",
      cognome: "",
      email: "",
      messaggio: "",
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true); // Start sending

    emailjs
      .sendForm('service_xxzsb31', 'template_thmnwto', form.current, {
        publicKey: 'k2pu890nV-mD8NdF7',
      })
      .then(
        () => {
          setIsSending(false); // Stop sending
          setSuccess("Messaggio inviato con successo!"); // Set success message
          resetForm(); // Reset form after success
        },
        (error) => {
          setIsSending(false); // Stop sending
          setError("Errore nell'invio del messaggio. Riprova più tardi."); // Set error message
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <h2 className="text-text fontPrimary text-xl lg:text-2xl">Scrivici</h2>

      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 mt-4 w-[80%] lg:w-[30%] fontSecondary">
        <div>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className="bg-grey appearance-none w-full py-2 px-3 text-white leading-tight focus:outline-none placeholder-white"
            placeholder="Nome"
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
          />
        </div>

        <div>
          <textarea
            id="messaggio"
            name="messaggio"
            value={formData.messaggio}
            onChange={handleChange}
            className="bg-grey appearance-none w-full py-2 px-3 text-white leading-tight focus:outline-none placeholder-white"
            placeholder="Messaggio"
            rows="4"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-green hover:bg-black text-white w-full uppercase fontPrimary p-2 focus:outline-none focus:shadow-outline"
            disabled={isSending}
          >
            {isSending ? "Invio..." : "Invia"}
          </button>
        </div>

        {success && <p className="text-green mt-4">{success}</p>}
        {error && <p className="text-red mt-4">{error}</p>}
      </form>
    </div>
  );
}
