import React, { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Selected from '../SelectedPlayers/Selected';

const Cart = ({cart}) => {
   const total = cart.reduce((account, current) =>account + parseInt(current.salary), 0);
  return (
    <div>
    <div className="cardDisplay position-fixed">
    <div class="card mt-2 ml-2" style={{width: "18rem"}}>
    <div class="card-body">
    <h5 class="card-title text-center">Team Summary</h5>
    <p class="card-text text-center">Players Selected:{cart.length}</p>
    {
      cart.map(name => <Selected selected={name}></Selected>)
    }
    <p className="text-center">Total Budget: ${total}</p>
    <a href="#" className="btn btn-primary ml-5">Confirm Team</a>
      </div>
   </div>
    </div>
    </div>
  );
};

export default Cart;