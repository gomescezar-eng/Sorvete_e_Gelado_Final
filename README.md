🍦 Sorvete e Gelado

Aplicativo mobile de delivery de sorvetes, desenvolvido com React Native e Expo.

📖 Descrição

O Sorvete e Gelado é um aplicativo de pedidos para uma sorveteria. O usuário faz login, navega pelos sorvetes, filtra por categoria (Casquinha, Cascão e Sunday), pesquisa pelo nome, monta o carrinho e finaliza a compra. Há também uma oferta especial (Sorvete + Cobertura) disponível no botão Peça Agora!!!.

🎯 Objetivo

Facilitar o pedido de sorvetes pelo celular, oferecendo uma forma simples e rápida de escolher os produtos, acompanhar a quantidade de itens e o valor total e concluir a compra sem filas nem anotações em papel.

🛠️ Tecnologias utilizadas
React Native
Expo (com Expo Router)
TypeScript
NativeWind (Tailwind CSS para React Native)
Git
GitHub

✅ Funcionalidades
✓ Tela de login com nome e senha
✓ Visualização de produtos (sorvetes em destaque)
✓ Filtro por categoria: Casquinha, Cascão e Sunday
✓ Barra de pesquisa por nome do sorvete
✓ Adição de produtos ao carrinho
✓ Remoção de produtos do carrinho
✓ Contagem de itens no carrinho
✓ Cálculo do valor total
✓ Finalização da compra com confirmação
✓ Oferta especial no botão "Peça Agora!!!"
✓ Logout (Sair)

Observação: o login é de demonstração. Ele valida apenas o preenchimento do nome e o tamanho mínimo da senha (4 caracteres), sem cadastro nem servidor. Os dados ficam apenas na memória e são perdidos ao fechar o app.

📁 Estrutura do projeto
src/
├── app/                 # Telas e rotas (Expo Router)
│   ├── _layout.tsx      # Layout principal: decide entre login e abas
│   ├── index.tsx        # Tela inicial: busca, categorias, produtos e carrinho
│   └── explore.tsx      # Segunda aba do app
├── components/          # Componentes reutilizáveis
│   ├── IceCards.tsx     # Card de um sorvete
│   └── LoginScreen.tsx  # Tela de login
├── constants/
│   └── icecream.ts      # Lista de produtos, categorias e item especial
├── context/
│   └── AppContext.tsx   # Estado global: usuário logado e carrinho
├── hooks/               # Hooks do projeto
└── global.css           # Estilos globais do NativeWind

▶️ Como executar

Clone o repositório e entre na pasta do projeto:
bash
git clone https://github.com/gomescezar-eng/Sorvete_e_Gelado_Final.git
cd Sorvete_e_Gelado_Final

Instale as dependências:
bash
npm install

Inicie o app:
bash
npx expo start

Abra o aplicativo:
No celular, com o app Expo Go, lendo o QR Code exibido no terminal;
Ou em um emulador Android / simulador iOS, seguindo as opções mostradas no terminal.
👨‍💻 Desenvolvedor

Emanuel Cezar Gomes de Souza