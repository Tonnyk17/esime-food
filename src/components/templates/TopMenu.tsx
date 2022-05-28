import {FC} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'


const TopMenu: FC = () => {
  const router = useRouter()
  return(
    <>
        <span 
          className='fixed left-3 top-3 rounded-full  w-8 h-8 flex items-center justify-center' 
          onClick={() => router.back()}
        >
          <FontAwesomeIcon icon={faArrowLeft} size="lg" />
        </span>
        <span className='fixed right-3 top-3 rounded-full  w-8 h-8 flex items-center justify-center'>
          <FontAwesomeIcon icon={faCartShopping} size="lg"/>
        </span>
    </>
  )
}

export default TopMenu