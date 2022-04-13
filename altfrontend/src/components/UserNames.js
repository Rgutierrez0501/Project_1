import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  //Makes call to unprotected API, doesn't require authentication to get data
  componentDidMount() {
    axios.get(`http://localhost:3001/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <div className='styleBox'>
      <h2>Employees</h2>
      <ul>
        {
          this.state.persons
            .map(person =>
              <li key={person.id}>{person.first_name + " " + person.last_name}</li>
            )
        }
      </ul>
      </div>
    )
  }
}
