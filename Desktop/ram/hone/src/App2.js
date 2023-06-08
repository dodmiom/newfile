import React, { Component } from 'react';


import Clssbabu from './comnp/clssbabu';




class App extends React.Component {
  
  
    constructor(props) {
      super(props);
      this.state = {
        active: ( ""), 
      arr:[]
    };  }
    add = () => {
        this.setState({
          cart: ['ice cream'],
          total: 5
        })
      }
      add=()=>{
      const aa=() =>{ this.setState({
            active: (...arr,active)
        })}
        this.setState({
            arr:aa
        })
       
      }
      delte =(id)=>{
        arr.filter((i)=> id !==i);
      }
     
    render() {
      return <h2>I am a Car!
        <Clssbabu name={this.state.color} arr={this.state.arr}/></h2>;
    }
  }



export default App;