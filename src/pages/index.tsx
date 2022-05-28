import React, { FC } from 'react'
import styles from '../styles/Home.module.css'
import Card from '../components/menu/Card'
import CardsContainer from '../components/menu/CardsContainer'
import BottomMenu from '../components/templates/BottomMenu'
import TopMenu from '../components/templates/TopMenu'

const Home: FC = () => {
  return(
    <>
      <div className='w-full max-w-screen-sm p-4'>
        <TopMenu/>
          <CardsContainer/>
        <BottomMenu/>
      </div>
    </>
  )
}

export default Home