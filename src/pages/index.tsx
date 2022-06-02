import React, { FC } from 'react'
import BottomMenu from '../components/templates/BottomMenu'
import TopMenu from '../components/templates/TopMenu'
import CategoriesContainer from '../components/categories/CategoriesContainer'

const Home: FC = () => {
  return(
    <>
      <div className='w-full max-w-screen-sm p-4 bg-gray-100'>
        <TopMenu/>
          <CategoriesContainer/>
        <BottomMenu/>
      </div>
    </>
  )
}

export default Home