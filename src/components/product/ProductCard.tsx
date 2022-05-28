import Image from 'next/image';
import {FC} from 'react'

const ProductCard:FC = () => {
  return(
    <>
      <div className='w-full max-w-screen-sm flex flex-col justify-center items-center mt-8 px-4 text-gray-800'>
        <Image 
          src="https://pngimg.com/uploads/sushi/sushi_PNG9217.png" 
          alt='sushi' 
          width={208} 
          height={208}
        />
        <div className='w-full flex justify-between gap-3'>
          <p className='my-4 font-bold text-3xl'>Sushi</p>
          <p className='my-4 font-bold text-2xl text-red-800'>$199.40</p>
        </div>
        <p className='w-full text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <textarea 
          cols={30}
          rows={5} 
          maxLength={150} 
          placeholder='Instrucciones especiales...'
          className='w-full m-4 p-2 bg-gray-100'
        >
        </textarea>
        <div className='w-full flex justify-between'>
          <div className='flex w-36 h-14 rounded-3xl bg-gray-200 justify-between items-center px-3'>
            <span>-</span>
            <p>0</p>
            <span>+</span>
          </div>
          <button className=' text-white w-36 h-14 rounded-3xl bg-green-800'>Agregar</button>
        </div>
      </div>
    </>
  )
}

export default ProductCard;