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
import { StackNavigator, DrawerNavigator } from "react-navigation";

const colscreenBg = require("../../../assets/coleccionBG.png");
const launchtopLogo = require("../../../assets/logo_redondo.png");
const roma = require("../../../assets/tapas/base_roma.png");
const fragil = require("../../../assets/tapas/base_fragil.png");
const putas = require("../../../assets/tapas/base_putas.png");

class Base extends Component {
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
            <Title>LA BASE</Title>
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
          <ImageBackground  source={roma} style={styles.tapa}>
          <Text style={styles.titulo}>
          Y ROMA QUE SE DERRUMBA
          </Text>
          </ImageBackground>
          </View>      
          <View style={styles.tapaContainer}>
          <ImageBackground  source={fragil} style={styles.tapa}>
          <Text style={styles.titulo}>
          FRÁGIL CABALLO
          </Text>
          </ImageBackground>
          </View> 
          <View style={styles.tapaContainer}>
          <ImageBackground  source={putas} style={styles.tapa}>
          <Text style={styles.titulo}>
          PUTAS METAMÓRFICAS ALIVIO
          </Text>
          </ImageBackground>
          </View>      
        </ImageBackground>
      </Container>
    );
  }
}

export default Base;
