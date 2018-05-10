import React, { Component } from "react";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text,
  ListItem,
  List
} from "native-base";

import styles from "./styles";


const datas = [
  {
    route: "Augurio",
    text: "2013 - Augurio"
  },
  {
    route: "Barricada",
    text: "2014 - Barricada"
  },
  {
    route: "Santitos",
    text: "2014 - Santitos Loquitos"
  },
  {
    route: "Base",
    text: "2015 - La Base"
  },
  {
    route: "Imprescindibles",
    text: "2016 - Los Imprescindibles"
  },
  {
    route: "veintediecisiete",
    text: "2017 - Veintediecisiete"
  },
  {
    route: "veintedieciocho",
    text: "2018 - Nueva Colección"
  },
  {
    route: "Herejes",
    text: "Herejes - Santos Sueltos"
  }
];

class ColeccionesNB extends Component {
  // eslint-disable-line

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Colecciones</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Text>
                    {data.text}
                  </Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" style={{ color: "#999" }} />
                </Right>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default ColeccionesNB;
