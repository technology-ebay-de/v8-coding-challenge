import React from 'react'
import PropTypes from 'prop-types'

import Led from './Led'

import './styles.css'

const getNumBasic = (activeLedIds) => {
  if (activeLedIds.length < 2) {
    return activeLedIds.length
  } else if (activeLedIds.length === 2 && activeLedIds.indexOf(2) > -1) {
    return 1
  }

  return 2
}

const getNumExtension = (activeLedIds) => {
  if (activeLedIds.length > 1 && activeLedIds.indexOf(2) > -1) {
    return 1
  }

  return 0
}

// TODO export led ids from here and reuse in App.js
// TODO plurals
const Car = ({ activeLedIds }) => (
  <div className="car__container">
    <div className="car__image-container">
      <img
        className="car__schematics"
        src="/assets/car.png"
        alt="car"
      />

      {
        activeLedIds.map(ledId => (
          <Led
            key={ledId}
            front={ledId === 1}
            back={ledId === 2}
            trunk={ledId === 3}
          />
        ))
      }
    </div>

    <div className="car__description">
      Du benötigst&nbsp;
      <span className="car__num-basic">{getNumBasic(activeLedIds)}</span>&nbsp;
      <span className="car__basic">Basis-Kit</span>&nbsp;
      und&nbsp;
      <span className="car__num-extension">{getNumExtension(activeLedIds)}</span>&nbsp;
      <span className="car__extension">Erweiterungs-Kit</span>
    </div>
  </div>
)

Car.propTypes = {
  activeLedIds: PropTypes.arrayOf(PropTypes.number),
}

Car.defaultProps = {
  activeLedIds: [],
}

export default Car
