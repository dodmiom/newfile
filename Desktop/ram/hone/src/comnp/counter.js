import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Alert from './alert';


class Counter extends Component {

    count = 1
    constructor(props) {
        super(props);
        this.state = {
            count: this.count,
            alert:false
        }

    }

    increment = () => {
        this.setState({ count: this.state.count + 1,
            alert:true })
            localStorage.setItem("count",this.state.count)
    }
    decrement = () => {
       
        this.setState({ count: this.state.count -1,alert:false })
        localStorage.setItem("count",this.state.count)
    }
    componentDidMount=()=>{
        localStorage.getItem("count",this.state.count);
    }






    render() {
        return (
            <>
              {this.state.alert===true? <Alert ded="success" name="You are increasing number"/>: <Alert ded="danger" name="You are decreasing number"/>}  
            <div className='container'>

                <div className="card">
                    
                    <div className="card-body">
                        <h5 className="card-title fs-1 text-light bg-info mx-4 " style={{fontWeight:"bold",textAlign:"center"}}>Counter</h5>
                        <p className="card-text mx-5 text-success " style={{fontSize:"50px",fontWeight:"bold",textAlign:"center"}} > {this.state.count}</p>
                        <div>
                    <Button onClick={this.decrement} disabled={this.state.count===0} variant="contained" size="large" color='primary' style={{marginLeft:"250px"}}>Decrement</Button>
                    <Button onClick={this.increment} variant="contained" size="large" color='error' style={{marginLeft:"135px"}}>Increment</Button>
                </div>
                    </div>
                </div>
                </div>

            </>

        );
    }
}


export default Counter;