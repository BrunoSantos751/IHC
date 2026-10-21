import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import Rive from "@rive-app/react-native";
import * as SplashScreen from "expo-splash-screen"; // 1. Impede o app de piscar em branco

// Mantém a tela de carregamento nativa do sistema visível até o Rive estar pronto
SplashScreen.preventAutoHideAsync().catch(() => {});

export default function App() {
  const [isLoading, setIsLoading] = useState(true); // 2. O booleano que você precisava!

  useEffect(() => {
    // Simula o carregamento inicial do app (chamadas de API, banco de dados, etc.)
    // Mude o tempo (3000ms = 3 segundos) para a duração exata da sua animação
    const timer = setTimeout(async () => {
      setIsLoading(false); // Fecha a animação e abre o app
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Função disparada assim que o componente do Rive carrega com sucesso
  const onRiveLoad = async () => {
    // Esconde a Splash Screen nativa do Android/iOS, revelando a sua animação fluida
    await SplashScreen.hideAsync();
  };

  // TELA 1: Se o booleano for TRUE, mostra o São Longuinho animado
  if (isLoading) {
    return (
      <View style={styles.container}>
        <Rive
          resourceName={require("./assets/animations/sãolonguinho.riv")}
          stateMachineName="State Machine 1"
          style={styles.riveAnimation}
          autoplay={true}
          onLoad={onRiveLoad} // Garante sincronia perfeita sem telas brancas
        />
      </View>
    );
  }

  // TELA 2: Quando o booleano mudar para FALSE, o seu app abre aqui
  return (
    <View style={styles.mainAppContainer}>
      <Text style={styles.welcomeText}>¡O App abriu com sucesso! 🎉</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F5", // Cor de fundo idêntica à do Rive
    justifyContent: "center",
    alignItems: "center",
  },
  riveAnimation: {
    width: "100%",
    height: "100%",
  },
  mainAppContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
});
