import React from 'react'

import styles from './styles.css'

const Car = () => (
  <div className={styles.container}>
    <img
      src="/assets/car.png"
      alt="car"
    />

    <img
      className={styles.footFront}
      src="/assets/ledDouble.png"
      alt="led"
    />
  </div>
)

export default Car
