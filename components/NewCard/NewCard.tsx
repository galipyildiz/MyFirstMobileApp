import React from 'react';
import {Image, Text, View} from 'react-native';
import NewCardStyle from './NewCard.style';

interface NewCardInterface {
  u_id: number;
  author: string;
  title: string;
  description: string;
  imageUrl: string;
}
const NewCard = ({
  u_id,
  author,
  description,
  imageUrl,
  title,
}: NewCardInterface) => {
  return (
    <View key={u_id} style={NewCardStyle.container}>
      <Image style={NewCardStyle.image} source={{uri: imageUrl}} />
      <View style={NewCardStyle.inner}>
        <Text style={NewCardStyle.title}>{title}</Text>
        <Text style={NewCardStyle.description}>{description}</Text>
        <Text style={NewCardStyle.author}>{author}</Text>
      </View>
    </View>
  );
};

export default NewCard;
