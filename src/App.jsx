import { useState , useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ProductCard from './ProductCard'
import Login from './Login'

function App() {
   const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    // const token = localStorage.getItem("token");
const token = "eyJraWQiOiJQbzlIZFNNM1Nlc2E0YWREYlJMYXdOSU54WDFGeWcwN1pRTnkzVUZQOUVZIiwiYWxnIjoiSFMyNTYifQ.eyJzdWIiOiJuaXRoeWFAZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiZXhwIjoxNzkyNDExMDY3LCJpYXQiOjE3OTI0MDc0Njd9.IO-pOrCj1BYMu-dIF4gZSEcisLgNeHbC2OCGhP4NyYo";
        if (!token) {
          throw new Error("Please log in to view products.");
        }
    fetch(`${API_BASE_URL}/api/products` , 
      {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
      .then(response => response.json())
      .then(data => {
        setProducts(data.content);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
     
   
    <div>
        <h1>My Ecommerce Store</h1>
    {products.map(product =>{
       return <ProductCard  name={product.name} price={product.price} category={product.categoryName} description={product.description}/>
     })}
    </div>
    
  )
}

export default App
