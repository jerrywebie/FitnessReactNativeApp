// all exercises screen by selected target
import React, {useContext} from 'react';
import { View, StyleSheet} from 'react-native';

import ExerciseList from '../components/ExerciseList';

import ExerciseContext from '../context/ExerciseContext';

const ListBySelectedTarget = ({route, navigation}) => {
  const { category } = route.params;
  const {exercises} = useContext(ExerciseContext);
  const allExercisesBySelectedTarget = exercises.filter((exe) => exe.target === category);
   
  return (
    <View style={styles.container}>
      <ExerciseList data={allExercisesBySelectedTarget} navigation={navigation} isMiniCard={false}/>
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

export default ListBySelectedTarget;
