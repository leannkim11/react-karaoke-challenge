import React, { Component } from "react";
import Filter from "../components/Filter";
import SongList from "../components/SongList";
import KaraokeDisplay from "../components/KaraokeDisplay";

class KaraokeContainer extends Component {
  state = {
    song: {}
  };

  handleClick = event => {
    this.setState({
      currentSong: event.target.dataset.id
    }),
      () => {
        <KaraokeDisplay song={this.state.song} />;
      };
  };

  test = () => {
    console.log("hi");
  };

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter />
          <SongList songs={this.props.songs} />
        </div>
        <KaraokeDisplay songs={this.props.songs} />
      </div>
    );
  }
}

export default KaraokeContainer;
