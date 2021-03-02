import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import PlayersNew from './Components/FakeData/data.json';
import Players from './Components/PlayerProfiles/Players';
import Cart from './Components/Cart/Cart';
import {useEffect, useState } from 'react';

function App() {
  const [players,setPlayers] = useState([]);
  useEffect(()=>{
    setPlayers(PlayersNew);
  })
  const [cart,setCart] = useState([]);
  const handleAddPlayers = ((playersNew)=>{
    const newPlayers = [...cart,playersNew];
    setCart(newPlayers);
  })
  return (
<div>
      <Navbar></Navbar>
  <div className="playersContainer">
     <div className="containerCart">
     <div className="container">
     <div className="row">
     {
      players.map(player => <Players 
        handleAddPlayers ={handleAddPlayers} keys={player.id} players = {player}></Players>)
     }
     </div>
   </div>
     </div>
     <div className="cart-container">
      <Cart cart={cart}></Cart>
     </div>
    </div>
 </div>
  );
}

export default App;
