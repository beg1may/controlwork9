import React from 'react';
import CategoriesItem from "./CategoriesItem";
import { Finance } from "../../types";

interface Props {
    finances: Finance[];
    addToCart: (dish: Finance) => void;
    deleteFinance: (id: string) => void;
}

const Categories: React.FC<Props> = ({ finances, addToCart, deleteFinance }) => {
    const totalIncome = finances
        .filter(finance => finance.price > 0)
        .reduce((acc, finance) => acc + finance.price, 0);

    const totalExpenditure = finances
        .filter(finance => finance.price < 0)
        .reduce((acc, finance) => acc - finance.price, 0);

    let overallBalance;

    if (totalIncome > totalExpenditure) {
        overallBalance = totalIncome - totalExpenditure;
    } else {
        overallBalance = totalExpenditure + totalIncome;
    }

    return (
        <>
            <h4>Finance Tracker</h4>
            <div>
                <h5>Total Balance: {overallBalance}</h5>
            </div>
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
