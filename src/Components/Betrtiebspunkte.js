import React, {Component} from 'react';
import Tab from './Tab';
import PCSElement from './PCS-element';

class Betriebspunkte extends Component{
    //construktor mit State im Inputwerte zu speichern

    //benötigter funktionskram

    render (){        
        return (
            <div>
                <Tab heading="Anschlussbedingungen">
                    <h4>Zeug von Anschlussbedingungen </h4>
                </Tab>
                <Tab heading="Betriebspunkte Eingabe">
                    <PCSElement label="ohne Type"/>
                    <PCSElement schalter type="1" label="mit Schalter"/>
                    <PCSElement type="2" label="Dropdown"/>
                    <PCSElement type="3" label="Button"/>
                    <PCSElement type="1" label="irgendwas"/>
                    <PCSElement schalter type="2" label="Dropdown und Schalter"/>
                </Tab>
            </div>
        )
    }
}

export default Betriebspunkte;