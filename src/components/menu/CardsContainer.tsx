import { FC } from "react";
import Card from "./Card";

export const CardsContainer: FC = () => {
  return (
    <>
      <div className="w-full grid gap-4 grid-cols-2 mb-20 mt-10">
          <Card 
            name="Sushi"
            image="https://pngimg.com/uploads/sushi/sushi_PNG9217.png"
            price="200"
            offerPrice="400"
          /> 
           <Card 
            name="Sushi"
            image="https://pngimg.com/uploads/sushi/sushi_PNG9217.png"
            price="200"
          /> 
           <Card 
            name="Sushi"
            image="https://pngimg.com/uploads/sushi/sushi_PNG9217.png"
            price="200"
          /> 
           <Card 
            name="Sushi"
            image="https://pngimg.com/uploads/sushi/sushi_PNG9217.png"
            price="200"
          />  
           <Card 
            name="Sushi"
            image="https://pngimg.com/uploads/sushi/sushi_PNG9217.png"
            price="200"
          />  
           <Card 
            name="Sushi"
            image="https://pngimg.com/uploads/sushi/sushi_PNG9217.png"
            price="200"
          />  
           <Card 
            name="Sushi"
            image="https://pngimg.com/uploads/sushi/sushi_PNG9217.png"
            price="200"
          />  
           <Card 
            name="Sushi"
            image="https://pngimg.com/uploads/sushi/sushi_PNG9217.png"
            price="200"
          />  
           <Card 
            name="Sushi"
            image="https://pngimg.com/uploads/sushi/sushi_PNG9217.png"
            price="200"
          />  
           <Card 
            name="Sushi"
            image="https://pngimg.com/uploads/sushi/sushi_PNG9217.png"
            price="200"
          />  
      </div>
    </>
  )
};

export default CardsContainer;