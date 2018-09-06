import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from './navbar';

export default class Checked extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NavBar title={"Reactive Todos"} />
        <Text>Checked</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});