import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Platform,
  StatusBar
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import CircularProgress from "react-native-circular-progress-indicator";
import { MaterialIcons } from "@expo/vector-icons";

const OnlineTest = () => {
  const navigator = useNavigation();
  const latestExamResult = {
    name: "Exam name",
    correct: 6,
    incorrect: 2,
    totalQuestions: 10,
  };
  const mockTests = [
    {
      id: "1",
      name: "Math's",
      time: "10 min",
      rank: "Class Rank 05",
      marks: "10 Marks",
      questions: "5 Questions",
      image: require("../assets/img/book.png"),
    },
    {
      id: "2",
      name: "IT System",
      time: "10 min",
      rank: "Class Rank 05",
      marks: "10 Marks",
      questions: "5 Questions",
      image: require("../assets/img/laptop.png"),
    },
    {
      id: "3",
      name: "IT System",
      time: "10 min",
      rank: "Class Rank 05",
      marks: "10 Marks",
      questions: "5 Questions",
      image: require("../assets/img/book.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigator.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Online Tests</Text>
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
      <ScrollView style={styles.contentContainer}>
        <View style={styles.upcomingExam}>
          <Text style={styles.upcomingExamText}>Upcoming exam | Exam name</Text>
        </View>
        <Text style={styles.sectionTitle}>Latest exam result</Text>
        <View style={styles.latestExamResult}>
          <Text style={styles.sectionTitle}>{latestExamResult.name}</Text>
          <View style={styles.latestExamResultDetail}>
            <View style={styles.resultRow}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.correct}>0{latestExamResult.correct}</Text>
                <Text style={{ fontSize: 16, fontWeight: "bold", padding: 7 }}>
                  Correct
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.incorrect}>
                  0{latestExamResult.incorrect}
                </Text>
                <Text style={{ fontSize: 16, fontWeight: "bold", padding: 7 }}>
                  Incorrect
                </Text>
              </View>
            </View>
            <View style={styles.containerProgress}>
              <Text style={styles.totalQuestions}>Total questions </Text>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                {latestExamResult.totalQuestions}
              </Text>
              <View
                style={[
                  styles.progressContainer,
                  { transform: [{ rotate: "90deg" }] },
                ]}
              >
                <CircularProgress
                  radius={50}
                  value={
                    ((latestExamResult.correct + latestExamResult.incorrect) /
                      latestExamResult.totalQuestions) *
                    100
                  }
                  showProgressValue={false}
                  activeStrokeColor="#F7983E"
                  inActiveStrokeColor="#F3F3F3"
                  inActiveStrokeOpacity={0.2}
                />
              </View>
              <View
                style={[
                  styles.progressContainer,
                  { transform: [{ rotate: "90deg" }] },
                ]}
              >
                <CircularProgress
                  radius={50}
                  value={
                    (latestExamResult.correct /
                      latestExamResult.totalQuestions) *
                    100
                  }
                  showProgressValue={false}
                  activeStrokeColor="#3E426B"
                  inActiveStrokeColor="#F3F3F3"
                  inActiveStrokeOpacity={0.2}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.mockTestSection}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.sectionTitle}>Available Mock Test</Text>
            <TouchableOpacity onPress={() => navigator.navigate("Mock")}>
              <Text
                style={{ color: "#27093E", fontSize: 14, fontWeight: "bold" }}
              >
                See All
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {mockTests.map((test) => (
              <View key={test.id} style={styles.mockTestCard}>
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
                  <Text style={styles.score}>10 Marks</Text>
                  <Text style={styles.questions}>5 Questions</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
        <TouchableOpacity
          style={styles.startTestButton}
          onPress={() => navigator.navigate("StartTest")}
        >
          <Text style={styles.startTestButtonText}>Start Test</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D9D9D9",
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
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  upcomingExam: {
    alignContent: "center",
    justifyContent: "center",
    padding: 12,
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginBottom: 10,
  },
  upcomingExamText: {
    textAlign: "center",
    fontSize: 16,
    color: "#26093D",
    fontWeight: "bold",
  },
  latestExamResult: {
    padding: 20,
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#26093D",
  },
  latestExamResultDetail: {
    display: "flex",
    flexDirection: "row",
  },
  examName: {
    fontSize: 16,
    marginBottom: 10,
  },
  resultRow: {
    justifyContent: "space-between",
    marginBottom: 10,
    width: "50%",
  },
  correct: {
    display: "flex",
    width: "23%",
    padding: 6,
    borderRadius: 6,
    textAlign: "center",
    backgroundColor: "#585E97",
    color: "white",
    fontSize: 16,
    margin: 5,
  },
  incorrect: {
    display: "flex",
    width: "23%",
    padding: 6,
    borderRadius: 6,
    textAlign: "center",
    backgroundColor: "#F7983E",
    color: "white",
    fontSize: 16,
    margin: 5,
  },
  containerProgress: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  progressContainer: {
    position: "absolute",
  },
  totalQuestions: {
    fontSize: 10,
  },
  mockTestSection: {
    marginBottom: 20,
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
    marginTop: 10,
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

  mockTestCard: {
    width: 170,
    padding: 8,
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginRight: 10,
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
  mockTestDetails: {
    fontSize: 14,
    color: "#666",
  },
  startTestButton: {
    alignSelf: "center",
    padding: 15,
    backgroundColor: "#4F5690",
    width: "40%",
    borderRadius: 10,
    alignItems: "center",
  },
  startTestButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default OnlineTest;
