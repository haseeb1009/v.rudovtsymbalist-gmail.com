import React from 'react'
import '../styles/Business.scss'
import TeamCard from '../Components/Cards/TeamCard'
import firebase from '../FireBase/Firebase.js'

let db = firebase.firestore()
class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  getItems = () => {
    db.collection('teamMember').get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        this.setState({
          items: doc.data()
        })
      });
    }) 
  }
  render() {

    console.log(this.state.items)
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



        <button onClick={this.getItems}>Get</button>


      </main>
    )

  }
}

export default Team;