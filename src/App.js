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
            
              
          <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path='/purchase/:id' element={<PrivateRoute><Purchase /></PrivateRoute>} />
          {/* <Route path = '/product/:id' element = {<Purchase />}></Route> */}

          
          {/* <Route path = '/purchase' element = {<Purchase />}></Route> */}
        

        <Route path='dashboard' element={<Dashboard />}>
          {/* root/dashboard/add-admin */}
          <Route path='my-order' element={<MyOrder />} />
          {/* root/dashboard/add-service */}
          <Route path='add-review' element={<AddReview />} />
          <Route path='my-profile' element={<MyProfile />} />
        </Route>
        
        </Routes>

      </Navbar>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
