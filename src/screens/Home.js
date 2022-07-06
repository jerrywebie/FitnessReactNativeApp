// home screen
import React from 'react';
import {View, Text, ImageBackground, Dimensions, StyleSheet } from 'react-native';

import bodyBuilderBanner from '../assets/images/home_banner.jpg';
import GlobalStyle from '../utility/GlobalStyle';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Home = () => {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ImageBackground source={bodyBuilderBanner} resizeMode="cover" style={styles.bannerImage}>
        <View style={{backgroundColor: "#FF2400", borderRadius: 4, borderTopLeftRadius: 30, borderBottomRightRadius: 30, width: windowWidth-30, height: windowHeight/6, marginTop: windowHeight/3, opacity: 0.85}}>
          <Text style={[{color: "#fff",  textTransform: 'capitalize', padding: 10}, GlobalStyle.homeTitle]}>
            awesome exercises you should know
          </Text>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bannerImage : {
    width: windowWidth,
    height: windowHeight,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
});

export default Home