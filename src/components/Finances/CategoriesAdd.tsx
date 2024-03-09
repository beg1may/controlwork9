import React from 'react';
import CategoriesItemAdd from "./CategoriesItemAdd";
import {Finance} from "../../types";
import {NavLink} from "react-router-dom";

interface Props {
    finances: Finance[];
    addToCart: (finance: Finance) => void;
    deleteFinance: (id: string) => void;
}

const CategoriesAdd: React.FC<Props> = ({finances, addToCart, deleteFinance}) => {
    return (
        <>
            <div className="d-flex justify-content-between my-2">
                <h4>Categories</h4>
                <button className="btn btn-dark">
                    <NavLink to="/add" className="nav-link">Add</NavLink>
                </button>
            </div>
            {finances.map(finance => (
                <CategoriesItemAdd
                    key={finance.id}
                    finance={finance}
                    addToCart={() => addToCart(finance)}
                    onDelete={() => deleteFinance(finance.id)}
                />
            ))}
        </>
    );
};

export default CategoriesAdd;