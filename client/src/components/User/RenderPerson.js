import React, { Component } from "react";

class RenderPerson extends Component {
  state = {
    persons: []
  };

  componentDidMount() {
    this.getPersons();
  }

  getPersons = _ => {
    fetch("/api/createuser")
      .then(response => response.json())
      .then(response => this.setState({ persons: response.data }))
      .catch(err => console.error(err));
  };
  // This is redndering the picture link to every Missing person in the Namus Database
  renderPerson = ({ person_id, ...stuff }) => (
    <div key={person_id}>
      {stuff["firstName"]} &nbsp;
      {stuff["lastName"]} &nbsp;
      {stuff["createdAt"]} &nbsp;
      {stuff["updatedAt"]} &nbsp;
    </div>
  );

  render() {
    const { persons } = this.state;
    console.log(persons);
    return <div className="App">{persons.map(this.renderPerson)}</div>;
  }
}

export default RenderPerson;
