import './App.css';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";


const App = () => {

  return (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/products/:category" element={<ProductList/>}/>
      <Route path="/product/:id" element={<Product/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/login" element={window.localStorage.token ? <Navigate to="/"/> : <Login/> }/>
      <Route path="/register" element={window.localStorage.token ? <Navigate to="/"/> : <Register/> }/>


    </Routes>
  </BrowserRouter>
  );
}

export default App;
