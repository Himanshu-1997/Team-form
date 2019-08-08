import React from "react";

class Teamname extends React.Component {
  state = {
    name: ""
  };

  onChangeName = e => {
    this.setState({
      name: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    let b = {
      name: this.state.name
    };
    this.props.setName(this.state.name);
    this.props.setTeams([...this.props.teams, b]);
    this.setState({
      name: ""
    });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <label>
            <b>Team Name:-</b>
            <input
              type="text"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </label>
          <label>
            <input
              className="addButton btn-primary"
              type="submit"
              value="Create Team"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default Teamname;
