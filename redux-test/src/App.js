import React, { Component } from 'react';
import 'flatpickr/dist/themes/material_green.css'
import Select from 'react-dropdown-select'

import Flatpickr from 'react-flatpickr'

class App extends Component {
  state = {}
  constructor() {
    super()
    this.state = {
      date: new Date()
    };
  }
  onChange = (val) => {
    console.log(val)
  }
  render() {
    const { date } = this.state;
    return (
      <div>
        {/* Normal date with time */}
        <Flatpickr data-enable-time options={{ minDate: '2019-11-06' }}
          value={date}
          onChange={date => { this.setState({ date }) }} />
        <br />
        <br />

        {/* disable date */}
        <Flatpickr data-enable-time options={{
          minDate: '2019-11-06',
          disable: ["2019-11-8", "2025-02-21", "2025-03-08"]
        }}
          value={date}

          onChange={date => { this.setState({ date }) }} />

        <br />
        <br />

        {/* Time Only */}

        <Flatpickr data-enable-time options={{
          enableTime: true,
          noCalendar: true,
          dateFormat: "H:i",
        }}
          value={date}

          onChange={date => { this.setState({ date }) }} />

        <br />
        <br />

        <Select
          multi
          options={[{
            disabled: true
          }]}
          loading={true}
          labelField='name'
          color="#0074D9"
          values={[]}
          searchable={true}
          placeholder="Testing the drop"
          clearable={true}
          onChange={(values) => this.onChange(values)}
        />


        <br />
        <br />

        {/* without color */}

        <Select
          multi
          options={[{
            // disabled: true
          }]}
          labelField='name'
          color="#0074D9"
          values={[{ name: 'a' }, { name: 'a' }, { name: 'a' }]}
          searchable={true}
          placeholder="Testing the drop"
          clearable={true}
          onChange={(values) => this.onChange(values)}
        />
      </div>
    )
  }
}

export default App;