import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ProductsPage from './features/products/ProductsPage';
import CartPage from './features/cart/CartPage';
import "animate.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<ProductsPage />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;