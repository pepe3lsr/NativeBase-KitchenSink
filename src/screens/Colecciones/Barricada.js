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
  Text
} from "native-base";
import styles from "./styles";

import { ImageBackground, View, StatusBar } from "react-native";

const colscreenBg = require("../../../assets/coleccionBG.png");
const launchtopLogo = require("../../../assets/logo_redondo.png");
const bardo = require("../../../assets/tapas/barr_bardo.png");
const lennon = require("../../../assets/tapas/barr_lennon.png");
const nucleum = require("../../../assets/tapas/barr_nucleum.png");

class Barricada extends Component {
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
            <Title>BARRICADA</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.navigate("SideBar")}>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
         <ImageBackground source={colscreenBg} style={styles.imageContainer} resizeMode="contain">
          <View style={styles.logoContainer}>
          <ImageBackground source={launchtopLogo} style={styles.logo} />
          </View>
          <View style={styles.tapaContainer}>
          <ImageBackground  source={bardo} style={styles.tapa}>
          <Text style={styles.titulo}>
          BARDO
          </Text>
          </ImageBackground>
          </View>      
          <View style={styles.tapaContainer}>
          <ImageBackground  source={lennon} style={styles.tapa}>
          <Text style={styles.titulo}>
          LENNON, EL FÜHRER DE LOS INCAPACES
          </Text>
          </ImageBackground>
          </View> 
          <View style={styles.tapaContainer}>
          <ImageBackground  source={nucleum} style={styles.tapa}>
          <Text style={styles.titulo}>
          LA EMOTIVIDAD DEL NUCLEUM
          </Text>
          </ImageBackground>
          </View>      
        </ImageBackground>
      </Container>
    );
  }
}

export default Barricada;
