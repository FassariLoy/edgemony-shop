import { useState, useEffect } from "react";

import { fetchProducts, fetchCategories } from "./../services/api";

import Hero from "./../components/Hero";
import ListCard from "./../components/ListCard";
import Loader from "./../components/Loader";
import Error from "./../components/Error";

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

function Home () {
  const [ products, setProducts ] = useState([]);
  const [ categories, setCategories ] = useState([]);
  const [ isLoading, setLoading ] = useState(false);
  const [ apiError, setApiError ] = useState("");
  const [ retry, setRetry ] = useState(false);

  function openProductModal(product) {
    // 16.03 setProductInModal(product);
    // 16.03 setIsOpenProduct(true);
  }
  
  useEffect(() => {
    setLoading(true);
    setApiError("");
    Promise.all([fetchProducts(), fetchCategories()])
      .then(([products, categories]) => {
        setProducts(products);
        setCategories(categories);
      })
      .catch((err) => setApiError(err.message))
      .finally(() => setLoading(false));
  }, [ retry ]);

  return (
    <div>
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
    </div>
    
  )
}

export default Home;