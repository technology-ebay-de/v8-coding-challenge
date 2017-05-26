import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import './styles.css'

const getClassName = (front, back, trunk) => classnames(
  'car__led',
  front && 'car__led-foot-front',
  back && 'car__led-foot-back',
  trunk && 'car__led-trunk',
)

const Led = ({ front, back, trunk }) => (
  <img
    className={getClassName(front, back, trunk)}
    src="/assets/ledDouble.png"
    alt="led"
  />
)

Led.propTypes = {
  front: PropTypes.bool,
  back: PropTypes.bool,
  trunk: PropTypes.bool,
}

Led.defaultProps = {
  front: false,
  back: false,
  trunk: false,
}

export default Led
