import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from "native-base";
import styles from "./styles";
import { ImageBackground, View, StatusBar } from "react-native";

const colscreenBg = require("../../../assets/coleccionBG.png");
const launchtopLogo = require("../../../assets/logo_redondo.png");
const semana = require("../../../assets/tapas/semana.png");
const autoboicot = require("../../../assets/tapas/autoboicot.png");
const losinquietos = require("../../../assets/tapas/losinquietos.png");

class Herejes extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
                  <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Herejes, Santos Sueltos</Title>
          </Body>
          <Right>
              <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
          <ImageBackground source={colscreenBg} style={styles.imageContainer} resizeMode="contain">
          <View style={styles.logoContainer}>
            <ImageBackground source={launchtopLogo} style={styles.logo} />
          </View>
          <View style={styles.tapaContainer}>
          <ImageBackground  source={semana} style={styles.tapa}>
          <Text style={styles.titulo}>
          SEMANA LABORAL
          </Text>
          </ImageBackground>
          </View>      
          <View style={styles.tapaContainer}>
          <ImageBackground  source={autoboicot} style={styles.tapa}>
          <Text style={styles.titulo}>
          AUTOBOICOT
          </Text>
          </ImageBackground>
          </View> 
          <View style={styles.tapaContainer}>
          <ImageBackground  source={losinquietos} style={styles.tapa}>
          <Text style={styles.titulo}>
          LOS INQUIETOS
          </Text>
          </ImageBackground>
          </View>      
        </ImageBackground>
      </Container>
    );
  }
}

export default Herejes;
