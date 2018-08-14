import React, { Component } from "react";
import Header from "../components/Header";
import KaraokeContainer from "../containers/KaraokeContainer";
import songs from "../data/songs";

class App extends Component {
  state = {
    songs: songs,
    editableSongs: []
  };

  componentDidMount = () => {
    fetch("http://localhost:4000/users/17/songs")
      .then(res => res.json())
      .then(data => this.setState({ editableSongs: data }));
  };

  render() {
    return (
      <div className="app">
        <Header />
        <KaraokeContainer
          songs={this.state.songs}
          editableSongs={this.state.editableSongs}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
