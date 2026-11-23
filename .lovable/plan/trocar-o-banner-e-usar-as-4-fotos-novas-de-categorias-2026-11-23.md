# Trocar o banner e usar as 4 fotos novas de categorias

## O que muda
- **Banner principal**: o banner Black Friday sai e entra o novo banner laranja/vermelho (fone, air fryer, relógio, câmera, presente). O título e o botão "Explorar achadinhos" continuam por cima, no lado esquerdo vazio da imagem. Botões do WhatsApp e Telegram seguem logo abaixo.
- **Categorias**: Casa e Utilidades, Beleza e Cuidados, Cozinha e Decoração passam a usar as fotos enviadas agora, no lugar dos recortes da prancha (mais nítidas). As outras 8 ficam como estão.

## Detalhes técnicos
- Enviar as 5 imagens com lovable-assets, gerando novos ponteiros `.asset.json` (banner-principal-achou-barato.png e categoria-*.png).
- Atualizar imports em `src/routes/index.tsx` e `src/data/catalog.ts`; apagar os ponteiros antigos dos recortes.
- Conferir no computador e no celular que o texto do banner fica legível e as fotos carregam; rodar o teste do catálogo.
