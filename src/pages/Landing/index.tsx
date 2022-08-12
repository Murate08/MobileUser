import React, { useState, useEffect } from 'react';
import { View, Image, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import PageHeader from '../../components/PageHeader';
import api from '../../services/api';

import styles from './styles';
import { Entypo} from '@expo/vector-icons';


function Landing() {
  const { navigate } = useNavigation();
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data; 

      setTotalConnections(total);
    })
  }, []);

  function handleNavigateToGiveClassesPage() {
    navigate('GiveClasses');
  }

  function handleNavigateToProfile() {
    navigate('Profile');
  }

  function handleNavigateToStudyPages() {
    navigate('Study');
  }

  return (
    <View style={styles.container}>
      
      <Pressable style={styles.profile} onPress={handleNavigateToProfile}>
        <Entypo name='user' size={25} color="#000"/>

      </Pressable>
      <Text style={styles.title}>
        Ola, somos carrocell {'\n'}
        <Text style={styles.titleBold}>Como podemos o ajudar?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton 
          onPress={handleNavigateToStudyPages}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Text style={styles.buttonText}>Encontrar boleias</Text>
        </RectButton>

        <RectButton 
          onPress={handleNavigateToGiveClassesPage} 
          style={[styles.button, styles.buttonSecondary]}
        >
         

          <Text style={styles.buttonText}>Dar boleias</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total de {totalConnections} de boleias já realizadas {' '}
      </Text>
    </View>
  );
}

export default Landing;