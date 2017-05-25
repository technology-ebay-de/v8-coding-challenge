import React, { Component } from 'react';
import Car from '../components/Car';
import Controls from '../components/Controls';
import Config from '../config';

class Root extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selected: null
        }
    }

    select(selected) {
        if (!selected.length) {
            this.setState({ selected: null });
            return;
        }

        const { spec } = Config;
        selected = selected.sort().toString();

        const index = spec.findIndex(({ set }) => set.sort().toString() === selected);
        this.setState({
            selected: spec[index]
        });
    }

    getText(value, label) {
        return `${value} ${label}${(value > 1 ? 's' : '')}`;
    }

    render() {
        const { selected } = this.state;
        const basic = selected ? selected.basic : 0;
        const additional = selected ? selected.additional : 0;

        return(
            <div className="main">
                <Controls
                    data={ Config.zones }
                    onChange={ this.select.bind(this) }
                />
                <Car
                    data={ Config.zones }
                    selected={ selected ? selected.set : [] }
                />
                <div className="spec">
                    { (basic || additional) &&
                      <p>Sie benötigen  <span className="basic">{ this.getText(basic, 'Basis-Kit') }</span> und <span className="additional">{ this.getText(additional, 'Erweiterungs-Kit') }</span></p>
                      ||
                      <p>Bitte wählen Sie Ihre gewünschte Konfiguration aus</p>
                    }
                </div>
            </div>
        );
    }
}

export default Root;
