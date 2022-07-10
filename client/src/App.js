import "./App.css";
import TopBar from './components/TopBar'
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import About from "./components/About";
import Contact from "./components/Contact";
import Policy from "./components/Policy";
import NavBar from "./components/NavBar";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import Register from "./screens/Register";
import Login from "./screens/Login";
import OrderScreen from "./screens/OrderScreen";
import AdminScreen from "./screens/AdminScreen";

//Admin realted component
import AddNewProduct from './components/Admin/AddNewProduct';
import OrderList from './components/Admin/OrderList';
import Productslist from './components/Admin/Productslist';
import Userlist from './components/Admin/Userlist';
import EditProduct from "./components/Admin/EditProduct";


const App =() =>
{
 return (
    <Router>
    <TopBar />
    <NavBar />
    <Routes>
    
    <Route path="/register" element={<Register/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/order" element={<OrderScreen/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/cart" element={<CartScreen/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/policy" element={<Policy/>} />
    <Route path="/" element={<HomeScreen/>} />

    //Admin related Route
    <Route path="/admin" element={<AdminScreen/>} />
    <Route path="/admin/productlist" element={<Productslist/>} />
    <Route path="/admin/orderlist" element={<OrderList/>} />
    <Route path="/admin/addnewproduct" element={<AddNewProduct/>} />
    <Route path="/admin/userlist" element={<Userlist/>} />
    <Route path="/admin/editproduct/:productId" 
    element={<EditProduct/>} />
   
    </Routes>
    </Router>
  );
}

export default App;
