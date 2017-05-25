import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ id, label, selected, disabled, onChange }) => (
    <div className="checkbox">
        <input
            type="checkbox"
            id={ id }
            onChange={ onChange }
            selected={ selected }
            disabled={ disabled }
        />
        <label htmlFor={ id }>{ label }</label>
    </div>
);

Checkbox.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    selected: PropTypes.bool,
    disabled: PropTypes.bool
};

Checkbox.defaultProps = {
    selected: false,
    disabled: false
};

export default Checkbox;
