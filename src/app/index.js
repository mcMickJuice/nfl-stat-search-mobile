import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import SearchPlayer from './components/searchPlayer'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Nfl Stats
        </Text>
        <SearchPlayer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  }
});

export default App