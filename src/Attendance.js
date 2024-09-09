import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity,Platform,StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import baseURL from "./api/baseURL";

// const baseURL = 'http://192.168.34.254:8080';


export default function Attendance() {
  const navigation = useNavigation();

  // const studentDetails = {
  //   name: "Khushi Yadav",
  //   class: "10th",
  //   section: "B",
  //   hostal: "A",
  //   room: "R32",
  // };
  // const attendanceData = {
  //   present: 80,
  //   absent: 10,
  //   leaves: 10,
  //   total: 365,
  // };
  const [attendanceData, setAttendanceData] = useState(null);
  const [studentDetails, setStudentDetails] = useState(null);


  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        const studentId = '1'; // This should be fetched dynamically, possibly via prop
        const studentResponse = await fetch(`${baseURL}/student/get/${studentId}`);
        const attendanceResponse = await fetch(`${baseURL}/attendence/${studentId}`);

        if (!studentResponse.ok || !attendanceResponse.ok) {
          throw new Error(`Error fetching data: ${studentResponse.statusText} (${studentResponse.status})`);
        }

        const studentData = await studentResponse.json();
        const attendanceData = await attendanceResponse.json();

        setStudentDetails(studentData);
        setAttendanceData(attendanceData);
      } catch (err) {
        console.error('Error fetching attendance data:', err);
      } 
    };

    fetchAttendanceData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Attendance</Text>
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

      <View style={styles.contentContainer}>
        {studentDetails ? (
          <View style={styles.tile}>
            <View style={styles.textRow}>
              <Text style={styles.text}>Name: {studentDetails.fname} {studentDetails.lname}</Text>
              <Text style={styles.text}>Class: {studentDetails.standard}</Text>
            </View>
            <View style={styles.textRow}>
              <Text style={styles.text}>Section: {studentDetails.section}</Text>
              <Text style={styles.text}>
                Hostel: "{studentDetails.hostal}" {studentDetails.hostel_facility}
              </Text>
            </View>
          </View>
          
        ) : null}
        {attendanceData ? (
          <View style={styles.attendanceContainer}>
            <View style={styles.attendanceRow}>
              <View style={styles.attendanceTile}>
                <Text style={styles.text}>Total Days</Text>
                <Text style={styles.text1}>{attendanceData.totalDays}</Text>
              </View>
              <View style={styles.attendanceTile}>
                <Text style={styles.text}>Present Days</Text>
                <Text style={styles.text1}>{attendanceData.presentDays}</Text>
              </View>
            </View>
            <View style={styles.attendanceRow}>
              <View style={styles.attendanceTile}>
                <Text style={styles.text}>Leaves Days</Text>
                <Text style={styles.text1}>{attendanceData.totalLeaves} </Text>
              </View>
              <View style={styles.attendanceTile}>
                <Text style={styles.text}>Absent Days</Text>
                <Text style={styles.text1}>{attendanceData.absent}</Text>
              </View>
            </View>
          </View>
        ) : null}
        <View style={styles.bottomTile}>
          <TouchableOpacity onPress={() => navigation.navigate("Calendar")}>
            <Text style={styles.bottomText}>View in Calendar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
    paddingVertical: 20,
    paddingTop:"10%",
    paddingHorizontal: "8%",
    width:'100%',
    backgroundColor: "#585E97",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    position: "relative",
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 8 : 30,
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
  tile: {
    backgroundColor: "#585E97",
    padding: 25,
    borderRadius: 8,
    marginBottom: 20,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  attendanceContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  attendanceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 5,
  },
  attendanceTile: {
    backgroundColor: "#585E97",
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
    marginTop: 15,
    width: "48%",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
  bottomTile: {
    backgroundColor: "#585E97",
    padding: 16,
    borderRadius: 8,
    marginTop: 20,
    width: "95%",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    marginVertical: 5,
  },
  bottomText: {
    fontSize: 18,
    color: "white",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    textAlign: "center",
  },
  text1: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
