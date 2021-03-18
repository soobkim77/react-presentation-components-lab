// Code SimpleComponent Here
import React from 'react';

export default class SimpleComponent extends React.Component {
    state = {
        mood: "happy"
    }
    
    handleClick = (event) => {
        if(this.state.mood == "happy"){
            this.setState({mood: "sad"})
        } else {
            this.setState({mood: "happy"})
        }
    }

    render(){
        return (
            <div onClick={event => this.handleClick(event)}>
                {this.state.mood}
            </div>
        )
    }
}