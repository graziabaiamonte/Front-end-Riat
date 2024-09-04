"use client";
import { format, parseISO, compareDesc, isValid } from 'date-fns';
import { it } from 'date-fns/locale';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { fetchAllEventi } from '../../api/fetchCorso';


export default function CardEvento({eventi}){
 const formatDataEvento = (data) => {
    try {
      return format(parseISO(data), 'dd MMMM yyyy', { locale: it });
    } catch (error) {
      console.error('Errore nella formattazione della data:', error);
      return data;
    }
  };

  
  const validEventi = eventi.filter(evento => isValid(parseISO(evento.acf.data_evento)));
  const sortedEventi = validEventi.sort((a, b) => compareDesc(parseISO(a.acf.data_evento), parseISO(b.acf.data_evento)));

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
      {Array.isArray(sortedEventi) && sortedEventi.length > 0 ? (
        <Slider {...settings} className="w-[90vw] ">
          {sortedEventi.map(evento => (
            <div key={evento.id} className="w-[90vw] lg:w-[25vw] p-[5%] flex flex-col gap-[2px]">
              {/* immagine corso */}
              <div className='h-[200px]'>
                {evento.immagine_copertina_url ? (
                  <Image
                    src={evento.immagine_copertina_url}
                    width={150}
                    height={150}
                    alt="immagine corso"
                    className='w-full h-full object-cover'
                  />
                ) : (
                  <div>No image available</div>
                )}
              </div>

              {/* titolo corso */}
              <div className="bg-green text-white h-[50px] my-[2px] py-1 flex items-center justify-center">
                <Link href={`https://www.riatarchidecor.it/wp/evento/${evento.slug}`} className="uppercase fontPrimary text-sm text-center px-1">
                  {evento.acf.nome_evento}
                </Link>
              </div>

              {/* info corso */}
              <div className="text-white w-full bg-text py-6 flex flex-col items-start gap-4 fontSecondary">
                {/* data */}
                <div className='flex gap-2 ml-4'>
                  <FontAwesomeIcon icon={faCalendarDays} className="w-[24px] h-[24px] text-white" />
                  <div>{formatDataEvento(evento.acf.data_evento)}</div>
                </div>

                {/* ora */}
                <div className='flex gap-2 ml-4'>
                  <FontAwesomeIcon icon={faClock} className="w-[24px] h-[24px] text-white" />
                  <div>{evento.acf.ora_evento}</div>
                </div>

                {/* luogo */}
                <div className='flex gap-2 ml-4'>
                  <FontAwesomeIcon icon={faLocationDot} className="w-[24px] h-[24px] text-white" />
                  <div>{evento.acf.luogo_evento}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <p>Nessun evento disponibile.</p>
      )}
    </div>
  );
}

export async function getStaticProps() {
    const eventi = await fetchAllEventi();
    return {
      props: {
        eventi,
      },
    };
  }