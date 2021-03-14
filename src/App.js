import { useState, useEffect } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";

import ListCard from "./components/ListCard";
import ShowModalProduct from "./components/ShowModalProduct";
import ShowModalCart from "./components/ShowModalCart";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Error from "./components/Error";
import { fetchProducts, fetchCategories } from "./services/api";

import "./App.css";

/*const fakeProducts = require("./mocks/data/products.json");*/

/*const fakeProducts = "https://fakestoreapi.com/products";*/

const data = {
  title: "Edgemony Shop",
  description: "A fake e-commerce with a lot of potential",
  logo:
    "https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png",
  cover:
    "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  /*products: fakeProducts,*/
  /*products: [],*/
};

function App() {
  // Logic
  const [ productInModal, setProductInModal ] = useState({});
  const [ isOpenProduct, setIsOpenProduct ] = useState(false);
  const [ isOpenCart, setIsOpenCart ] = useState(false);
  
  function openProductModal(product) {
    /*console.log(product);*/
    setProductInModal(product);
    setIsOpenProduct(true);
  }

  useEffect(() => {
    if (isOpenProduct || isOpenCart) {
      document.body.style.height = `100vh`;
      document.body.style.overflow = `hidden`;
    } else {
      document.body.style.height = ``;
      document.body.style.overflow = ``;
    }
  }, [ isOpenProduct, isOpenCart ]);

  // API
  const [ products, setProducts ] = useState([]);
  const [ categories, setCategories ] = useState([]);
  const [ isLoading, setLoading ] = useState(false);
  const [ apiError, setApiError ] = useState("");
  const [ retry, setRetry ] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    setApiError("");
    Promise.all([fetchProducts(), fetchCategories()])
      .then(([products, categories]) => {
        // 08.03 setProducts(products);*/ 
        setProducts(products);
        setCategories(categories);
      })
      .catch((err) => setApiError(err.message))
      .finally(() => setLoading(false));
  }, [ retry ]);

  // Cart
  const [ ProductsCart, setProductsCart ] = useState([]);

  const cartProducts = ProductsCart.map((cartItem) => {
    const { price, image, title, id } = products.find(
      (p) => p.id === cartItem.id
    );
    return { price, image, title, id, quantity: cartItem.quantity };
  });

  const cartTotal = cartProducts.reduce(
    (total, product) => total + product.price * product.quantity, 0);
 
  function isInCart(product) {
    return product != null && ProductsCart.find((p) => p.id === product.id) != null;
  }
 
  function addToCart(productId) {
    setProductsCart([...ProductsCart, { id: productId, quantity: 1 }]);
  }
 
  function removeFromCart(productId) {
    setProductsCart(ProductsCart.filter((product) => product.id !== productId));
  }

  const emptyCart = () => setProductsCart([]);
  
  function setProductQuantity(productId, quantity) {
    setProductsCart(
      ProductsCart.map((product) =>
      product.id === productId ? { ...product, quantity } : product
    )
  );
}
    
  return (
    <div className="App">
     
      <Header 
        logo={data.logo}
        title={data.title} 
        /*products={data.products}*/
        
        cartTotal={cartTotal}
        cartSize={ProductsCart.length}
        products={products}
        onCartClick={() => ProductsCart.length !== 0 ? setIsOpenCart(true) : setIsOpenCart(false)}
      />
    
      <Hero 
        title={data.title} 
        description={data.description} 
        cover={data.cover} 
      />
        
      <main>
        {isLoading ? ( 
          <Loader /> 
        ) : apiError ? (
          <Error 
            messageErr={apiError}
            closeBanner={() => setApiError("")}
            retry={() => setRetry(!retry)}
          /> 
        ) : (
          <div>
            <ListCard 
              products={products}
              categories={categories}
              openProductModal={openProductModal}
            />
          </div>
        )}
      
      </main>

      <ShowModalCart
        isOpen={isOpenCart}
        products={cartProducts}
        closeModal={() => setIsOpenCart(false)}
        
        cartTotal={cartTotal}
        removeFromCart={removeFromCart}
        emptyCart={emptyCart}
        setProductQuantity={setProductQuantity}
      />
      
      <ShowModalProduct
        isOpen={isOpenProduct}
        product={productInModal}
        closeModal={() => setIsOpenProduct(false)}
       
        inCart={isInCart(productInModal)}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
      
      <footer>
        <Footer />
      </footer>
    
    </div>
  );
}

export default App;