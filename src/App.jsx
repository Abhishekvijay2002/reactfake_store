
import { useEffect ,useState } from 'react';
import Footer from './assets/footer';
import Header from './assets/header';
import axios from 'axios';
import Productcard from './assets/productcard';
import ReactLoading from 'react-loading';

function App() {
  const[products ,setProducts] =useState([]);
  const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      axios.get('https://fakestoreapi.com/products').then((res)=> {
        setProducts(res.data);
        setIsLoading(false);

      }).catch((err) => {
       <p>{err}</p>
       setIsLoading(false);
      })
    },[])
  return (
    <>    
    <Header/>
    <div className='container'>
    
      {isLoading ? ( <div className='d-flex justify-content-center align-items-center' style={{ height: 'calc(100vh - 245px)' }}><ReactLoading type={'spin'} color={`fff`} height={100} width={100} /></div>) :(
      
      <div  className='row g-4 my-1'>
        {products.map((product) => (
          <div key={product.id} className='col-lg-3 col-md-4 col-sm-6'> 
      <Productcard item={product}/>
      </div>
        )
        )
        }
        
      </div>) }

     
     </div>
     <Footer/>
    </>
  )
}

export default App
