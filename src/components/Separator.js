
import React from 'react';
import {View} from 'react-native';

const Separator = ({ width, height, backgroundColor}) => {
  return (
   <View style={{width: width, height: height, backgroundColor: backgroundColor, }}/>
  )
}

export default Separator;
