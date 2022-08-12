import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import {useNavigation} from '@react-navigation/native'
import {SimpleLineIcons, MaterialIcons, Entypo} from '@expo/vector-icons'


export default function Profile() {
  const navigation = useNavigation()
   




  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.nameText}>Ola Sheyla Tamires</Text>
      </View>
      <View style={styles.profView}>
      <View style={styles.picView}>
      <Entypo name='user' size={25} color="#000"/>
      </View>
      <View style={styles.viewContent}>
        <Pressable style={styles.bntContent}
          
        >
          <MaterialIcons name='history' style={styles.btn} size={30}/>
        </Pressable>
        <Pressable style={styles.bntContent}
          
        >
          <MaterialIcons name='contact-support' style={styles.btn} size={30}/>
        </Pressable>
        
      

      </View>

      </View>
      
      <View style={styles.detailUser}>
        <Text style={styles.titleDetail}>Teus dados</Text>
        <View style={styles.border}></View>

        <View style={styles.dataContent}>
          <SimpleLineIcons name='envelope' size={25} color="#b2b2b2"/>
          <Text style={styles.detailText}>tamires@gmail.com</Text>

        </View>

        <View style={styles.dataContent}>
          <SimpleLineIcons name='location-pin' size={25} color="#b2b2b2"/>
          <Text style={styles.detailText}>Magoanine C, casa 10, quarterão 20</Text>

        </View>
        <View style={styles.dataContent}>
          <SimpleLineIcons name='phone' size={25} color="#b2b2b2"/>
          <Text style={styles.detailText}>877613086</Text>
        </View>
      </View>
        <Pressable style={styles.terms}>
          <SimpleLineIcons name='doc' size={25} color="#b2b2b2"/>
          <Text style={styles.termsText}>Politica de Privacidade</Text>
        </Pressable>
        
    </View>
  )
}