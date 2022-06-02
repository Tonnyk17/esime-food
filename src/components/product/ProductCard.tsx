import Image from 'next/image';
import {FC} from 'react'

type ProductProps = {
  name: string;
  image: string;
  price: string;
}

const ProductCard:FC<ProductProps> = ({name,image,price}) => {
  return(
    <>
      <div className='w-full max-w-screen-sm flex flex-col justify-center items-center mt-10 mb-20 px-4 text-gray-800'>
        <Image 
          src={image} 
          alt={name} 
          width={208} 
          height={208}
        />
        <div className='w-full flex justify-between gap-3'>
          <p className='my-4 font-bold text-3xl'>{name}</p>
          <p className='my-4 font-bold text-2xl text-red-800'>${price}</p>
        </div>
        <p className='w-full text-left'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam molestiae omnis officiis in excepturi ducimus vitae. Veniam et exercitationem voluptas ad rem sunt? Incidunt laboriosam harum ipsa officiis? Culpa, architecto. </p>
        <textarea 
          cols={30}
          rows={5} 
          maxLength={150} 
          placeholder='Instrucciones especiales...'
          className='w-full m-4 mb-6 p-2 bg-gray-200'
        >
        </textarea>
        <div className='w-full flex justify-between'>
          <div className='flex w-32 h-12 rounded-3xl bg-gray-200 justify-between items-center px-3'>
            <span className='text-xl font-bold w-7 h-7 bg-gray-700 rounded-full text-white text-center'>-</span>
            <p className=' text-xl font-semibold'>0</p>
            <span className='text-xl font-bold w-7 h-7 bg-gray-700 rounded-full text-white text-center'>+</span>
          </div>
          <button className=' text-white  w-32 h-12 rounded-3xl bg-green-800'>Agregar</button>
        </div>
      </div>
    </>
  )
}

export default ProductCard;