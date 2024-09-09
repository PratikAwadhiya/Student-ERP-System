import React from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions ,Platform , StatusBar } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const windowHeight = Dimensions.get('window').height;

const data = [
  { subject: "Travel", status: "Pending" },
  { subject: "Personal Reasons", status: "Approved" },
  { subject: "Professional Development", status: "Rejected" },
  { subject: "Health Reasons", status: "Approved" },
  { subject: "Stress Management", status: "Approved" },
];

const LeaveRequest = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainCont}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Leave Requests</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <MaterialIcons name="search" size={24} color="#fff" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="notifications" size={24} color="#fff" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.firstBox}>
          <Text style={styles.boxText}>Total Leaves: 20</Text>
        </View>
        <View style={styles.secBox}>
          <Text style={styles.boxText}>Remaining Leaves: 04</Text>
        </View>
      </View>
      <View style={styles.secCont}>
        <TouchableOpacity
          style={styles.thrBox}
          onPress={() => {
            navigation.navigate("Leave");
          }}
        >
          <Text style={styles.boxText}>Request for leave</Text>
          <AntDesign name="arrowright" size={15} style={{ color: "black", marginLeft: 10 }} />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>List of leaves</Text>
      <ScrollView style={styles.thrCont}>
        <View style={styles.thead}>
          <Text style={styles.boxText1}>Subject</Text>
          <Text style={styles.boxText1}>Status</Text>
        </View>
        <View>
          {data.map((item, index) => (
            <View key={index} style={styles.tabBox}>
              <Text style={{ flex: 5, marginLeft: 30 }}>{item.subject}</Text>
              <View style={styles.divider} />
              <Text
                style={[
                  { flex: 2 },
                  item.status === "Pending" ? styles.blueText :
                  item.status === "Rejected" ? styles.redText : styles.greenText,
                ]}
              >
                {item.status}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.mainButton}>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "white" }}>See More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainCont: {
    flex: 1,
    backgroundColor: "#FFFFED",
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 40,
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
    paddingLeft: 49,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 16,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginHorizontal: 15,
  },
  firstBox: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "hsla(234, 100%, 74%, 1)",
    height: windowHeight * 0.06,
    justifyContent: "center",
    alignItems: "center",
    width: "45%",
    shadowColor: "black",
    shadowOffset: {
      width: 4,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 10,
  },
  secBox: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "hsla(101, 90%, 82%, 1)",
    height: windowHeight * 0.06,
    justifyContent: "center",
    alignItems: "center",
    width: "48%",
    shadowColor: "#666666",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 10,
  },
  boxText: {
    fontWeight: "500",
    fontSize: 13,
    padding:10
  },
  secCont: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 25,
  },
  thrBox: {
    backgroundColor: "#FAF095",
    height: windowHeight * 0.05,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
    shadowColor: "black",
    shadowOffset: {
      width: 4,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 10,
  },
  thead: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 50,
    marginBottom: 10,
  },
  boxText1: {
    fontWeight: "500",
    fontSize: 15,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 20,
  },
  thrCont: {
    flexGrow: 1,
    marginBottom: 0,
  },
  tabBox: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#FAF9F6",
    padding: 12,
    shadowColor: "#666666",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 10,
    margin: 10,
  },
  divider: {
    width: 1,
    height: "100%",
    backgroundColor: "#000",
    marginHorizontal: 16,
  },
  greenText: {
    color: "green",
  },
  redText: {
    color: "red",
  },
  blueText: {
    color: "blue",
  },
  mainButton: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "hsla(234, 26%, 47%, 1)",
    marginBottom: 70,
    width: 100,
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
  },
});

export default LeaveRequest;
