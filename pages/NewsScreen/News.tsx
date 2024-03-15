import React from 'react';
import {View, FlatList, ScrollView, Image} from 'react-native';
import NewsStyle from './News.style';
import news_data from './data/news_data.json';
import banner_data from './data/news_banner_data.json';
import NewCard from '../../components/NewCard';

const News = () => {
  function renderNew({item}: any): React.JSX.Element {
    return (
      <NewCard
        author={item.author}
        description={item.description}
        imageUrl={item.imageUrl}
        title={item.title}
        u_id={item.u_id}
      />
    );
  }
  function header() {
    return (
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        {banner_data.map(banner => (
          <Image
            key={banner.id}
            style={NewsStyle.bannerImage}
            source={{uri: banner.imageUrl}}
          />
        ))}
      </ScrollView>
    );
  }

  return (
    <View style={NewsStyle.newsMainContainer}>
      <FlatList
        ListHeaderComponent={header}
        keyExtractor={item => item.u_id.toString()}
        data={news_data}
        renderItem={renderNew}
      />
    </View>
  );
};

export default News;
