import { Text, TouchableOpacity, View } from "react-native";

type IceCardProps = {
  name: string;
  price: number;
  emoji: string;
  onAdd: () => void;
};

export default function IceCard({ name, price, emoji, onAdd }: IceCardProps) {
  return (
    <View className="mb-5 w-[48%] rounded-2xl bg-orange-50 p-4">
      <Text className="text-center text-6xl">{emoji}</Text>
      <Text className="mt-3 text-lg font-bold">{name}</Text>
      <Text className="mt-1 font-bold text-cyan-700">R$ {price.toFixed(2)}</Text>

      <TouchableOpacity onPress={onAdd} className="mt-3 rounded-xl bg-cyan-500 py-2">
        <Text className="text-center font-bold text-white">Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}