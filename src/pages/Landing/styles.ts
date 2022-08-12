import { StyleSheet, PixelRatio } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    justifyContent: 'center',
    padding: 10
  },
  profile:{
    width:90,
    height:90,
    backgroundColor:'#fff',
    bottom:50,
    alignSelf:'flex-end',
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center'
  },

  banner: {
    width: '100%',
    resizeMode: 'contain'
  },

  title: {
    fontFamily:'Raleway_300Light',
    color: '#2B2B2B',
    fontSize: 25,
    lineHeight: 30,
    marginTop: 20,
  },

  titleBold: {
    fontFamily: 'Raleway_200ExtraLight',
    color: '#FF822E',
    fontSize:20
  },

  buttonsContainer: {
    marginTop: 50,
    top:20
  },

  button: {
    height: 70,
    width: '100%',
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 24,
    justifyContent: 'space-between',
    marginTop:15,
    alignItems:'center'
  },

  buttonPrimary: {
   
    backgroundColor: '#FF822E',
   
  },

  buttonSecondary: {
    backgroundColor: '#2B2B2B'
   
   
  },

  buttonText: {
    fontFamily: 'Archivo_400Regular',
    color: '#FFF',
    fontSize: 20,
  },

  totalConnections: {
    fontFamily: 'Poppins_400Regular',
    color: '#2B2B2B',
    fontSize: 12,
    lineHeight: 20,
    maxWidth: 140,
    top:100,
    alignSelf:'flex-end'
  },

});

export default styles;