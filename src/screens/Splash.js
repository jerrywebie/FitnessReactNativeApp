// splash component
import React from 'react';
import { View, Text, Pressable, 
  ImageBackground, StyleSheet, StatusBar, 
  Dimensions } from 'react-native';

import bannerImage from '../assets/images/banner.png';


const windowHeight = Dimensions.get('window').height;

const Splash = ({ navigation }) => {
  const onPressHandler = () => {
    navigation.replace('Loading');
  }
 
  return (
    <View style={styles.container}>
      <StatusBar hidden={true}/>
      <ImageBackground source={bannerImage} resizeMode="cover" style={styles.bannerImage}>
        <Pressable 
          onPress={onPressHandler}
          style={({pressed}) => ([{backgroundColor : pressed ? "#FF2400" : "black"}, styles.exploreButton])}>
          <Text style={styles.buttonText}>Explore exercises</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bannerImage : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  exploreButton: {
    marginTop: windowHeight - 200, // need to change device height 
    backgroundColor: "#FF2400",
    width: '80%',
    marginHorizontal: 20,
    borderRadius: 4,
  },
  buttonText: {
    color: '#f1f1f1',
    textAlign: 'center',
    lineHeight: 24,
    paddingVertical: 20,
    fontSize: 20,
    fontFamily: 'Raleway-Bold'
  }
});


export default Splash