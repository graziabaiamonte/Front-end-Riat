import { fetchAllEventi } from "@/api/fetchCorso";
import CardEventoClient from "./CardEventoClient";

export default async function CardEvento(){
  const eventi = await fetchAllEventi();
  return (
    <>
    <CardEventoClient eventi={eventi}/>
    </>
  )
}