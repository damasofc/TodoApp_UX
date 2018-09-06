import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from './components/navbar';
import { createBottomTabNavigator } from 'react-navigation';
import Active from './components/Active';
import Checked from './components/Checked';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ListItem from './components/ListItem';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo : [
        {
          checked: false,
          detail: 'Ir al super'
        },
        {
          checked: true,
          detail: 'Ir AL mall'
        }
      ]
    }
   this.onPress = this.onPress.bind(this);
  }

  onPress(key){
    const arr = this.state.todo.slice();
    arr[key].checked = !arr[key].checked;
    this.setState({
      todo: arr
    });
  }
  
  render() {
    {screenProps: {this.state.todo}}
    return (
      <View style={styles.container}>
        <NavBar title={"Reactive Todos"} />
        {this.state.todo.map((it,i) => {
          return <ListItem key={i} press={() => this.onPress(i)} checked={it.checked} detail={it.detail} />
        }) }
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


export default createBottomTabNavigator(
  {
    All: App,
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
