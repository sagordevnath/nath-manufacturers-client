import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './Authentication/PrivateRoute';
import Blogs from './Pages/Blogs/Blogs';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Products from './Pages/Home/Products';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
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
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='*' element={<NotFound />} />

        {/* Private Route */}
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>

        <Route path='/dashboard' element={<Dashboard />}>
          {/* root/dashboard/add-admin */}
          {/* <Route path='add-admin' element={<AddAdmin />} /> */}
          {/* root/dashboard/add-service */}
          {/* <Route path='add-service' element={<AddService />} /> */}
        </Route>
        
        </Routes>

      </Navbar>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
