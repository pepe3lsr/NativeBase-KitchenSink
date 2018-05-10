const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;
export default {
  container: {
    backgroundColor: "#FFF"
  },
  mb10: {
    marginBottom: 10
  },
    imageContainer: {
    flex: 1.1,
    width: null,
    height: null,
  },
    logoContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'center',

  },
  logo: {
    width: 70,
    height: 70,
  },
    tapaContainer: {
    flexDirection: 'row',
    marginTop: 8,
    justifyContent: 'center',
  },
  
  tapa: {
    width: 110,
    height: 170,
  },
 	titulo: {
 	backgroundColor: 'black',
 	color: 'white',
 	textAlign: 'center',
 	fontSize: 10,
    height: 'auto',
    marginTop: 145,
 },
  	titulin: {
 	backgroundColor: 'black',
 	color: 'white',
 	textAlign: 'center',
 	fontSize: 9,
    height: 'auto',
    marginTop: 145,
    }
};

