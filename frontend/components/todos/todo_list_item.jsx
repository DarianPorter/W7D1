import React from 'react';

class ToDoListItem extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <li> <h1>{this.props.title}</h1> </li>
            </>
        )
    }
}

export default ToDoListItem;

