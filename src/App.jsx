
import { useEffect ,useState } from 'react';
import Footer from './assets/footer';
import Header from './assets/header';
import axios from 'axios';
import Productcard from './assets/productcard';

function App() {
  const[products ,setProducts] =useState([]);
    useEffect(() => {
      axios.get('https://fakestoreapi.com/products').then((res)=> {
        console.log(res.data);
        setProducts(res.data);
      }).catch((err) => {
        console.log(err);
      })
    },[])
  return (
    <>
    <Header/>
    <div className='container'>
      <div  className='row g-4 my-1'>
        {products.map((product) => (
          <div key={product.id} className='col-lg-3 col-md-4 col-sm-6'> 
      <Productcard item={product}/>
      </div>
        )
        )
        }
        
      </div>
      </div>
    <Footer/>
    </>
  )
}

export default App
