import { fetchAllCorsi } from "@/api/fetchCorso";
import CardCorsoClient from "./CardCorsoClient";

export default async function CardCorso(){
  const corsi = await fetchAllCorsi();
  return (
    <>
    <CardCorsoClient corsi={corsi}/>
    </>
  )
}