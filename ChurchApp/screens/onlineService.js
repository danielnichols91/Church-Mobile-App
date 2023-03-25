import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

var videoID1; 
var videoID2;
getVideos = async () => {
  try {
    const response = await fetch('https://youtube.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&channelId=UCHo_NAei6lwlmC9HSFtO-Xw&maxResults=2&key=AIzaSyC2DjXLIDAeKi11KV4e3AIzuCUYQbd3vJs');
    const json = await response.json();
    //setData(json.items);
    videoID1 = json.items[0].snippet.contentDetails.upload.videoId;
    console.log(videoID1);
    videoID2 = json.items[1].snippet.contentDetails.upload.videoId;
    console.log(videoID2);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
}
export default function OnlineService() {
  return (
    
    <View>
      <YoutubePlayer
        height={300}
        play={false}
        videoId={videoID1}
      />
      <YoutubePlayer
        height={300}
        play={false}
        videoId={videoID2}
      />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
