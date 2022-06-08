import React, { useEffect, useState } from 'react';



function Hoc(props) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    const fakedata = [
        {id : 101, name : 'Mohit'},
        {id : 102, name : 'Anit'},
        {id : 103, name : 'Sameer'}
    ]

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {setLoading(false), setData(fakedata) } ,2000)
    }, [])
    return (
        <div>
            
        </div>
    );
}

export default Hoc;