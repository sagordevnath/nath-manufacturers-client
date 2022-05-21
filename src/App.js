import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Products from './Pages/Home/Products';
import Login from './Pages/Login/Login';
import Navbar from './Pages/Shared/Navbar';
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
        </Routes>
      </Navbar>
      
    </div>
  );
}

export default App;
