import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import NavBar from './components/navbar';
import { createBottomTabNavigator } from 'react-navigation';
import Active from './components/Active';
import Checked from './components/Checked';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ListItem from './components/ListItem';
import All from './components/All';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo : [
        {
          checked: true,
          detail: 'ir ac omrpa'
        },
        {
          checked: false,
          detail: 'ir por el'
        }
      ],
    }
   this.onPress = this.onPress.bind(this);
   this.createTo = this.createTo.bind(this);
   this.delete = this.delete.bind(this);
  }

  createTo(detail)
  {
    let arr = this.state.todo.slice();
    arr.push({checked: false,detail: detail});
    this.setState({
      todo: arr
    });

    console.log(this.state.todo);
    this.forceUpdate();
  }

  delete(key){
    this.setState({
      todo: this.state.todo.splice(key,1)
    })
    this.forceUpdate();
    
  }

  onPress(key){
    const arr = this.state.todo.slice();
    arr[key].checked = !arr[key].checked;
    this.setState({
      todo: arr
    });
  }

  render() {
    return (
      <Navigator screenProps={{ data: this.state.todo,
                                 del: k => this.delete(k),
                                 press:val => this.onPress(val),
                                  create:d => this.createTo(d) }} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


const Navigator = createBottomTabNavigator(
  {
    All: All,
    Active: Active,
    Checked: Checked,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'All') {
          iconName = `ios-menu`;
        } else if (routeName === 'Active') {
          iconName = `ios-flash`;
        }
        else
        {
          iconName = 'ios-checkbox';
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);
