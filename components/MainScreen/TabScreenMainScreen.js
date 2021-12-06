import React from 'react';
// 1. import `NativeBaseProvider` component
import { NativeBaseProvider, Text, Box } from 'native-base';
import Header from './Header/Header';
import Main from './Main/Main';

// 2. Use at the root of your app

export default class TabScreenMainScreen extends React.Component {
  render() {
    return (
      <NativeBaseProvider>
        <Header></Header>
        <Main></Main>
      </NativeBaseProvider >
    );
  }
}
