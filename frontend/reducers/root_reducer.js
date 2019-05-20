import todos from './todos_reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todos: todos,
});

export default rootReducer;