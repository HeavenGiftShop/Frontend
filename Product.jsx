import {
    Link,
    Box
  } from "@mui/material";
  import "./Products.css";
  import React from "react";
  
  import * as ROUTES from "../../constants/routes";
  
  import { useState } from "react";

  
  
  const ProductPage = () => {

    useEffect(() => {
      fetch('/api/product') 
        .then(response => response.json())
        .then(data => {
          setCartItems(data.cartItems);
          setTotal(data.total);
        })
        .catch(error => console.error('There is no product to show',error));
    }, []);
 

    const [filteredProducts, setFilteredProducts] = useState(products);
    const [ setSortOrder] = useState("lowToHigh");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [cart, setCart] = useState([]);
    
    const addToCart = (product) => {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
      // Implement the logic to add the product to the cart
      console.log("Product added to cart:", product);
      console.log("Updated Cart:", updatedCart);
    };
  
    const sortProducts = (order) => {
      const sorted = [...filteredProducts].sort((a, b) => {
        const priceA = parseFloat(a.price.replace("$", ""));
        const priceB = parseFloat(b.price.replace("$", ""));
        return order === "lowToHigh" ? priceA - priceB : priceB - priceA;
      });
  
      setFilteredProducts(sorted);
      setSortOrder(order);
    };
  
    const filterByPriceRange = () => {
      const filtered = products.filter((product) => {
        const price = parseFloat(product.price.replace("$", ""));
        return (
          (!minPrice || price >= parseFloat(minPrice)) &&
          (!maxPrice || price <= parseFloat(maxPrice))
        );
      });
  
      setFilteredProducts(filtered);
    };
  
    const clearFilters = () => {
      setFilteredProducts(products); // Initialize with the original 'products' array
      setSortOrder("lowToHigh");
      setMinPrice("");
      setMaxPrice("");
    };
  
    
    return (
      <div className="product-container">
        <h1>Our Products</h1>
        <div className="filter-options">
          <div>
            <button onClick={filterByPriceRange}>Apply Filter</button>
            <button onClick={clearFilters}>Clear Filters</button>
          </div>
        </div>
        <div className="filter-options" style={{ justifyContent: "center" }}>
          <div>
            <button onClick={() => sortProducts("lowToHigh")}>
              Sort: Low to High
            </button>
          </div>
        </div> 
        
        <div className="product-cards">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
             <img src={product.image} alt={product.name} />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">{product.price} $</p>
              <button
                className="add-to-cart-button"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <div>
        <Box item>
          <button>
            <Link  href={ROUTES.CART} variant="body2"
             style={{ textDecoration: "none", color: "black" }} to="/cart">
              View Cart
            </Link>
          </button>
          </Box>
        </div>
      </div>
    );
  };
  export default ProductPage;
