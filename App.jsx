import {Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screen/HomeScreen';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab= createBottomTabNavigator();
function Home() {
  <View>
    <Text>HOME</Text>
  </View>
};
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{headerShown:false, tabBarShowLabel:false, tabBarActiveTintColor:"#6ea5e9",
      }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon:({size, focused, color})=>{
            return(<Fontisto name={"home"} size={20} color={color}/>)
          }
          }}/>
        {/* <Tab.Screen name="Trending" component={Home} options={{tabBarIcon:({size, focused, color})=> {
          return(<SimpleLineIcons name={"fire"} size={20} color={"#6ea5e9"}/>)
        }}}/> */}
        <Tab.Screen name="Order" component={Home} options={{tabBarIcon:({size, focused, color})=>{
          return(<Entypo name={"box"} size={20} color={color}/>)
        }}}/>
        <Tab.Screen name="Account" component={Home} options={{tabBarIcon:({size, focused, color})=> {
          return(<MaterialCommunityIcons name={"account"} size={20} color={color}/>)
        }}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;
//const styles = StyleSheet.create({})