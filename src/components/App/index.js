import React, { Component } from 'react'

import CheckboxGroup from '../CheckboxGroup'

import './styles.css'

const checkboxOptions = [
  {
    id: 1,
    label: 'Fußraum vorne',
  },
  {
    id: 2,
    label: 'Fußraum hinten',
  },
  {
    id: 3,
    label: 'Kofferraum',
  },
]

class App extends Component {
  state = {
    checkboxOptions
  }

  updateOptions = checkboxOptions => {
    this.setState({ checkboxOptions })
  }

  render() {
    const { checkboxOptions } = this.state

    return (
      <div className="App">
        <CheckboxGroup
          options={checkboxOptions}
          onChange={this.updateOptions}
        />
      </div>
    )
  }
}

export default App
