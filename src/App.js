import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import Register from './components/Register/Register';
import Shop from './components/Shop/Shop';
import Main from './layouts/Main';
import { ProductsAndCartLoader } from './loaders/ProductsAndCartLoader';

function App() {
  const router = createBrowserRouter([
    { 
      path: '/',
      element: <Main></Main>,
      children: [
        { 
          path: '/',
          loader: () => {
            return fetch('products.json')
          },
          element: <Shop></Shop>
        },
        { 
          path: '/shop',
          loader: () => {
            return fetch('products.json')
          },
          element: <Shop></Shop>
        },
        { 
          path: '/orders',
          loader: ProductsAndCartLoader, 
          element: <Orders></Orders>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/inventory',
          element: <Inventory></Inventory>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    },
    
  ])
  return (
    <div>
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
