import React from 'react';
import {Finance} from '../types';
import Spinner from '../components/Spinner/Spinner';
import axiosApi from '../axiosApi';
import CategoriesAdd from "../components/Finances/CategoriesAdd";

interface Props {
    fetchFinances: () => Promise<void>;
    financesLoading: boolean;
    finances: Finance[];
    addToCart: (finance: Finance) => void;
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
            <div className="col-12">
                {financesLoading ? <Spinner/> : (
                    <CategoriesAdd
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