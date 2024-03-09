import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {ApiFinance} from '../types';
import axiosApi from '../axiosApi';
import AddForm from '../components/AddForm/AddForm';

const EditFinance: React.FC = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [finance, setFinance] = useState<ApiFinance | null>(null);

  const fetchOneFinance = useCallback(async () => {
    const {data: editedFinance} = await axiosApi.get<ApiFinance | null>('/finances/' + id + '.json');

    if (!editedFinance) {
      navigate('/404', {replace: true});
    } else {
      setFinance(editedFinance);
    }
  }, [id, navigate]);

  useEffect(() => {
    void fetchOneFinance();
  }, [fetchOneFinance]);

  const updateFinance = async (finance: ApiFinance) => {
    await axiosApi.put('/finances/' + id + '.json', finance);
    navigate('/');
  };

  const existingFinance = finance && {
    ...finance,
    price: finance.price.toString(),
  };

  return (
    <div className="row mt-2">
      <div className="col">
        {existingFinance && (
          <AddForm onSubmit={updateFinance} isEdit existingFinance={existingFinance}/>
        )}
      </div>
    </div>
  );
};

export default EditFinance;