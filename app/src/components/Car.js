import React from 'react';
import PropTypes from 'prop-types';

const Car = ({ data, selected }) => (
    <div className="car">
        { data.map(({ id }) =>
        <div
            className={ "led " + id + (~selected.indexOf(id) ? ' visible' : ' hidden') }
            key={ id }
        />
        )}
    </div>
);

Car.propTypes = {
    data: PropTypes.array.isRequired,
    selected: PropTypes.array.isRequired
};

export default Car;
