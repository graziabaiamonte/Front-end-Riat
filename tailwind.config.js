const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        homeImg: "url('/img/hero62.webp')",
        homeValori: "url('/imgValori/valoriHome.webp')",
        materEcol: "url('/img/materialiEcologici.webp')",
        valoriHero: "url('/imgValori/valori.webp')",
        contattiHero: "url('/img/contattiHero.webp')",
        consulenzaHero: "url('/imgConsulenza/consulenzaa.webp')",
        corsiHero: "url('/imgCorsi/formazione.webp')",
        finitureHero: "url('/imgFiniture/finitureHero.webp')",
        pittureHero: "url('/imgPitture/pitt.webp')",
        isolamentoHero: "url('/imgIsolamento/isolamentoHero.webp')",
        sostenibiliHero: "url('/imgSostenibili/sostenibiliHero.webp')",
        stucchiHero: "url('/imgStucchi/stucchiFull1.webp')",
        decorativiHero: "url('/imgFiniture/finiture.webp')",

        // img sfondo corsi
        corso1: "url('/imgCorsi/corso1.webp')",

        // img sfondo per pitture/isolamento/soluzioni/stucchi/elemDecorativi
        pittureInner: "url('/imgPitture/pitture11.webp')",
        isolamentoInner: "url('/imgIsolamento/isolamentoFull.webp')",
        sostenibiliInner: "url('/imgSostenibili/edilizi.webp')",
      },
      backgroundOpacity: {
        75: "0.75", // dettaglio verde hero home
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      red: "#ee3d26",
      green: "#8fcf27",
      pink: "#e76fba",
      white: "#ffffff",
      black: "#000000",
      grey: "#dedede",
      text: "#C9C3B3",
    },
  },
  plugins: [],
};
export default config;
