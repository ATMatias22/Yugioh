import React from "react";
import { HStack, Text, StatusBar, Image } from "native-base";

export default class Header extends React.Component {
  render() {
    return (
      <>
        <StatusBar hidden />
        <HStack bg='#EA580C' px="4" py="3" justifyContent='space-between' alignItems='center'>

          <Image
            source={require("../../../assets/images/yugioh-card.png")}
            alt="yugioh-card"
          />
          <Text color="white" fontSize="20" fontWeight='bold'>Card Searcher </Text>
          <Image
            source={require("../../../assets/images/yugioh-card.png")}
            alt="yugioh-card"
          />
        </HStack>
      </>
    )
  }
}
