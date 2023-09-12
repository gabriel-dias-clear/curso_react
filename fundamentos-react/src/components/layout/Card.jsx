import React from 'react';
import './Card.css'

export default (props) => {
    const titleStyle = {
        backgroundColor : props.color
    }
    const borderCardStyle = {
        borderColor : props.color
    }
    return(
    
        <div className='Card' style={borderCardStyle}>
            <div className='Title'style={titleStyle}>{props.titulo}</div>
            <div className='Content'>{props.children}</div>
        </div>
    )
}