import React from 'react';
import {Body,Card,CardItem,Content,Container,Deckswiper,Footer,Header,Icon,ListItem,List,Left,Right,Text,Thumbnail,View} from 'native-base';
import {Image,StatusBar,Settings } from "react-native";
import {StackNavigator} from 'react-navigation';
export default class SideBar extends React.Component 
{
    render() 
    {
        return (
        <Container>
            <Content>
                <Card>
                    <CardItem >
                        <View>
                            <Thumbnail source={require('../images/1.png')} />
                            <Text style={{fontWeight: 'bold'}}>Abdul Azeez K <Icon name="arrow-dropdown" style={{color: '#3BB9FF'}}/></Text>
                            <Text note>@abdulazeezk</Text>
                        <View style = {{flexDirection: 'row'}} >
                            <Text>100 Following </Text>
                            <Text>50 Followers</Text>
                        </View>
                        </View>
                    </CardItem>
                    <CardItem style={{elevation: 2}}>
                        <List>
                            <ListItem button noborder icon>
                                <Left>
                                    <Icon name='person'style={{color: '#3BB9FF'}}/>
                                        <Text>Profile</Text>
                                </Left>
                            </ListItem>
                            <ListItem button noborder icon>
                                <Left>
                                    <Icon name='list-box' style={{color: '#3BB9FF'}}/>
                                        <Text>Lists</Text>
                                </Left>
                            </ListItem>
                            <ListItem button noborder icon>
                                <Left>
                                    <Icon name='flash' style={{color: '#3BB9FF'}}/>
                                        <Text>Flash</Text>
                                </Left>
                            </ListItem>
                            <ListItem button noborder icon>
                                <Left>
                                    <Icon name='albums' style={{color: '#3BB9FF'}}/>
                                        <Text>Albums</Text>
                                </Left>
                            </ListItem>
                        </List>
                    </CardItem>
                    <CardItem >
                        <List>
                            <ListItem button noborder>
                                <Text>Settings and Privacy</Text>               
                            </ListItem>
                            <ListItem button noborder>
                                <Text>Help Center</Text>               
                            </ListItem>
                        </List>
                    </CardItem>
                </Card>      
            </Content>
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
  