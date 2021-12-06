import React from 'react';
import { Text, Box, FormControl, Input, Button } from 'native-base';
import axios from 'axios';
import CardYugioh from './CardYugioh/CardYugioh';



export default class Searcher extends React.Component {
  cardNumber;

  constructor(props) {
    super(props);
    this.state = {
      cardImage: '',
      message: '',
    }
  }

  getCard = async () => {
    this.setState({
      cardImage: '',
      message: 'Searching card',
    })
    try {
      let res = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${this.cardNumber}`);
      this.setState({
        cardImage: res.data.data[0].card_images[0].image_url,
        message: ''
      })
    } catch (error) {
      this.setState({
        cardImage: '',
        message: 'The card does not exist',
      })
    }
  }

  render() {
    return (
      <Box>
        <FormControl mb="5" >
          <FormControl.Label _text={styles.input.label}>Put the card number</FormControl.Label>
          <Input
            keyboardType="number-pad"
            borderColor={styles.input.borderColor}
            borderWidth={styles.input.borderWidth}
            _focus={styles.input.focus}
            fontSize={styles.input.fontSize}
            onChangeText={(value) => this.cardNumber = value}
          />
        </FormControl>

        <Button onPress={this.getCard}
          bg={styles.button.bg}
          _pressed={styles.button.pressed}
          _text={styles.button.text}
        >
          Search
        </Button>
        {!!this.state.message && <Text textAlign="center" mt={2} fontSize="xl">{this.state.message}</Text>}
        {!!this.state.cardImage && <CardYugioh image={this.state.cardImage} />}
      </Box>
    );
  }
}




const styles = {
  input: {
    borderColor: "#EA580C",
    borderWidth: 2,
    fontSize: "xl",
    label: {
      fontSize: "xl",
      mx: "auto"
    },
    focus: {
      borderColor: "#EA580C",
      borderWidth: 3
    },
  },
  button: {
    bg: "red.600",
    pressed: {
      bg: "red.800",
    },
    text: {
      fontSize: "md"
    }
  }
}
