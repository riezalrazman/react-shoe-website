import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import {Routes, Route} from 'react-router-dom'
import CheckOut from './CheckOut'
import SearchResults from "./SearchResults";
import { ProductShowcase } from "./ProductShowcase";

function App() {
  return (
    <div >
      <Routes>
        <Route path ='/' element={
          <>
          <Header />
          <Home />
          <Footer/>
          </>
        } />

        <Route path ='/checkOut' element={
          <>
          <Header />
          <CheckOut />
       
          </>
        } />

        <Route path ='/search-results' element={
          <>
          <Header />
          <SearchResults />
        
          </>
        } />

        <Route path ='/product-showcase:id' element={
          <>
          <Header />
          <ProductShowcase />
          <Footer/>
          </>
        } />

      </Routes>
    
    
    </div>
  );
}

export default App;
