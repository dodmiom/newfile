import React from 'react'

export default function Alert1(props) {
    let {mode,name,alertvai,setalertvai}=props;
  return (
    <div>
          <div class={`alert alert-${mode}`} role="alert">
 {name}
</div>
    </div>
  )
}
