import React from 'react';
import {CartFinance} from "../../types";

interface Props {
  cartFinance: CartFinance;
}

const CartItem: React.FC<Props> = ({cartFinance}) => {
  const price = cartFinance.finance.price * cartFinance.amount;

  return (
    <div className="card mb-2 p-2">
      <div className="row align-items-center">
        <div className="col">{cartFinance.finance.type}</div>
        <div className="col-2">x{cartFinance.amount}</div>
        <div className="col-3 text-right">
          {price} KGS
        </div>
      </div>
    </div>
  );
};

export default CartItem;