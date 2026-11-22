import { router, useLocalSearchParams } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import IceCards from "../../components/IceCards";
import { categories, icecream } from "../../constants/icecream";
import { useApp } from "../../context/AppContext";

export default function CategoryScreen() {
  const { tipo } = useLocalSearchParams<{ tipo: string }>();
  const { addToCart, cart } = useApp();

  const category = categories.find((c) => c.key === tipo);
  const items = icecream.filter((item) => item.category === tipo);

  return (
    <ScrollView className="flex-1 bg-white px-5" showsVerticalScrollIndicator={false}>
      <TouchableOpacity onPress={() => router.back()} className="mt-4">
        <Text className="font-bold text-cyan-600">← Voltar</Text>
      </TouchableOpacity>

      <Text className="mt-4 text-3xl font-bold">
        {category?.emoji} {category?.label}
      </Text>
      <Text className="mb-6 mt-1 font-bold text-pink-600">
        Itens no carrinho: {cart.length}
      </Text>

      <View className="flex-row flex-wrap justify-between pb-8">
        {items.map((item) => (
          <IceCards
            key={item.id}
            name={item.name}
            price={item.price}
            emoji={item.emoji}
            onAdd={() => addToCart(item)}
          />
        ))}
      </View>
    </ScrollView>
  );
}