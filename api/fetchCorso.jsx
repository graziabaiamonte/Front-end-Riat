import axios from 'axios';

const API_BASE_URL = 'https://www.riatarchidecor.it/wp/wp-json/wp/v2';

const fetchWithImageUrl = async (endpoint, essentialFields) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${endpoint}`);
        const items = response.data;

        const itemsWithImages = await Promise.all(
            items.map(async (item) => {
                let result = {};
                // Seleziona solo i campi essenziali
                essentialFields.forEach(field => {
                    result[field] = item[field];
                });

                if (item.acf.immagine_copertina) {
                    try {
                        const imageResponse = await axios.get(`${API_BASE_URL}/media/${item.acf.immagine_copertina}`);
                        const imageUrl = imageResponse.data.media_details.sizes.full.source_url;
                        result.immagine_copertina_url = imageUrl;
                    } catch (imageError) {
                        console.error(`Errore nel recupero dell'immagine per l'elemento ${item.id}:`, imageError);
                        result.immagine_copertina_url = null; // O imposta un'immagine di default
                    }
                }

                return result;
            })
        );

        return itemsWithImages;
    } catch (error) {
        console.error(`Errore nel recupero dei dati da ${endpoint}:`, error);
        throw error;
    }
};

// Funzioni specifiche per corsi ed eventi
export const fetchAllCorsi = () => fetchWithImageUrl('corsi', ['id', 'slug', 'title', 'acf']);
export const fetchAllEventi = () => fetchWithImageUrl('eventi', ['id', 'slug', 'title', 'acf']);

export const fetchCorsoBySlug = async (slug) => {
    try {
        const response = await fetch(`${API_BASE_URL}/corsi?slug=${slug}`);
        const data = await response.json();
        if (data.length > 0) {
            const corso = data[0];
            let result = {
                id: corso.id,
                slug: corso.slug,
                title: corso.title,
                acf: corso.acf,
                immagine_copertina_url: null,
                photo_gallery: []
            };

            if (corso.acf.immagine_copertina) {
                try {
                    const imageResponse = await axios.get(`${API_BASE_URL}/media/${corso.acf.immagine_copertina}`);
                    result.immagine_copertina_url = imageResponse.data.media_details.sizes.full.source_url;
                } catch (imageError) {
                    console.error(`Errore nel recupero dell'immagine di copertura per il corso ${corso.id}:`, imageError);
                }
            }

            if (corso.acf.photo_gallery && Array.isArray(corso.acf.photo_gallery.immagini_slider)) {
                // console.log('Photo gallery:', corso.acf.photo_gallery);
                result.photo_gallery = corso.acf.photo_gallery.immagini_slider.flat().map(img => img.full_image_url);
            }

            return result;
        }

        throw new Error('Corso non trovato');
    } catch (error) {
        console.error('Errore nel recupero del corso:', error);
        throw error;
    }
};

export const fetchEventoBySlug = async (slug) => {
    try {
        const response = await fetch(`${API_BASE_URL}/eventi?slug=${slug}`);
        const data = await response.json();
        if (data.length > 0) {
            const evento = data[0];
            let result = {
                id: evento.id,
                slug: evento.slug,
                title: evento.title,
                acf: evento.acf,
                immagine_copertina_url: null,
            };

            if (evento.acf.immagine_copertina) {
                try {
                    const imageResponse = await axios.get(`${API_BASE_URL}/media/${evento.acf.immagine_copertina}`);
                    result.immagine_copertina_url = imageResponse.data.media_details.sizes.full.source_url;
                } catch (imageError) {
                    console.error(`Errore nel recupero dell'immagine di copertura per l'evento ${evento.id}:`, imageError);
                }
            }

            if (evento.acf.photo_gallery && Array.isArray(evento.acf.photo_gallery.immagini_slider)) {
                // console.log('Photo gallery:', evento.acf.photo_gallery);
                result.photo_gallery = evento.acf.photo_gallery.immagini_slider.flat().map(img => img.full_image_url);
            }

            return result;
        }
        throw new Error('Evento non trovato');
    } catch (error) {
        console.error('Errore nel recupero evento:', error);
        throw error;
    }
};




