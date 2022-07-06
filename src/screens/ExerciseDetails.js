// exercise detail component
import React, {useContext} from 'react';
import {Text, ScrollView, StyleSheet, Dimensions} from 'react-native';

import Details from '../components/Details';
import Separator from '../components/Separator';
import ExerciseList from '../components/ExerciseList';
import ExerciseContext from '../context/ExerciseContext';

import GlobalStyle from '../utility/GlobalStyle';

const windowWidth = Dimensions.get('window').width;

const ExerciseDetails = ({route, navigation}) => {
  const { exerciseId } = route.params;
  const {exercises} = useContext(ExerciseContext);
  const exerciseDetail = exercises?.filter((exe) => exe.id === exerciseId)[0];
  const similarExercises = exercises?.filter((exe) => exe.target === exerciseDetail.target && exe.id !== exerciseId);
 
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#ffffff"}} contentContainerStyle={{alignItems: 'center'}}>
     <Details exerciseDetail={exerciseDetail} />
     <Separator width={windowWidth} height={0.3} backgroundColor="#c1c1c1" />
     <Text style={[styles.similarTitle, GlobalStyle.bottomTabTitle]}>similar {exerciseDetail.target} exercises ({similarExercises.length}) </Text>
     <ExerciseList data={similarExercises} navigation={navigation} isMiniCard={true}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  similarTitle: {
    color: "#FF2400",
    width: windowWidth -20,
    marginHorizontal: 20,
    marginVertical: 10,
    textTransform: 'capitalize'
  }
}); 

export default ExerciseDetails;
