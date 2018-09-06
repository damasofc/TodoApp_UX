import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from './navbar';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ListItem({checked, detail, press}) {
    return (
      <View style={styles.container}>
      {
       checked? 
       <Icon onPress={press} style={styles.iconS} name={'check-box'} size={25} color={'blue'} />
       :<Icon onPress={press} style={styles.iconS} name={'check-box-outline-blank'} size={25} color={'blue'} />

      }
        <Text>{detail}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  iconS: {
    paddingRight: 20,
  }
});