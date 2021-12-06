import React from 'react';
import { NativeBaseProvider } from 'native-base';
import Header from './Header/Header';
import Main from './Main/Main';

export default class TabScreenSearcher extends React.Component {
  render() {
    return (
      <NativeBaseProvider>
        <Header />
        <Main />
      </NativeBaseProvider>
    );
  }
}
