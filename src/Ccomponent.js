import React, { Component } from 'react';
import  Affcomponent  from './Affcomponent';

export default class Ccomponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
      this.reset = this.reset.bind(this);
    }

    increment(){
        this.setState(state => ({
           count: state.count + 1
    }));
    }

    decrement(){
        this.setState(state => ({
            count: state.count - 1
    }));
    }

    reset(){
        this.setState({
         count: 0 
    });
    }

  render() {
     return(
         <div>
             <button onClick={this.increment}>Увеличение</button>
             <button onClick={this.decrement}>Уменьшение</button>
             <button onClick={this.reset}>Обнулить</button>
             <h1>Число нажатий: {this.state.count}</h1>
         </div>

     )
}
}