import { StatusBar } from "expo-status-bar";
import React from "react";
import { SignIn } from "./src/screens/SignIn";

export default function App() {
  return (
    <>
      <SignIn />
      <StatusBar style="auto" />
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
