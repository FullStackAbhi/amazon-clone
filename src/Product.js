import React from "react";
import "./Product.css";
import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "./StateProvider";

const Product = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  const addtoBasket = () => {
    dispatch({
        type: 'ADD TO BASKET',
        item: {
            id:id,
            title: title,
            image:image,
            price:price,
            rating:rating
        }
    })
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((arr, i) => (
              <p>
                <StarIcon />
              </p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button onClick={addtoBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
