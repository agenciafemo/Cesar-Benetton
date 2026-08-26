# Site — Dr. César Benetton

Landing page oficial do Dr. César Augusto Fabris Benetton, ortopedista e
traumatologista especializado em pé e tornozelo em Criciúma, SC.

## Desenvolvimento local

Requisitos: Node.js 20+ e npm.

```bash
npm install --legacy-peer-deps
npm run dev
```

O site ficará disponível em `http://localhost:3000`.

## Produção

Copie `.env.example` para `.env.local` e confirme a URL canônica. A variável
`NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` é opcional e deve receber o token gerado
pelo Google Search Console.

```bash
npm run build
npm run start
```

## Descoberta e indexação

O projeto inclui:

- metadados canônicos, Open Graph e Twitter;
- `robots.txt`, `sitemap.xml` com imagens e manifesto;
- dados estruturados JSON-LD de médico, clínica, site e perguntas frequentes;
- conteúdo legível por buscadores e assistentes em `/llms.txt`;
- perguntas frequentes visíveis e respostas objetivas;
- imagens responsivas em AVIF/WebP, cache e cabeçalhos de segurança.

## Otimização das imagens

As imagens WebP dos tratamentos e da fachada podem ser recriadas a partir dos
arquivos-fonte com:

```bash
npm run optimize:images
```

Os PNGs originais de `public/treatments` permanecem locais e não entram no Git,
evitando cerca de 65 MB desnecessários no repositório.
