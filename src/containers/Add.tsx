import React from 'react';
import AddForm from '../components/AddForm/AddForm';
import {useNavigate} from 'react-router-dom';
import {ApiFinance} from '../types';
import axiosApi from '../axiosApi';

const Add: React.FC = () => {
  const navigate = useNavigate();

  const createFinance = async (dish: ApiFinance) => {
    await axiosApi.post('/finances.json', dish);
    navigate('/');
  };

  return (
    <div className="row mt-2">
      <div className="col-6">
        <AddForm onSubmit={createFinance}/>
      </div>
    </div>
  );
};

export default Add;