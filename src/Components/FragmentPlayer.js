import React from 'react'

const FragmentPlayer =(props)=> {
    return (

      <>
      <iframe style={{  borderRadius: '25px',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      width:'58.96vw', 
      height:'33.16vw'}}
      title={props.title}
      src={props.url} 
      frameBorder="0" 
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen
       >

      </iframe>
      </>
    )


}

export default FragmentPlayer;