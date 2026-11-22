import { useState } from "react";
import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import IceCards from "../components/IceCards";
import { categories, icecream, specialItem } from "../constants/icecream";
import { useApp } from "../context/AppContext";

export default function HomeScreen() {
  const { user, logout, cart, addToCart, removeFromCart, clearCart, total } = useApp();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // ---------- CATEGORIA SELECIONADA ----------
  function toggleCategory(key: string) {
    // Se clicar na que já está selecionada, desmarca (volta aos destaques)
    setSelectedCategory((current) => (current === key ? null : key));
  }

  const activeCategory = categories.find((c) => c.key === selectedCategory);

  // ---------- QUAIS ITENS MOSTRAR ----------
  const searching = search.trim() !== "";

  let visibleItems = icecream.filter((item) => item.category === "destaque");
  let listTitle = "Sorvetes em Destaques";

  if (searching) {
    visibleItems = icecream.filter((item) =>
      item.name.toLowerCase().includes(search.trim().toLowerCase())
    );
    listTitle = "Resultados da busca";
  } else if (activeCategory) {
    visibleItems = icecream.filter((item) => item.category === activeCategory.key);
    listTitle = `${activeCategory.emoji} ${activeCategory.label}`;
  }

  // ---------- PEÇA AGORA ----------
  function orderSpecial() {
    addToCart(specialItem);
    Alert.alert("Oferta especial 🎉", `${specialItem.name} foi adicionado ao carrinho!`);
  }

  // ---------- FINALIZAR COMPRA ----------
  function finishPurchase() {
    if (cart.length === 0) {
      Alert.alert("Carrinho vazio", "Adicione itens antes de finalizar.");
      return;
    }
    Alert.alert("Confirmar compra", `Total: R$ ${total.toFixed(2)}`, [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Confirmar",
        onPress: () => {
          clearCart();
          Alert.alert("Compra realizada! 🎉", `Obrigado, ${user}!`);
        },
      },
    ]);
  }

  return (
    <ScrollView className="flex-1 bg-white px-5" showsVerticalScrollIndicator={false}>
      {/* Cabeçalho */}
      <View className="mb-4 mt-4">
        <View className="flex-row items-center justify-between">
          <Text className="text-base text-gray-500">Olá, {user}! 👋</Text>
          <TouchableOpacity onPress={logout}>
            <Text className="font-bold text-red-600">Sair</Text>
          </TouchableOpacity>
        </View>

        <Text className="mt-2 text-base font-bold text-pink-600">
          Itens no carrinho: {cart.length}
        </Text>
        <Text className="mt-1 text-3xl font-bold">O que deseja tomar hoje?</Text>
      </View>

      {/* Barra de pesquisa */}
      <TextInput
        className="mb-6 rounded-xl bg-gray-100 px-4 py-3"
        placeholder="🔍 Buscar sorvete..."
        value={search}
        onChangeText={setSearch}
      />

      {/* Oferta especial */}
      <View className="rounded-3xl bg-cyan-300 p-6">
        <Text className="text-sm font-bold text-white">OFERTA ESPECIAL</Text>
        <Text className="mt-2 text-3xl font-bold text-white">Sorvete + Cobertura</Text>
        <Text className="mt-2 text-base text-white">
          Uma combinação perfeita para o seu pedido por apenas R$ {specialItem.price.toFixed(2)}.
        </Text>

        <TouchableOpacity
          onPress={orderSpecial}
          className="mt-5 self-start rounded-xl bg-white px-5 py-3"
        >
          <Text className="font-bold text-cyan-500">Peça Agora!!!</Text>
        </TouchableOpacity>
      </View>

      {/* Categorias */}
      <Text className="mb-4 mt-8 text-2xl font-bold">Categorias</Text>
      <View className="flex-row justify-between">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.key;
          return (
            <TouchableOpacity
              key={cat.key}
              onPress={() => toggleCategory(cat.key)}
              className={`w-[30%] items-center rounded-2xl py-5 ${
                isSelected ? "bg-pink-600" : "bg-cyan-600"
              }`}
            >
              <Text className="text-4xl">{cat.emoji}</Text>
              <Text className="mt-2 text-white">{cat.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Lista de sorvetes (destaques, categoria ou busca) */}
      <View className="mb-4 mt-8 flex-row items-center justify-between">
        <Text className="text-2xl font-bold">{listTitle}</Text>

        {activeCategory && !searching && (
          <TouchableOpacity onPress={() => setSelectedCategory(null)}>
            <Text className="font-bold text-cyan-600">Ver destaques</Text>
          </TouchableOpacity>
        )}
      </View>

      {visibleItems.length === 0 ? (
        <Text className="mb-8 text-gray-500">Nenhum sorvete encontrado 😕</Text>
      ) : (
        <View className="flex-row flex-wrap justify-between pb-8">
          {visibleItems.map((item) => (
            <IceCards
              key={item.id}
              name={item.name}
              price={item.price}
              emoji={item.emoji}
              onAdd={() => addToCart(item)}
            />
          ))}
        </View>
      )}

      {/* Carrinho */}
      <Text className="mb-4 mt-2 text-2xl font-bold">Carrinho</Text>

      {cart.length === 0 && (
        <Text className="mb-4 text-gray-500">Seu carrinho está vazio.</Text>
      )}

      {cart.map((item, index) => (
        <View
          key={index}
          className="mb-3 flex-row items-center justify-between rounded-xl bg-gray-100 p-4"
        >
          <Text>
            {item.emoji} {item.name}
          </Text>
          <Text className="font-bold text-cyan-500">R$ {item.price.toFixed(2)}</Text>
          <TouchableOpacity onPress={() => removeFromCart(index)}>
            <Text className="font-bold text-red-600">Remover</Text>
          </TouchableOpacity>
        </View>
      ))}

      <View className="mb-10 mt-2">
        <Text className="mb-3 text-right text-xl font-bold">
          Total: R$ {total.toFixed(2)}
        </Text>
        <TouchableOpacity onPress={finishPurchase} className="rounded-xl bg-pink-600 py-4">
          <Text className="text-center text-lg font-bold text-white">Finalizar compra</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}