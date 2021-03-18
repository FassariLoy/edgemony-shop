import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { postItemToCart, deleteItemFromCart, fetchCart } from './services/api'

import Home from "./pages/Home";
import CartItems from "./pages/CartItems";
import Product from "./pages/Product";
import Page404 from "./pages/Page404";

import Header from "./components/Header";

/*import Modal from "./components/Modal";*/
/*import ProductDetail from "./components/ProductDetail";*/
/*import ModalSidebar from "./components/ModalSidebar";*/
/*import Cart from "./components/Cart";*/

import Loader from "./components/Loader";
import Error from "./components/Error";

import Footer from "./components/Footer";

import "./App.css";

let cartId;

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

/*const fakeProducts = require("./mocks/data/products.json");*/
/*const fakeProducts = "https://fakestoreapi.com/products";*/

function App() {
  // Logic
  
  /*const [ productInModal, setProductInModal ] = useState({});*/
  /*const [ isOpenProduct, setIsOpenProduct ] = useState(false);*/
  /*const [ isOpenCart, setIsOpenCart ] = useState(false);*/
/*
  useEffect(() => {
    if (isOpenProduct || isOpenCart) {
      document.body.style.height = `100vh`;
      document.body.style.overflow = `hidden`;
    } else {
      document.body.style.height = ``;
      document.body.style.overflow = ``;
    }
  }, [ isOpenProduct, isOpenCart ]);
*/
/*
  useEffect(() => {
    if (isOpenCart) {
      document.body.style.height = `100vh`;
      document.body.style.overflow = `hidden`;
    } else {
      document.body.style.height = ``;
      document.body.style.overflow = ``;
    }
  }, [ isOpenCart ]);
*/
  // Cart
  const [ ProductsCart, setProductsCart ] = useState([]);

  const [ isLoading, setLoading ] = useState(false);
  const [ apiError, setApiError ] = useState("");
  const [ retry, setRetry ] = useState(false);
/*
  const cartProducts = ProductsCart.map((cartItem) => {
    // 16.03 products []
    const { price, image, title, id } = [].find(
      (p) => p.id === cartItem.id
    );
    return { price, image, title, id, quantity: cartItem.quantity };
  });
*/
  const cartTotal = ProductsCart.reduce(
    (total, product) => total + product.price * product.quantity, 0);
  
  function isInCart(product) {
    return product != null && ProductsCart.find((p) => p.id === product.id) != null;
  }

/*
  function addToCart(product) {
    setProductsCart([...ProductsCart, { ...product, quantity: 1 }]);
  }

  function removeFromCart(productId) {
    setProductsCart(ProductsCart.filter((product) => product.id !== productId));
  }
*/
  async function updateCart(fn, ...apiParams) {
    try {
      const cartObj = await fn(...apiParams)
      setProductsCart(cartObj.items);        
    } catch (error) {
      console.error(`${fn.name} API call response error! ${error.message}`)
    }
  }
  function addToCart(productId) {
    updateCart(postItemToCart, cartId, productId, 1)
  }
  function removeFromCart(productId) {
    updateCart(deleteItemFromCart, cartId, productId)
  }
  function setProductQuantity(productId, quantity) {
    updateCart(postItemToCart, cartId, productId, quantity)
  }

  // Initial cart fetch from API
  useEffect(() => {
    const cartIdFromLocalStorage = localStorage.getItem('edgemony-cart-id')
    // We fetch only of we have a Cart ID available
    if (cartIdFromLocalStorage) {
      setLoading(true);
      setApiError("");
      async function fetchCartInEffect() {
        try {
          const cartObj = await fetchCart(cartIdFromLocalStorage)
          setProductsCart(cartObj.items)
          cartId = cartObj.id
          setLoading(false);
        } catch (error) {
          //console.error('fetchCart API call response error! ', error.message)
          setLoading(false);
          setApiError(error.message)
        }
      }
      fetchCartInEffect()
    }
  }, [ retry ])

  const emptyCart = () => setProductsCart([]);
 
  /*
  function setProductQuantity(productId, quantity) {
    setProductsCart(
      ProductsCart.map((product) =>
      product.id === productId ? { ...product, quantity } : product
      )
    );  
  }
  */

  return (
    <Router>
      <div className="App">
      
        <Header 
          logo={data.logo}
          title={data.title} 
          
          cartTotal={cartTotal}
          cartSize={ProductsCart.length}
        />
      
        {isLoading 
        ? <Loader /> 
        : apiError 
        ? <Error 
            messageErr={apiError}
            closeBanner={() => setApiError("")}
            retry={() => setRetry(!retry)}
          /> 
        : ("")
        }

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cartitems">
            <CartItems  
              products={ProductsCart}
              cartTotal={cartTotal}
              removeFromCart={removeFromCart}
              emptyCart={emptyCart}
              setProductQuantity={setProductQuantity}
            />  
          </Route>
          <Route path="/product/:productId">
            <Product 
              isInCart={isInCart} 
              addToCart={addToCart} 
              removeFromCart={removeFromCart} 
            />
          </Route>
          <Route path="*">
            <Page404 />
          </Route> 
        </Switch>
        
        <footer>
          <Footer />
        </footer>

      </div>
    </Router>
  );
}

/*
onCartClick={() => ProductsCart.length !== 0 ? setIsOpenCart(true) : setIsOpenCart(false)}
*/

export default App;
