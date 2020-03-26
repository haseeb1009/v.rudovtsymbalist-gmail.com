import React from 'react'
import '../styles/Business.scss'
import TeamCard from '../Components/Cards/TeamCard'

const Team =()=>{
  return (
            <main>
              <h1 style={{
                    font: '600 4.43vw Roboto',
                    width: '44.52vw',
                    textAlign: 'center',
                    margin: '5% auto 0 auto'
                }}>EXECUTIVE TEAM</h1>
                <p style={{
                    width: '57.35vw',
                    font: '400 1.82vw Roboto',
                    margin: '5% auto 2% auto',
                    textAlign: 'center'
                }}>Admin office</p>
                <TeamCard name='Dr. Vasyl Taras' position='Project Coordination' text='Dr. Vas Taras is an Associate Professor of International Business at the University of North Carolina at Greensboro. He is the founder and coordinator of the X-Culture Project which he launched in 2010. He received his PhD in Human Resource Management and Organizational Dynamics from the University of Calgary, Canada and his Master’s in Political Economy from the University of Texas at Dallas. He teaches International Business at the Bryan School of Business and Economics at the University of North Carolina at Greensboro. His research revolves around cross-cultural and global virtual teams and experiential approaches to international business education. His research team is particularly interested in the potential of large and diverse crowds of amateurs in solving complex business problems. He is an Associate Editor of the International Journal of Cross-Cultural Management, and the Editorial Board member of Journal of International Business Studies, Journal of World Business, Journal of International Management, and Management Research Review. He is a recipient of numerous research and teaching awards for his work in International Business. He has lived, worked and studied in half a dozen countries and has experience as a manager, businessman, and business consultant.' />
            </main>
             )
        
    
}

export default Team;