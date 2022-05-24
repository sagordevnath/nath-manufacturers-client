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
import AdminRoute from './Authentication/AdminRoute';
import AddProduct from './Pages/Dashboard/AddaProduct';
// import Navbar from './Pages/Shared/Navbar';

function App() {  
  
  return (
    <div>
      <Navbar>
        <Routes>
          {/* Public Route */}
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} /> 
          <Route path='/blogs' element={<Blogs />} />          
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='*' element={<NotFound />} />

        {/* Private Route */}
            
              
          {/* <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} /> */}
          <Route path='/purchase/:id' element={<PrivateRoute><Purchase /></PrivateRoute>} />
          {/* <Route path = '/product/:id' element = {<Purchase />}></Route> */}

          
          {/* <Route path = '/purchase' element = {<Purchase />}></Route> */}
        

        <Route path='dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>}>          
          <Route index path='my-profile' element={<MyProfile />}></Route>
          <Route path='my-order' element={<MyOrder />}></Route>          
          <Route path='add-review' element={<AddReview />}></Route>
          {/* <Route path='manage-all-orders' element={<AdminRoute><ManageAllOrders /></AdminRoute>}></Route>
          <Route path='addProduct' element={<AdminRoute><AddProduct /></AdminRoute>}></Route>
          <Route path='makeAdmin' element={<AdminRoute><MakeAdmin /></AdminRoute>}></Route>
          <Route path='manageProducts' element={<AdminRoute><ManageProducts /></AdminRoute>}></Route> */}
          <Route path='manage-all-orders' element={<ManageAllOrders />}></Route>
          <Route path='addProduct' element={<AddProduct />}></Route>
          <Route path='makeAdmin' element={<MakeAdmin />}></Route>
          <Route path='manageProducts' element={<ManageProducts />}></Route>
        </Route>
        
        </Routes>

      </Navbar>
      <Footer></Footer>
      <ToastContainer />      
      
    </div>
  );
}

export default App;
