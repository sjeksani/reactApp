import React from 'react';

class input extends  React.Component {
    render() {
    return (

<div>
{this.props.value} <input type="text" />
    </div>
);
}


}

export default input;