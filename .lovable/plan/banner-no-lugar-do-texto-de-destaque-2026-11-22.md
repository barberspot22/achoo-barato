# Banner no lugar do texto de destaque

## O que muda na página inicial
- Remover o texto do topo: a frase pequena "Um bom achado faz a diferença", o título "Boas escolhas, sem perder tempo." e a frase "Uma seleção de ofertas e produtos que valem a pena encontrar."
- O banner Black Friday passa a ser o primeiro item logo abaixo do cabeçalho amarelo.
- Logo abaixo do banner ficam os botões "Falar no WhatsApp" e "Entrar no Telegram", centralizados, seguidos da notinha "Mais perto dos achados. Sem complicação."
- Depois disso, as categorias e ofertas continuam como estão.
- Ajustar os espaços para ficar bonito no computador e no celular.

## Detalhes técnicos
- `src/routes/index.tsx`: remover eyebrow, h1 e p da seção `intro`; mover o `<a className="promo-banner">` para o início; manter `SocialLinks` e `intro-note` abaixo dele. Como a página perde o h1 visível, adicionar um h1 oculto visualmente ("Achou Barato — ofertas do dia") para acessibilidade/SEO.
- `src/styles.css`: ajustar margens de `.promo-banner` (topo ~24px) e reduzir o padding de `.intro`.
- Verificar no celular (557px) e no computador.
