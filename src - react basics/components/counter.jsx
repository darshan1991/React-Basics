import React , { Component  } from "react";

class Counter extends Component {
    //state = { count: 0 };

    constructor(props) {
        super(props);
        this.state = { count : this.props.InitialCount }
        }
        increment = () => {
            console.log('Function Increment');
            this.setState(prevState => {
                return {
                    count: prevState.count+1
                }
            });
        }
     decrement = () => {
            console.log('Function Decrement');
            this.setState(prevState => {
                return {
                    count: prevState.count-1
                }
            });
        }
    render(){
        console.log('Props Values: ', this.props.InitialCount);
        return (
            <div>
             Counter : { this.state.count }
             <button onClick={this.increment}>
             Increment
             </button>
             <button onClick={this.decrement}>
             Decrement
             </button>
             
             </div>
        
        );
    }
}

export default Counter;