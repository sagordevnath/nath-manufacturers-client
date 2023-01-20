import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './Authentication/PrivateRoute';
import Blogs from './Pages/Blogs/Blogs';
import AddReview from './Pages/Dashboard/AddReview';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder';
import MyProfile from './Pages/Dashboard/MyProfile';
import Home from './Pages/Home/Home';
import Products from './Pages/Home/Products';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import NotFound from './Pages/Shared/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import AddProduct from './Pages/Dashboard/AddaProduct';
import Payment from './Pages/Dashboard/Payment';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {  
  useEffect(()=> {
    AOS.init({
      duration: 1500
    });
  },[])
  
  return (
    <div className='lg:w-full'>
      {/* <Navbar  className='max-w-7xl mx-auto'> */}
      <Routes>
          {/* Public Route */}
          {/* <Route path='/' element={<Home />} /> */}
          {/* <Route path='/products' element={<Products />} />  */}
          {/* <Route path='/blogs' element={<Blogs />} />           */}
          <Route path='/' element={<Login />} />
          {/* <Route path='/myPortfolio' element={<MyPortfolio />} />           */}
          <Route path='/signup' element={<SignUp />} />
          <Route path='*' element={<NotFound />} />

        {/* Private Route */}      
          {/* <Route path='/purchase/:id' element={<PrivateRoute><Purchase /></PrivateRoute>} /> */}
{/*         
          <Route path='dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>}>          
            <Route index path='my-profile' element={<MyProfile />}></Route>
            <Route path='my-order' element={<MyOrder />}></Route> 
            <Route path='payment/:id' element = {<Payment />}></Route>         
            <Route path='add-review' element={<AddReview />}></Route>            
            <Route path='manage-all-orders' element={<ManageAllOrders />}></Route>
            <Route path='addProduct' element={<AddProduct />}></Route>
            <Route path='makeAdmin' element={<MakeAdmin />}></Route>
            <Route path='manageProducts' element={<ManageProducts />}></Route>
          </Route>         */}
        </Routes>   
      {/* <Footer></Footer> */}
      {/* </Navbar> */}
      <ToastContainer />      
      
    </div>
  );
}

export default App;
