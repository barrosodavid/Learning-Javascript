import { View, StyleSheet, ScrollView } from 'react-native'
import { Link } from 'react-router-native'
import Constants from 'expo-constants'
import theme from '../theme'
import Text from './Text'

const styles = StyleSheet.create({
    appBar: {
        paddingTop: Constants.statusBarHeight + 5,
        flexDirection: 'row',
        paddingBottom: 10,
        backgroundColor: theme.colors.appBarColor
    },
    link: {
        marginRight: theme.margins.appBar
    }
})

const AppBar = () => {
    return (<View style={styles.appBar}>
        <ScrollView horizontal>
            <AppBarTab text={'Repositories'} to={'/'} />
            <AppBarTab text={'Sign In'} to={'/signIn'} />
        </ScrollView>
    </View>)
}

const AppBarTab = ({text, to}) => {
    return (
    <Link to={to} style={styles.link}>
            <Text fontWeight={'bold'} fontSize={'subheading'} color={'textSecondary'}>
                {text}
            </Text>
    </Link>)
}

export default AppBar