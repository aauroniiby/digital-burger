import React from 'react'
import classses from './Button.css'


const button = (props) => (
    <button
        className={[classses.Button, classses[props.btnType]].join(' ')}
        onClick={props.clicked}
        disabled={props.disabled}>{props.children}</button>
)

export default button