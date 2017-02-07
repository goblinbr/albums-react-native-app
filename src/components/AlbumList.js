import React, { Component } from 'react';
import { Text, View } from 'react-native';

class AlbumList extends Component {
  componentWillMount() {
    console.log('componentWillMount');
    fetch('http://rallycoding.herokuapp.com/api/music_albums')
    .then(response => response.json())
    .then(data => this.setState({ albums: data }))
    .catch(error => console.log(error));
  }

  render() {
    return (
      <View>
        <Text>Album list!!!!</Text>
      </View>
    );
  }
}

export default AlbumList;
