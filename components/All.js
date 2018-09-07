import React from 'react';
import { StyleSheet, 
      Text, Button,
      View, ScrollView,
      TouchableOpacity, 
      Modal, TouchableHighlight,
      TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NavBar from './navbar';
import ListItem from './ListItem';

export default class All extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo : this.props.screenProps.data,
      modalVisible: false,
      detailNuevo: ''
    }
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  createTodo()
  {
    this.props.screenProps.create(this.state.detailNuevo);
    this.setModalVisible(false);
    this.forceUpdate();
    console.log(`desdeAll ${this.state.todo}`);
  }
  
  render() {
    return (
      <ScrollView style={styles.container}>
        <Modal
          style={styles.modal}
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}>
          
          <View style={{marginTop: 22}}>
            <View>
              <Text>To do:</Text>
              <TextInput 
             style = {styles.inputBox}
             onChangeText={(changedText) => this.setState({detailNuevo: changedText})} />

              <Button
                onPress={() => this.setModalVisible(false)}
                title="Cancel"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />
              <Button
                onPress={() => this.createTodo()}
                title="Create"
                color="#1094"
                accessibilityLabel="Learn more about this purple button"
              />
            </View>
          </View>
        </Modal>
        <NavBar title={"Reactive Todos"} />
        {this.state.todo.map((it,i) => {
          return <ListItem key={i} pressD={() => {this.props.screenProps.del(i); this.forceUpdate();}} press={() => {this.props.screenProps.press(i); this.forceUpdate();}} checked={it.checked} detail={it.detail} />
        }) }

        <TouchableOpacity
         style={{
             borderWidth:1,
             borderColor:'rgba(0,0,0,0.2)',
             alignItems:'center',
             justifyContent:'center',
             width:70,
             position: 'absolute',                                          
             bottom: 10,                                                    
             right: 10,
             height:70,
             backgroundColor:'#fff',
             borderRadius:100,
           }}
           onPress={() => this.setModalVisible(true)}
        >
          <Ionicons name="ios-add"  size={30} color="#01a699" />
        </TouchableOpacity>
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
  modal: {
    flex:1,
    alignItems: 'center',
    margin: 20
  }
});