import React, {Component} from 'react';
import Tab from './Tab';

class StartingPage extends Component{
    //construktor mit State im Inputwerte zu speichern

    //benötigter funktionskram

    render (){        
        return (
            <div>
                <Tab heading="Produkt">
                    <h4>Produktauswahl</h4>
                </Tab>

            </div>
        )
    }
}

export default StartingPage;