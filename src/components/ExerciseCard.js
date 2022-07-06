// exercise card used by exercise list component
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native';

import GlobalStyle from '../utility/GlobalStyle';

const windowWidth = Dimensions.get('window').width;
const ExerciseCard = ({onPress, item, isMiniCard}) => {
    return (
      // Flat List Item
      <TouchableOpacity
        style={{...styles.exerciseContainer,  width: isMiniCard ? windowWidth/1.5 : 380 }}
        onPress={onPress}
      >
        <Text style={[styles.titleText, GlobalStyle.cardTitle]}>
          {item.name}
        </Text>
      <Image source={{uri: item.gifUrl}} resizeMode="cover"  
      style={{...styles.icon,  
        width: isMiniCard ? 60 : 100,
        height: isMiniCard ? 60 : 100}} />
      <Text style={[styles.searchText, GlobalStyle.categoryTitle]}>
        {item.bodyPart}
      </Text>
      <View style={styles.textContainer}>
        <Text style={[styles.categoryText, GlobalStyle.categoryTitle]}>{item.equipment}</Text>
        <Text style={[styles.categoryText, GlobalStyle.categoryTitle]}>{item.target}</Text>
      </View>
    </TouchableOpacity>
    );
  };

const styles = StyleSheet.create({
  exerciseContainer: {
    flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 25,
    paddingHorizontal: 15,
		backgroundColor: "#fff",
		borderRadius: 4,
		marginHorizontal: 16,
    marginVertical: 6,
		borderTopWidth: 2,
		borderTopColor: '#FF2400',
    elevation: 2,
    position: 'relative',
    borderTopLeftRadius: 20, 
    borderBottomRightRadius: 20,
  },
  textContainer: {
    flex: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    marginHorizontal: 4 ,
    marginVertical: 6,
  },
	titleText: {
    flex: 1,
		textTransform: 'capitalize',
    marginTop: 10,
	},
  searchText: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    color: "#ffffff",
    lineHeight: 16,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    opacity: 0.7,
    right: 10,
    top: 6
  },
  categoryText: {
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 16,
    backgroundColor: "#FF2400",
    paddingHorizontal: 10,
    paddingVertical: 4,
    opacity: 0.5,
    marginHorizontal: 1, 
    marginVertical: 1,
    color: "#000",
    borderRadius: 4,
  },
  icon: {
    flex: 2,
    marginVertical: 12,
  }

});

export default ExerciseCard;
