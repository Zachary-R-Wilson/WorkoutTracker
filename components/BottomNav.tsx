import { StyleSheet, Text, View, Pressable} from "react-native";

export function BottomNav() {
	const Separator = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
        <Pressable>
            <Text style={styles.text}>W</Text>
        </Pressable>
        <Pressable>
            <Text style={styles.text}>+</Text>
        </Pressable>
        <Pressable>
            <Text style={styles.text}>S</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
	container:{
		justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        flex: 1,
	},
	separator: {
    // marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: 10,
  },
  text: {
    fontSize: 60,
  }
});