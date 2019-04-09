import React from 'react'
import { StatusBar } from 'react-native'
import DrawerNavigator from './src/folder/DrawerNavigation.js'

export default class App extends React.Component {
  render() {
    return (
      <DrawerNavigator />
    )
  }

  componentDidMount() {
    StatusBar.setHidden(true)
  }
}
