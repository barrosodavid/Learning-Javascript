import { View, StyleSheet } from 'react-native'
import theme from '../theme'
import Constants from 'expo-constants'
import Text from './Text'

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        paddingBottom: 10,
        backgroundColor: theme.colors.primary
    },
})

const AppBar = () => {
    return <View style={styles.container}>
        <Text fontWeight={'bold'} fontSize={'subheading'}>
            Repositories
        </Text>
    </View>
}

export default AppBar