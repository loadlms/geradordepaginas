# Gerador de Páginas

Este é um projeto que utiliza Astro e TinaCMS para gerar páginas de landing page de forma dinâmica.

## Estrutura do Projeto

```
geradordepaginas/
├── src/
│   ├── components/
│   │   ├── Template1.astro
│   │   └── Template2.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── diabetic.astro
│   └── content/
├── public/
│   └── images/
├── tina/
│   └── config.ts
├── astro.config.mjs
└── package.json
```

## Templates Disponíveis

### Template 1
- Design limpo e minimalista
- Foco em receitas e conteúdo natural
- Botões de CTA em verde
- Disclaimer padrão incluído

### Template 2
- Design mais impactante
- Foco em descobertas médicas e saúde
- Botões de CTA em vermelho
- Disclaimer personalizado

## Como Usar

1. Instale as dependências:
     ```bash
npm install
     ```

2. Configure as variáveis de ambiente:
Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
```
TINA_CLIENT_ID=seu_client_id
TINA_TOKEN=seu_token
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse o CMS:
     ```bash
npx tinacms dev -c "npm run dev"
```

## Criando uma Nova Página

1. Acesse o CMS em `http://localhost:3000/admin`
2. Clique em "New Page"
3. Preencha os campos:
   - Title: Título da página
   - Description: Descrição para SEO
   - Template: Escolha entre template1 ou template2
   - Video URL: URL do vídeo do YouTube
   - CTA Text: Texto do botão de chamada para ação
   - Content: Conteúdo principal da página
   - Disclaimer: Texto de disclaimer (obrigatório para template2)

4. Salve a página

## Personalização

### Templates
Os templates estão localizados em `src/components/` e podem ser personalizados conforme necessário.

### Estilos
O projeto utiliza Tailwind CSS para estilização. Os estilos podem ser modificados diretamente nos componentes ou através do arquivo de configuração do Tailwind.

### Layout Base
O layout base está em `src/layouts/BaseLayout.astro` e pode ser modificado para alterar a estrutura comum a todas as páginas.

## Build e Deploy

Para criar uma build de produção:
  ```bash
  npm run build
  ```

Para visualizar a build localmente:
  ```bash
npm run preview
```

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request