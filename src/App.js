import { useState, useEffect } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Selection from "./components/Selection";
import ListCard from "./components/ListCard";
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
  products: [],
};

function App() {
  //const [ callApi, setCallApi ] = useState([]);

  const [ isLoading, setLoading ] = useState(false);
  //const [ isError, setError ] = useState(false);
  //08.03  
  const [ apiError, setApiError ] = useState("");
  
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  
  //Banner Error
  const [ retry, setRetry ] = useState(false)
  // const [ CloseBanner, setCloseBanner ] = useState(false)
  
  // Filtri + Nm Prodotti
  const [ serch, setSerch ] = useState("");
  const [ Electronics, setElectronics ] = useState(false);
  const [ Jewelery, setJewelery ] = useState(false);
  const [ MenClothing, setMenClothing ] = useState(false);
  const [ WomenClothing, setWomenClothing ] = useState(false);
  const [ nmProducts, setNmProducts ] = useState(Number)

  // Cart
  //const [ ProductsCart, setProductsCart ] = useState([{id: 0, qty:0}]);
  const [ ProductsCart, setProductsCart ] = useState([]);

  useEffect(() => {
    setLoading(true);
    setApiError("");
    Promise.all([fetchProducts(), fetchCategories()])
      .then(([products, categories]) => {
        // 08.03 setProducts(products);*/ 
        data.products=products;
        setCategories(categories);
      })
      .catch((err) => setApiError(err.message))
      .finally(() => setLoading(false));
  }, [ retry ]);

  return (
    <div className="App">
     
      <Header 
        logo={data.logo}
        title={data.title} 
        products={data.products}
        ProductsCart={ProductsCart}
        setProductsCart={setProductsCart}
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
            <Selection 
              serch={serch}
              setSerch={setSerch}
              Electronics={Electronics} 
              setElectronics={setElectronics}
              Jewelery={Jewelery}
              setJewelery={setJewelery}
              MenClothing={MenClothing} 
              setMenClothing={setMenClothing}
              WomenClothing={WomenClothing}
              setWomenClothing={setWomenClothing}
              nmProducts={nmProducts}
            />
            <ListCard 
              serch={serch}
              products={data.products}
              Electronics={Electronics} 
              Jewelery={Jewelery}
              MenClothing={MenClothing} 
              WomenClothing={WomenClothing}
              nmProducts={nmProducts}
              setNmProducts={setNmProducts}
              
              ProductsCart={ProductsCart}
              setProductsCart={setProductsCart}
              
            />
          </div>
        )}
      
      </main>
      
      <footer>
        <Footer />
      </footer>
    
    </div>
  );
}

export default App;