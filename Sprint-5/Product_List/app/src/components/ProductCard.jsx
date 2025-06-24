import React from "react";

const ProductCard = ({ filteredarr }) => {
 
    
  return (
    <>
      {filteredarr.map(({ name, price, category }) => {
        const cat=category=="Electronics"?'el':category=="Books"?'bk':category=="Clothing"?'ck':'card'
        
        return (
          <div className={cat} key={name}>
            <h4>Name :{name}</h4>
            <h5>Price :{price}</h5>
            <h5>Category :{category}</h5>
          </div>
        );
      })}
    </>
  );
};

export default ProductCard;
