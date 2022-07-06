
import React from 'react';
import {Text, StyleSheet, Dimensions} from 'react-native';

import GlobalStyle from '../utility/GlobalStyle';

const windowWidth = Dimensions.get('window').width;

const DemoDescription = ({name, target}) => {
  return (
    <>
      <Text style={[styles.title, GlobalStyle.cardTitle, {textTransform: 'capitalize'}]}>{name}</Text>
      <Text style={[styles.title, GlobalStyle.bottomTabTitle]}>Exercise keep you strong.{' '}
      <Text style={{textTransform: 'capitalize',}}>{name}</Text> bup is 
      one the best exercises to target your <Text style={{textTransform: 'capitalize'}}>{target}</Text>. 
      It will help you improve your mood and gain energy.
      </Text>
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    marginTop: 10,
    width: windowWidth - 20,
    marginHorizontal: 18,
    lineHeight: 26,
    opacity: 0.9
  },
});

export default DemoDescription;