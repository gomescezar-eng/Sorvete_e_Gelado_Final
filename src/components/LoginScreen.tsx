import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useApp } from "../context/AppContext";

export default function LoginScreen() {
  const { login } = useApp();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin() {
    if (name.trim() === "") {
      setError("Digite seu nome.");
      return;
    }
    if (password.length < 4) {
      setError("A senha deve ter pelo menos 4 caracteres.");
      return;
    }
    setError("");
    login(name.trim());
  }

  return (
    <View className="flex-1 justify-center bg-white px-8">
      <Text className="text-center text-6xl">🍦</Text>
      <Text className="mb-8 mt-2 text-center text-3xl font-bold text-cyan-600">
        Sorveteria
      </Text>

      <TextInput
        className="mb-4 rounded-xl bg-gray-100 px-4 py-3"
        placeholder="Nome"
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
      />

      <TextInput
        className="mb-4 rounded-xl bg-gray-100 px-4 py-3"
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {error !== "" && (
        <Text className="mb-4 text-center text-red-600">{error}</Text>
      )}

      <TouchableOpacity
        onPress={handleLogin}
        className="rounded-xl bg-cyan-500 py-4"
      >
        <Text className="text-center text-lg font-bold text-white">Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}