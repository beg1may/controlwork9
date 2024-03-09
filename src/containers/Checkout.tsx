import React from 'react';
import {Link, Navigate, Outlet} from 'react-router-dom';
import CartFinances from "../components/Cart/CartFinances";

const Checkout: React.FC = ({cartFinances: cartFinances}) => {
  if (cartFinances.length === 0) {
    return <Navigate to="/"/>;
  }

  return (
    <div className="row mt-2">
      <div className="m-auto" style={{width: '500px'}}>
        <h4>Checkout</h4>
        <CartFinances cartFinances={cartFinances} />
        <div className="d-flex gap-2">
          <Link className="btn btn-danger" to="/">Cancel</Link>
          <Link className="btn btn-primary" to="continue">Continue</Link>
        </div>
        <Outlet/>
      </div>
    </div>
  );
};

export default Checkout;