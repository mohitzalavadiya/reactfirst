import React from 'react';
import Home from './Home';

function Loading(Component) {
    return function loadinghome({loading, sdata}){
        if(loading){
            return(
                <p>Loading...</p>
            )
        }else{
            return(
                <Component sdata = {sdata}/>
            )
        }
    }
}

export default Loading;