import React, { useState } from 'react';

function Cityfun(props) {
    const [CityName, SetCityname] = useState('surat');

    const ChangeCity = () => {
        SetCityname ('Junagadh')
    }
    return (
        <div>
            <p style={{margin: '10px', fontSize:'32px', color:'rebeccapurple', fontWeight:'900' }}>{CityName}</p>
            <button style={{margin:'10px', padding:'10px', fontSize:'18px', backgroundColor:'burlywood'}} onClick={() => ChangeCity()}>change city</button>
        </div>
    );
}

export default Cityfun;