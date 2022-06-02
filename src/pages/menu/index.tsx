import React, { FC } from 'react'
import CardsContainer from '../../components/menu/CardsContainer';
import BottomMenu from "../../components/templates/BottomMenu";
import TopMenu from "../../components/templates/TopMenu";

const Menu: FC = () => {
  return(
    <>
      <div className='w-full max-w-screen-sm p-4 bg-gray-100'>
        <TopMenu/>
          <CardsContainer/>
        <BottomMenu/>
      </div>
    </>
  )
}

export default Menu