import React from 'react'

export default function Clssbabu(props) {
     const add=()=>{
        const a= setactive(...arr,this.state.active);
        setarr(a);
      }
     const delte =(id)=>{
        arr.filter((i)=> id !==i);
      }
  return (
    <>
    <div className="App">
       <input type="text" value={active} onChange={(e)=>setactive(e.target.value)} />
       <input type="submit" value="Add" onClick={add} />

       {arr.map((value,id)=>{
         return( <div key={id}>
            <p>{value}</p>
            <button onClick={()=>delte(id)}>Delete</button>
          </div>)
       })}
    </div>
    </>
  )
}
