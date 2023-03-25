import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function OnlineService() {
  const [videoID1, setVideoID1] = useState('');
  const [videoID2, setVideoID2] = useState('');

  const getVideos = async () => {
    try {
      const response = await fetch('https://youtube.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&channelId=UCHo_NAei6lwlmC9HSFtO-Xw&maxResults=3&key=AIzaSyC2DjXLIDAeKi11KV4e3AIzuCUYQbd3vJs');
      const json = await response.json();
      console.log(json.items[2].contentDetails);
      setVideoID1(json.items[0].contentDetails.upload.videoId);
      setVideoID2(json.items[2].contentDetails.upload.videoId);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <View>
      <YoutubePlayer height={300} play={false} videoId={videoID1} />
      <YoutubePlayer height={300} play={false} videoId={videoID2} />
    </View>
  );
}