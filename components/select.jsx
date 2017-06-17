import React from 'react';

class Select extends React.Component {
    render() {
    return (
<div>
<select>
<option > {this.props.value} </option>
<option> {this.props.value1} </option>
</select>
</div>
    );
    }
}

export default Select;