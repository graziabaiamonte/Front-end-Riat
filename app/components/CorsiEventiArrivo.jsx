"use client";
import { format, parseISO, compareDesc, isValid, isAfter, isBefore } from 'date-fns';
import { it } from 'date-fns/locale';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Slider from 'react-slick';
 import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";

export default function CardCorsiEventiArrivo({ corsi = [], eventi = [] }) {
    const today = new Date();

    const formatData = (data) => {
        try {
            return format(parseISO(data), 'dd MMMM yyyy', { locale: it });
        } catch (error) {
            console.error('Errore nella formattazione della data:', error);
            return data;
        }
    };

    const getData = (item) => {
        return item.acf.data_corso || item.acf.data_evento;
    };

    const validFutureCorsi = corsi.filter(corso => {
        const dataCorso = parseISO(corso.acf.data_corso);
        return isValid(dataCorso) && isAfter(dataCorso, today);
    });

    const validFutureEventi = eventi.filter(evento => {
        const dataEvento = parseISO(evento.acf.data_evento);
        return isValid(dataEvento) && isAfter(dataEvento, today);
    });

    const sortedFutureCorsiEventi = [...validFutureCorsi, ...validFutureEventi].sort((a, b) => {
        const dataA = getData(a);
        const dataB = getData(b);
        
        if (dataA && dataB) {
            const parsedDataA = parseISO(dataA);
            const parsedDataB = parseISO(dataB);
            return compareDesc(parsedDataA, parsedDataB);
        }
        return 0; // Gestione dei casi in cui una delle date è undefined
    });

    let sortedPastCorsiEventi = [];
    if (sortedFutureCorsiEventi.length === 0) {
        const validPastCorsi = corsi.filter(corso => {
            const dataCorso = parseISO(corso.acf.data_corso);
            return isValid(dataCorso) && isBefore(dataCorso, today);
        });

        const validPastEventi = eventi.filter(evento => {
            const dataEvento = parseISO(evento.acf.data_evento);
            return isValid(dataEvento) && isBefore(dataEvento, today);
        });

        sortedPastCorsiEventi = [...validPastCorsi, ...validPastEventi].sort((a, b) => {
            const dataA = getData(a);
            const dataB = getData(b);
            
            if (dataA && dataB) {
                const parsedDataA = parseISO(dataA);
                const parsedDataB = parseISO(dataB);
                return compareDesc(parsedDataA, parsedDataB);
            }
            return 0; // Gestione dei casi in cui una delle date è undefined
        });
    }

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div>
            {sortedFutureCorsiEventi.length > 0 ? (
                <>
                    <h3 className='fontPrimary uppercase text-xl flex items-center justify-center  mb-4 md:mb-16 mt-[35%] md:mt-[15%] text-text'>
                        In arrivo
                    </h3>
                    <Slider {...settings} className="w-[90vw]">
                        {sortedFutureCorsiEventi.map(item => (
                            <div key={item.id} className="w-[90vw] lg:w-[25vw] p-[5%] flex flex-col gap-[2px]">
                                {/* immagine corso o evento */}
                                <div className='h-[200px]'>
                                    {item.immagine_copertina_url ? (
                                        <Image
                                            src={item.immagine_copertina_url}
                                            width={150}
                                            height={150}
                                            alt="immagine"
                                            className='w-full h-full object-cover'
                                        />
                                    ) : (
                                        <div>No image available</div>
                                    )}
                                </div>

                                {/* titolo corso o evento */}
                                <div className={`h-[50px] my-[2px] py-1 flex items-center justify-center ${item.acf.data_corso ? 'bg-red' : 'bg-green'} text-white`}>
                                    <Link href={item.acf.data_corso ? `https://www.riatarchidecor.it/wp/corso/${item.slug}` : `https://www.riatarchidecor.it/wp/evento/${item.slug}`}>
                                        <h4 className="uppercase fontPrimary text-sm text-center">{item.acf.nome_corso || item.acf.nome_evento}</h4>
                                    </Link>
                                </div>

                                {/* info corso o evento */}
                                <div className="text-white w-full bg-text py-6 flex flex-col items-start gap-4 fontSecondary">
                                    {/* data */}
                                    <div className='flex gap-2 ml-4'>
                                        <FontAwesomeIcon icon={faCalendarDays} className="w-[24px] h-[24px] text-white" />
                                        <div>{formatData(getData(item))}</div>
                                    </div>

                                    {/* ora */}
                                    <div className='flex gap-2 ml-4'>
                                        <FontAwesomeIcon icon={faClock} className="w-[24px] h-[24px] text-white" />
                                        <div>{item.acf.ora_corso || item.acf.ora_evento}</div>
                                    </div>

                                    {/* luogo */}
                                    <div className='flex gap-2 ml-4'>
                                        <FontAwesomeIcon icon={faLocationDot} className="w-[24px] h-[24px] text-white" />
                                        <div>{item.acf.luogo_corso || item.acf.luogo_evento}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </>
            ) : sortedPastCorsiEventi.length > 0 ? (
                <>
                    <h3 className='fontPrimary uppercase text-xl flex items-center justify-center  mb-4 md:mb-16 mt-[35%] md:mt-[15%] text-text'>
                        Scopri gli appuntamenti passati
                    </h3>
                    <Slider {...settings} className="w-[90vw]">
                        {sortedPastCorsiEventi.map(item => (
                            <div key={item.id} className="w-[90vw] lg:w-[25vw] p-[5%] flex flex-col gap-[2px]">
                                {/* immagine corso o evento */}
                                <div className='h-[200px]'>
                                    {item.immagine_copertina_url ? (
                                        <Image
                                            src={item.immagine_copertina_url}
                                            width={150}
                                            height={150}
                                            alt="immagine"
                                            className='w-full h-full object-cover'
                                        />
                                    ) : (
                                        <div>No image available</div>
                                    )}
                                </div>

                                {/* titolo corso o evento */}
                                <div className={`h-[50px] my-[2px] py-1 flex items-center justify-center ${item.acf.data_corso ? 'bg-red' : 'bg-green'} text-white`}>
                                    <Link href={item.acf.data_corso ? `https://www.riatarchidecor.it/wp/corso/${item.slug}` : `https://www.riatarchidecor.it/wp/evento/${item.slug}`}>
                                        <h4 className="uppercase fontPrimary text-sm text-center">{item.acf.nome_corso || item.acf.nome_evento}</h4>
                                    </Link>
                                </div>

                                {/* info corso o evento */}
                                <div className="text-white w-full bg-text py-6 flex flex-col items-start gap-4 fontSecondary">
                                    {/* data */}
                                    <div className='flex gap-2 ml-4'>
                                        <FontAwesomeIcon icon={faCalendarDays} className="w-[24px] h-[24px] text-white" />
                                        <div>{formatData(getData(item))}</div>
                                    </div>

                                    {/* ora */}
                                    <div className='flex gap-2 ml-4'>
                                        <FontAwesomeIcon icon={faClock} className="w-[24px] h-[24px] text-white" />
                                        <div>{item.acf.ora_corso || item.acf.ora_evento}</div>
                                    </div>

                                    {/* luogo */}
                                    <div className='flex gap-2 ml-4'>
                                        <FontAwesomeIcon icon={faLocationDot} className="w-[24px] h-[24px] text-white" />
                                        <div>{item.acf.luogo_corso || item.acf.luogo_evento}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </>
            ) : (
                <p>Nessun appuntamento al momento disponibile.</p>
            )}
        </div>
    );
}

export async function getStaticProps() {
    const corsi = await fetchAllCorsi();
    const eventi = await fetchAllEventi();
    return {
        props: {
            corsi,
            eventi,
        },
    };
}



