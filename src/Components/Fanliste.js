import React, {Component} from 'react';
import Tab from './Tab';
import PCSElement from './PCS-element';

class Fanliste extends Component{
    //construktor mit State im Inputwerte zu speichern

    //benötigter funktionskram

    render (){        
        return (
            <div>
                <Tab heading="Filter">
                    <h4>Filter zum einstellen</h4>
                </Tab>
                <Tab heading="Fanliste">
                    <h4>Fanliste</h4>
                    <h4>Fanliste</h4>
                    <h4>Fanliste</h4>
                    <h4>Fanliste</h4>
                    <h4>Fanliste</h4>
                    <h4>Fanliste</h4>
                    <h4>Fanliste</h4>
                </Tab>
            </div>
        )
    }
}

export default Fanliste;