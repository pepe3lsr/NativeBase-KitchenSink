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
const alhajero = require("../../../assets/tapas/impre_alhajero.png");
const violencia = require("../../../assets/tapas/impre_violencia.png");
const panks = require("../../../assets/tapas/impre_panks.png");

class Imprescindibles extends Component {
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
            <Title>Los Imprescindibles</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
          <ImageBackground source={colscreenBg} style={styles.imageContainer} resizeMode="contain">
          <View style={styles.logoContainer}>
            <ImageBackground source={launchtopLogo} style={styles.logo} />
          </View>
          <View style={styles.tapaContainer}>
          <ImageBackground  source={alhajero} style={styles.tapa}>
          <Text style={styles.titulo}>
          UN ALHAJERO SIN TERMINAR
          </Text>
          </ImageBackground>
          </View>      
          <View style={styles.tapaContainer}>
          <ImageBackground  source={violencia} style={styles.tapa}>
          <Text style={styles.titulo}>
          VIOLENCIA DOMÉSTICA
          </Text>
          </ImageBackground>
          </View> 
          <View style={styles.tapaContainer}>
          <ImageBackground  source={panks} style={styles.tapa}>
          <Text style={styles.titulin}>
          POEMAS PANKS PARA COMMUNITY MANAGERS
          </Text>
          </ImageBackground>
          </View>      
        </ImageBackground>
      </Container>
    );
  }
}

export default Imprescindibles;
