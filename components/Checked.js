import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import NavBar from './navbar';
import ListItem from './ListItem';

export default class Checked extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo : this.props.screenProps.data
    }
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <NavBar title={"Reactive Todos"} />
        {this.state.todo.map((it,i) => {
          return (
            it.checked?<ListItem key={i} pressD={() => {this.props.screenProps.del(i); this.forceUpdate();}} press={() => {this.props.screenProps.press(i); this.forceUpdate();}} checked={it.checked} detail={it.detail} />:
            null)
        }) }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
});