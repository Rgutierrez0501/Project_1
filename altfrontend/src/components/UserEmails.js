import React from 'react';
import axios from 'axios';


export default class EmailList extends React.Component {
  state = {
    emails: []
  }

  

  componentDidMount() {
      
    axios.get(`http://localhost:3001/emails`)
      .then(res => {
        const emails = res.data;
        this.setState({ emails });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.emails
            .map(email =>
              <li key={email.id}>{email.email}</li>
            )
        }
      </ul>
    )
  }
}