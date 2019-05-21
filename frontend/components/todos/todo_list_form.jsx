import React from 'react';

class TodoListForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            body: "",
            title: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(field){
        return (e)=>{
            this.setState({ [field]: e.target.value });
        }
    }
    handleSubmit(e){
        e.preventDefault();
        const newtodo = Object.assign({id: Math.floor(Math.random(10000))},this.state); //given an empty object lets copy in the this.state
        this.props.receiveTodoFunc(newtodo);
    }
    render(){
        return(
            <>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Title
                        <input type="text" 
                               onChange={this.handleChange('title')}
                               value={this.state.title}
                               />
                    </label>
                    
                    <label>
                        Body
                        <input type="text" 
                               onChange={this.handleChange('body')}
                               value={this.state.body}
                               />
                    </label>

                    <button> create new todo </button>
                </form>
            </>
        );
    }
}

export default TodoListForm;