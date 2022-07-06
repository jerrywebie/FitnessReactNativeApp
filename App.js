// App.js
import React, {useEffect, useState} from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Splash from './src/screens/Splash';
import Home from './src/screens/Home';
import Exercises from './src/screens/Exercises';
import Search from './src/screens/Search';
import AllExercises from './src/screens/AllExercises';
import Equipment from './src/screens/Equipment';
import BodyPart from './src/screens/BodyPart';
import Target from './src/screens/Target';
import ListBySelectedBodyPart from './src/screens/ListBySelectedBodyPart';
import ListBySelectedEquipment from './src/screens/ListBySelectedEquipment';
import ListBySelectedTarget from './src/screens/ListBySelectedTarget';
import ExerciseDetails from './src/screens/ExerciseDetails';
import ExerciseContext from './src/context/ExerciseContext';
import BodyPartContext from './src/context/BodyPartContext';
import EquipmentContext from './src/context/EquipmentContext';
import TargetContext from './src/context/TargetContext';

//import {exerciseOptions, fetchData} from './src/api/data';
import exerciseList from './src/data/exercises.json';
import bodyPartList from './src/data/bodyPartList.json';
import equipmentList from './src/data/equipmentList.json';
import targetList from './src/data/targetList';
//import config from './src/utility/config';
import GlobalStyle from './src/utility/GlobalStyle';

function Loading() {
  return (
    <Tab.Navigator initialRouteName="Home"
    screenOptions={{
      tabBarActiveTintColor: '#FF2400',
    }}>
      <Tab.Screen name="Home" 
        component={Home} 
        options={{ 
          headerStyle: { backgroundColor: "#FF2400"},
          headerTintColor: '#fff',
          headerTitleStyle: GlobalStyle.screenTitle,
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="home" color={focused ? "#FF2400" : "#808080"} size={26} />
          ),
          }} />
      <Tab.Screen name="Exercises" 
        component={Exercises} 
        options={{ 
          headerStyle: { backgroundColor: "#FF2400"},
          headerTintColor: '#fff',
          headerTitleStyle: GlobalStyle.screenTitle,
          tabBarLabel: 'Exercises',
          tabBarIcon: ({ focused }) => (
          <MaterialCommunityIcons name="weight-lifter" color={focused ? "#FF2400" : "#808080"} size={26} />
          ),
        }}/>
      <Tab.Screen name="Search" 
        component={Search}  
        options={{ 
          headerStyle: { backgroundColor: "#FF2400"},
          headerTintColor: '#fff',
          headerTitleStyle: GlobalStyle.screenTitle,
          tabBarLabel: 'Search',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="magnify" color={focused ? "#FF2400" : "#808080"}  size={26} />
          ),
        }}/>
    </Tab.Navigator>
  );
} 

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);
  const [targets, setTargets] = useState([]);
  const [equipments, setEquipments] = useState([]);
  
  
  useEffect(() => {
   async function getExercises () {
      //  const requestUrl = config.domain + config.api.exerciseList;
      //  const exerciseData = await fetchData(requestUrl, exerciseOptions);
      const exerciseData = exerciseList.exercises;
      setExercises(exerciseData);
    }
    getExercises();
    
  }, [setExercises]);

  useEffect(() => {
    function getBodyParts () {
    //  const requestUrl = config.domain + config.api.bodyPartList;
    //  const bodyPartsData = await fetchData(requestUrl, exerciseOptions);
      const bodyPartsData = bodyPartList.bodyparts;
      setBodyParts(bodyPartsData);
    }
   
    getBodyParts();
    
  }, [setBodyParts]);

  useEffect(() => {
    function getTargets () {
      // const requestUrl = config.domain + config.api.targetList;
      // const TargetsData = await fetchData(requestUrl, exerciseOptions);
      const TargetsData = targetList.targets;
      setTargets(TargetsData);
    }
   
    getTargets();
    
  }, [setTargets]);

  useEffect(() => {
    function getEquipments () {
      // const requestUrl = config.domain + config.api.equipmentList;
      // const EquipmentsData = await fetchData(requestUrl, exerciseOptions);
      const EquipmentsData = equipmentList.equipments;
      setEquipments(EquipmentsData);
    }
   
    getEquipments();
    
  }, [setEquipments]);

  return (
    <ExerciseContext.Provider value={{exercises}}>
      <BodyPartContext.Provider value={{bodyParts}}>
        <EquipmentContext.Provider value={{equipments}}>
          <TargetContext.Provider value={{targets}}>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen 
                  name="Splash" 
                  component={Splash} 
                  options={{ headerShown: false }}
                />
                <Stack.Screen 
                  name="Loading" 
                  component={Loading} 
                  options={{ headerShown: false }} />
                <Stack.Screen name="All" component={AllExercises}
                   options={{ 
                    title: "All Exercises",
                    headerStyle: {
                      backgroundColor:"#FF2400",
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      textTransform: 'uppdercase',
                    },
                    }}/>
                <Stack.Screen name="Target" component={Target}  
                    options={{ 
                    headerStyle: {
                      backgroundColor:"#FF2400",
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      textTransform: 'uppdercase',
                    },
                    }}/>
                <Stack.Screen name="BodyPart" component={BodyPart} 
                   options={{ 
                    title: "Body Parts",
                    headerStyle: {
                      backgroundColor:"#FF2400",
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      textTransform: 'uppdercase',
                    },
                    }}/>
                <Stack.Screen name="Equipment" component={Equipment} 
                  options={{ 
                    headerStyle: {
                      backgroundColor:"#FF2400",
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      textTransform: 'uppdercase',
                    },
                    }}/>
                <Stack.Screen name="ListBySelectedBodyPart" component={ListBySelectedBodyPart} 
                  options={({ route }) => ({ 
                    title: route.params.name,
                    headerStyle: {
                      backgroundColor:"#FF2400",
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      textTransform: 'uppdercase',
                    },
                    })}/>
                <Stack.Screen name="ListBySelectedEquipment" component={ListBySelectedEquipment} 
                  options={({ route }) => ({ 
                    title: route.params.name,
                    headerStyle: {
                      backgroundColor:"#FF2400",
                    },
                    headerTintColor: '#fff', 
                    headerTitleStyle: {
                      textTransform: 'uppdercase',
                    },
                    })}/>
                <Stack.Screen name="ListBySelectedTarget" component={ListBySelectedTarget} 
                  options={({ route }) => ({ 
                    title: route.params.name,
                    headerStyle: {
                      backgroundColor:"#FF2400",
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      textTransform: 'uppdercase',
                    },
                   })}/>
                <Stack.Screen name="ExerciseDetails" component={ExerciseDetails} 
                  options={({ route }) => ({ 
                    title: route.params.name,
                    headerStyle: {
                      backgroundColor:"#FF2400",
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      textTransform: 'uppdercase',
                    }, 
                  })}/>
              </Stack.Navigator>
            </NavigationContainer>
          </TargetContext.Provider>
        </EquipmentContext.Provider>
      </BodyPartContext.Provider>
    </ExerciseContext.Provider>
  );
}


export default App;