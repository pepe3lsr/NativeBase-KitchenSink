import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Icon,
  Body,
  Text
} from "native-base";
import styles from "./styles";
import { ImageBackground, View, StatusBar } from "react-native";

const colscreenBg = require("../../../assets/coleccionBG.png");
const launchtopLogo = require("../../../assets/logo_redondo.png");
const geometrias = require("../../../assets/tapas/2017_geometrias.png");
const ballenas = require("../../../assets/tapas/2017_ballenas.png");
const canciones = require("../../../assets/tapas/2017_canciones.png");

class veintediecisiete extends Component {
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
            <Title>Colección 2017</Title>
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
          <ImageBackground  source={geometrias} style={styles.tapa}>
          <Text style={styles.titulo}>
          GEOMETRÍAS INCOMPLETAS
          </Text>
          </ImageBackground>
          </View>      
          <View style={styles.tapaContainer}>
          <ImageBackground  source={ballenas} style={styles.tapa}>
          <Text style={styles.titulo}>
          NO SÉ NADA DE BALLENAS
          </Text>
          </ImageBackground>
          </View> 
          <View style={styles.tapaContainer}>
          <ImageBackground  source={canciones} style={styles.tapa}>
          <Text style={styles.titulo}>
          LAS CANCIONES DE LOS BOLICHES
          </Text>
          </ImageBackground>
          </View>      
        </ImageBackground>
      </Container>
    );
  }
}

export default veintediecisiete;
