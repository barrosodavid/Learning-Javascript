import { Platform } from "react-native";

const theme = {
    colors: {
      textPrimary: '#24292e', //dark gray
      textSecondary: '#ffffff', 
      primary: '#0366d6', //blue
      appBarColor: '#24292e', //dark gray
      separator: '#CCCCCC',  //light gray
      mainBackground: '#FFFFFF',
      error: '#D73A4A' // red
    },
    fontSizes: {
      body: 14,
      subheading: 16,
    },
    fonts: {
      main: Platform.select({
        android: 'Roboto',
        ios: 'Arial',
        default: 'System'
      }),
    },
    fontWeights: {
      normal: '400',
      bold: '700',
    },
    margins: {
      main: 10,
      betweenElems: 4,
      appBar: 15
    },
    paddings: {
      elem: 10,
      info: 3
    },
    borderRadius: 5
};
  
export default theme;