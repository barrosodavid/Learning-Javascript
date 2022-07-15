import { StyleSheet } from 'react-native';
import { useField } from 'formik'
import TextInput from './TextInput';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: theme.colors.error
  },
  textInput: {
    padding: theme.paddings.elem,
    borderRadius: theme.borderRadius,
    margin: theme.margins.betweenElems,
    borderColor: theme.colors.textPrimary,
    borderWidth: 1,
  },
  errorBorder: {
    borderColor: theme.colors.error,
    borderWidth: 2
  }
});

const FormikTextInput = ({ name, style, ...props }) => {
  const [field, meta, helpers] = useField(name);

  //Check that the field is touched and error message is present
  const showError = meta.touched && meta.error;

  const textInputStyle = [
    styles.textInput,
    showError && styles.errorBorder,
    style
  ]

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value || ''}
        error={showError}
        style={textInputStyle}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;