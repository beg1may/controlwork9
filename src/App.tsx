import Appbar from "./components/Appbar/Appbar";
import {useCallback, useEffect, useState} from 'react';
import {ApiFinances, CartFinance, Finance} from './types';
import Home from './containers/Home';
import Add from './containers/Add';
import {Route, Routes, useLocation} from 'react-router-dom';
import Checkout from './containers/Checkout';
import Order from './components/Cart/Order';
import axiosApi from './axiosApi';
import EditFinance from './containers/EditFinance';
import Categories from "./containers/Categories";

function App() {
  const location = useLocation();
  const [finances, setFinances] = useState<Finance[]>([]);
  const [cartFinances, setCartFinances] = useState<CartFinance[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchFinances = useCallback(async () => {
    try {
      setLoading(true);
      const {data: finances} = await axiosApi.get<ApiFinances | null>('/finances.json');

      if (!finances) {
        setFinances([]);
        return;
      }

      const newFinances = Object.keys(finances).map(id => ({
        id,
        ...finances[id],
      }));

      setFinances(newFinances);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      void fetchFinances();
    }
  }, [location.pathname, fetchFinances]);

  const addFinanceToCart = (finance: Finance) => {
    setCartFinances((prevState) => {
      const existingIndex = prevState.findIndex(cartItem => {
        return cartItem.finance.id === finance.id;
      });

      if (existingIndex !== -1) {
        const itemsCopy = [...prevState];
        const itemCopy = {...itemsCopy[existingIndex]};
        itemCopy.amount++;
        itemsCopy[existingIndex] = itemCopy;
        return itemsCopy;
      } else {
        return [...prevState, {finance: finance, amount: 1}];
      }
    });
  };

  return (
    <>
      <header>
        <Appbar />
      </header>
      <main className="container-fluid">
        <Routes>
          <Route path="/" element={(
            <Home
              fetchFinances={fetchFinances}
              financesLoading={loading}
              finances={finances}
              addToCart={addFinanceToCart}
              cartFinances={cartFinances}
            />
          )} />
          <Route path="/categories" element={(
              <Categories
                  fetchFinances={fetchFinances}
                  financesLoading={loading}
                  finances={finances}
                  addToCart={addFinanceToCart}
                  cartFinances={cartFinances}
              />
          )}/>
          <Route path="/add" element={(
            <Add />
          )}/>
          <Route path="/edit-finances/:id" element={(
            <EditFinance />
          )} />
            <Route path="continue" element={(
              <Order cartFinances={cartFinances}/>
            )}/>
          <Route path="*" element={<h1>Not found!</h1>}/>
        </Routes>
      </main>
    </>
  )
}

export default App
