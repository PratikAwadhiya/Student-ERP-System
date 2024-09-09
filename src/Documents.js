import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions , Platform,StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import LogoSchool from '../assets/img/logoSchool.png';
import Vector from '../assets/img/Vector.png';
import Book from '../assets/img/book1.png'; 
import Nvector from '../assets/img/Vector (1).png'; 
import Frame from '../assets/img/Frame.png'; 

const Document = () => {
  const navigation = useNavigation();
  
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Document</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <MaterialIcons name="search" size={24} color="#fff" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="notifications" size={24} color="#fff" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header1}>
          <Image source={LogoSchool} style={styles.logo} />
          <Text style={styles.schoolName}>DAV School</Text>
          <View style={styles.locationContainer}>
            <Ionicons name="location-sharp" size={18} color="red" />
            <Text style={styles.locationText}>5676 Raipur, Chhattisgarh, India</Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>See Toppers</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.grid}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Result')}>
            <Image source={Vector} style={styles.logoSmall} />
            <Text style={styles.cardText}>Results</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Certificate')}>
            <Image source={Book} style={styles.logoSmall} />
            <Text style={styles.cardText}>Certificate</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Image source={Nvector} style={styles.logoSmall} />
            <Text style={styles.cardText}>TC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Image source={Frame} style={styles.logoSmall} />
            <Text style={styles.cardText}>Student Details</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#B9B9B9',
    paddingVertical: 15,
  },
  header1: {
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    width: "85%",
    height: "27%",
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingTop:"10%",
    paddingHorizontal: "8%",
    width:'100%',
    backgroundColor: '#585E97',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    position: 'relative',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 30,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 45,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 16,
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  logoSmall: {
    width: 40,
    height: 40,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  schoolName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  locationText: {
    fontSize: 12,
    color: 'gray',
    marginLeft: 5,
  },
  button: {
    backgroundColor: '#FF8C00',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,

  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop:30,
    justifyContent: 'space-around',
    width: '100%',
  },
  card: {
    backgroundColor: '#fff',
    width: '40%',
    height:'35%',
    margin: 15,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  cardText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Document;
