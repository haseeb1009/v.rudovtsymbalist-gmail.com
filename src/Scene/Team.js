import React from 'react';
import '../styles/Business.scss';
import TeamCard from '../Components/Cards/TeamCard';
import firebase from '../FireBase/Firebase.js';

let db = firebase.firestore();
class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamMembers: []
    };
  }

  componentDidMount = () => {
    this.getTeamMembers();
  };

  getTeamMembers = () => {
    db.collection('teamMember')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = doc.data();
          this.setState({
            teamMembers: [...this.state.teamMembers, { ...data }]
          });
        });
      });
  };

  render() {
    console.log(this.state.teamMembers);
    const { teamMembers } = this.state;
    return (
      <main>
        {teamMembers.map(member => {
          return (
            <TeamCard
              name={member.name}
              position={member.position}
              src={member.url}
              text={member.text}
            />
          );
        })}

        <button onClick={this.getItems}>Get</button>
      </main>
    );
  }
}

export default Team;
