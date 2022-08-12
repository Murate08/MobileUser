import {StyleSheet} from  'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    header:{
        backgroundColor:'#FF822E',
        width:'100%',
        height:180,
        padding:20,
        justifyContent:'center'
    },
    nameText:{
        fontSize:22,
        color:'#fff',
        fontFamily:'Raleway_800ExtraBold',
        bottom:15,
        left:15
    },
    picView:{
        backgroundColor:'#fff',
        width:120,
        height:120,
        bottom:75,
        left:20,
        borderRadius:75,
        justifyContent:'center',
        alignItems:'center',
      
    },
    img:{
        width:110,
        height:110,
        borderRadius:55,
       
       
    },
    detailUser:{
        width:'90%',
        padding:20,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignSelf:'center',
        bottom:40,
        borderRadius:2
    },
    titleDetail:{
        alignSelf:'center',
        fontSize:18,
        fontFamily:'Raleway_200ExtraLight',
        
        
    },
    border:{
        width:'100%',
        height:1,
        backgroundColor:'#b2b2b2',
        top:2,
        alignSelf:'center',
    },
    dataContent:{
        paddingTop:15,
        flexDirection:'row',
        alignItems:'center',
    },
    detailText:{
        left:10,
        fontFamily:'Raleway_200ExtraLight',

    },
    terms:{
        flexDirection:'row',
        paddingLeft:20,
        alignItems:'center',
        bottom:15
    },
    termsText:{
        left:5,
        fontFamily:'Raleway_200ExtraLight',
    },
    viewContent:{
        backgroundColor:'#fff',
        width:150,
        height:60,
        right:20,
        bottom:30,
        borderRadius:4,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:10
    },
    profView:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    btn:{
        
      
    },
    bntContent:{
        backgroundColor:'#fafafa',
        width:'45%',
        height:40,
        borderWidth:0.3,
        borderColor:'#ccc',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:2,       

    }
  

})

export default styles
