'use client';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { it } from 'date-fns/locale';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import CardCorsiEventiArrivo from '../components/CorsiEventiArrivo';
import { fetchAllCorsi, fetchAllEventi } from '@/api/fetchCorso';


export default function FormazioneClient() {
  const [eventi, setEventi] = useState(null);
  const [corsi, setCorsi] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventiData = await fetchAllEventi();
        const corsiData = await fetchAllCorsi();

        setEventi(eventiData);
        setCorsi(corsiData);
      } catch (error) {
        console.error('Errore durante il fetch dei dati:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

 

  const backgroundImageStyle = (url) => ({
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  });

  const formatData = (data) => {
    try {
      return format(parseISO(data), 'dd MMMM yyyy', { locale: it });
    } catch (error) {
      console.error('Errore nella formattazione della data:', error);
      return data;
    }
  };

  if (loading) {
    return (
       <div className='flex items-center justify-center h-[90vh]'>
        <span class="loader"></span>
    </div>
    )  
  }

  return (
    <>
      {/* HERO */}
      <div className="bg-corsiHero text-white h-[100vh] imgBackground flex flex-col justify-center">
        <div className="w-full lg:px-0 h-[100vh] flex flex-col justify-end md:justify-center items-center md:items-start relative">
          <h1 className="fontPrimary md:w-[70%] text-left  bg-green bg-opacity-75 p-6 text-base lg:text-3xl mt-[20%]">
            <span className="block text-lg lg:text-5xl">EVENTI E CORSI DI FORMAZIONE</span> per professionisti e appassionati
          </h1>
          <div className="h-[40px] w-full "></div>
          <div className="bg-red bg-opacity-55 h-[40px] w-full absolute -bottom-[2%]  "></div>
        </div>
        
      </div>
      <div className="bg-red bg-opacity-55 h-[40px] w-full absolute -bottom-4"></div>

       {/* SEZIONE EVENTI */}
       <div className="h-full w-full flex flex-col justify-center items-center mt-[35%] md:mt-[15%]">
        <h2 className="fontPrimary text-xl text-text mb-4 md:mb-16 uppercase px-4">I nostri Eventi</h2>
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={{ clickable: true }}
          className="mySwiper h-[90vh] md:h-full w-[90%]"
        >
          {eventi && eventi.map((evento) => (
            <SwiperSlide key={evento.id}>
              <div
                className="h-[60vh] 2xl:h-[80vh] imgBackground flex flex-col justify-around items-center"
                style={backgroundImageStyle(evento.immagine_copertina_url)}
              >
                {/* INFO evento */}
                <div className="bg-green bg-opacity-85 p-12 w-full lg:w-[30%] flex justify-center flex-col ml-0 lg:ml-[50%] lg:h-full text-white">
                  <div className="flex justify-center bg-opacity-80 px-4 py-2 items-center mb-[5%]">
                    <Link href={`https://www.riatarchidecor.it/wp/evento/${evento.slug}`} className="fontPrimary text-sm md:text-xl uppercase text-left">
                      {evento.acf.nome_evento}
                    </Link>
                  </div>
                  {/* data */}
                  <div className="flex gap-2 ml-4 mb-2 fontSecondary">
                    <div>
                      <FontAwesomeIcon icon={faCalendarDays} className="w-[24px] h-[24px] text-white" />
                    </div>
                    <div>{formatData(evento.acf.data_evento)}</div>
                  </div>
                  {/* orario */}
                  <div className="flex gap-2 ml-4 mb-2 fontSecondary">
                    <div>
                      <FontAwesomeIcon icon={faClock} className="w-[24px] h-[24px] text-white" />
                    </div>
                    <div>{evento.acf.ora_evento}</div>
                  </div>
                  {/* luogo */}
                  <div className="flex gap-2 ml-4 mb-2 fontSecondary">
                    <div>
                      <FontAwesomeIcon icon={faLocationDot} className="w-[24px] h-[24px] text-white" />
                    </div>
                    <div>{evento.acf.luogo_evento}</div>
                  </div>
                  <div className="hidden w-full md:flex justify-start mt-20">
                    <Link href={`https://www.riatarchidecor.it/wp/evento/${evento.slug}`}>
                      <button className="bg-red rounded-[36px] px-6 py-2 text-white fontPrimary uppercase leading-4">Iscriviti</button>
                    </Link>
                  </div>
                  <Link href={`https://www.riatarchidecor.it/wp/evento/${evento.slug}`} className="bg-red  rounded-[36px] mt-[5%] md:hidden px-4 py-2 text-white text-center fontPrimary uppercase leading-4">
                   Iscriviti
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* SEZIONE CORSI */}
      <div className="h-full w-full flex flex-col justify-center items-center mt-[35%] md:mt-[15%]">
        <h2 className="fontPrimary text-xl text-text mb-4 md:mb-16 uppercase px-4">I nostri Corsi</h2>
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={{ clickable: true }}
          className="mySwiper h-[90vh] md:h-full w-[90%]"
        >
          {corsi && corsi.map((corso) => (
            <SwiperSlide key={corso.id}>
              <div
                className="h-[60vh] 2xl:h-[80vh] imgBackground flex flex-col justify-around items-center"
                style={backgroundImageStyle(corso.immagine_copertina_url)}
              >
                {/* INFO CORSO */}
                <div className="bg-red bg-opacity-85 p-12 w-full lg:w-[30%] flex justify-center flex-col ml-0 lg:ml-[50%] lg:h-full text-white">
                  <div className="flex justify-center bg-opacity-80 px-4 py-2 items-center mb-[5%]">
                    <Link href={`https://www.riatarchidecor.it/wp/corso/${corso.slug}`} className="fontPrimary text-sm md:text-xl uppercase text-left">
                      {corso.acf.nome_corso}
                    </Link>
                  </div>
                  {/* data */}
                  <div className="flex gap-2 ml-4 mb-2 fontSecondary">
                    <div>
                      <FontAwesomeIcon icon={faCalendarDays} className="w-[24px] h-[24px] text-white" />
                    </div>
                    <div>{formatData(corso.acf.data_corso)}</div>
                  </div>
                  {/* orario */}
                  <div className="flex gap-2 ml-4 mb-2 fontSecondary">
                    <div>
                      <FontAwesomeIcon icon={faClock} className="w-[24px] h-[24px] text-white" />
                    </div>
                    <div>{corso.acf.ora_corso}</div>
                  </div>
                  {/* luogo */}
                  <div className="flex gap-2 ml-4 mb-2 fontSecondary">
                    <div>
                      <FontAwesomeIcon icon={faLocationDot} className="w-[24px] h-[24px] text-white" />
                    </div>
                    <div>{corso.acf.luogo_corso}</div>
                  </div>
                  <div className="hidden w-full md:flex justify-start mt-20">
                    <Link href={`https://www.riatarchidecor.it/wp/corso/${corso.slug}`} className="bg-green rounded-[36px] px-6 py-2 text-white fontPrimary uppercase leading-4">
                      Iscriviti
                    </Link>
                  </div>
                  <Link href={`https://www.riatarchidecor.it/wp/corso/${corso.slug}`} className="bg-green text-center rounded-[36px] mt-[5%] md:hidden px-4 py-2 text-white fontPrimary uppercase leading-4">
                    Iscriviti
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* SEZIONE IN ARRIVO */}
      <div className="p-4 flex flex-col lg:flex-row items-center justify-center gap-16">
        <div className="flex flex-row flex-wrap gap-24 md:gap-4 mb-[20%] md:mb-0">
          <CardCorsiEventiArrivo corsi={corsi} eventi={eventi} />
        </div>
      </div>
    </>
  );
}
