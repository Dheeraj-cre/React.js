import React,{ useState } from 'react'
import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom'
import ProductRegistration from './ProductRegistration.jsx'
import ProductList from './ProductList.jsx'

function App() 
{
  /*--- creating a state variable of array type to store the products ----*/
  const [products,setProducts] = useState([])   //empty array of products

  /*--- defining a function to update the state variable ----*/
  function addProducts(product)
  {
    //inserting new item in products state variable
    setProducts([...products,product])
  }

  /*--- UI designing ---*/
  return (
    <Router>
            <div>
              {/*---- Creating a navigation bar or menu bar ----*/}
              <nav style={{backgroundColor:"blue" , padding:"10px"}}>
                 <Link to="/addProduct" style ={{marginRight : "10px",fontWeight:"bold",color:"white",textDecoration:"none"}}>Add Product</Link>
                 <Link to="/productlist" style ={{marginRight : "10px",fontWeight:"bold",color:"white",textDecoration:"none"}}>Product List</Link>
              </nav>

              {/*--- Defining the routes of each Link ----*/}
              <Routes>
                <Route path ="/addProduct" element = {<ProductRegistration addProducts = {addProducts} />} />
                <Route path= "/productlist" element = {<ProductList productlist = {products} />} />
              </Routes>

                {/*--- Product Registration Component ---*/}
                
                {/*---- Product List Component ----*/}
                
            </div>
    </Router>
    )
}

export default App
