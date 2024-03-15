import React, {useState} from 'react';
import styles from './StateAndLifecycle.style';
import {Button, Text, View} from 'react-native';

const StateAndLifecycle = () => {
  const [number, setNumber] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{number}</Text>
      <View style={styles.innerContainer}>
        <Button title="Up" onPress={() => setNumber(number + 1)} />
        <Button title="Down" onPress={() => setNumber(number - 1)} />
      </View>
    </View>
  );
};

export default StateAndLifecycle;
