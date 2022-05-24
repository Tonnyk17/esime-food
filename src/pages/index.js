import styles from '../styles/Home.module.css'
import {Card} from '../components/menu/Card'
import {CardsContainer} from '../components/menu/CardsContainer'

export default function Home() {
  return (
    <div className='w-full p-4'>
      <CardsContainer/>
    </div>
  )
}
