import React from 'react'
/* 
//Esto es equivalente a export default (props) => <div>{props.task}</div>
export default ({task, onDelete}) => (
    <div>
        <span>{task}</span>
        <button onClick={onDelete}>x</button>
    </div>
)
*/
export default ({ children, ...props }) => (
    <div {...props}>
        {children}
    </div>)