import React, { Component } from 'react';

class Cityclass extends Component {
    constructor(props) {
        super(props);
        this.state+{
            CityName : "Surat"
        }
    }
    
    render() {
        return (
            <div>
                <p>{this.state.CityName}</p>
            </div>
        );
    }
}

export default Cityclass;