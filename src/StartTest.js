import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform,StatusBar } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

const questions = [
  {
    id: 1,
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Lisbon', 'Rome'],
  },
  {
    id: 2,
    question: 'Who wrote "Hamlet"?',
    options: ['Charles Dickens', 'Leo Tolstoy', 'Mark Twain', 'William Shakespeare', 'Jane Austen'],
  },
  {
    id: 3,
    question: 'What is the largest planet in our solar system?',
    options: ['Earth', 'Mars', 'Jupiter', 'Saturn', 'Neptune'],
  },
];

const StartTest = () => {
  const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(''));

  const handleOptionChange = (questionIndex, value) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[questionIndex] = value;
    setSelectedOptions(updatedOptions);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Test</Text>
        <View style={{ width: 24 }}></View> 
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {questions.map((q, index) => (
          <View key={index} style={styles.questionContainer}>
            <Text style={styles.questionNumber}>Question {index + 1} (2 marks)</Text>
            <View style={styles.questionBox}>
              <Text style={styles.questionText}>{q.question}</Text>
            </View>
            <RadioButton.Group
              onValueChange={(value) => handleOptionChange(index, value)}
              value={selectedOptions[index]}
            >
              {q.options.map((option, i) => (
                <View key={i} style={styles.optionContainer}>
                  <RadioButton value={option} />
                  <Text style={styles.optionText}>{option}</Text>
                </View>
              ))}
            </RadioButton.Group>
          </View>
        ))}
        <TouchableOpacity style={styles.submitButton} onPress={() => console.log(selectedOptions)}>
          <Text style={{color:'#fff'}}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    paddingLeft: 45,
  },
  contentContainer: {
    padding: 20,
    backgroundColor: '#fff',
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  questionBox: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  questionText: {
    fontSize: 16,
    color: "#000",
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
    color: "#000",
  },
  submitButton: {
    alignSelf:"center",
    padding: 15,
    backgroundColor: '#4F5690',
    width:'40%',
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default StartTest;
