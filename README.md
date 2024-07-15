Claro! Aqui está o README.md atualizado com a seção de demonstração ao vivo:

# 🍔 **Awesome Menu App** 🍔

![GitHub last commit](https://img.shields.io/github/last-commit/ardsilva/qikservechallenge)
![GitHub issues](https://img.shields.io/github/issues/ardsilva/qikservechallenge)
![GitHub stars](https://img.shields.io/github/stars/ardsilva/qikservechallenge?style=social)
![GitHub forks](https://img.shields.io/github/forks/ardsilva/qikservechallenge?style=social)

Welcome to the **Awesome Menu App**! This project is a dynamic menu application where users can select items, customize them with modifiers, and add them to their cart. The app also supports search functionality and interactive dialogs for item customization.

## 💻 **Live Demo**

Check out the live demo [here](https://qikservechallenge.vercel.app/).

## 🚀 **Features**
- **Category Selection:** Click on category avatars to filter menu items.
- **Dynamic Menu:** Items are displayed dynamically based on category selection.
- **Search Functionality:** Filter items using the search bar.
- **Item Modifiers:** Customize items with additional options.
- **Shopping Cart:** Add, remove, and update item quantities in the cart.
- **Persistent State:** Save cart state across page refreshes.

## 🎨 **Tech Stack**
- **Frontend:** React, TypeScript, Tailwind CSS
- **State Management:** Custom context API
- **Testing:** Vitest, React Testing Library

## 📂 **Project Structure**
```plaintext
src/
│
├── components/
│   ├── tests/
│   │   ├── Component.test.tsx
│   │   ├── Cart.test.tsx
│   │   ├── Dialog.test.tsx
│   │   └── ...other tests
│   ├── Component.tsx
│   ├── Cart.tsx
│   ├── Dialog.tsx
│   ├── ItemList.tsx
│   ├── SearchBar.tsx
│   └── ...other components
│
├── context/
│   └── AppContext.tsx
│
├── lib/
│   └── utils.ts
│
├── styles/
│   └── global.css
│
└── pages/
    ├── Contact.tsx
    ├── Login.tsx
    └── Menu.tsx
```

## ⚙️ **Setup and Installation**

### Prerequisites
- Node.js (version 14 or higher)
- npm

### Installation

Clone the repository
```bash
git clone https://github.com/ardsilva/qikservechallenge.git
cd qikservechallenge
```

Install dependencies
```bash
npm install
```

Run the application
```bash
npm run dev
```

Run tests
```bash
npm test
```

## 🛠️ **Usage**
- Navigate through categories by clicking on the avatars.
- Search for items using the search bar.
- Customize items by selecting modifiers in the dialog.
- Add items to the cart and adjust quantities directly from the cart.
- Select language (i18n) by clicking in flags.

## 🧪 **Running Tests**
We use Vitest and React Testing Library for unit tests. 
The tests cover component rendering, user interactions, and state updates.

```bash
npm test
```

## 📝 **Contributing**
We welcome contributions! Please read our Contributing Guidelines for more details.

## 📄 **License**
This project is licensed under the MIT License - see the LICENSE file for details.

## 🎉 **Acknowledgements**
- Icons: Lucide Icons

Thank you for visiting! If you like this project, please ⭐ star the repository to show your support!