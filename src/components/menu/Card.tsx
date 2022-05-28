import { FC } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

type CardProps = {
  name: string;
  image: string;
  price: string;
  offerPrice?: string;
  isFavorite?: boolean;
}

const Card: FC<CardProps> = ({name,image,price,offerPrice, isFavorite}) => {
  return (
    <>
      <Link href={"/product"}>
        <div className="w-full h-52 rounded-md bg-gray-200 text-gray-800 flex flex-col gap-2 justify-between items-center m-auto p-2 hover:shadow-slate-800 shadow-md">
          <span className="w-full text-right">
            <FontAwesomeIcon icon={faHeart} className="text-gray-500 hover:text-red-500"/>
          </span>
          <Image src={image} alt="" width={96} height={96}/>
          <p className="text-xs font-bold text-center">{name}</p>
          <div className="w-full flex justify-between font-semibold">
            {
              offerPrice &&
              <p className="line-through">
                ${offerPrice}
              </p>
            }
            <p>${price}</p>
          </div>
        </div>
      </Link>
    </>
  )
};

export default Card