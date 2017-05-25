import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';

class Controls  extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selected: []
        };
    }

    isSelected(id) {
        const { selected } = this.state;
        return selected.indexOf(id) > -1;
    }

    isDisabled(id) {
        const { selected } = this.state;

        if (selected.length < 2) {
            return false;
        }

        if (this.isSelected(id)) {
            return false;
        }

        return true;
    }

    change(id) {
        const { onChange } = this.props;
        const { selected } = this.state;

        const index = selected.indexOf(id);
        ~index
            ? selected.splice(index, 1)
            : selected.push(id);

        onChange(selected);
        this.setState({ selected });
    }

    render() {
        const { data } = this.props;

        return (
            <div className="controls">
                { data.map(zone =>
                <div key={ zone.id }>
                    <Checkbox
                        id={ zone.id }
                        label={ zone.label }
                        onChange={ this.change.bind(this, zone.id) }
                        selected={ this.isSelected(zone.id) }
                        disabled={ this.isDisabled(zone.id) }
                    />
                </div>
                )}
            </div>
        );
    }
}

Controls.propTypes = {
    data: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Controls;
