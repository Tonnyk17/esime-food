import {FC} from "react";
import ProductCard from "../../components/product/ProductCard";
import BottomMenu from "../../components/templates/BottomMenu";
import TopMenu from "../../components/templates/TopMenu";

const ProductPage:FC = () => {
  return(
    <>
      <TopMenu/>
        <ProductCard/>
      <BottomMenu/>
    </>
  )
}

export default ProductPage;