import { View, Text, StyleSheet } from 'react-native';

const IndexScreen = () => {
  return (
    <View style={styles.container}>
      <Text>IndexScreen</Text>
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
