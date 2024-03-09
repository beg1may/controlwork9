import React, {useState} from 'react';
import {FinanceMutation} from '../../types';

interface Props {
  onSubmit: (dish: { price: number; type: string; category: string }) => void;
  existingFinance?: FinanceMutation;
  isEdit?: boolean;
}

const initialState: FinanceMutation = {
  type: '',
    category: '',
  price: '',
};

const AddForm: React.FC<Props> = ({onSubmit, existingFinance = initialState, isEdit = false}) => {
  const [finance, setFinance] = useState<FinanceMutation>(existingFinance);

  const changeFinance = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFinance(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    onSubmit({
      ...finance,
      price: parseFloat(finance.price),
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h4>{isEdit ? 'Edit finance' : 'Add new finance'}</h4>
      <div className="form-group">
        <label htmlFor="type">Type</label>
        <select
          name="type"
          id="type"
          className="form-control"
          value={finance.type}
          onChange={changeFinance}
        >
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select
          name="category"
          id="category"
          className="form-control"
          value={finance.category}
          onChange={changeFinance}
        >
            {finance.type === 'Income' && (
                <>
                    <option value="Salary">Salary</option>
                    <option value="Bonus">Bonus</option>
                    <option value="Other Income">Other Income</option>
                </>
            )}
            {finance.type === 'Expense' && (
                <>
                    <option value="Food">Food</option>
                    <option value="Drinks">Drinks</option>
                    <option value="Rental">Rental</option>
                    <option value="Other Expenses">Other Expenses</option>
                </>
            )}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          id="price"
          className="form-control"
          value={finance.price}
          onChange={changeFinance}
        />
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        {isEdit ? 'Update' : 'Create'}
      </button>
    </form>
  );
};

export default AddForm;