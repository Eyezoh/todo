import React from 'react'


class TodoApp extends React.Component{
    constructor(){
        super()
        this.state = {
            name:"Isaac"
        }
    }
    
    render(){
        console.log(this.props.product)
     
        return(
            <div className='todo_items'>
            <input className='check_item' type="checkbox" checked={this.props.product.completed}/>
                <h3>{this.props.product.title}</h3> 
            </div>
        )
    }
}
export default TodoApp