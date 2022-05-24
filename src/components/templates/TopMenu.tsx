import {FC} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCartShopping } from '@fortawesome/free-solid-svg-icons'


const TopMenu: FC = () => {
  return(
    <>
      <div className='w-full h-11 fixed items-center top-0 left-0 flex justify-between p-4'>
        <span>
          <FontAwesomeIcon icon={faArrowLeft} size="lg"/>
        </span>
        <span>
          <FontAwesomeIcon icon={faCartShopping} size="lg"/>
        </span>
      </div>
    </>
  )
}

export default TopMenu