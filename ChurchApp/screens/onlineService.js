import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Linking, Platform } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import BottomNavBar from '../bottomNavBar';

export default function OnlineService() {
  const [videoID1, setVideoID1] = useState('');
  const [videoID2, setVideoID2] = useState('');

  const getVideos = async () => {
    var json=[]; 
    try {
      const response = await fetch('https://youtube.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&channelId=UCHo_NAei6lwlmC9HSFtO-Xw&maxResults=3&key=AIzaSyC2DjXLIDAeKi11KV4e3AIzuCUYQbd3vJs');
      json = await response.json();
    } catch (error) {
      console.error("This is a console error: "+error); 
    }
    try{
      console.log(json.items[2].contentDetails.upload.videoId);
      setVideoID1(json.items[2].contentDetails.upload.videoId);
      //console.log(json.items[2].contentDetails.upload.videoId);
    }
    catch{
      setVideoID1(json.items[2].contentDetails.playlistItem.resourceId.videoId);
      //console.log(json.items[2].contentDetails.playlistItem.resourceId.videoId);
    }
    try{
      console.log(json.items[0].contentDetails.upload.videoId);
      setVideoID2(json.items[0].contentDetails.upload.videoId);
      //console.log(json.items[0].contentDetails.upload.videoId);
    }
    catch{
      setVideoID2(json.items[0].contentDetails.playlistItem.resourceId.videoId);
      //console.log(json.items[0].contentDetails.playlistItem.resourceId.videoId);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

    return ( 
        <View style={styles.container}>
          <Text style={styles.subTitle}>9am Traditional</Text>
          <YoutubePlayer height={200} play={false} videoId={videoID1} data-testid ="video1"/>
          <Text style={styles.subTitle}>11am Modern</Text>
          <YoutubePlayer height={200} play={false} videoId={videoID2} data-testid ="video2"/>
          <Text
              style={styles.link}
              onPress={() => {
                Linking.openURL('https://www.youtube.com/channel/UCHo_NAei6lwlmC9HSFtO-Xw');
              }}>
            Youtube Channel
          </Text>
          <BottomNavBar/>
        </View>
    );
  }

const styles = StyleSheet.create({
  subTitle:{
    fontFamily: Platform.OS === 'ios' ? 'Avenir-Light' : 'sans-serif-light',
    fontSize: 22,
    backgroundColor:'rgb(50, 50, 50)',
    color: 'rgb(255,255,255)',
    margin: 20,
    width: 200,
    alignSelf: 'center',
    borderRadius: 5,
    textAlign: 'center',
    fontWeight:'600',
  },
  link: {
    fontFamily: 'sans-serif-light',
    fontSize: 22,
    backgroundColor:'rgb(213, 36, 43)',
    color: 'rgb(255,255,255)',
    margin: 20,
    width: 200,
    alignSelf: 'center',
    borderRadius: 5,
    textAlign: 'center',
    fontWeight:'600',
  },
    container: {
      flex: 1,
    },
});