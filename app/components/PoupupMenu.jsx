import Link from "next/link";

import Image from "next/image";

export default function PoupupMenu({showHamburger,setShowHamburger}){
      
    // per chiudere il menu
      const handleLinkClick = () => {
        setShowHamburger(false);
    };

    return (
        <>
        {showHamburger && (
        <div className="h-full fixed inset-0 bg-white">
            <div className="h-[70%]  flex flex-col items-center justify-center z-50">
                    <button className="absolute top-4 right-4 text-black bg-black" onClick={() => setShowHamburger(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <Link href="/" onClick={handleLinkClick} className="text-text uppercase fontPrimary text-base md:text-xl mb-4">Home</Link>
                    <Link href="/FinitureDecorative" onClick={handleLinkClick} className="whitespace-nowrap uppercase fontPrimary text-text text-base md:text-xl mb-4">Finiture decorative</Link>
                    <Link href="/ConsulenzaFormazione" onClick={handleLinkClick} className="whitespace-nowrap uppercase fontPrimary text-text text-base md:text-xl mb-4">Consulenza</Link>
                    <Link href="/Formazione" onClick={handleLinkClick} className="whitespace-nowrap uppercase fontPrimary text-text text-base md:text-xl mb-4">Corsi ed Eventi</Link>
                    <Link href="/SoluzioniSostenibili" onClick={handleLinkClick} className="whitespace-nowrap uppercase fontPrimary  text-text text-base md:text-xl mb-4">Soluzioni Sostenibili</Link>
                    <Link href="/Contatti" onClick={handleLinkClick} className="text-text fontPrimary uppercase text-base md:text-xl mb-4">Contattaci</Link>
            </div>
            <div className="h-[30%] flex flex-col gap-4 items-center justify-center text-text text-xs fontPrimary uppercase">
                <Link href="/">
                    <Image src="/logo.webp" alt="Logo" width={100} height={100} className='w-[70px] lg:w-[120px]'/>
                </Link>
                <h6>info@archidecor.com</h6>
                <h6>338/4850318</h6>
                <h6>0924/24428</h6>
                <h6>Riat Store, ss 113 km 326 </h6>
                <h6>91011 Alcamo (TP)</h6>
            </div>
        </div>
        )}
        </>
    );
};