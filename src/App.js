import React from 'react';
import './App.css';

import AdderFunc from './Adder'
import Navi from './Navigation'
import TodoApp from './Todo'
import Adder2 from './NewAdder'

import myList from './Tododata'
import NameChanger from './ChangeName'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos:myList
    }
  }
  render(){
    const myProgram = this.state.todos.map(item => <TodoApp key={item.id} product={item}/>)
  

  return (
    <div className="App">
    <Navi />
   
      <header className="App-header">
        <p>my to do App</p>
        <AdderFunc />
        {myProgram }
       <Adder2 />

       <NameChanger />
        
      </header>
  
     
    </div>
  );
  }
  
}

export default App;
