import React from 'react';
import { Finance } from "../../types";
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

interface Props {
  finance: Finance;
  onDelete: React.MouseEventHandler;
}

const CategoriesItem: React.FC<Props> = ({ finance, onDelete }) => {
      const now = new Date();
      const createdAt = now.toISOString();

  const renderFinanceItem = () => {
    return(
      <span>{dayjs(createdAt).format('DD.MM.YYYY HH:mm:ss')}</span>
    )
  };

  return (
      <div className="card mb-2">
        <div className="row g-0 fs-4">
          <div className="col-sm-12 d-flex justify-content-between">
            <div className="card-body d-flex">
            {renderFinanceItem()}
            <h4 className="card-text small ms-3 pt-2">{finance.category}</h4>
            </div>
            <div className="d-flex p-2">
              <p className={`card-text m-0 me-3 ${finance.type === 'Expense' ? 'text-danger' : 'text-success'}`}>
                {finance.type === 'Expense' ? '-' : '+'} {finance.price} KGS
              </p>
              <Link to={'/edit-dish/' + finance.id} className="me-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="35" fill="currentColor"
                     className="bi bi-pencil-square" viewBox="0 0 16 16">
                  <path
                      d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                  <path fill-rule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                </svg>
              </Link>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="35" fill="currentColor"
                   className="bi bi-trash3-fill" viewBox="0 0 16 16" onClick={onDelete}>
                <path
                    d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
  );
};

export default CategoriesItem;