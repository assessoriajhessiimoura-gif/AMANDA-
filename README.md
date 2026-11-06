# Amanda Lívia | Mídia Kit

Mídia kit digital premium de Amanda Lívia, profissional de beauty e estética.

## Rodar localmente

```bash
npm install
npm run dev
```

## Gerar a versão de produção

```bash
npm run build
```

A pasta `dist` é gerada e pronta para publicação.

## Publicação no Netlify

O arquivo `netlify.toml` já define o comando de build (`npm run build`) e a pasta de publicação (`dist`). Basta conectar o repositório ao Netlify.

## Estrutura

- `public/images/` fotografias utilizadas no site
- `src/components/` seções do site (cabeçalho, capa, sobre, especialidades, formação, propósito, galeria, contato e rodapé)
- `src/styles/` estilos globais, animações e ajustes responsivos
- `src/lib/links.ts` links de Instagram e WhatsApp, centralizados em um único lugar
