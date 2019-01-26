# Material-UI Date Picker Example

Create your React app using... wait for it... Create React App.

```shell
npm i -g create-react-app
create-react-app .
```

Install Material-UI, Material-UI Pickers, @date-io/date-fns, and date-fns.

_NOTE: Be sure to use the `2.0.0-alpha` version of `date-fns`! As of the time of this writing, other versions may not be supported._

```shell
yarn add @material-ui/core material-ui-pickers @date-io/date-fns date-fns@2.0.0-alpha.25
```

Start your app.

```shell
yarn start
```

In the `<App />` component, `import` the following:

```javascript
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "material-ui-pickers";
```

Add `state` and a `handleChange` function to your App component.

```javascript
state = {
  selectedDate: new Date()
};

handleDateChange = date => {
  this.setState({ selectedDate: date });
};
```

Delete the default children of `<div className="App" />` and add our date picker component and the selected date. Note that our `<DatePicker />` component needs to be a direct child of `<MuiPickersUtilsProvider />`.

```javascript
<div className="App">
  <h1>{`${selectedDate}`}</h1>
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <DatePicker value={selectedDate} onChange={this.handleDateChange} />
  </MuiPickersUtilsProvider>
</div>
```

In my example, I also removed unused CSS in `App.css` and added a few rules:

```css
.App {
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
```

And you're done! Congrats!
