import { useState, useEffect } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Selection from "./components/Selection";
import ListCard from "./components/ListCard";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Error from "./components/Error";

import "./App.css";

/*const fakeProducts = require("./mocks/data/products.json");*/

const fakeProducts = "https://fakestoreapi.com/products";

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
  const [ callApi, setCallApi ] = useState([]);
  const [ isLoading, setLoading ] = useState(true);
  const [ isError, setError ] = useState(false);
  
  //Banner Error
  const [ retry, setRetry ] = useState(false)
  const [ CloseBanner, setCloseBanner ] = useState(false)
  
  // Filtri + Nm Prodotti
  const [ serch, setSerch ] = useState("");
  const [ Electronics, setElectronics ] = useState(false);
  const [ Jewelery, setJewelery ] = useState(false);
  const [ MenClothing, setMenClothing ] = useState(false);
  const [ WomenClothing, setWomenClothing ] = useState(false);

  const [ nmProducts, setNmProducts ] = useState(Number)
 
  useEffect(() => {
    /*console.log("useEffect");*/
    setLoading(true);
    setError(false);
    setRetry(false);

    fetch(fakeProducts)
      .then((response) => response.json())
      .then((dataApi) => {
        data.products = dataApi;
        setCallApi(dataApi);
        setLoading(false);
      })
      
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, [ retry ]);

  return (
    <div className="App">
      <header className="App-header">
        <Header 
          logo={data.logo}
          title={data.title} 
       />
      </header>
        
      <main>
        <Hero 
          title={data.title} 
          description={data.description} 
          cover={data.cover} 
        />

        <div >
          { !isLoading 
            ? <div>
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
                />
             
              </div>
              
            : <Loader />
          }

          { isError && <Error setRetry={setRetry} CloseBanner={CloseBanner} setCloseBanner={setCloseBanner} /> }
        </div>
      </main>
      
      <footer>
        <Footer />
      </footer>
    
    </div>
  );
}

export default App;
