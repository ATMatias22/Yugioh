import React from 'react';
import { VStack, Image, ScrollView } from 'native-base'
import Searcher from './Searcher';

export default class Main extends React.Component {
  render() {
    return (
      <ScrollView>
        <VStack w={{ base: "90%" }} mx="auto" my={10} >
          <Image
            source={require('../../../assets/images/yugioh-logo.png')}
            alt="Logo Yugioh"
            mx="auto"
          />
          <Searcher />
        </VStack>
      </ScrollView>
    );
  }
}

