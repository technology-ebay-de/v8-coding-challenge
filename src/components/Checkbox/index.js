import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

class Checkbox extends React.PureComponent {

  onChange = () => {
    this.props.onChange(this.props.id);
  }

  render() {
    const { id, checked, label } = this.props

    return (
      <div className={styles.container}>
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={this.onChange}
        />

        <label
          htmlFor={id}
        >
          {label}
        </label>
      </div>
    )
  }
}

Checkbox.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  checked: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

Checkbox.defaultProps = {
  checked: false,
  label: null,
}

export default Checkbox
