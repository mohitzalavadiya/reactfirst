import React, { useState } from 'react';
import Famousplace from './Famousplace';

function Countryfun(props) {
    const [countryName, setCountryName] = useState ('INDIA');

    const Changecountryname = () => {
        setCountryName ('US')
    }
    const indiafamousplace = ['The Gateway of India', 'Shimla_Manali']
    const usfamousplace = ['Niagara Falls', 'White House']
    return (
        <div>
            <p style={{margin: '10px', fontSize:'32px', color:'darkturquoise', fontWeight:'900' }}>{countryName}</p>
            <button style={{margin:'10px', padding:'10px', fontSize:'18px', backgroundColor:'burlywood'}} onClick={() =>Changecountryname() }>change</button>
            <p>famous place :</p>
            <Famousplace india={indiafamousplace} us={usfamousplace} country={countryName}/>

        </div>
    );
}

export default Countryfun;