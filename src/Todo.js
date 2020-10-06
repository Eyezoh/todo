import React from 'react'


class TodoApp extends React.Component{
    render(){
        return(
            <div>
            <input type="checkbox" checked={this.props.product.completed}/>
                <h3>{this.props.product.title}</h3>
            </div>
        )
    }
}
export default TodoApp