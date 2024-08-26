import { StyleSheet, SafeAreaView, View, ScrollView } from "react-native";
import { Header } from "@/components/Header";
import { WorkoutSelector } from "@/components/WorkoutSelector";
import { BottomNav } from "@/components/BottomNav";

const Separator = () => <View style={styles.separator} />;

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <Header/>
      </View>
      <Separator />
      <View>
        <WorkoutSelector/>
      </View>
      <BottomNav/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2F4858",
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  separator: {
    // marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: 10,
  },
});