import React from 'react';
import App from './app';
import { Provider} from 'react-redux';

const Root = ({store})=>{
    //const Root = (props)=>{
    return(
        //<Provider store={props.store}>
        <Provider store={store}>
            <App/>
        </Provider>
    );
};

export default Root;