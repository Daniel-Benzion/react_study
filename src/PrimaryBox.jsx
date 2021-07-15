import React from 'react';

class PrimaryBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prev => ({
            isToggleOn: !prev.isToggleOn
        }));
    }

    render() {
        return (
            <div onClick = {this.handleClick} style={{backgroundColor: this.state.isToggleOn ? "red" : "blue" , width: "50px", height: "50px", fontSize: "20px", textAlign: 'center', paddingTop: "3em", padding: "3em", marginTop: "10px"}}>
              It's a box!  
            </div>

        )
    };
}
export default PrimaryBox