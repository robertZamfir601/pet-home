import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Carusel/Carusel';
import Products from './components/Products/Products';
import Pets from './components/Pets/Pets';
import Banner from './components/Banner/Banner';
import Subscription from './components/Subscription/Subscription';
import Reviews from './components/Reviews/Reviews';
import Footer from './components/Footer/Footer';
import Order from './components/Order/Order';
import AOS from "aos";
import "aos/dist/aos.css";

export const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000, 
      easing: "easy-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900
      dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products/>
      <Pets handleOrderPopup={handleOrderPopup} />
      <Banner/>
      <Subscription/>
      <Products/>
      <Reviews/>
      <Footer/>
      <Order orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  )
}

export default App;
