import React from "react";

class Showtable extends React.Component {
  handleClick = (e, i) => {
    console.log(e);
    this.props.setNumber(i);
    this.props.setFinal(0);
  };
  render() {
    return (
      <div>
        <h1>Teams List</h1>
        <ol>
          {this.props.teams.map((team, i) => (
            <li key={i}>
              <div>
                {team.name}
                <input
                  className="btn-primary"
                  type="button"
                  value="Add Members"
                  onClick={e => this.handleClick(e, i)}
                />
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}
export default Showtable;
