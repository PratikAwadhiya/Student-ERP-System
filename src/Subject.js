import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const subjectsData = [
  {
    id: "1",
    name: "Subject 1",
    code: "012",
    weeklyClasses: "2 Days",
    days: "Friday & Saturday",
    teacher: "Teacher Name",
  },
  {
    id: "2",
    name: "Subject 2",
    code: "012",
    weeklyClasses: "2 Days",
    days: "Friday & Saturday",
    teacher: "Teacher Name",
  },
  {
    id: "3",
    name: "Subject 3",
    code: "012",
    weeklyClasses: "2 Days",
    days: "Friday & Saturday",
    teacher: "Teacher Name",
  },
  {
    id: "4",
    name: "Subject 4",
    code: "012",
    weeklyClasses: "2 Days",
    days: "Friday & Saturday",
    teacher: "Teacher Name",
  },
  {
    id: "5",
    name: "Subject 5",
    code: "012",
    weeklyClasses: "2 Days",
    days: "Friday & Saturday",
    teacher: "Teacher Name",
  },
];

const teacherImage = require("../assets/img/Teacher.png");

export default function Subjects({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.box}
      onPress={() => navigation.navigate("Course")}
    >
      <View style={styles.boxContent}>
        <Text style={styles.subjectName}>{item.name}</Text>
        <Text style={styles.subjectCode}>Subject Code: {item.code}</Text>
        <Text style={styles.subjectInfo}>
          Weekly Classes: {item.weeklyClasses}
        </Text>
        <Text style={styles.subjectInfo}>Days: {item.days}</Text>
      </View>

      <View style={styles.divider}></View>

      <View style={styles.teacherContainer}>
        <Image source={teacherImage} style={styles.teacherImage} />
        <Text style={styles.teacherName}>{item.teacher}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Subjects</Text>
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
        <FlatList
          data={subjectsData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBF6EF",
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
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 30,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 45,
  },
  headerIcons: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 16,
  },
  box: {
    height: hp("21%"),
    width: wp("90%"),
    marginTop: hp("3%"),
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 5,
    overflow: "hidden",
  },
  boxContent: {
    paddingLeft: 15,
    paddingVertical: 9,
  },
  subjectName: {
    fontWeight: "bold",
    fontSize: 22,
  },
  subjectCode: {
    color: "gray",
    fontSize: 9,
  },
  subjectInfo: {
    fontSize: 13,
    fontWeight: "400",
  },
  divider: {
    width: "100%",
    borderWidth: 0.5,
    borderColor: "gray",
    marginVertical: 5,
  },
  teacherContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
    paddingLeft: 8,
    marginBottom: 15,
    marginTop: -5,
  },
  teacherImage: {
    width: 35,
    height: 35,
    borderRadius: 25,
  },
  teacherName: {
    marginLeft: 10,
  },
  listContent: {
    paddingBottom: hp("3%"),
  },
});
