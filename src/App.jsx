
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/home.jsx';
import { Contact } from './pages/contact/contact.jsx';
import { About } from './pages/about/about.jsx';
import { ContextProvider } from './utils/ContextProvider.jsx';
import { Shop } from './pages/shop/shop.jsx';
import { ProductDetails } from './pages/productDetails/productDetails.jsx';
import { Cart } from './pages/cart/cart.jsx';
import { Login } from './pages/login/login.jsx';
import { SignUp } from './pages/signUp/signUp.jsx';


function App() {
    return (
        <>
            <ContextProvider>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/shop' element={<Shop />} />
                    <Route path='/shop/:id' element={<ProductDetails />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signUp' element={<SignUp />} />
                </Routes>
            </ContextProvider>
        </>
    );
}

export default App;
