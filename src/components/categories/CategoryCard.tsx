import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import image from 'next/image'
import Link from 'next/link'
import {FC} from 'react'

const CategoryCard = () => {
  return(
    <>
      <Link href={"/menu"}>
        <div className="w-full max-w-xs h-36 rounded-md bg-gray-200 text-gray-800 flex flex-col justify-between items-center hover:shadow-slate-800 shadow-md">
          <Image src={"https://img.pystatic.com/header-backgrounds/mobile/fast-food-1.jpg"} layout="intrinsic" width={320} height={200} className="w-full rounded-t-md"/>
          <p className="text-md font-bold text-center mb-1">Comida rápida</p>
        </div>
      </Link>
    </>
  )
}

export default CategoryCard