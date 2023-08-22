import { UserRegistration } from "./UserRegistration";
/*
Your functions here
*/
return (
  <>
    <StatusBar />
    <SafeAreaView style={styles.container}>
      <>
        <Text style={styles.title}>React Native on Back4App</Text>
        <Text>User registration tutorial</Text>
        <UserRegistration />
      </>
    </SafeAreaView>
  </>
);

// Remember to add some styles at the end of your file
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
