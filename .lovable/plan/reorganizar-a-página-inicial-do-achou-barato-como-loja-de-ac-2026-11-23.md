# Reorganizar a página inicial do Achou Barato como loja de achadinhos

## O que muda para você
- **Cabeçalho escuro** com a logo atual, links (Início, Categorias, Achadinhos, Novidades), busca "Buscar produtos..." que mostra resultados reais e botão de favoritos (coração nos produtos, salvo no próprio navegador). Menu no celular.
- **Banner principal**: o pacote não trouxe o `banner-principal-achou-barato.png`, então mantenho o banner Black Friday atual, com título, descrição e botão "Explorar achadinhos" escritos por cima (texto real, não na imagem). Os botões do WhatsApp e Telegram continuam logo abaixo.
- **Explore por Categorias**: 12 categorias com foto e faixa escura com o nome. Seis colunas no computador, três no tablet, duas no celular. Cada uma abre sua própria página filtrada.
  - Vieram 8 fotos separadas. As 4 que faltaram (Casa e Utilidades, Beleza e Cuidados, Cozinha, Decoração) eu recorto da prancha enviada.
- **Achadinhos em Destaque**: faixa horizontal deslizável com setas, cartões com foto, nome, categoria, preço e botão "Ver achadinho".
- **Novidades**: os últimos produtos cadastrados, com o mesmo cartão. Sem datas, avaliações ou estoque inventados.
- **Faixa de benefícios**: Achadinhos selecionados, Segurança nas compras, Variedade para o dia a dia, Ofertas imperdíveis, com frases curtas e sem promessas de garantia.
- **Rodapé escuro**: logo, frase, navegação, grupos do WhatsApp/Telegram e aviso discreto de links de parceiros.

## Categorias novas
As 9 categorias atuais passam a ser as 12 do pacote. Os 17 produtos de exemplo são redistribuídos: celulares e videogame em Eletrônicos e Gadgets; cosméticos em Beleza e Cuidados; liquidificador, mixer, micro-ondas, mel, café, sucos e refrigerantes em Cozinha; enfeites em Natal; luminária em Decoração; arranjo em Casa e Utilidades; livro em Presentes. Categorias sem produto (ex.: Pets, Praia e Verão) mostram uma mensagem amigável com caminho de volta.

## Detalhes técnicos
- Fotos enviadas via lovable-assets; recortes da prancha (grade 4x3) gerados em /tmp e enviados igual.
- `src/data/catalog.ts` segue como fonte única: novas categorias com imagem, campo de ordem para "Novidades", busca por nome e categoria.
- Novo `/busca?q=` reaproveitando `selectProducts`; favoritos em localStorage lidos após hidratação.
- Atualizar cores do cabeçalho/rodapé nos tokens de `styles.css` (sem verdes), testes de catálogo para 12 categorias, e conferir no computador e no celular.
