import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => (
  <View style={styles.view}>
    <Text style={styles.text}>{props.text}</Text>
  </View>
);

const styles = {
  view: {
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  text: {
    fontSize: 20
  }
};

export default Header;
