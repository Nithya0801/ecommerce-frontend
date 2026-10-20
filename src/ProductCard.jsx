import {useState} from 'react'
function ProductCard(props) {

    const[quantity, setQuantity] = useState(0);
    function addToCart(){
        setQuantity(quantity + 1);
    }
    function removeFromCart(){
        if(quantity > 0)
        setQuantity(quantity - 1);
    }
    return (
        <div className="product-card">
            <h1>{props.category}</h1>
              <h2>{props.name}</h2>
      <p>{props.description}</p>
      <h3>₹{props.price}</h3>
      <button onClick={addToCart}>Add to Cart</button> &nbsp;
       <button onClick={removeFromCart}>Remove from Cart</button>
      <p>Quantity: {quantity}</p>
      <p>Total: ₹{(props.price * quantity)}</p>
        </div>
    );
}

export default ProductCard;