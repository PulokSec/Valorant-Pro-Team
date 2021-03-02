import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Selected = ({selected}) => {
  const {first_name,salary} = selected;
  return (
    <div className="d-flex align-items-center justify-content-center">
      <p>{first_name}</p>
      <p className="pl-5">Salary: ${salary}</p>
    </div>
  );
};

export default Selected;