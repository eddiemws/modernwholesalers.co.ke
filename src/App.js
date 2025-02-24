import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kids_banner from './Components/Assets/banner_kids.png';

// import all_product from '../Assets/all_product'
// import Item from './Components/Item/Item';

function App() {

  // const[selectedCategory, setSelectedCategory] = useState(null);
  
  //   //input filter
  //   const [query, setQuery] = useState(null);
  
  //   const handleInputChange = event => {
  //     setQuery(event.target.value)
  //   }
  //   const filteredItems = ProductDisplay.filter(product => product.name.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()!==-1));

  //   function filteredData (products, selected, query) {
  //     let filteredProducts = products

  //         //filtering input items
  //         if (query ) {
  //           filteredProducts = filteredItems
  //         }

  //         return filteredProducts.map(({id, image, name,new_price,old_price})=> {
  //           <Item key={i} id={id} name={name} image={image} new_price={new_price} old_price={old_price}/>

  //         });

  //   }
 

  return (
    <div className="App">
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>

      <Navbar/>

      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner = {men_banner} category="men" />}/>
        <Route path='/womens' element={<ShopCategory banner= {women_banner} category="women" />}/>
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid" />}/>
        
        <Route path='/product' element={<Product/>}>
           <Route path=':productId' element={<Product/>}/>
        </Route>

        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignUp/>}/>
      </Routes>
      <Footer/>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
