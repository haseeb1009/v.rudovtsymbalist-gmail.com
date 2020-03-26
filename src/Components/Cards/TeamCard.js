import React from 'react'
import '../../styles/TeamCard.scss'

const TeamCard = (props) =>{
    return(
        <div id='teamCard'>
          <img src='https://i.ibb.co/N91Y9b2/vas-1-150x150.jpg' width='100' height='100' style={{borderRadius:'50%', display: 'block',margin: '1vw 1vw auto auto'}} />
          <div>
            <h3>{props.name}</h3>
          <h4 style={{font: '400 1.4vw Roboto'}}>{props.position}</h4>
          <p style={{font: '400 1vw Roboto'}}>{props.text}</p>
            </div>
        </div>
    )
}

export default TeamCard;