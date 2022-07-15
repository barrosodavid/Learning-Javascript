import { FlatList, View, StyleSheet, Image } from 'react-native';
import theme from '../theme';
import Text from '../components/Text';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.separator
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: theme.borderRadius,
    marginRight: theme.margins.betweenElems,
    flexGrow: 0
  },
  itemContainer: {
    paddingBottom: theme.paddings.elem
  },
  mainContainer: {
    flexDirection: 'row',
    margin: theme.margins.main,
  },
  descriptionContainer: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginLeft: theme.margins.betweenElems
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  statContainer: {
    textAlign: 'center'
  },
  languageContainer: {
    borderRadius: theme.borderRadius,
    backgroundColor: theme.colors.primary,
    padding: theme.paddings.info
  }
});

const repositories = [
  {
    id: 'jaredpalmer.formik',
    fullName: 'jaredpalmer/formik',
    description: 'Build forms in React, without the tears',
    language: 'TypeScript',
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
  },
  {
    id: 'rails.rails',
    fullName: 'rails/rails',
    description: 'Ruby on Rails',
    language: 'Ruby',
    forksCount: 18349,
    stargazersCount: 45377,
    ratingAverage: 100,
    reviewCount: 2,
    ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
  },
  {
    id: 'django.django',
    fullName: 'django/django',
    description: 'The Web framework for perfectionists with deadlines.',
    language: 'Python',
    forksCount: 21015,
    stargazersCount: 48496,
    ratingAverage: 73,
    reviewCount: 5,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
  },
  {
    id: 'reduxjs.redux',
    fullName: 'reduxjs/redux',
    description: 'Predictable state container for JavaScript apps',
    language: 'TypeScript',
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
  },
];

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={RepositoryItem}
      contentContainerStyle={{paddingBottom: 100}}
    />
  );
};

const RepositoryItem = ({item}) => {
  const getFormattedNumber = (number) => {
      if (number >= 1000){
        const division = number / 1000
        const integerPart = Math.floor(division)
        const decimalPart = (division % 1).toFixed(1).substring(2)
        return `${integerPart}.${decimalPart}K`
      }
      
      return number
  } 

  return (
  <View style={styles.itemContainer}>
    
    <View style={styles.mainContainer}>
      <Image style={styles.avatar} source={{uri: item.ownerAvatarUrl}}></Image>
      <View style={styles.descriptionContainer}>
        <Text fontWeight={'bold'}>
            {item.fullName}
        </Text>
        <Text style={{flex: 1}}>
            {item.description}
        </Text>
          
        <View style={styles.languageContainer}>
          <Text color={'textSecondary'}>
              {item.language}
          </Text>
        </View>
      </View>
    </View>
    <View style={styles.statsContainer}>
      <View style={styles.statContainer}>
        <Text fontWeight={'bold'}>{getFormattedNumber(item.stargazersCount)}</Text>
        <Text>Stars</Text>
      </View>
      <View style={styles.statContainer}>
        <Text fontWeight={'bold'}>{getFormattedNumber(item.forksCount)}</Text>
        <Text>Forks</Text>
      </View>
      <View style={styles.statContainer}>
        <Text fontWeight={'bold'}>{item.reviewCount}</Text>
        <Text>Reviews</Text>
      </View>
      <View style={styles.statContainer}>
        <Text fontWeight={'bold'}>{item.ratingAverage}</Text>
        <Text>Rating</Text>
      </View>
    </View>
  </View>)
}

export default RepositoryList;