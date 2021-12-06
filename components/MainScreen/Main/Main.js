import React from "react";
import { Text, Image, VStack } from "native-base";


export default class Main extends React.Component {

  render() {
    return (
      <VStack flex="1" justifyContent="center" >
        <VStack my={5} >
          <Text textAlign="center" fontSize="2xl">
            Welcome to the card searcher of
          </Text>
          <Image
            source={require('../../../assets/images/yugioh-logo.png')}
            mx="auto"
            my={30}
            alt="Logo Yugioh"
          />

          <Text textAlign="center" fontSize="2xl">
            You can find any card by entering the ID
          </Text>

        </VStack>
      </VStack>
    )
  }
}