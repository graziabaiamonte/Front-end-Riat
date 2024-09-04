import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PulsanteMenu({ titolo}) {

  return (
    <div className="w-full flex justify-center items-center flex-col ">
      <div className="btn btn1 bg-white text-text w-[100%] h-[60px] px-2 py-6 flex justify-center gap-2 items-center text-center button">
        <FontAwesomeIcon icon={faPlay} className="w-[24px] h-[24px] text-text icon z-10"/>
        <h3 className="uppercase fontPrimary text-[18px] mt-1 text-center z-10">{titolo}</h3>
      </div>
    </div>
  );
}
