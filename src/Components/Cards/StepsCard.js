import React from 'react'
const StepsCard = (props) => {
    return (
       
        <div id={props.id} style={{ width: '60vw' }} className='stepsCard'>
            <div id='row-tag'>
                <div className='number' style={{ background: props.numberbckg }}>
                    {props.number}
                </div>
                <h2 style={{ width: props.h2width, color: props.h2color, textAlign: 'start' }} >{props.h2}</h2>
            </div>

            <p style={{ width: '50vw' }} >{props.p} </p>

        </div>
     
        
    )
}

export default StepsCard;