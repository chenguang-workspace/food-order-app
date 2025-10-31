import { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  let cartContent = null;
  if (cartIsShown) {
    // cartContent = <Cart />;
    cartContent = <div>Cart is shown</div>;
  }

  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
      {cartContent}
    </CartProvider>
  );
}

export default App;
