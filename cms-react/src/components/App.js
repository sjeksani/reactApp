import React from "react";
import Heading from "./heading.jsx";
import input from "./input.jsx";
import Button from "./button.jsx";
import Radio from "./radio.jsx"
import Select from "./select.jsx"


class App extends React.Component {

    render() {


        return (

            < div >
            < Heading / >
            < input value = "lastname" / >
            Last Name: < input / >
            < br / >
            < br / >
            Address: < input / > < br / > < br / >
            Gender: < Radio name = "gender" / > Male < Radio name = "gender" / > Female < br / > < br / >
            < Select value = "Meeeeee"
            value1 = "Sharath" / >
            < br / >
            < Button value = "Clickme" / >
            < /div>
        );
    }
}
export default App;
