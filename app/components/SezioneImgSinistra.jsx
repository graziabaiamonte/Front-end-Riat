import Image from "next/image";
import Link from "next/link";

export default function SezioneInterna({
    backgroundColor,
    showTitle,
    title,
    titleColor,
    text,
    direzioneTitolo,
    direzioneTesto,
    ordineTitoloTesto = "flex-col",
    showButton,
    buttonText,
    linkButton,
    buttonColor,
    textColor,
    imgSrc,
    imgAlt,
    showDettaglio,
    dettaglioColor,
    positionDettaglio = "top-0 left-0",
    ordineImgText,  
}) {

    return (
        <div className={`h-[100vh] ${backgroundColor} bg-opacity-85 ${textColor} w-full flex ${ordineImgText} justify-center gap-12 md:gap-0 items-center`}>
            
            <div className="w-[90%] h-[40vh] lg:h-[50vh] md:absolute md:left-[36px] md:w-[40%] flex justify-center lg:mx-[0px] z-30">
                <Image src={imgSrc} width={700} height={800} alt={imgAlt}
                className="rounded-[36px] object-cover w-[100%] h-[100%]"
                />
            </div>

            <div className={`w-[90%] py-2 relative lg:w-[100%] mx-[0px] flex justify-end items-end lg:items-start ${ordineTitoloTesto} gap-2 md:gap-0 z-10 2xl:`}>
                {showTitle && (
                    <h2 className={`fontPrimary px-[10px] mx-1 ${direzioneTitolo} ${titleColor} uppercase text-xl lg:text-2xl mb-4 z-20 md:ml-[50%]`}>{title}</h2>  
                )}
                <h3 className={`fontPrimary px-[10px] text-right ${direzioneTesto} text-sm lg:text-xl ml-[2%] md:ml-[50%] mr-0 2xl:mr-80`}>
                    {text}
                </h3>

                {showButton && (
                <Link href={linkButton}
                    className={`${buttonColor} fontPrimary px-6 py-2 rounded-[36px] mt-0 lg:mt-4 md:ml-[50%]`}
                >
                    <button className="fontPrimary uppercase">{buttonText}</button>
                </Link>
                )}

                {showDettaglio && (
                    <div className={`absolute  w-full h-[40px] ${positionDettaglio} ${dettaglioColor}`}></div>
                )}
            </div>
        </div>
    );
}
