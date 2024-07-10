# 🍔 **Awesome Menu App** 🍔

![GitHub last commit](https://img.shields.io/github/last-commit/username/repository)
![GitHub issues](https://img.shields.io/github/issues/username/repository)
![GitHub stars](https://img.shields.io/github/stars/username/repository?style=social)
![GitHub forks](https://img.shields.io/github/forks/username/repository?style=social)

Welcome to the **Awesome Menu App**! This project is a dynamic menu application where users can select items, customize them with modifiers, and add them to their cart. The app also supports search functionality and interactive dialogs for item customization.

<div align="center">
  <img src="https://media.giphy.com/media/l2JHRhAtnJSDNJ2py/giphy.gif" alt="menu-app-demo" width="600"/>
</div>

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
- **Testing:** Jest, React Testing Library

## 📂 **Project Structure**
```plaintext
src/
│
├── components/
│   ├── Avatar.tsx
│   ├── Cart.tsx
│   ├── Dialog.tsx
│   ├── MenuItems.tsx
│   ├── SearchBar.tsx
│   └── ...other components
│
├── context/
│   └── AppContext.tsx
│
├── hooks/
│   └── useLocalStorage.ts
│
├── tests/
│   ├── Avatar.test.tsx
│   ├── Cart.test.tsx
│   ├── Dialog.test.tsx
│   └── ...other tests
│
├── types/
│   └── index.ts
│
└── pages/
    └── index.tsx
⚙️ Setup and Installation
Prerequisites
Node.js (version 14 or higher)
npm or yarn
Installation
Clone the repository
bash
Copy code
git clone https://github.com/username/repository.git
cd repository
Install dependencies
bash
Copy code
npm install
# or
yarn install
Run the application
bash
Copy code
npm start
# or
yarn start
Run tests
bash
Copy code
npm test
# or
yarn test
🛠️ Usage
Navigate through categories by clicking on the avatars.
Search for items using the search bar.
Customize items by selecting modifiers in the dialog.
Add items to the cart and adjust quantities directly from the cart.
🧪 Running Tests
We use Jest and React Testing Library for unit tests. The tests cover component rendering, user interactions, and state updates.

bash
Copy code
npm run test
# or
yarn test
📝 Contributing
We welcome contributions! Please read our Contributing Guidelines for more details.

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

🎉 Acknowledgements
Icons: Lucide Icons
GIF: Giphy
Libraries: React, Tailwind CSS
<div align="center">
  <img src="https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif" alt="thank you" width="400"/>
</div>
Thank you for visiting! If you like this project, please ⭐ star the repository to show your support!