import React from 'react';
import Categories from '../components/Finances/Categories';
import {CartFinance, Finance} from '../types';
import Spinner from '../components/Spinner/Spinner';
import axiosApi from '../axiosApi';

interface Props {
  fetchFinances: () => Promise<void>;
  financesLoading: boolean;
  finances: Finance[];
  addToCart: (finance: Finance) => void;
  cartFinances: CartFinance[];
}

const Home: React.FC<Props> = ({fetchFinances, financesLoading, finances, addToCart}) => {
  const deleteFinance = async (id: string) => {
    if (window.confirm('Do you really want to delete?')) {
      await axiosApi.delete('/finances/' + id + '.json');
      await fetchFinances();
    }
  };

  return (
    <div className="row mt-2">
      <div className="col-10 ms-5">
        {financesLoading ? <Spinner/> : (
          <Categories
            finances={finances}
            addToCart={addToCart}
            deleteFinance={deleteFinance}
          />
        )}
      </div>
    </div>
  );
};

export default Home;