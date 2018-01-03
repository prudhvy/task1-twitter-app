/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import Drawer from 'react-native-drawer';
import SideBar from './src/components/SideBar';
import MainScreen from './src/components/MainScreen';
export default class App extends React.Component 
{
  constructor(props)
  {
    super(props);
    this.state = 
    {
      drawerOpen: false,
      drawerDisabled: false,
    };
  }
  closeDrawer = () => {
    this._drawer.close()
  };
  openDrawer = () => {
    this._drawer.open()
    
};
render() 
{
  return (
    <Drawer
        ref={(ref) => this._drawer = ref}
        type="static"
        content={<SideBar/>}
        tapToClose={true}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        styles={drawerStyles}
        tapToOpen={true}
        tweenHandler={(ratio) => ({
        main: {opacity:(2-ratio)/2}
        })
       }
      >
      <MainScreen/>
      </Drawer>
  )
}
}
const drawerStyles =
{
  drawer: {shadowColor: '#000000', shadowOpacity:0.9, shadowRadius:3},
  main: {paddingLeft:4}
}

