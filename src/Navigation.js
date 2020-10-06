import React from 'react'

class Navi extends React.Component{
    render(){
        return(
            <div>
                <nav className="nav-links">
                    <h2>To Do </h2>
                    <ul className="links">
                        <li className="links-menu">About</li>
                        <li className="links-menu">To Do List</li>
                        
                    </ul>
                </nav>
            </div>
        )
    }
}
export default Navi