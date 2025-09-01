# 🚀 PerfReact: Otimização de Performance em Aplicações React

Este projeto foi desenvolvido para demonstrar e aplicar técnicas avançadas de otimização de performance em aplicações React/Next.js. O foco principal é garantir uma renderização fluida e uma excelente experiência de usuário, mesmo ao lidar com grandes volumes de dados, como listas com milhares de itens.

---

### **⚡ Funcionalidades e Otimizações de Performance**

O projeto implementa funcionalidades chave com foco em performance:

**💨 Renderização Virtualizada (Windowing)**
Para renderizar listas com 1000+ itens de forma eficiente, foi utilizada a biblioteca `react-virtualized`. Essa técnica renderiza apenas os itens visíveis na tela, evitando a sobrecarga do DOM e garantindo uma rolagem suave sem perda de performance.

**🧠 Memoização de Componentes**
O `React.memo` foi aplicado em componentes de item da lista (`ProductItem`) para prevenir novas renderizações desnecessárias. Funções de callback foram estabilizadas com `useCallback` para otimizar ainda mais este processo.

**📦 Code Splitting (Lazy Loading)**
Componentes que não são essenciais para a renderização inicial são carregados sob demanda usando a função `dynamic` do Next.js. Isso reduz o tamanho do bundle inicial e acelera o carregamento da página.

**🔍 Busca e Exibição de Produtos**
Funcionalidade de busca que consome uma API mock para filtrar e exibir produtos dinamicamente.

---

### **🛠️ Tecnologias Utilizadas**

As seguintes ferramentas e tecnologias foram utilizadas na construção do projeto:

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React Virtualized](https://img.shields.io/badge/React_Virtualized-8A2BE2?style=for-the-badge&logo=react&logoColor=white)
![JSON Server](https://img.shields.io/badge/JSON_Server-333333?style=for-the-badge&logo=json&logoColor=white)

---

### **▶️ Como Executar o Projeto**

Para executar este projeto em seu ambiente local, siga os passos abaixo:

**1️⃣ Clone o repositório**
```bash
git clone [https://github.com/YanzinhoCaue/perfreact.git](https://github.com/YanzinhoCaue/perfreact.git)
````

**2️⃣ Navegue até o diretório do projeto**

```bash
cd perfreact
```

**3️⃣ Instale as dependências**

```bash
npm install
```

ou

```bash
yarn install
```

**4️⃣ Execute a aplicação**

Você precisará de dois terminais abertos:

**No primeiro terminal, inicie o servidor da API mock:**

```bash
npm run server
```

**No segundo terminal, inicie a aplicação Next.js:**

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000` e a API em `http://localhost:3333`.

-----

### **📂 Estrutura do Projeto**

A estrutura de diretórios do projeto está organizada da seguinte forma:

```
perfreact/
├── components/
│   ├── AddProductToWishlist.tsx
│   ├── ProductItem.tsx
│   └── SearchResults.tsx
├── pages/
│   ├── _app.tsx
│   └── index.tsx
├── server.js
├── package.json
└── tsconfig.json
```

-----

### **🗺️ Próximos Passos e Melhorias Futuras**

A seguir estão algumas das melhorias planejadas e futuras funcionalidades:

**📊 Análise de Bundle**
Integrar o `@next/bundle-analyzer` para visualizar o tamanho de cada pacote JavaScript e identificar novas oportunidades de otimização.

**✅ Implementar Testes**
Adicionar testes unitários e de integração com Jest e React Testing Library para garantir a qualidade e estabilidade do código.

**🔄 Atualizar Biblioteca de Virtualização**
Migrar do `react-virtualized` para bibliotecas mais modernas e leves como `react-window` ou `TanStack Virtual`.

**❤️ Gerenciamento de Estado para a Wishlist**
Implementar um gerenciador de estado (Context API, Zustand) para controlar a lista de favoritos de forma mais robusta.

-----

### **💬 Contato**

**Yan Cauê**

**LinkedIn:** [linkedin.com/in/yancue](https://linkedin.com/in/yancue)

**GitHub:** [github.com/YanzinhoCaue](https://github.com/YanzinhoCaue)
