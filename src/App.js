import React, { useState } from 'react';
import './App.css';
import Tweet from './Tweet';

function App(){
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
    setRed(!isRed);
  };

  const [users, setUsers] = useState([
    {name: 'Kavita', age: 32, posts: 'my first post'},
    {name: 'Kavita', age: 32, posts: 'my first post'}
    ]);

  return(
    <div className ='app'>    
      {users.map(user =>(
        <Tweet name={user.name}/>
      ))}
    </div>
  );
}

export default App;