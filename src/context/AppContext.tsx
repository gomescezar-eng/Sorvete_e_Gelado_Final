import { createContext, ReactNode, useContext, useState } from "react";
import { Item } from "../constants/icecream";

type AppContextType = {
  user: string | null;
  login: (name: string) => void;
  logout: () => void;
  cart: Item[];
  addToCart: (item: Item) => void;
  removeFromCart: (index: number) => void;
  clearCart: () => void;
  total: number;
};

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string | null>(null);
  const [cart, setCart] = useState<Item[]>([]);

  function login(name: string) {
    setUser(name);
  }

  function logout() {
    setUser(null);
    setCart([]);
  }

  function addToCart(item: Item) {
    setCart((current) => [...current, item]);
  }

  function removeFromCart(index: number) {
    setCart((current) => current.filter((_, i) => i !== index));
  }

  function clearCart() {
    setCart([]);
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <AppContext.Provider
      value={{ user, login, logout, cart, addToCart, removeFromCart, clearCart, total }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp deve ser usado dentro de <AppProvider>");
  return ctx;
}