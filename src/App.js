import { useState, useEffect } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Error from "./components/Error";

import "./App.css";

/*const fakeProducts = require("./mocks/data/products.json");*/

const fakeProducts = "https://fakestoreapi.com/product";

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
  const [ isLoading, setLoading ] = useState(false);
  const [ isError, setError ] = useState(false);

  useEffect(() => {
    /*console.log("useEffect");*/
    setLoading(true);
    setError(false);

    fetch(fakeProducts)
      .then((response) => response.json())
      .then((callApi) => {
        /*console.log(callApi)*/
        data.products = callApi;
        setCallApi(callApi);
        setLoading(false);
      })
      
      .catch(() => {
        setLoading(false);
        setError(true);
        //let strError = response;
      });
      
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Header 
          logo={data.logo}
       />
      </header>
        
      <main>
        <Hero 
          title={data.title} 
          description={data.description} 
          cover={data.cover} 
        />
        <div >
        { !isLoading ?
            <Card 
              products={data.products}
            /> 
          : 
            <Loader />
        }
        { isError && <Error /> }
        </div>
      </main>
      
      <footer>
        <Footer />
      </footer>
    
    </div>
  );
}

export default App;
