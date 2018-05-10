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
const sinceridad = require("../../../assets/tapas/2017_sinceridad.png");
const amiga = require("../../../assets/tapas/2017_amiga.png");
const pesadillas = require("../../../assets/tapas/2017_pesadillas.png");

class veintedieciocho extends Component {
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
            <Title>Nueva Colección 2018</Title>
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
          <ImageBackground  source={sinceridad} style={styles.tapa}>
          <Text style={styles.titulo}>
          LA SINCERIDAD DE UN GOLPE
          </Text>
          </ImageBackground>
          </View>      
          <View style={styles.tapaContainer}>
          <ImageBackground  source={amiga} style={styles.tapa}>
          <Text style={styles.titulo}>
          AMIGA
          </Text>
          </ImageBackground>
          </View> 
          <View style={styles.tapaContainer}>
          <ImageBackground  source={pesadillas} style={styles.tapa}>
          <Text style={styles.titulin}>
          NO CUENTES PESADILLAS EN AYUNAS 
          </Text>
          </ImageBackground>
          </View>      
        </ImageBackground>
      </Container>
    );
  }
}

export default veintedieciocho;
