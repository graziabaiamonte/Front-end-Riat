
export default function CookiePolicy(){
    return (
    <div className=" px-2 md:px-12 fontCookie">
        <div className="bg-white h-[100px]"></div>
      <h1 className="fontPrimary text-2xl uppercase w-full flex items-center justify-center mb-[2%] ">Politica sui Cookie</h1>
      <p>
      Benvenuto nel nostro sito web RIAT ArchiDecor. 
      La tua privacy è importante per noi. Questa Privacy Policy spiega come raccogliamo, 
      utilizziamo, conserviamo e proteggiamo le tue informazioni personali quando visiti il nostro sito web.
      </p>

      <h2 className="fontPrimary mt-[5%]">Informazioni che raccogliamo</h2>
      <p className="fontSecondary">
      Quando visiti il nostro sito web, possiamo raccogliere le seguenti informazioni: </p>


    <ul className="list-disc pl-5">
        <li>Informazioni Personali: Nome, indirizzo email, numero di telefono, e altre informazioni che fornisci 
        volontariamente attraverso moduli di contatto o iscrizioni alla newsletter.</li> 
        <li>
        Dati di Navigazione: Indirizzo IP, tipo di browser, pagine visitate, tempo trascorso sul sito e 
        altre informazioni relative alla tua navigazione.
        </li>
        <li>
        Cookie e Tecnologie Simili: Utilizziamo cookie e tecnologie di tracciamento per migliorare la 
        tua esperienza di navigazione e analizzare l'uso del sito.
        </li>
    </ul>
   
    <h2>Come utilizziamo le tue informazioni</h2>
    <p>Le informazioni raccolte possono essere utilizzate per:</p>
    <ul className="list-disc pl-5">
        <li>
        Fornire e Gestire i Nostri Servizi: Rispondere alle tue richieste, fornirti informazioni 
        sui nostri prodotti o servizi e gestire la tua iscrizione alla newsletter.
        </li>
        <li>
        Migliorare il Nostro Sito Web: Analizzare come utilizzi il nostro sito per migliorarne il contenuto e le funzionalità.
        </li>
        <li>
        Comunicazioni di Marketing: Inviarti aggiornamenti e offerte promozionali, se hai dato il tuo consenso.
        </li>
    </ul>

    <h2 className="fontPrimary mt-[5%]">Condivisione delle informazioni</h2>
    <p>Non venderemo né condivideremo le tue informazioni personali con terze parti, tranne nei seguenti casi:</p>
    <ul className="list-disc pl-5">
        <li>Fornitori di Servizi: Condivideremo le tue informazioni con fornitori di servizi di terze parti che ci aiutano a gestire il 
            sito web e a fornirti i nostri servizi, ma solo nella misura necessaria.
        </li>
        <li>Obblighi Legali: Potremmo divulgare le tue informazioni per ottemperare a obblighi legali, 
            rispondere a richieste legittime delle autorità o proteggere i nostri diritti legali.
        </li>
    </ul>

    <h2 className="fontPrimary mt-[5%]">Sicurezza delle informazioni</h2>
    <p>Adottiamo misure di sicurezza appropriate per proteggere le tue 
        informazioni personali contro l'accesso non autorizzato, l'uso improprio o la divulgazione. 
        Tuttavia, nessun metodo di trasmissione via internet o di archiviazione elettronica è completamente sicuro, 
        quindi non possiamo garantire la sicurezza assoluta.
    </p>

    <h2 className="fontPrimary mt-[5%]">I tuoi diritti</h2>
    <p>Hai il diritto di:</p>
    <ul className="list-disc pl-5">
        <li>Accedere: Richiedere una copia delle informazioni personali che conserviamo su di te.</li>
        <li>Correggere: Chiedere la correzione di informazioni personali inesatte o incomplete.</li>
        <li>Cancellare: Richiedere la cancellazione delle tue informazioni personali, salvo obblighi legali contrari.</li>
        <li>Limitare il Trattamento: Richiedere la limitazione del trattamento delle tue informazioni personali in determinate circostanze.</li>
    </ul>

    <p className="mt-[8%]">Ci riserviamo il diritto di aggiornare questa Privacy Policy periodicamente. Le modifiche 
        saranno pubblicate su questa pagina con la data di aggiornamento. Ti incoraggiamo a controllare regolarmente 
        la Privacy Policy per rimanere informato su come proteggiamo le tue informazioni.
    </p>


    {/* CAMBIARE CON DATI REALI */}
    <p className="mt-[5%] flex flex-col">
        Se hai domande riguardo a questa Privacy Policy o alle tue informazioni personali, ti preghiamo di contattarci al seguente indirizzo:
        <span>Riat Archidecor</span>
        <span>[Indirizzo Email]</span>
        <span>+39 338 485 0318</span>

        Grazie per aver visitato Riat ArchiDecor. La tua fiducia è importante per noi.
    </p>
     
    </div>
        
    )
};