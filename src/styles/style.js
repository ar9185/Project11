import { StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
border: {
 width: Dimensions.get('window').width,
 margin:20,
 padding: 20,
 borderWidth :1,
 borderColor: '#0f0',
 // backgroundColor: '#f00',

},

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});


export default styles;