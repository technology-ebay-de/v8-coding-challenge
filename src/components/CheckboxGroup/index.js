import React from 'react'
import PropTypes from 'prop-types'

import Checkbox from '../Checkbox'

import styles from './styles.css'

class CheckboxGroup extends React.PureComponent {

  onChange = id => {
    const { options, onChange } = this.props;
    onChange(options.map(option => ({
      ...option,
      checked: id === option.id ? !option.checked : option.checked
    })))
  }

  render() {
    const { options } = this.props;

    return (
      <div className={styles.container}>
        {
          options.map(option => (
            <Checkbox
              {...option}
              key={option.id}
              onChange={this.onChange}
            />
          ))
        }
      </div>
    )
  }

}

CheckboxGroup.propTypes = {
  // TODO refactor to use checkbox prop types
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    label: PropTypes.string,
    checked: PropTypes.bool,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
}

export default CheckboxGroup