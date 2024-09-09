import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
  StatusBar
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Mock = () => {
  const navigation = useNavigation();
  const [mockTests, setMockTests] = useState([]);

  useEffect(() => {
    fetchMockTests();
  }, []);

  const fetchMockTests = async () => {
    const data = Array(8).fill({
      image: require("../assets/img/book.png"), 
      name: "Exam name",
      system: "Science",
      time: "10",
      rank: "05",
      marks: "10",
      questions: "5",
    });
    setMockTests(data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Mock Tests</Text>
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

      <ScrollView>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Available Exams</Text>
        </View>
        <View style={styles.mockTestSection}>
          {mockTests.map((test, index) => (
            <View key={index} style={styles.mockTestCard}>
              <Image source={test.image} style={styles.mockTestImage} />
              <Text style={styles.mockTestName}>{test.name}</Text>
              <View style={styles.mockTestDetailsContainer}>
                <MaterialIcons
                  name="list"
                  size={20}
                  color="#471EBA"
                  style={styles.listIcon}
                />
                <Text style={styles.mockTestDetailsText}>Maths</Text>
              </View>
              <View style={styles.mockTestDetailsContainer}>
                <MaterialIcons
                  name="timer"
                  size={20}
                  color="#471EBA"
                  style={styles.timerIcon}
                />
                <Text style={styles.mockTestDetailsText}>10 min</Text>
              </View>
              <View style={styles.circleContainer}>
                <View style={styles.circle}></View>
                <View style={[styles.circle, styles.circleStudentImg]}>
                  <Image
                    source={require("../assets/img/boy.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 10,
                    }}
                  />
                </View>
                <Text style={styles.classRank}>Class Rank 05</Text>
              </View>

              <View style={styles.horizontalLine}></View>
              <View style={styles.scoreContainer}>
                <Text style={styles.score}>{test.marks} Marks</Text>
                <Text style={styles.questions}>{test.questions} Questions</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity
        style={styles.startButton}
        onPress={() => navigation.navigate("StartTest")}
      >
        <Text style={styles.startButtonText}>Start Test</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B9B9B9",
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
    marginLeft: 10,
  },
  titleContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom:20,
    marginVertical: 10,
    alignSelf: "center",
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  titleText: {
    fontSize: 16,
    color: "#26093D",
    fontWeight: "500",
  },
  mockTestSection: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  mockTestCard: {
    width: '49%', 
    padding: 8,
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginBottom: 20,
  },
  mockTestImage: {
    width: "100%",
    height: 80,
    marginBottom: 10,
  },
  mockTestName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  mockTestDetailsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  listIcon: {
    marginRight: 5,
  },
  timerIcon: {
    marginRight: 5,
  },
  mockTestDetailsText: {
    fontSize: 14,
    color: "#666",
  },
  circleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop:10,
},
circle: {
  width: 20,
  height: 20,
  borderRadius: 10,
  backgroundColor: "black",
  marginRight: -10,
  zIndex: 1,
},
circleStudentImg: {},
classRank: {
  fontSize: 12,
  color: "#666",
  marginLeft: 14,
  zIndex: 0,
  fontWeight:'500'
},
horizontalLine: {
  borderBottomWidth: 1,
  borderBottomColor: "#ddd",
  marginTop: 5,
},
scoreContainer: {
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: 5,
},
score: {
  fontSize: 14,
  color: "#26093D",
  fontWeight:'500'
},
questions: {
  fontSize: 12,
  color: "#666",
},
startButton: {
  backgroundColor: "#585E97",
  borderRadius:8,
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "center",
  marginVertical: 20,
  paddingVertical: 12,paddingHorizontal:25,
},
startButtonText: {
  color: "#fff",
  fontSize: 16,
},
});

export default Mock;

