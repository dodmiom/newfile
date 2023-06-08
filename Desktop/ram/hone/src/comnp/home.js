import React from 'react'
import Button from '@mui/material/Button';
import { useTypewriter, Cursor } from 'react-simple-typewriter'


export default function Home() {
    const [text] = useTypewriter({
        words: ['UI/UX & PRODUCT DESIGNER'],
        loop: false,delaySpeed:2,
        cursorStyle:'_',typeSpeed:90
      })
 
    return (
        <div className='container ' style={{position:"absolute",left:"50px",bottom:"190px"}}>
            <h1 className='text-dark' style={{fontWeight:"bold",fontSize:"70px"}}>CALEB NYONG</h1>
            <span style={{ color: 'green',fontSize:"40px",height:"100px",display:"flex",flexWrap:"wrap",justifyContent:"space-between" }}>{text}</span>
            <p style={{fontSize:"25px",width:"690px",textAlign:"left",height:"200px"}}>I'm a top online markerter and branching expert, i started my carrer by launching the popular metaverse design, in just a few short years, I built the brand to millions pf social media followers and websites visitors.</p>
        </div>
    )
}
