// all exercises list
import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';

import ExerciseList from '../components/ExerciseList';

import ExerciseContext from '../context/ExerciseContext';

const AllExercises = ({navigation}) => {
  const {exercises} = useContext(ExerciseContext);
  return (
    <View style={styles.container}>
      <ExerciseList data={exercises} navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },

});

export default AllExercises;