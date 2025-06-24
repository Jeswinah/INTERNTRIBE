import React from "react";

const FilterMenu = ({setCategory}) => {
  const arr = ["All", "Electronics", "Books", "Clothing"];
  return (
    <div className="category-btns">
      {arr.map((value, index) => {
      
       return  <button className='btns' key={index} onClick={()=>setCategory(value)}>{value}</button>;
      })}
    </div>
  );
};

export default FilterMenu;
