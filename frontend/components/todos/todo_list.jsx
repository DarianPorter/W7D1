import React from 'react';
import TodoListItem from './todo_list_item.jsx';
import TodoListForm from './todo_list_form';

class TodoList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const { todos } = this.props;
        const arr = [];
        
        for(let k in todos){
            arr.push(
                <TodoListItem
                key={todos[k].id}
                title={todos[k].title} 
                />);
        }

        return(
            <>
                <TodoListForm 
                    receiveTodoFunc={this.props.receiveTodo}
                />
                <ul>
                    {arr}
                </ul>
            </>
        );
    }
}
export default TodoList;