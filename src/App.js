import './App.css'
import About from './components/About/About';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Testimonial from './components/Testimonial/Testimonial';

const App = () => {
  return (
    <div className='App'>
      <Home/>
      <About/>
      <Products/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      
    </div>
  );
};

export default App;