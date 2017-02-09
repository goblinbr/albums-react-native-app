import React from 'react';
import { Text, View, Image, Linking, Button } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import styles from './styles';

const AlbumDetail = ({ album }) => (
  <Card>
    <CardSection>
      <View style={styles.thumbContainer}>
        <Image
          style={styles.thumbImage}
          source={{ uri: album.thumbnail_image }}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.albumTitle}>{album.title}</Text>
        <Text>{album.artist}</Text>
      </View>
    </CardSection>

    <CardSection>
      <Image
        style={styles.albumImage}
        source={{ uri: album.image }}
      />
    </CardSection>

    <CardSection>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => Linking.openURL(album.url)}
          title='Comprar'
        />
      </View>
    </CardSection>
  </Card>
);

export default AlbumDetail;
