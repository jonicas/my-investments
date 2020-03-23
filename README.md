Aplicação para acompanhamento de rendimentos de investimentos.

## Scripts

A partir da raiz do projeto, você pode executar os seguintes comandos:

### `npm start`

Executa o aplicativo em modo desenvolvimento.<br />
Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador

### `npm test`

Executa os testes do projeto no modo interativo.<br/>

### `npm run build`

Prepara a aplicação para o deploy em produção.

## Contributing

### Diretrizes para Pull Request

- O branch `master` contém o último release estável. Todo desenvolvimento deve ser realizado em branchs dedicados.
- Não adicione as pastas `build` e `node_modules` ao commit.
- Tenha certeza que os testes estão passando (`npm test`).

### Configurações de Desenvolvimento

Você vai precisar do Node.js versão 8+<br/>
Depois de clonar o repositório execute o comando:

```bash
$ npm install
```

### Fazendo Commits

As mensagens de commit deve seguir a seguinte estrutura:

```bash
[TIPO]: {Breve descrição do que foi feito}
```

- Tipos: `FEAT`, `BUGFIX`, `DOCS`, `REFACTOR`, `TEST`, `CONFIG`

### Estrutura do Projeto

- `build`: Pasta que contém os arquivos gerados para distribuição e deploy em produção.
- `src`: Contém o código fonte da aplicação.
  - `components`: Contém os componentes que são compartilhados por toda a aplicação.
  - `screens`: Componentes que não são compartilhados e que aplicam a lógica de negócio.
  - `utils`: Funções utilitárias para serem compartilhadas por todo o projeto.
