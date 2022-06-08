import React, { useState } from 'react';

function Counter(props) {
    const [count, setCount] =useState(0);

    const increase = () => {
        setCount(prevCount => prevCount< 10 ? prevCount + 1 : prevCount )
    } 

    const dcrease = () => {
        setCount(prevCount => prevCount > 0 ? prevCount - 1 : prevCount )
    }



    return (
        <div>
            <p style={{margin: '20px 500px 0', fontSize:'32px', color:'rebeccapurple', fontWeight:'900' }}>{count}</p>
            <button onClick={increase} style={{margin: '100px 30px 50px 400px', fontSize:'32px', color:'rebeccapurple', fontWeight:'900' }}>+</button>
            <button onClick={dcrease} style={{margin: '100px', fontSize:'32px', color:'rebeccapurple', fontWeight:'900' }}>-</button>
        </div>
    );
}

export default Counter;