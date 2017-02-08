import React, { Component } from 'react';
import { View } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = {
    albums: []
  };

  componentWillMount() {
    console.log('componentWillMount');
    fetch('http://rallycoding.herokuapp.com/api/music_albums')
      .then(response => response.json()
            .then(data => this.setState({ albums: data }))
      ).catch(error => console.log(error));
  }

  renderAlbums() {
    return this.state.albums.map(
      album =>
        <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
