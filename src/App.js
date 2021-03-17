import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import CartItems from "./pages/CartItems";
import Product from "./pages/Product";
import Page404 from "./pages/Page404";

import Header from "./components/Header";

/*import Modal from "./components/Modal";*/
/*import ProductDetail from "./components/ProductDetail";*/
/*import ModalSidebar from "./components/ModalSidebar";*/
/*import Cart from "./components/Cart";*/

import Footer from "./components/Footer";

import "./App.css";

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
/*
  const cartProducts = ProductsCart.map((cartItem) => {
    // 16.03 products []
    const { price, image, title, id } = [].find(
      (p) => p.id === cartItem.id
    );
    return { price, image, title, id, quantity: cartItem.quantity };
  });
*/
//16.03
/*
  const cartTotal = cartProducts.reduce(
    (total, product) => total + product.price * product.quantity, 0);
*/
  const cartTotal = ProductsCart.reduce(
    (total, product) => total + product.price * product.quantity, 0);
  
  function isInCart(product) {
    return product != null && ProductsCart.find((p) => p.id === product.id) != null;
  }

  function addToCart(product) {
    setProductsCart([...ProductsCart, { ...product, quantity: 1 }]);
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
    <Router>
      <div className="App">
      
        <Header 
          logo={data.logo}
          title={data.title} 
          
          cartTotal={cartTotal}
          cartSize={ProductsCart.length}
          
        />
       
        <footer>
          <Footer />
        </footer>

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
      
      </div>
    </Router>
  );
}

/*
onCartClick={() => ProductsCart.length !== 0 ? setIsOpenCart(true) : setIsOpenCart(false)}
*/

export default App;
