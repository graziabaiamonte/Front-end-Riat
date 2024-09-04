import Link from "next/link";

export default function PulsanteContatti() {
    return (
    <div className=" w-full">
      <div className="w-full flex flex-col mt-[3px]">
        
        <div className=" bg-red pr-24 pl-1 h-[10px] lg:h-[20px] w-full flex justify-center">
          <Link href="/Contatti" className="text-white fontPrimary uppercase leading-[24px] text-xs">Contattaci</Link>
        </div>
      
        <div className=" bg-pink h-[10px] lg:h-[10px] w-full"></div>
        <div className=" bg-green h-[10px] lg:h-[10px] w-full"></div>
        
    </div>
    </div>
    );
  }
  
