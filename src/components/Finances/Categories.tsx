import React from 'react';
import CategoriesItem from "./CategoriesItem";
import {Finance} from "../../types";

interface Props {
  finances: Finance[];
  addToCart: (dish: Finance) => void;
  deleteFinance: (id: string) => void;
}

const Categories: React.FC<Props> = ({finances, addToCart, deleteFinance}) => {
    return (
    <>
      <h4>Finance Tracker</h4>
      {finances.map(finance => (
        <CategoriesItem
          key={finance.id}
          finance={finance}
          addToCart={() => addToCart(finance)}
          onDelete={() => deleteFinance(finance.id)}
        />
      ))}
    </>
  );
};

export default Categories;