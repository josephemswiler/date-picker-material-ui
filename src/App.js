import React, { Component } from "react";
import "./App.css";
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from "material-ui-pickers";

class App extends Component {
  state = {
    selectedDate: new Date()
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  render() {
    const { selectedDate } = this.state;

    return (
      <div className="App">
        <h1>{`${selectedDate}`}</h1>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker value={selectedDate} onChange={this.handleDateChange} />
        </MuiPickersUtilsProvider>
      </div>
    );
  }
}

export default App;
