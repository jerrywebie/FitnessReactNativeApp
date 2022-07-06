// all bodyparts categories
import React, { useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import BodyPartContext from '../context/BodyPartContext';

import CategoryList from '../components/CategoryList';

const BodyParts = ({navigation}) => {
  const {bodyParts} = useContext(BodyPartContext);
  return (
    <View style={styles.container}>
      <CategoryList 
        data={bodyParts} 
        mainCategory={false} 
        navigation={navigation} 
        navigationScreenName="ListBySelectedBodyPart" 
      />
   </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 
});
export default BodyParts;