import {FC} from "react";
import ProductCard from "../../components/product/ProductCard";
import BottomMenu from "../../components/templates/BottomMenu";
import TopMenu from "../../components/templates/TopMenu";

const ProductPage:FC = () => {
  return(
    <>
      <div className="w-full max-w-screen-sm p-4 bg-gray-100">
        <TopMenu/>
          <ProductCard name="Sushi" price="199.00" image="https://pngimg.com/uploads/sushi/sushi_PNG9217.png"/>
        <BottomMenu/>
      </div>
    </>
  )
}

export default ProductPage;