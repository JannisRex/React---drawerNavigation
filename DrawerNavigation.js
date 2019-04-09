import React from 'react'
import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import { Platform, Dimensions } from 'react-native'

import HomeScreen from '../screens/HomeScreen.js'
import OtherScreen from '../screens/OtherScreen.js'
import ThirdScreen from '../screens/ThirdScreen.js'


const WIDTH = Dimensions.get('window').width

const DrawerConfig = {
  drawerWidth: WIDTH * 0.75
}

const AppDrawerNavigation = createDrawerNavigator({
  Home: HomeScreen,
  Other: OtherScreen,
  Third: ThirdScreen
},
DrawerConfig
)

export default createAppContainer(AppDrawerNavigation)
