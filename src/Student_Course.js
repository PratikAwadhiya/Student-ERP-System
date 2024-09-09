import React, { useState } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Platform,
  StatusBar
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Course = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Student Course</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <MaterialIcons
              name="search"
              size={24}
              color="#fff"
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons
              name="notifications"
              size={24}
              color="#fff"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.headerT}>
        <Text style={styles.headerText}>Course Name : Mathematics</Text>
      </View>

      <View style={styles.description}>
        <Text style={styles.descriptionHeading}>Description</Text>
        <Text style={styles.descriptionText}>This course covers fundamental concepts in mathematics, including arithmetic, algebra, geometry, and statistics. Students will develop problem-solving skills and apply mathematical principles to real-world scenarios.</Text>
      </View>
      <Text style={styles.teacherHeading}>Teacher</Text>

      <Text style={styles.nameHeading}>R. K. Shukla (M.Sc)</Text>

      <View style={styles.seat}>
        <Text style={styles.seatTotal}>Total Seat : 80</Text>
        <Text style={styles.seatTotal}>Available Seat : 80</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    paddingTop: 40,
    backgroundColor: "#585E97",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    position: "relative",
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 30,

  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 45,
  },
  headerIcons: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 16,
  },
  headerT: {
    alignSelf: "center",
    padding: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description:{
    padding: 20,
    backgroundColor: '#D9D9D9',
    marginVertical: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  descriptionHeading:{
    alignSelf:'center',
    fontSize:16,
    fontWeight:'bold',
    marginBottom:10
},
descriptionText:{
    alignSelf:'center',
    letterSpacing:0.5,
    fontSize:14
},
teacherHeading:{
    textAlign:'center',
    fontSize:16,
    fontWeight:'bold',
    letterSpacing:0.5,
    paddingBottom:15
},
nameHeading:{
    textAlign:'center',
    fontSize:16,
    fontWeight:'bold',
    letterSpacing:0.5,
    paddingBottom:18
},
seat:{
   paddingHorizontal:15,
   paddingVertical:12,
   flexDirection:'row',
   justifyContent:'space-between'
},
seatTotal:{
   fontSize:16,
   fontWeight:'bold',
   letterSpacing:0.5
}

});

export default Course;
