import React from "react";


function Item({ name, category }) {
const[add , setAdd] = React.useState(false);
const appClass = add ? "in-cart" : "";
function addToCart(){
  setAdd((add) => !add);
}
const buttonText = add ? "Remove from Cart" : "Add to Cart";

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={appClass} onClick={addToCart}>{buttonText}</button>
    </li>
  );
}

export default Item;
