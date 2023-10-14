import React from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";

import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";

export const FocusHistory = ({ history }) => {
  if (!history || !history.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>We haven't focused on anything yet</Text>
      </View>
    )
  };

  const renderItem = ({ item }) => (
    <Text style={styles.item}>- {item}</Text>
  )

  // can't scroll， why?
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Things we've focused on: </Text>
      <FlatList
        data={history}
        renderItem={renderItem} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold'
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.sm,
  },
})