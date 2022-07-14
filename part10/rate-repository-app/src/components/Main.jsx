import { StyleSheet, View } from 'react-native'
import AppBar from './AppBar';
import { Route, Routes, Navigate } from 'react-router-native'
import RepositoryList from '../views/RepositoryList'
import theme from '../theme';
import SignIn from '../views/SignIn';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
});


const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <Routes>
                <Route exact path='/' element={<RepositoryList></RepositoryList>}  />
                <Route exact path='/signIn' element={<SignIn></SignIn>} />
                <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>
        </View>
    )
}

export default Main