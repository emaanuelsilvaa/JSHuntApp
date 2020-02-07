import React, {Component} from 'react';
import {Text, View} from 'react-native';

import {WebView} from 'react-native-webview';

export default class Product extends Component {
  static navigationOptions = {
    title: 'JSHunt',
    headerStyle: {
      backgroundColor: '#DA552F',
    },
    headerTintColor: '#fff',
  };

  render() {
    console.log('chegou no render');
    const navigation = this.props;
    console.log(navigation.navigation);
    return (
      <WebView
        source={{
          uri: navigation.navigation.state.params.product.url,
        }}></WebView>
    );
  }
}
