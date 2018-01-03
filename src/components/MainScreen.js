import React from 'react';
import {Body,Button,Content,Card,CardItem,Container,Fab,Footer,FooterTab,Header,Item,Input,Left,Right,Text,Tab,Title,Thumbnail,TabHeading,ScrollableTab} from 'native-base';
import {Image,StyleSheet,TouchableOpacity,View} from 'react-native';
import {PropTypes} from 'prop-types';
export default class MainScreen extends React.Component 
{
    constructor()
    {
        super();
        this.state = 
        {
          fontLoaded: false,
        };
    }
    static contextTypes = 
    {
        drawer: PropTypes.object.isRequired,
    };
    render() 
    {
    return 
    (
        <Container>
            <View >
                <Header hasTabs style={{backgroundColor: "white"}}>
                    <Left>
                        <TouchableOpacity onPress={this.context.drawer.open}>
                            <Thumbnail source={require("../images/1.png")} />
                         </TouchableOpacity>
                    </Left>
                <Body>
                    <Title style={{color: "black",alignContent: 'flex-start'}} >Home</Title>   
                </Body>
                <Right/>
                </Header>
            </View>
            <Tabs tabBarUnderlineStyle={{backgroundColor:'#3BB9FF',borderBottomWidth:0}} >
                <Tab heading={ <TabHeading style={{backgroundColor:'white'}}><Icon name="home" style={{color:'#3BB9FF'}} /></TabHeading> }>
                </Tab>
                <Tab heading={ <TabHeading style={{backgroundColor:'white'}} ><Icon name="search" style={{color:'#3BB9FF'}} /></TabHeading>}>
                </Tab>
                <Tab heading={ <TabHeading style={{backgroundColor:'white'}}><Icon name="notifications" style={{color:'#3BB9FF'}}/></TabHeading>}>
                </Tab>
                <Tab heading={ <TabHeading style={{backgroundColor:'white'}}><Icon name="mail" style={{color:'#3BB9FF'}} /></TabHeading> }>
                </Tab>
            </Tabs>
            <Fab style={{ backgroundColor: '#3BB9FF', marginBottom: 30 }} position="bottomRight">
                <Icon name="create" />
            </Fab>
            <Footer style={{backgroundColor: 'white'}}>
                <FooterTab style={{backgroundColor: 'white'}}>
                    <Left>
                        <Text style={{fontSize: 20, color: '#3BB9FF', fontWeight: 'bold'}}>  All    Mentions</Text>
                    </Left>
                    <Right>
                        <Icon style={{ marginRight: 10, color: '#3BB9FF' }} name='settings'></Icon>
                    </Right>
                </FooterTab>         
            </Footer>
        </Container>
    );
  }
}