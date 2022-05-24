import { FC } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faReceipt } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const BottomMenu: FC = () => {
  return(
    <>
      <div className="w-full h-14 rounded-t-3xl bg-red-900 fixed bottom-0 left-0 flex items-center justify-around">
        <span>
          <FontAwesomeIcon icon={faReceipt} size="lg" color="#FFFF"/>
        </span>
        <span>
          <FontAwesomeIcon icon={faHouse} size="lg" color="#FFFF"/>
        </span>
        <span>
          <FontAwesomeIcon icon={faUser} size="lg" color="#FFFF"/>
        </span>      
      </div>
    </>
  )
}

export default BottomMenu;