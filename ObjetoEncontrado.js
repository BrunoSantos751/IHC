
import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Rive from "@rive-app/react-native";

export default function ObjetoEncontrado({ onFinish }) {
  useEffect(() => {
    // Ajuste para a duração real da animação e do áudio.
    const timer = setTimeout(() => {
      onFinish?.();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <View style={styles.container}>
      <Rive
        resourceName={require("./assets/animations/objeto_encontrado.riv")}
        stateMachineName="State Machine 1"
        autoplay={true}
        style={styles.animation}
      />

      <Text style={styles.title}>Objeto encontrado!</Text>

      <Text style={styles.subtitle}>São Longuinho ajudou nessa missão!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 100,
    elevation: 100,
    backgroundColor: "#FAF9F5",
    justifyContent: "center",
    alignItems: "center",
  },
  animation: {
    width: "100%",
    height: 320,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0D9488",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#333333",
    textAlign: "center",
    marginTop: 8,
  },
});
