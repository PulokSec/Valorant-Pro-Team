import React, { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
const Players = (props) => {
  const {first_name,country,salary,gender,img} = props.players;
  const [isClicked, setIsClicked]= useState();
  return (
  <div className="col-md-3 mt-2 playersDiv">
   <div className="card">
   <img src={img} className="card-img-top" alt=""/>
   <div className="card-body">
   <h5 className="card-title">{first_name}</h5>
   <p className="card-text"><small>{gender}</small></p>
   <p className="card-text"><small>{country}</small></p>
   <p className="card-text">Price : {salary}</p>
   <button  disabled={isClicked} 
                 onClick={() =>  {
                props.handleAddPlayers(props.players)
                setIsClicked(true) 
             }} className="btn btn-primary" ><FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon> Add Player</button>
   </div>
   </div>
  </div>
  );
};

export default Players;