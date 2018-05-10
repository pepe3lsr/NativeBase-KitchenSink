const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null
  },
  logoContainer: {
    flex: 1,
    marginTop: deviceHeight / 8,
    marginBottom: 30
  },
  logo: {
    position: "absolute",
    width: 400,
    height: 300
  },
  text: {
    color: "#fff",
    bottom: 6,
    margin: 5,
    textAlign: 'center',
    backgroundColor: 'black'
  }
};
