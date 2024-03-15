import React from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import Card from '../../components/Card';

const CustomComponentPage = () => {
  const styles = StyleSheet.create({
    main: {
      flex: 1,
    },
  });

  return (
    <View style={styles.main}>
      <Card
        title="John Doe"
        text="Winter is coming"
        onPress={e => Alert.alert(`${e}`)}
      />
      <Card
        title="Arif Işık"
        text="Uzaylılar tarafından kaçırıldım. Event Tarafından"
        onPress={e => Alert.alert(`${e}`)}
      />
      <Card
        title="Arif Işık"
        text="Uzaylılar tarafından kaçırıldım. Event Tarafından"
        onPress={e => Alert.alert(`${e}`)}
      />
    </View>
  );
};

export default CustomComponentPage;
