import React from 'react'
import Button from '@mui/material/Button';
import { useContext } from 'react';
import ThemeContext from './createcontext';





export default function Custom_button(props) {
    let { mode, name, alertvai, setalertvai, hire } = props;
    const context = useContext(ThemeContext);

   


    return (
       
        <div>
            <div style={{ position: "absolute", left: "1100px", top: "18px" }}>
                <Button variant="contained" color="warning" href="#contained-buttons">
                    Hire me
                </Button>
            </div>
            <div style={{ position: "absolute", bottom: '170px', left: "60px" }}>
                <Button onClick={hire} variant="contained" color="warning" href="#contained-buttons">
                    Hire me
                </Button>
                <Button className="mx-4" variant="outlined" color="error" href="#contained-buttons">
                     Download CV 
                </Button>
            </div>
        </div>
    )
}
