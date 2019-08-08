import React from "react";

class Playersname extends React.Component {
  state = {
    playersname: [],
    name: "",
    flag: -1
  };
  handleChange = e => {
    this.setState({
      name: e.target.value
    });
  };
  add = e => {
    this.setState({
      playersname: [...this.state.playersname, this.state.name],
      name: ""
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.setPlayers(this.state.playersname);
    this.props.setFinal(1);
    this.setState({
      playersname: [],
      name: "",
      flag: -1
    });
  };

  componentDidMount() {
    this.setState({
      flag: 1
    });
  }
  render() {
    let items = (
      <ol>
        {this.state.playersname.map((data, i) => (
          <li key={i}>{data}</li>
        ))}
      </ol>
    );
    return (
      <div>
        <h1>Enter players Name</h1>
        {items}
        <form onSubmit={this.onSubmit}>
          <input
            type="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input type="button" onClick={() => this.add()} value="Add" />
          <input type="submit" value="Save Team" />
        </form>
      </div>
    );
  }
}
export default Playersname;
