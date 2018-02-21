import React, {Component} from 'react';
import './box.css'

class Box extends React.Component{
    render(){
        return(
            <div className="box"> 
                <div className="cell-identifier" title={this.props.data.description}>{this.props.data.identifier}</div>                
                <div className="cell-measure">{this.props.data.measure}</div>
            </div>
        );
    }
}

export default Box;