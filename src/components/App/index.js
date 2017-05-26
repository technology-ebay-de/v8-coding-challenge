import React, { Component } from 'react'

import CheckboxGroup from '../CheckboxGroup'
import Car from '../Car'

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
        <h1>
          Wie viele LED-Kits benötige ich?
        </h1>

        <div>
          Du hast beim Tapezieren zu Hause immer eine Rolle zu wenig? Damit Dir das bei den LED-Stripes nicht auch passiert, kannst Du mit diesem Werkzeug berechnen, wie viele Basis-Kits bzw. Erweiterungs-Kits Du voraussichtlich brauchst.
        </div>

        <h4>
          Was möchtest Du ausleuchten?
        </h4>

        <CheckboxGroup
          options={checkboxOptions}
          onChange={this.updateOptions}
        />

        <Car
          activeLedIds={checkboxOptions.filter(({ checked }) => checked).map(({ id }) => id)}
        />
      </div>
    )
  }
}

export default App
