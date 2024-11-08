import React, {Component} from 'react';


class Tab extends Component{
    render (){        
        return (
            <div className="card">
                <div className="card-head">
                    <h2>{this.props.heading}</h2>
                </div>
                <div className="card-body">
                    {this.props.children} 
               </div>
            </div>

        )
    }
}

export default Tab;