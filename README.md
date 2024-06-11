![Descrição da Imagem](/.github/screenshot.png)

### Documentação do Projeto: auth.rodrigo.work

---

## 1. Introdução

**Nome do Projeto:** auth.rodrigo.work

**Descrição:**
Este projeto é uma aplicação web modular que inclui uma API e uma interface de usuário construída com React e Next.js. O projeto utiliza uma arquitetura monorepo, facilitando a gestão de múltiplos pacotes e aplicações.

**Principais Tecnologias:**

- Node.js
- PNPM (Gerenciador de Pacotes)
- TypeScript
- React
- Next.js
- ESLint
- Jest

---

## 2. Configuração do Ambiente

### Requisitos

- Node.js (versão 14.x ou superior)
- PNPM (preferencialmente a última versão)
- TypeScript (instalado globalmente ou via dependências do projeto)

### Instalação

1. **Clone o Repositório:**

   ```sh
   git clone <URL-do-repositorio>
   cd auth.rodrigo.work-main
   ```

2. **Instale as Dependências:**

   ```sh
   pnpm install
   ```

3. **Configuração Inicial:**

   - **Variáveis de Ambiente:** Crie um arquivo `.env` na raiz do projeto e adicione as variáveis de ambiente necessárias.

   ```env
   DATABASE_URL=<sua_database_url>
   API_KEY=<sua_api_key>
   ```

4. **Scripts Disponíveis:**

   - **Iniciar o Servidor de Desenvolvimento:**

     ```sh
     pnpm dev
     ```

   - **Construir o Projeto:**

     ```sh
     pnpm build
     ```

   - **Executar Testes:**

     ```sh
     pnpm test
     ```

---

## 3. Estrutura do Projeto

A estrutura do projeto é organizada em um monorepo com múltiplos pacotes e aplicativos. Abaixo está um resumo dos diretórios e arquivos principais:

### Diretório Raiz

- `.editorconfig`: Configurações do editor para manter consistência de estilo.
- `.eslintrc.js`: Configurações do ESLint para linting do código.
- `.gitignore`: Arquivos e diretórios ignorados pelo Git.
- `.npmrc`: Configurações do NPM/PNPM.
- `.prettierignore`: Arquivos ignorados pelo Prettier.
- `prettier.config.js`: Configurações do Prettier para formatação de código.
- `tsconfig.json`: Configurações globais do TypeScript.
- `turbo.json`: Configurações do TurboRepo para gerenciar o monorepo.
- `LICENSE`: Licença do projeto.
- `README.md`: Documentação inicial.
- `index.html`: Página inicial da aplicação web.
- `package.json`: Dependências e scripts do projeto.
- `pnpm-lock.yaml`: Arquivo de lock do PNPM.
- `pnpm-workspace.yaml`: Configurações do workspace do PNPM.

### Diretórios Principais

#### `apps/`

- **API (`apps/api/`)**

  - `.eslintrc.js`: Configurações do ESLint específicas da API.
  - `package.json`: Dependências e scripts da API.
  - `tsconfig.json`: Configurações do TypeScript para a API.
  - `src/`
    - `index.ts`: Ponto de entrada principal da API.
    - `server.ts`: Configurações do servidor (ex.: Express).

- **Web (`apps/web/`)**
  - `.eslintrc.js`: Configurações do ESLint específicas da aplicação web.
  - `package.json`: Dependências e scripts da aplicação web.
  - `next.config.js`: Configurações do Next.js.
  - `pages/`: Páginas da aplicação Next.js.
  - `components/`: Componentes reutilizáveis do React.
  - `public/`: Arquivos estáticos.
  - `styles/`: Arquivos de estilo (CSS, SCSS).

#### `packages/`

- **Configuração do ESLint (`packages/eslint-config-custom/`)**

  - `index.js`: Arquivo principal de configuração do ESLint.

- **Presets do Jest (`packages/jest-presets/`)**

  - `jest-preset.js`: Preset de configuração para Jest.

- **Pacote de Logger (`packages/logger/`)**

  - `src/index.ts`: Implementação principal do logger.
  - `src/__tests__/log.test.ts`: Testes para o logger.

- **Configurações do TypeScript (`packages/typescript-config/`)**

  - `base.json`: Configurações base do TypeScript.
  - `nextjs.json`: Configurações específicas para Next.js.
  - `react-library.json`: Configurações para bibliotecas React.

- **Componentes de UI (`packages/ui/`)**
  - `src/button.tsx`: Componente de botão.
  - `src/card.tsx`: Componente de card.
  - `src/code.tsx`: Componente de código.

---

## 4. Uso dos Componentes

### Componentes de UI

**Button Component (`packages/ui/src/button.tsx`)**

```jsx
import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
```

**Exemplo de Uso:**

```jsx
import { Button } from 'ui'

const handleClick = () => {
  console.log('Botão clicado!')
}

const App = () => (
  <div>
    <Button onClick={handleClick}>Clique Aqui</Button>
  </div>
)

export default App
```

**Card Component (`packages/ui/src/card.tsx`)**

```jsx
import React from 'react';

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;
```

**Exemplo de Uso:**

```jsx
import { Card } from 'ui'

const App = () => (
  <div>
    <Card title="Título" content="Conteúdo do card" />
  </div>
)

export default App
```

### Logger

**Logger (`packages/logger/src/index.ts`)**

```typescript
export const log = (message: string): void => {
  console.log(message)
}
```

**Exemplo de Uso:**

```typescript
import { log } from 'logger'

log('Este é um log de teste')
```

### Configurações do TypeScript

**Base Config (`packages/typescript-config/base.json`)**

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

---

## 5. Contribuição

Para contribuir com o projeto, siga os passos abaixo:

1. **Faça um Fork do Repositório:**

   Clique no botão de fork no GitHub e faça um fork do repositório para sua conta.

2. **Clone o Repositório:**

   ```sh
   git clone <URL-do-fork>
   cd auth.rodrigo.work-main
   ```

3. **Crie uma Nova Branch:**

   ```sh
   git checkout -b minha-feature
   ```

4. **Faça as Alterações Necessárias e Commit:**

   ```sh
   git commit -m "Adiciona minha nova feature"
   ```

5. **Envie as Alterações para o seu Fork:**

   ```sh
   git push origin minha-feature
   ```

6. **Abra um Pull Request:**

   Vá até o repositório original no GitHub e abra um pull request com uma descrição detalhada das suas alterações.

---

## 6. Testes

### Executando Testes

Para executar os testes, utilize o comando:

```sh
pnpm test
```

### Estrutura dos Testes

Os testes estão localizados nos diretórios correspondentes aos seus componentes ou pacotes. Por exemplo, testes para o logger estão em `packages/logger/src/__tests__/log.test.ts`.

**Exemplo de Teste (`log.test.ts`):**

```typescript
import { log } from '../index'

describe('log function', () => {
  it('should log the message', () => {
    console.log = jest.fn()
    log('Test message')
    expect(console.log).toHaveBeenCalledWith('Test message')
  })
})
```

---

## 7. Segurança

Para relatórios de vulnerabilidades de segurança, consulte o arquivo [SECURITY.md](./.github/SECURITY.md) para obter instruções sobre como proceder.

---

Essa documentação cobre os aspectos principais e mais avançados do projeto, incluindo a configuração, estrutura, uso dos componentes, contribuições e testes. Se houver mais detalhes específicos ou seções que você gostaria de incluir ou expandir, sinta-se à vontade para indicar!
