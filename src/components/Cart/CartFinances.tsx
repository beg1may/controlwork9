import React from 'react';
import CartItem from './CartItem';
import {CartFinance} from '../../types';

interface Props {
  cartFinances: CartFinance[];
}

const CartFinances: React.FC<Props> = ({cartFinances}) => {
  const total = cartFinances.reduce((sum, cartFinance) => {
    return sum + cartFinance.finance.price * cartFinance.amount;
  }, 0);

  return (
    <>
      {cartFinances.map(cartFinance => (
        <CartItem
          key={cartFinance.finance.id}
          cartFinance={cartFinance}
        />
      ))}
      <div className="card border-0 p2">
        <div className="row">
          <div className="col text-right">
            Total:
          </div>
          <div className="col-3 text-right">
            <strong>{total}</strong> KGS
          </div>
        </div>
      </div>
    </>
  );
};

export default CartFinances;