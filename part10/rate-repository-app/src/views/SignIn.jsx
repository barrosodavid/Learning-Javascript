import { Formik } from "formik"
import { View, Pressable, StyleSheet } from "react-native"
import FormikTextInput from "../components/FormikTextInput"
import Text from "../components/Text"
import theme from "../theme"

const initialValues = {
    username: '',
    password: ''
}

const styles = StyleSheet.create({
    form: {
        margin: theme.margins.main
    },
    textInput: {
        padding: theme.paddings.elem,
        borderRadius: theme.borderRadius,
        margin: theme.margins.betweenElems,
        borderColor: theme.colors.textPrimary,
        borderWidth: 1,
    },
    submit: {
        backgroundColor: theme.colors.primary,
        marginTop: theme.margins.betweenElems,
        padding: theme.paddings.elem,
        justifyContent:'center', 
        alignItems: 'center',
        borderRadius: theme.borderRadius
    }
})

const SignIn = () => {
    const onSubmit = (values) => {
        console.log(values)
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} /> }
        </Formik>
    )
    
}
const SignInForm = ({onSubmit}) => {
    return (<View style={styles.form}>
        <FormikTextInput name="username" placeholder="Username" placeholderTextColor={theme.colors.textPrimary} style={styles.textInput} />
        <FormikTextInput name="password" placeholder="Password" placeholderTextColor={theme.colors.textPrimary} secureTextEntry style={styles.textInput} />
        <Pressable onPress={onSubmit} style={styles.submit}>
            <View style={{}}>
                <Text color={'textSecondary'} fontWeight={'bold'}>Sign in</Text>
            </View>
        </Pressable>
    </View>)

}

export default SignIn