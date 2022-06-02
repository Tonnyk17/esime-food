import {FC} from 'react'
import CategoryCard from './CategoryCard'

const CategoriesContainer: FC = () => {
  return(
    <>
      <div className="w-full grid gap-4 grid-cols-2 mb-20 mt-10">
          <CategoryCard/>
          <CategoryCard/>
          <CategoryCard/>
          <CategoryCard/>
          <CategoryCard/>
          <CategoryCard/>
          <CategoryCard/>
          <CategoryCard/>
          <CategoryCard/>
          <CategoryCard/>
      </div>
    </>
  )
}

export default CategoriesContainer;