import React from 'react';

function Home(props) {
    return (
        <div>
            {
                props.sdata.map((p,i) => {
                    return(
                        <>
                        <h3>{p.id}</h3>
                        <h3>{p.name}</h3>
                        </>
                       
                    )
                })
            }
        </div>
    );
}

export default Home;