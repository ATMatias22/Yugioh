import React from 'react';
import { Image } from 'native-base';
import { StyleSheet, View } from 'react-native';

export default class CardYugioh extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.imgCard}
          source={{ uri: this.props.image }}
          alt="yugioh card"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  imgCard: {
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  container: {
    marginVertical: 20,
    marginVertical: 20,
  }
})