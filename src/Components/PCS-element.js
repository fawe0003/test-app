import React, {Component} from 'react';

class PCSElement extends Component{
    render (){  
        let content;
        const type = this.props.type;

        switch (type){
            case "1":
                content = <input type="text"></input>;
                break;
            case "2":
                content = <select >
                    <option>Option1</option>
                    <option>Option2</option>
                </select> 
                break;
            case "3":
                content = <button>Button</button>
                break;
            default:
                content = <div>bla</div>
        }
        
        return (
            <div className="pcsStdElement">
                <div className="pcsLabel">{this.props.label}</div>
                {this.props.schalter ? <div className="pcsSchalter">Std</div> :<></>}
                {content}
            </div>

        )
    }
}

export default PCSElement;