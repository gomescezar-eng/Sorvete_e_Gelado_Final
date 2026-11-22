export type Item = {
  id: number;
  name: string;
  price: number;
  emoji: string;
  category: "destaque" | "casquinha" | "cascao" | "sunday" | "especial";
};

export const categories = [
  { key: "casquinha", emoji: "🍦", label: "Casquinha" },
  { key: "cascao", emoji: "🍨", label: "Cascão" },
  { key: "sunday", emoji: "🍧", label: "Sunday" },
] as const;

export const icecream: Item[] = [
  // Destaques (home)
  { id: 1, name: "Sorvete de Chocolate", price: 3.0, emoji: "🍫", category: "destaque" },
  { id: 2, name: "Sorvete de Morango", price: 3.0, emoji: "🍓", category: "destaque" },
  { id: 3, name: "Sorvete de Baunilha", price: 3.0, emoji: "🍦", category: "destaque" },

  // Casquinha
  { id: 10, name: "Casquinha de Chocolate", price: 4.0, emoji: "🍫", category: "casquinha" },
  { id: 11, name: "Casquinha de Morango", price: 4.0, emoji: "🍓", category: "casquinha" },
  { id: 12, name: "Casquinha Mista", price: 4.5, emoji: "🍦", category: "casquinha" },

  // Cascão
  { id: 20, name: "Cascão Simples", price: 5.0, emoji: "🍨", category: "cascao" },
  { id: 21, name: "Cascão com Chocolate", price: 6.0, emoji: "🍫", category: "cascao" },
  { id: 22, name: "Cascão Duplo", price: 7.5, emoji: "🍨", category: "cascao" },

  // Sunday
  { id: 30, name: "Sunday de Chocolate", price: 8.0, emoji: "🍧", category: "sunday" },
  { id: 31, name: "Sunday de Morango", price: 8.0, emoji: "🍓", category: "sunday" },
  { id: 32, name: "Sunday de Caramelo", price: 8.5, emoji: "🍯", category: "sunday" },
];

// Item especial do botão "Peça Agora!!!"
export const specialItem: Item = {
  id: 99,
  name: "Combo Sorvete + Cobertura",
  price: 5.0,
  emoji: "🍨",
  category: "especial",
};