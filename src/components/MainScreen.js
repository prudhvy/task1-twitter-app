import React from 'react';
import {Body,Button,Content,Card,CardItem,Container,Fab,Footer,FooterTab,Header,Icon,Item,Input,Left,Right,Text,Tab,Tabs,Title,Thumbnail,TabHeading,ScrollableTab} from 'native-base';
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
    return (
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
                    <Container>
                        <Content style={{flex: 1}}>

                            <Card >
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={require("../images/2.png")} />
                                        <Body>
                                            <Text>
                                            <Text>Raghul</Text>
                                            <Text style={{color: '#a9a9a9'}}>@raghul 10m <Icon name="arrow-dropdown" style={{color: '#3BB9FF'}}/></Text></Text>
                                            <Text note style={{color: '#3BB9FF'}}>#vaccines #lives # 3million</Text>
                                            <Text note style={{color: '#3BB9FF'}}>https://www.unicef.org/immunization/</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem>
                                    <Body style={{paddingLeft:50}} >
                                        <Image source={require("../images/f2.png")} style={{flex: 1}}/>
                                    </Body>
                                </CardItem>
                                <CardItem style={{paddingLeft: 70, paddingRight: 30}} >
                                    <Left>
                                        <Button transparent>
                                            <Icon name="chatboxes" style={{color: '#3BB9FF'}}/>
                                            <Text>70</Text>
                                        </Button>
                                        <Button transparent>
                                            <Icon name="repeat" style={{color: '#3BB9FF'}}/>
                                            <Text>20</Text>
                                        </Button>
                                        <Button transparent>
                                            <Icon name="heart" style={{color: '#3BB9FF'}}/>
                                            <Text>5</Text>
                                        </Button>
                                    </Left>
                                </CardItem>
                            </Card>

                            <Card >
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={require("../images/3.png")} />
                                        <Body>
                                            <Text>
                                            <Text>Akash Srithran</Text>
                                            <Text style={{color: '#a9a9a9'}}>@akashsri 20m <Icon name="arrow-dropdown" style={{color: '#3BB9FF'}}/></Text></Text>
                                            <Text note style={{color: '#3BB9FF'}}>#assists #65.3million #refugees</Text>
                                            <Text note style={{color: '#3BB9FF'}}>http://www.unhcr.org.in/</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem>
                                    <Body style={{paddingLeft:50}} >
                                        <Image source={require("../images/f3.png")} style={{flex: 1}}/>
                                    </Body>
                                </CardItem>
                                <CardItem style={{paddingLeft: 70, paddingRight: 30}} >
                                    <Left>
                                        <Button transparent>
                                            <Icon name="chatboxes" style={{color: '#3BB9FF'}}/>
                                            <Text>35</Text>
                                        </Button>
                                        <Button transparent>
                                            <Icon name="repeat" style={{color: '#3BB9FF'}}/>
                                            <Text>23</Text>
                                        </Button>
                                        <Button transparent>
                                            <Icon name="heart" style={{color: '#3BB9FF'}}/>
                                            <Text>15</Text>
                                        </Button>
                                    </Left>
                                </CardItem>
                            </Card>

                            <Card >
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={require("../images/4.png")} />
                                        <Body>
                                            <Text>
                                            <Text>Balaji</Text>
                                            <Text style={{color: '#a9a9a9'}}>@mpbalaji 2m <Icon name="arrow-dropdown" style={{color: '#3BB9FF'}}/></Text></Text>
                                            <Text note style={{color: '#3BB9FF'}}>#195nations #global #celcius</Text>
                                            <Text note style={{color: '#3BB9FF'}}>https://careers.un.org/lbw/Home.aspx</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem>
                                    <Body style={{paddingLeft:50}} >
                                        <Image source={require("../images/f4.png")} style={{flex: 1}}/>
                                    </Body>
                                </CardItem>
                                <CardItem style={{paddingLeft: 70, paddingRight: 30}} >
                                    <Left>
                                        <Button transparent>
                                            <Icon name="chatboxes" style={{color: '#3BB9FF'}}/>
                                            <Text>15</Text>
                                        </Button>
                                        <Button transparent>
                                            <Icon name="repeat" style={{color: '#3BB9FF'}}/>
                                            <Text>10</Text>
                                        </Button>
                                        <Button transparent>
                                            <Icon name="heart" style={{color: '#3BB9FF'}}/>
                                            <Text>6</Text>
                                        </Button>
                                    </Left>
                                </CardItem>
                            </Card>

                            <Card >
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={require("../images/5.png")} />
                                        <Body>
                                            <Text>
                                            <Text>Bhargavan</Text>
                                            <Text style={{color: '#a9a9a9'}}>@bhargav 1m <Icon name="arrow-dropdown" style={{color: '#3BB9FF'}}/></Text></Text>
                                            <Text note style={{color: '#3BB9FF'}}>#4continent's #peace #peacekeepers</Text>
                                            <Text note style={{color: '#3BB9FF'}}>https://peacekeeping.un.org/en</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem>
                                    <Body style={{paddingLeft:50}} >
                                        <Image source={require("../images/f5.png")} style={{flex: 1}}/>
                                    </Body>
                                </CardItem>
                                <CardItem style={{paddingLeft: 70, paddingRight: 30}} >
                                    <Left>
                                        <Button transparent>
                                            <Icon name="chatboxes" style={{color: '#3BB9FF'}}/>
                                            <Text>55</Text>
                                        </Button>
                                        <Button transparent>
                                            <Icon name="repeat" style={{color: '#3BB9FF'}}/>
                                            <Text>60</Text>
                                        </Button>
                                        <Button transparent>
                                            <Icon name="heart" style={{color: '#3BB9FF'}}/>
                                            <Text>74</Text>
                                        </Button>
                                    </Left>
                                </CardItem>
                            </Card>


                            <Card >
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={require("../images/6.png")} />
                                        <Body>
                                            <Text>
                                            <Text>Aswin Kumar</Text>
                                            <Text style={{color: '#a9a9a9'}}>@kaswin 11m <Icon name="arrow-dropdown" style={{color: '#3BB9FF'}}/></Text></Text>
                                            <Text note style={{color: '#3BB9FF'}}>#fight #1.1billion #poverty</Text>
                                            <Text note style={{color: '#3BB9FF'}}>http://www.un.org/sustainabledevelopment/poverty/</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem>
                                    <Body style={{paddingLeft:50}} >
                                        <Image source={require("../images/f6.png")} style={{flex: 1}}/>
                                    </Body>
                                </CardItem>
                                <CardItem style={{paddingLeft: 70, paddingRight: 30}} >
                                    <Left>
                                        <Button transparent>
                                            <Icon name="chatboxes" style={{color: '#3BB9FF'}}/>
                                            <Text>23</Text>
                                        </Button>
                                        <Button transparent>
                                            <Icon name="repeat" style={{color: '#3BB9FF'}}/>
                                            <Text>36</Text>
                                        </Button>
                                        <Button transparent>
                                            <Icon name="heart" style={{color: '#3BB9FF'}}/>
                                            <Text>42</Text>
                                        </Button>
                                    </Left>
                                </CardItem>
                            </Card>

                            <Card >
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={require("../images/7.png")} />
                                        <Body>
                                            <Text>
                                            <Text>Arjun</Text>
                                            <Text style={{color: '#a9a9a9'}}>@itsarjun 111m <Icon name="arrow-dropdown" style={{color: '#3BB9FF'}}/></Text></Text>
                                            <Text note style={{color: '#3BB9FF'}}>#humanrights #global #80treaties</Text>
                                            <Text note style={{color: '#3BB9FF'}}>http://www.ohchr.org/EN/HRBodies/HRC/Pages/AboutCouncil.aspx</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem>
                                    <Body style={{paddingLeft:50}} >
                                        <Image source={require("../images/f7.png")} style={{flex: 1}}/>
                                    </Body>
                                </CardItem>
                                <CardItem style={{paddingLeft: 70, paddingRight: 30}} >
                                    <Left>
                                        <Button transparent>
                                            <Icon name="chatboxes" style={{color: '#3BB9FF'}}/>
                                            <Text>33</Text>
                                        </Button>
                                        <Button transparent>
                                            <Icon name="repeat" style={{color: '#3BB9FF'}}/>
                                            <Text>6</Text>
                                        </Button>
                                        <Button transparent>
                                            <Icon name="heart" style={{color: '#3BB9FF'}}/>
                                            <Text>12</Text>
                                        </Button>
                                    </Left>
                                </CardItem>
                            </Card>

                            <Card >
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={require("../images/8.png")} />
                                        <Body>
                                            <Text>
                                            <Text>Daya Shankar</Text>
                                            <Text style={{color: '#a9a9a9'}}>@dayask 14m <Icon name="arrow-dropdown" style={{color: '#3BB9FF'}}/></Text></Text>
                                            <Text note style={{color: '#3BB9FF'}}>#appeal #22.5billion #93.5million</Text>
                                            <Text note style={{color: '#3BB9FF'}}>http://www.un.org/en/sections/what-we-do/deliver-humanitarian-aid/</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem>
                                    <Body style={{paddingLeft:50}} >
                                        <Image source={require("../images/f8.png")} style={{flex: 1}}/>
                                    </Body>
                                </CardItem>
                                <CardItem style={{paddingLeft: 70, paddingRight: 30}} >
                                    <Left>
                                        <Button transparent>
                                            <Icon name="chatboxes" style={{color: '#3BB9FF'}}/>
                                            <Text>35</Text>
                                        </Button>
                                        <Button transparent>
                                            <Icon name="repeat" style={{color: '#3BB9FF'}}/>
                                            <Text>18</Text>
                                        </Button>
                                        <Button transparent>
                                            <Icon name="heart" style={{color: '#3BB9FF'}}/>
                                            <Text>19</Text>
                                        </Button>
                                    </Left>
                                </CardItem>
                            </Card>

                            <Card >
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={require("../images/9.png")} />
                                        <Body>
                                            <Text>
                                            <Text>Alamelu Lakshmanan</Text>
                                            <Text style={{color: '#a9a9a9'}}>@alamelu 55m <Icon name="arrow-dropdown" style={{color: '#3BB9FF'}}/></Text></Text>
                                            <Text note style={{color: '#3BB9FF'}}>#maternal #health #1million</Text>
                                            <Text note style={{color: '#3BB9FF'}}>http://www.unfpa.org/maternal-health</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem>
                                    <Body style={{paddingLeft:50}} >
                                        <Image source={require("../images/f9.png")} style={{flex: 1}}/>
                                    </Body>
                                </CardItem>
                                <CardItem style={{paddingLeft: 70, paddingRight: 30}} >
                                    <Left>
                                        <Button transparent>
                                            <Icon name="chatboxes" style={{color: '#3BB9FF'}}/>
                                            <Text>45</Text>
                                        </Button>
                                        <Button transparent>
                                            <Icon name="repeat" style={{color: '#3BB9FF'}}/>
                                            <Text>37</Text>
                                        </Button>
                                        <Button transparent>
                                            <Icon name="heart" style={{color: '#3BB9FF'}}/>
                                            <Text>14</Text>
                                        </Button>
                                    </Left>
                                </CardItem>
                            </Card>

                            <Card >
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={require("../images/10.png")} />
                                        <Body>
                                            <Text>
                                            <Text>Anish Srinivasan</Text>
                                            <Text style={{color: '#a9a9a9'}}>@anish 55m <Icon name="arrow-dropdown" style={{color: '#3BB9FF'}}/></Text></Text>
                                            <Text note style={{color: '#3BB9FF'}}>#diplomacy #67countries #elections</Text>
                                            <Text note style={{color: '#3BB9FF'}}>http://www.un.org/undpa/en/elections</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem>
                                    <Body style={{paddingLeft:50}} >
                                        <Image source={require("../images/f10.png")} style={{flex: 1}}/>
                                    </Body>
                                </CardItem>
                                <CardItem style={{paddingLeft: 70, paddingRight: 30}} >
                                    <Left>
                                        <Button transparent>
                                            <Icon name="chatboxes" style={{color: '#3BB9FF'}}/>
                                            <Text>65</Text>
                                        </Button>
                                        <Button transparent>
                                            <Icon name="repeat" style={{color: '#3BB9FF'}}/>
                                            <Text>87</Text>
                                        </Button>
                                        <Button transparent>
                                            <Icon name="heart" style={{color: '#3BB9FF'}}/>
                                            <Text>44</Text>
                                        </Button>
                                    </Left>
                                </CardItem>
                            </Card>

                        </Content>
                    </Container>
                </Tab>
                <Tab heading={ <TabHeading style={{backgroundColor:'white'}} ><Icon name="search" style={{color:'#3BB9FF'}} /></TabHeading>}>
                    <Container>
                        <TouchableOpacity onPress={this.context.Header}>
                            <Header searchBar rounded style={{backgroundColor: '#3BB9FF'}} >
                                <Item>
                                    <Icon name="search" />
                                    <Input placeholder="Search Twitter" />
                                </Item>
                                <Button transparent>
                                    <Text>Search</Text>
                                </Button>
                            </Header>
                        </TouchableOpacity>
                    </Container>
                </Tab>
                <Tab heading={ <TabHeading style={{backgroundColor:'white'}}><Icon name="notifications" style={{color:'#3BB9FF'}}/></TabHeading>}>
                    <Container style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
                        <Text style={{fontSize: 25}} >No Notifications</Text>
                    </Container>
                </Tab>
                <Tab heading={ <TabHeading style={{backgroundColor:'white'}}><Icon name="mail" style={{color:'#3BB9FF'}} /></TabHeading> }>
                    <Container style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
                        <Text style={{fontSize: 25}} >No Messages</Text>
                    </Container>
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