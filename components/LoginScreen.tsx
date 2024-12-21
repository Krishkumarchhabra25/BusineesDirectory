import { Colors } from "@/constants/Colors";
import { useWarmUpBrowser } from "@/hooks/useWramUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as WebBrowser from 'expo-web-browser'


WebBrowser.maybeCompleteAuthSession()
export default function LoginScreen() {
    useWarmUpBrowser()
    const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })

    const onPress = React.useCallback(async () => {
      try {
        const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow()
        // If sign in was successful, set the active session
        if (createdSessionId) {
          setActive!({ session: createdSessionId })
        } else {
          // Use signIn or signUp returned from startOAuthFlow
          // for next steps, such as MFA
        }
      } catch (err) {
        // See https://clerk.com/docs/custom-flows/error-handling
        // for more info on error handling
        console.error(JSON.stringify(err, null, 2))
      }
    }, [])
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("./../assets/images/login.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.titleText}>
          Your Ultimate
          <Text style={{ color: Colors.PRIMARY }}> Community Business Directory</Text> App
        </Text>
        <Text style={styles.descriptionText}>
          Find your favourite business near you and post your own business to your community.
        </Text>
      </View>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.btnText}>Let's Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 100,
  },
  image: {
    width: 200,
    height: 450,
    borderRadius: 20,
    borderWidth: 6,
    borderColor: "#000",
  },
  subContainer: {
    backgroundColor: "#fff",
    padding: 20,
    marginTop: -20,
  },
  titleText: {
    fontSize: 30,
    fontFamily: "outfit-bold",
    textAlign: "center",
  },
  descriptionText: {
    fontSize: 15,
    fontFamily: "outfit-light",
    textAlign: "center",
    marginVertical: 15,
    color: Colors.GRAY,
  },
  btn: {
    backgroundColor: Colors.PRIMARY,
    padding: 16,
    borderRadius: 99,
    marginHorizontal: 20, // Adds space on both left and right
    marginTop: 20, // Adds space above the button
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "outfit",
  },
});
