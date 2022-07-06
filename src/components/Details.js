// App.js
import React from 'react';
import {Text, View, Image, StyleSheet, Dimensions} from 'react-native';

import equipmentIcon from '../assets/icons/equipment.png';
import targetIcon from '../assets/icons/target.png';
import bodypartIcon from '../assets/icons/body_part.png';
import DemoDescription from './DemoDescription';

import GlobalStyle from '../utility/GlobalStyle';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Details = ({exerciseDetail}) => {
  const {name, target, equipment, bodyPart, gifUrl} = exerciseDetail;
  const IconList = [
    { name: bodyPart,  icon: bodypartIcon},
    { name: equipment,  icon: equipmentIcon},
    { name: target,  icon: targetIcon},
   ];
  return (
     <>
     <Image source={{uri: gifUrl}} resizeMode="contain" style={styles.exerciseImage}/>
     <DemoDescription name={name} target={target} />
     {IconList?.map((item, key) => {
        return (
          <View key={item.name} style={{
            flex: 1, width: windowWidth -30,
            flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center',  marginVertical: 26}}>
            <View style={{backgroundColor: '#f1f1f1', width: windowWidth/6, height: windowHeight/12, borderRadius: 30, 
              justifyContent: 'center',
              alignItems: 'center',}}>
              <Image source={item.icon} resizeMode="contain" style={styles.icon}/>
            </View>
            <Text style={[styles.iconText, GlobalStyle.bottomTabTitle]}>{item.name}</Text>
          </View>
        )
    })}
     </>
  )
}

const styles = StyleSheet.create({
  exerciseImage: {
    width: windowWidth/1.25,
    height: windowHeight/3,
    marginTop: 40,
  },
  icon : {
   padding: 10,
   height: 40,
   width: 40
  },
  iconText: {
    flex: 0.5,
    marginLeft: 20
  }
  
});

export default Details;
