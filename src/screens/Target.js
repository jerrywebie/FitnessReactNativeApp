// all target categories
import React, { useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import TargetContext from '../context/TargetContext';

import CategoryList from '../components/CategoryList';

const Target = ({navigation}) => {
  const {targets} = useContext(TargetContext);
  return (
    <View style={styles.container}>
      <CategoryList 
        data={targets} 
        mainCategory={false} 
        navigation={navigation} 
        navigationScreenName="ListBySelectedTarget" 
      />
   </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 
});
export default Target;
