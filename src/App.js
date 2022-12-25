import { useEffect, useState } from "react";
import "./App.css";
const App = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();

    if (data && data.products) {
      setProducts(data.products);
    }
  };
  console.log(products);
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {products.length > 0 && (
        <div className="products">
          {products.map((product) => {
            return (
              <span key={product.id} className="products__single">
                <img src={product.thumbnail} alt={product.title} />
                <span>{product.title}</span>
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
