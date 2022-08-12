import { View, Text, Image, StyleSheet, Button } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';

import Image1 from '../../assets/images/back.png'
import Image2 from '../../assets/images/ppl.jpg'
import Image3 from '../../assets/images/adress.png'




export default function OnboardScreen() {
    const navigation = useNavigation();
    function handleSkipt(){
        navigation.navigate('Landing')
      }
    
      function handleDone(){
        navigation.navigate('Landing')
      }

     
  return (
      <View style={{flex:1}} >
          <View style={styles.onboradConten}>
          <Onboarding
          bottomBarColor='#fff'
            skipLabel={"Saltar"}
            nextLabel={"Continuar"}
            
            onSkip={()=>handleSkipt('Landing')}
            onDone={()=> handleDone('Landing')}
            pages={[
            {
                backgroundColor: '#fafafa',
        
                image:<View>
                            <View style={styles.titleContent}>
                                <Text style={styles.title}>Seja bem vindo a Familia CARROCELL</Text>
                                
                            </View>
                                <Text style={styles.subt}>
                                    Encontre boleias na nossa aplicação
                                </Text>
                                <Image source={Image1} style={styles.img} />  
                        </View>,                
                
            },

            {
                backgroundColor: '#fff',
                image:<View>
                           
                           <Image source={Image2} style={styles.img} />  
                            <View style={styles.titleContent2}>
                                <Text style={styles.title2}>Com a CARROCELL se deslocar é facil</Text>
                                
                            </View>
                        </View>,     
            },   
            {
                backgroundColor: '#fff',
                image:<View>
                           <View style={styles.titleContent3}>
                                <Text style={styles.title2}>Encontre a boleia na tua paragem proxima</Text>
                                
                            </View>
                            <Image source={Image3} style={styles.img} />  
                            
                        </View>,     
            },      
            ]}
   
  />

          </View>
          

      </View>
    
  )
}

const styles = StyleSheet.create({
    onboradConten:{
        width:'100%',
        height:'100%'      
       
    },
    img:{
        width:350,
        height:350,
        resizeMode:'contain',
        justifyContent:'flex-end',
        top:10,
  
    },
    titleContent:{
        width:280,
        padding:10,
        marginVertical:20,
        top:10
    

    },
    title:{
        letterSpacing:3,
        fontSize:23,
        color:'#2B2B2B',
        fontFamily:'Raleway_300Light',
        fontWeight:'bold'
      
    },
    subt:{
        padding:10,
        left:15,
        fontSize:16,
        color:'#FF822E',
        fontFamily:'Raleway_300Light',
        fontWeight:'bold',
        letterSpacing:1

    },
    titleContent2:{
        backgroundColor:'#FF822E',
        width:220,
        borderTopRightRadius:50,
        borderBottomRightRadius:50,
        height:150,
        justifyContent:'center',
        right:12
        
    },
    titleContent3:{
        backgroundColor:'#FF822E',
        width:280,
        borderTopRightRadius:50,
        borderBottomRightRadius:50,
        height:150,
        justifyContent:'center',
        right:12

    },
    title2:{
        color:'#fff',fontSize:28,
        padding:10,
        fontFamily:'Raleway_200ExtraLight'
    }
})