import { merge } from 'lodash';
import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions.js';

const initialState = {
    1: {
        id: 1,
        title: 'wash car',
        body: 'with soap',
        done: false
    },
    2: {
        id: 2,
        title: 'wash dog',
        body: 'with shampoo',
        done: true
    },
};

const todosReducer = (state = initialState, action) =>{
    switch(action.type){
        case RECEIVE_TODOS:
            let newState = initialState;
            for (let i = 0; i < action.todos.length; i++) {
                const todo = action.todos[i];
                // merge({},newState,{${todo.id}: todo});
                // newState = merge({},newState,{[todo.id]: todo});
                newState[todo.id] = todo;
            }
            return newState;
        case RECEIVE_TODO:
            debugger
            let newSingleState =  merge({},state,{[action.todo.id]: action.todo});
            return newSingleState;
        default:
            return state;
    }

};

export default todosReducer;