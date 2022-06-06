import React from 'react';


function Famousplace({india, us, country}) {
    return (
            <ul>
               {country === 'INDIA' ? india.map((v, i) => <li key={i}>{v}</li>) : us.map((v,i) => <li key={i}>{v}</li>)} 
            </ul>
    );
}

export default Famousplace;