import React from 'react';
import ReactDOM from 'react-dom';
import App from '../frontend/components/app';

const ToDoList = ()=>{
    return(
        <>
            <App />
        </> 
    );
};

document.addEventListener('DOMContentLoaded',() => {
    ReactDOM.render(<ToDoList />,document.getElementById("root"));
});


