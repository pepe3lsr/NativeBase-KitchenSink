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
import { ImageBackground, View, StatusBar, Image } from "react-native";

const colscreenBg = require("../../../assets/coleccionBG.png");
const launchtopLogo = require("../../../assets/logo_redondo.png");
const astro = require("../../../assets/tapas/titos_astro.png");
const vivir = require("../../../assets/tapas/titos_vivir.png");
const bambu = require("../../../assets/tapas/titos_bambu.png");

class Santitos extends Component {
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
            <Title>SANTITOS LOQUITOS</Title>
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
          <ImageBackground source={astro} style={styles.tapa}>
          <Text style={styles.titulo}>
          EL ASTRONAUTA Y EL ÁRBOL
          </Text>
          </ImageBackground>
          </View>      
          <View style={styles.tapaContainer}>
          <ImageBackground  source={vivir} style={styles.tapa}>
          <Text style={styles.titulo}>
          VIVEN EN LAS NUBES
          </Text>
          </ImageBackground>
          </View> 
          <View style={styles.tapaContainer}>
          <ImageBackground  source={bambu} style={styles.tapa}>
          <Text style={styles.titulo}>
          BAMBÚ y CONEJO
          </Text>
          </ImageBackground>
          </View>      
        </ImageBackground>
      </Container>
    );
  }
}

export default Santitos;
