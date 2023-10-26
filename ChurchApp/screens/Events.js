import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import BottomNavBar from '../bottomNavBar';

export default function Events(props) {
    const url = "https://www.sjfirstumc.org/_functions/events";
    //const exampleURL = "https://api.github.com/users/hadley/orgs"; 
    var newData;
    let [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const options= {
        method:"GET",
    }
    useEffect(()=>{ 
        fetchData() 
      },[]); 
    
      const fetchData = () => { 
        fetch(url,options) 
          .then(response => response.json()) 
          .then(json => setData(json)) 
          .catch(error => console.log(error)) 
          .finally(() => setLoading(false));
      }; 
    // async function getAllData(){
        
    // }
    // useEffect(() => {
    //     try {
    //         // const response = fetch(url);
    //         // const data = response.json();
    //         // console.log(data);
    //         const fetchData = fetch(url);
    //         if (!fetchData.ok) {
    //             const message = `An error has occured:`;
    //             throw new Error(message);
    //           }
        
    //           const data = fetchData.json();
    //           console.log(data);
    //             // .then((resp) => {
    //             //     return resp.json();
    //             // })
    //             // .then((json) => {
    //             //     console.log(json);
    //             //     setData(json);
    //             //     //newData = resp.body[0].location;
    //             // })
    //             // .catch((error) => console.error(error))
    //             // .finally(() => setLoading(false)); 
    //     } catch (error) {
    //         console.log('response error')
    //         console.log(error);
    //     }
       
    // }, []);
    //console.log(newData);
    return ( 
        <View style={styles.container}>
        {/* {loading ? (
            <Text>Loading...</Text>
        ) : (
            data.map((post) => {
            return (
                <View>
                    <Text >Events</Text>
                    <Text>{post.body}</Text>
                </View>
            );
            })
        )} */
        <Text>{typeof(data)}</Text>
        }
            <BottomNavBar/>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
});