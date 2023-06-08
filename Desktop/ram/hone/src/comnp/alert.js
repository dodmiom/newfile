import React from 'react'

export default function Alert(props) {
  return (
    <div>
        <div class={`alert alert-${props.ded}`} role="alert">
 {props.name}
</div>
    </div>
  )
}
