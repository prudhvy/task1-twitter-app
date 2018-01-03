import React from 'react';
import {Body,Card,CardItem,Content,Container,Deckswiper,Footer,Header,Icon,ListItem,List,Left,Right,Text,Thumbnail,View} from 'native-base';
import {Image,StatusBar,Settings } from "react-native";
import {StackNavigator} from 'react-navigation';
export default class SideBar extends React.Component 
{
    render() 
    {
        return 
        (
        <Container>
            <Footer style={{backgroundColor:"white"}} >
                <Left>
                    <Icon style={{ marginLeft: 20,color: '#3BB9FF'}} name='moon' ></Icon>
                </Left>
                <Right>
                    <Icon style={{ marginRight: 15,color: '#3BB9FF' }} name='qr-scanner'></Icon>
                </Right>
            </Footer>
        </Container>
        );
    }
}
  