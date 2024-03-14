import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import styles from './Card.style';

interface CardProps {
  title: string;
  text: string;
  onPress: (e: GestureResponderEvent) => void;
}

const Card = ({title, text, onPress}: CardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardText}>{text}</Text>
        </View>
        <TouchableOpacity style={styles.cardButton} onPress={e => onPress(e)}>
          <Text style={styles.cardButtonTitle}>I LIKED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
