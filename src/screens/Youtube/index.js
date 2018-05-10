import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight
} from 'react-native';
import API                from './API';
import {StackNavigator}   from 'react-navigation';
import YoutubeViewer      from './YoutubeViewer';

class YoutubeSL extends Component {
  static navigationOptions={
    title: 'Santos TV',
    headerStyle: {
      backgroundColor: '#212121',
    },
    headerTitleStyle: {
      color: '#fff'
    }
  }


  constructor(props){
    super(props)
    this.state={
      isLoading: true,
      data:[]
    }
  }

  componentDidMount(){
    return fetch("https://www.googleapis.com/youtube/v3/search?key="+API.YOUTUBE_API+"&channelId=UCh0M2ciUdcHLhNrFnhUvQ2g&part=snippet,id&order=date&maxResults=20")
      .then((response) => response.json())
      .then((responseJson) => {
        var videoId = []
        responseJson.items.forEach(function(item){
          videoId.push(item)
        })
        this.setState({
          isLoading: false,
          data: videoId
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView>
        <View style={styles.container}>
          {this.state.data.map((item, i)=>
            <TouchableHighlight key={item.id.videoId} onPress={()=>navigate('YoutubeViewer', {youtubeId: item.id.videoId})}>
              <View style={styles.button}>
                <Image source={{uri: item.snippet.thumbnails.medium.url}} style={{width: 320, height: 180}}></Image>
                <Text style={styles.buttonText}>{item.snippet.title}</Text>
              </View>
            </TouchableHighlight>
          )}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});
export default YoutubeSL;
