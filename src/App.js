import React, { Component } from "react";
import "./App.css";
import Showtable from "./ShowTable";
import Teamname from "./TeamName";
import Playersname from "./PlayersName";
// nhfbhiuefg

class App extends Component {
  state = {
    teams: [],
    team: {
      name: "",
      players: []
      // hobbies: []
    },
    number: -1,
    final: 0
  };
  updateName = d => {
    let team = { ...this.state.team };
    team.name = d;
    this.setState({
      team: team
    });
  };

  updatePlayersName = d => {
    let team = { ...this.state.team };
    team.players = d;
    this.setState({
      team: team
    });
  };

  updateTeam = d => {
    console.log(this.state.number);
    let p = this.state.teams;
    p[this.state.number] = this.state.team;
    this.setState({
      teams: p,
      final: d
    });
  };

  render() {
    return (
      <div>
        <div>
          <u>
            <h1 className="title">Create your Own Team</h1>
          </u>
        </div>
        <div className="bodyContainer">
          <Teamname
            teams={this.state.teams}
            team={this.state.team}
            setTeams={d =>
              this.setState({
                teams: d
              })
            }
            setName={d => this.updateName(d)}
          />
          {this.state.teams.length > 0 && (
            <Showtable
              setNumber={d =>
                this.setState({
                  number: d
                })
              }
              teams={this.state.teams}
              setFinal={d => this.setState({ final: d })}
            />
          )}
          {this.state.number >= 0 && this.state.final == 0 && (
            <Playersname
              setFinal={d => this.updateTeam(d)}
              setPlayers={d => this.updatePlayersName(d)}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
