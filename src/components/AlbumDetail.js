import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => (
  <Card>
    <CardSection>
      <View style={styles.viewColumn}>
        <Image
          style={styles.thumbImage}
          source={{ uri: album.thumbnail_image }}
        />
      </View>
      <View style={styles.viewColumn}>
        <Text>{album.title}</Text>
        <Text>{album.artist}</Text>
      </View>
    </CardSection>
  </Card>
);

const styles = {
  viewColumn: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbImage: {
    height: 50,
    width: 50
  }
};

export default AlbumDetail;
