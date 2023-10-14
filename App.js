import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import React, { useState } from 'react';

import { Focus } from './src/features/Focus';
import { colors } from './src/utils/colors';
import { Timer } from './src/features/Timer';
import { FocusHistory } from './src/features/FocusHistory';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState();
  const [history, setHistory] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {
        !currentSubject ?
          (
            <>
              <Focus addSubject={setCurrentSubject}></Focus>
              <FocusHistory
                history={history} />
            </>
          ) :
          (
            <Timer
              focusSubject={currentSubject}
              onTimerEnd={(subject) => { setHistory([...history, subject]) }}
              clearSubject={() => { setCurrentSubject(null) }}
            />
          )
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 40 : 40,
    backgroundColor: colors.darkBlue,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
