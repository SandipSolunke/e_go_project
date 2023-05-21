import About from './About';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Testimonials from './Testimonials';
import Faq from './Faq';
import Contact from './Contact';
import './Contact.css'
import Payment from './Payment';
import Login from './Login';
import Signup from './Signup';
import Products from './Products';
import Cart from './Cart';
import PaymentPage from './Wrapper';
import Locate from './Locate'
import UnlockBike from './UnlockBike';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/testimonials' element={<Testimonials/>}/>
            <Route path='/faqs' element={<Faq/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/:product/payment' element={<Payment/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/locate_bike' element={<Locate/>}/>
            <Route path='/unlock_bike' element={<UnlockBike/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
