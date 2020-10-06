import React from 'react';
import './App.css';

import AdderFunc from './Adder'
import Navi from './Navigation'
import TodoApp from './Todo'
import Adder2 from './NewAdder'

import myList from './Tododata'

function App() {
  const myProgram = myList.map(item => <TodoApp product={item}/>)
  return (
    <div className="App">
    <Navi />
   
      <header className="App-header">
      
       
        <p>my to do App</p>
      
        <AdderFunc />
        {myProgram }
       <Adder2 />
        
      </header>
  
     
    </div>
  );
}

export default App;
