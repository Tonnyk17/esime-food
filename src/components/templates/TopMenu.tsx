import {FC} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'


const TopMenu: FC = () => {
  const router = useRouter()
  return(
    <>
       <div className='w-full fixed z-10 top-0 left-0 bg-gray-100 flex justify-between p-1'>
        <span 
          className='rounded-full w-8 h-8 flex items-center justify-center' 
          onClick={() => router.back()}
        >
          <FontAwesomeIcon icon={faArrowLeft} size="lg" />
        </span>
        <span className='rounded-full  w-8 h-8 flex items-center justify-center'>
          <FontAwesomeIcon icon={faCartShopping} size="lg"/>
        </span>
       </div>
    </>
  )
}

export default TopMenu