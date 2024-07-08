# Meu App Restaurante

Este projeto é uma aplicação React construída para apresentar dados de restaurantes e seus menus. Os usuários podem visualizar os itens do menu e construir um carrinho de compras.

## Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para construir interfaces de usuário.
- **TypeScript** - Superset de JavaScript que adiciona tipos estáticos.
- **ES6+** - Versão mais recente do ECMAScript.
- **React Hooks** - Forma moderna de usar estado e outros recursos do React.
- **Redux** - Biblioteca para gerenciamento de estado.
- **Redux Thunk** - Middleware para gerenciamento de ações assíncronas em Redux.
- **Styled-Components** - Biblioteca para estilizar componentes React.
- **React Testing Library** - Biblioteca para testar componentes React.
- **i18next** - Biblioteca para internacionalização.
- **date-fns** - Biblioteca para manipulação de datas.
- **axios** - Cliente HTTP para fazer requisições à API.

## Funcionalidades

- **Visualização de Dados do Restaurante**: Exibe informações sobre o restaurante.
- **Visualização do Menu**: Lista todos os itens do menu disponíveis.
- **Carrinho de Compras**: Permite aos usuários adicionar itens ao carrinho.
- **Tematização**: Suporte para temas personalizados por restaurante.
- **Internacionalização**: Suporte para múltiplos idiomas, formatação de datas e dinheiro.

## Diferenciais

- **Testes Unitários**: Implementação de testes com React Testing Library.
- **Internacionalização Completa**: Suporte para textos, datas/tempos e dinheiro.
- **Configuração de Temas**: Cada restaurante pode configurar suas próprias cores e imagens.

## Estrutura do Projeto

\`\`\`plaintext
src/
  components/
    Button.tsx
    Card.tsx
  pages/
    HomePage.tsx
    MenuPage.tsx
    BasketPage.tsx
  redux/
    actions/
      index.ts
      types.ts
    reducers/
      index.ts
      restaurantReducer.ts
      menuReducer.ts
      basketReducer.ts
    store.ts
  services/
    api.ts
  styles/
    theme.ts
    globalStyles.ts
  utils/
    helpers.ts
    i18n.ts
  __tests__/
    components/
      Button.test.tsx
    pages/
      MenuPage.test.tsx
  App.tsx
  index.tsx
  react-app-env.d.ts
\`\`\`

## Instalação e Configuração

### Pré-requisitos

- Node.js (v14 ou superior)
- npm (v6 ou superior)

### Passos para Instalação

1. **Clone o repositório:**
   \`\`\`bash
   git clone https://github.com/seu-usuario/meu-app-restaurante.git
   cd meu-app-restaurante
   \`\`\`

2. **Instale as dependências:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Inicie a aplicação:**
   \`\`\`bash
   npm start
   \`\`\`

4. **Execute os testes:**
   \`\`\`bash
   npm test
   \`\`\`

## Uso

### Pagina Inicial

- A página inicial fornece links para o menu e o carrinho.

### Página de Menu

- Exibe a lista de itens do menu.
- Permite adicionar itens ao carrinho.

### Página do Carrinho

- Exibe os itens adicionados ao carrinho.
- Permite visualizar o total de compras.

## Customização de Tema

- O tema pode ser configurado no arquivo \`src/styles/theme.ts\`.
- Exemplo:
  \`\`\`typescript
  export const theme = {
    primaryColor: '#ff6347', // Exemplo de cor, a ser customizado por restaurante
    secondaryColor: '#4caf50',
  };
  \`\`\`

## Internacionalização

- Configurações de internacionalização podem ser encontradas no arquivo \`src/utils/i18n.ts\`.
- Adicione suas traduções nos arquivos JSON em \`src/utils/locales\`.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

1. Faça um fork do projeto.
2. Crie uma nova branch (\`git checkout -b feature/nova-funcionalidade\`).
3. Commit suas mudanças (\`git commit -am 'Adiciona nova funcionalidade'\`).
4. Push para a branch (\`git push origin feature/nova-funcionalidade\`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

- **Nome**: Seu Nome
- **Email**: seuemail@exemplo.com
- **GitHub**: [seu-usuario](https://github.com/seu-usuario)
"""