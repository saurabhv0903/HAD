
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { View, Text, SafeAreaView, ImageBackground, ScrollView, Modal,  StyleSheet, Pressable, Dimensions, Button, Animated, useWindowDimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import YoutubePlayer from 'react-native-youtube-iframe';
import {homeImage} from '../assets';

import NavigationBar from "../components/NavigationBar";
import { Icon } from "react-native-vector-icons/FontAwesome";


const images = new Array(6).fill(
  'https://static.vecteezy.com/system/resources/previews/022/451/024/non_2x/generative-ai-illustration-of-a-dog-and-cat-under-a-colorful-blanket-photo.jpg',
);

const Moodlift = () => {

    const navigation=useNavigation();
    
    useLayoutEffect(() => {
            navigation.setOptions({
            headerShown: false,
        })
    },[])

    const [playing, setPlaying] = useState(false);
    
    const scrollX = useRef(new Animated.Value(0)).current;

    const {width: windowWidth} = useWindowDimensions();

  
    let [videoUrl, setVideoUrl] = useState("0sZCzu0D4kI");
    const [videod, setVideoId] = useState([
      {title:"Meditation", item: "0sZCzu0D4kI" },
      {title:"Relaxation", item: "4m8RxRMhMSw" },
      {title:"Oddly Satisfying", item: "TTXcHEMfLb4" },
    ]);
    const onSelectType = (item) => {
      console.log(item);
      setVideoUrl(item);
      
    };

    let [content , setContent] = useState("What do you wanna listen");
    // const [tasks, setTasks] = useState([
    //   {title:"Hear a joke !", todo :"Joke"},
    //   {title:"Motivation Pump !", todo:"Motivation"},
    // ]);
    // const onSelectTask = (item) => {
    //   console.log(item);
    //   setTasks(item);
    //   if(item==="Joke")
    //   {
    //     ()=>getJokes('Jokes');
    //   }
    //   else
    //   {
    //     ()=>getMotivation('Motivation');
    //   }
    // };
    

    const getJokes= (item)=>{
      console.log(item);
      try {
        fetch(
          'https://jokeapi-v2.p.rapidapi.com/joke/Any', {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'X-RapidAPI-Key':'af584bc362msh037839860dbfb36p1a1584jsna4d1e52a4e90',
              'X-RapidAPI-Host':'jokeapi-v2.p.rapidapi.com',
            },
          }).then(response => response.json())
          .then(json => {
            
            console.log(json.joke);
            setContent(json.joke);
          });
      } catch (error) {
        console.error(error);
      }
    }
    
   const getMotivation=(item)=>{
      console.log(item);
      try {
        fetch(
          'https://olato-quotes.p.rapidapi.com/motivation', {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'X-RapidAPI-Key':'af584bc362msh037839860dbfb36p1a1584jsna4d1e52a4e90',
              'X-RapidAPI-Host':'olato-quotes.p.rapidapi.com',
            },
          }).then(response => response.json())
          .then(json => {
            console.log(json.quote);
            setContent(json.quote);
          });
      } catch (error) {
        console.error(error);
      }
    }
    
  
  
    useEffect(() => {
      const interval = setInterval(() => {
        
      }, 3500);
      return () => clearInterval(interval);
    }, []);
  
    

  return (

    
    <SafeAreaView className="  bg-white flex-1 relative">
      <View className=" bg-orange-100 bg-opacity-10 flex-1 text-black pt-2 p-5 mt-2 ml-2 mr-2 mb-2 shadow-lg rounded-lg">
                <Text  className="text-xl font-extrabold ">
                  Your space ! 
                </Text>
                <Text  className="text-l">
                  Sit back, Calm down and let us help you... 
                </Text>
   
                <View className=" bg-slate-50 bg-opacity-60 max-w-sm rounded overflow-hidden shadow-lg text-black pt-2 p-2 mt-2 ml-2 mr-2 mb-2 border-solid border-slate-950">
                  <View className='flex flex-row p-3'>
                  {videod.map((item, index) => (
                      <Pressable
                        onPress={() => onSelectType(item.item)}
                        style={({pressed})=>[
                          styles.type, 
                          {
                            backgroundColor: pressed?'#D3D3D3' : '#E5E4E2',
                            margin:5,
                            height:30,
                            padding:5,
                            borderRadius:10,
                          },
                        ]}
                        key={index}
                      >
                        <Text style={styles.dayText}>{item.title}</Text>
                      </Pressable>
                    ))}
                    </View>
                  <YoutubePlayer key={videoUrl} play={playing} videoId={videoUrl}/>
                </View>

                {/* <View className="max-w-sm rounded overflow-hidden shadow-lg text-black pt-2 p-2 mt-2 ml-2 mr-2 mb-2 border-solid border-slate-950">
                  <View className='flex flex-row p-3'>
                  {tasks.map((item, index) => (
                      <Pressable
                        onPress={() => onSelectTask(item.todo)}
                        style={({pressed})=>[
                          styles.type, 
                          {
                            backgroundColor: pressed?'#D3D3D3' : '#E5E4E2',
                            margin:5,
                            height:30,
                            padding:5,
                            borderRadius:10,
                          },
                        ]}
                        key={index}
                      >
                        <Text>{item.title}</Text>
                      </Pressable>
                    ))}
                    </View>
                    <View className='flex flex-col justify-center items-center max-w-md border-2 border-solid border-black'>
                          
                          <Text>{content}</Text>
                         
                  </View>
                </View> */}

                <View className='flex-col'>
                  <View className='flex flex-row p-3 justify-center items-center m-5'>
                    <Button style={styles.taskButton}  onPress={()=>getJokes('Jokes')} title="Laugh it out!"/>
                    <Button color='#8ee0e5' style={styles.button} onPress={()=>getMotivation('Motivation')} title="Motivation pump!"/>         
                  </View>
                    <View className='bg-white bg-blend-hue flex flex-row justify-center items-center p-5 max-w-md h-1/2 border-2 border-dotted border-red-400'> 
                          <Text style={styles.beautyText}>{content}</Text>     
                  </View>
                  </View>      
      </View>
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
              
            },
          ],{ useNativeDriver: true } )}
          scrollEventThrottle={1}>
          {images.map((image, imageIndex) => {
                    return (
                      <View style={{width: windowWidth, height: 200}} key={imageIndex}>
                        <ImageBackground source={{uri: image}} style={styles.card}>
                          <View style={styles.textContainer}>
                            <Text style={styles.infoText}>
                              {'Image - ' + imageIndex}
                            </Text>
                          </View>
                        </ImageBackground>
                        
                    <View style={styles.textContainer}>
                            <Text style={styles.infoText}>
                              {'Image - ' + imageIndex}
                            </Text>
                          </View>
                      </View>
                    );
          })}
        </ScrollView>
        <View style={styles.indicatorContainer}>
          {images.map((image, imageIndex) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1),
              ],
              outputRange: [8, 16, 8],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={imageIndex}
                style={[styles.normalDot, {width}]}
                
              />
            );
          })}
        </View>
      </View>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0, 0.7)',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  beautyText: {
    color: 'blue',
    fontSize: 16,
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'silver',
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 10,
    padding: 10,
    height:30,
    width:50,
  },
  taskButton: {
    borderRadius: 20,
    padding: 10,
    height:20,
    width:30,
    backgroundColor:'#6c6464',
  },
  buttonOpen: {
    backgroundColor: '#839192',
  },
  buttonClose: {
    backgroundColor: '#aeb6bf',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  modalView: {
    margin: 2,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});

export default Moodlift