import React, { Component } from "react";
import { Image } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge
} from "native-base";
import styles from "./style";

const drawerCover = require("../../../assets/drawer-cover.png");
const datas = [
  {
    name: "Poesía random",
    route: "NHDeckSwiper",
    icon: "happy",
    bg: "#C5F442"
  },
  {
    name: "Novedades",
    route: "Novedades",
    icon: "paper-plane",
    bg: "#C5F442"
  },
  {
    name: "Eventos",
    route: "Eventos",
    icon: "easel",
    bg: "#C5F442"
  },
  {
    name: "Colecciones",
    route: "ColeccionesNB",
    icon: "bookmarks",
    bg: "#477EEA",
    types: "8"
  },
  {
    name: "Instagram",
    route: "Instagram",
    icon: "camera",
    bg: "#DA4437",
  },
  {
    name: "Youtube",
    route: "YoutubeSL",
    icon: "videocam",
    bg: "#4DCAE0"
  },
  {
    name: "Autores",
    route: "NHButton",
    icon: "person",
    bg: "#1EBC7C",
    types: "24"
  },
  {
    name: "Twitter",
    route: "Twitter",
    icon: "logo-twitter",
    bg: "#B89EF5"
  }
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <Image source={drawerCover} style={styles.drawerCover} />

          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
                {data.types &&
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 72,
                        backgroundColor: data.bg
                      }}
                    >
                      <Text
                        style={styles.badgeText}
                      >{`${data.types}`}</Text>
                    </Badge>
                  </Right>}
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
