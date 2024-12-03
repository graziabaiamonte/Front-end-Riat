import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div>
            <div className="md:h-[200px] flex gap-6 flex-col lg:flex-row text-center 
                lg:text-left justify-between px-2 md:px-20 py-[30%] lg:py-2 mx-[2px] lg:mx-[24px] text-text 
                fontPrimary text-xs 2xl:text-sm uppercase items-center mt-0 md:mt-[5%]">
                <h6><span className="block">Mail:</span>info@riatarchidecor.it</h6>
                <h6><span className="block">Cell:</span>338/4850318</h6>
                <h6><span className="block">Tel:</span>0924/24428</h6>
                <h6><span className="block">Dove siamo:</span>Riat Store, ss 113 km 326 <span>91011 Alcamo (TP)</span></h6>
                <Link href="/">
                    <Image src="/logo-footer.webp" alt="Logo Azienda" width={60} height={60} />
                </Link>
            </div>

            {/* credit */}
            <div className="w-full flex -mt-[46px] md:mt-0 justify-center">
                <p className="text-text  text-center px-4 text-sm fontPrimary">Designed by
                    <Link target="_blank" href="https://www.adduma.it"> Adduma
                    </Link>, with care, coffee and love. </p>
            </div>
        </div>

    );
};
