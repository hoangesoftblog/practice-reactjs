import React from "react";

const Product = () => {
  const [state, setState] = React.useState(true);
  return (
    <div className="details">
        <div className="big-img">
            <img src="/images/Aventador.png" alt=""></img>
        </div>

        <div className="box">
            <div className="row">
                <h2>Aventador</h2>
                <span>1.000.000 $</span>
            </div>
            <p>Product description</p>
            <button className="cart">Add to cart</button>
        </div>
    </div>
  );
};

export default Product;
