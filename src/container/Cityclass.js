import React, { Component } from 'react';

class Cityclass extends Component {
    constructor(props) {
        super(props);
        this.state ={
            CityName : "Surat"
        }
    }
    ChangeCity = () => {
        this.setState({
            CityName : 'Junagadh'
        })
    }
    
    render() {
        return (
            <div>
                <p style={{margin: '10px', fontSize:'32px', color:'darkturquoise', fontWeight:'900' }}>{this.state.CityName}</p>
                <button style={{margin:'10px', padding:'10px', fontSize:'18px', backgroundColor:'aqua'}} onClick={() => this.ChangeCity()}>change city</button>
            </div>
        );
    }
}

export default Cityclass;