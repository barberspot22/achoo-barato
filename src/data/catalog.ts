import cat0 from '@/assets/categoria-em-alta.webp.asset.json';
import cat1 from '@/assets/categoria-casa-e-utilidades.webp.asset.json';
import cat2 from '@/assets/categoria-pets.webp.asset.json';
import cat3 from '@/assets/categoria-eletronicos-e-gadgets.webp.asset.json';
import cat4 from '@/assets/categoria-beleza-e-cuidados.webp.asset.json';
import cat5 from '@/assets/categoria-moda-e-acessorios.webp.asset.json';
import cat6 from '@/assets/categoria-natal.webp.asset.json';
import cat7 from '@/assets/categoria-praia-e-verao.webp.asset.json';
import cat8 from '@/assets/categoria-presentes.webp.asset.json';
import cat9 from '@/assets/categoria-cozinha.webp.asset.json';
import cat10 from '@/assets/categoria-organizacao.webp.asset.json';
import cat11 from '@/assets/categoria-decoracao.webp.asset.json';
import mascara from '@/assets/product-1.asset.json';
import palette from '@/assets/product-2.asset.json';
import blender from '@/assets/product-51.asset.json';
import handBlender from '@/assets/product-61.asset.json';
import microwave from '@/assets/product-66.asset.json';
import iphone from '@/assets/product-123.asset.json';
import realme from '@/assets/product-128.asset.json';
import samsung from '@/assets/product-133.asset.json';
import honey from '@/assets/product-27.asset.json';
import coffee from '@/assets/product-34.asset.json';
import juice from '@/assets/product-29.asset.json';
import soda from '@/assets/product-39.asset.json';
import lamp from '@/assets/product-47.asset.json';
import plant from '@/assets/product-45.asset.json';
import games from '@/assets/product-games.asset.json';
import books from '@/assets/product-books.asset.json';
import christmas from '@/assets/product-christmas.asset.json';

// EDIT HERE: brand, social links, categories and the complete catalog.
// All prices, previous prices and selections below are DEMONSTRATION DATA,
// not verified offers. Photos are illustrative. Replace promotionUrl with the
// actual partner offer before publishing a verified catalog.
export const site = { name: 'Achou Barato', tagline: 'Achados úteis, escolhidos com cuidado', whatsapp: 'https://chat.whatsapp.com/ICJo8TE0suO8HCspjdObkf?s=cl&p=i&iam=2', telegram: 'https://t.me/+Jy-37TWFql83NTdh' };
export const categories = [
  { slug: 'em-alta', name: 'Em alta', description: 'O que está chamando atenção agora.', image: cat0.url },
  { slug: 'casa-e-utilidades', name: 'Casa e Utilidades', description: 'Achados para deixar a casa mais prática.', image: cat1.url },
  { slug: 'pets', name: 'Pets', description: 'Cuidados e mimos para os seus bichinhos.', image: cat2.url },
  { slug: 'eletronicos-e-gadgets', name: 'Eletrônicos e Gadgets', description: 'Tecnologia útil para a rotina e o lazer.', image: cat3.url },
  { slug: 'beleza-e-cuidados', name: 'Beleza e Cuidados', description: 'Pequenos cuidados para o seu dia a dia.', image: cat4.url },
  { slug: 'moda-e-acessorios', name: 'Moda e Acessórios', description: 'Peças e acessórios para compor o visual.', image: cat5.url },
  { slug: 'natal', name: 'Natal', description: 'Detalhes para decorar e presentear.', image: cat6.url },
  { slug: 'praia-e-verao', name: 'Praia e Verão', description: 'Itens para aproveitar os dias de sol.', image: cat7.url },
  { slug: 'presentes', name: 'Presentes', description: 'Ideias para presentear com carinho.', image: cat8.url },
  { slug: 'cozinha', name: 'Cozinha', description: 'Utensílios, aparelhos e despensa.', image: cat9.url },
  { slug: 'organizacao', name: 'Organização', description: 'Soluções para cada coisa no seu lugar.', image: cat10.url },
  { slug: 'decoracao', name: 'Decoração', description: 'Toques que deixam a casa aconchegante.', image: cat11.url },
] as const;
export type CategorySlug = typeof categories[number]['slug'];
export interface Product { id: string; name: string; description: string; category: CategorySlug; image: string; currentPrice: number; previousPrice?: number; promotionUrl: string; featured: boolean; tags: string[]; demo: true }
function product(id: string, name: string, description: string, category: CategorySlug, image: string, currentPrice: number, tags: string[], featured = false, previousPrice?: number): Product {
 return { id, name, description, category, image, currentPrice, tags, featured, demo: true, promotionUrl: `https://www.amazon.com.br/s?k=${encodeURIComponent(name)}`, ...(previousPrice !== undefined ? { previousPrice } : {}) };
}
export const products: Product[] = [
 product('iphone', 'iPhone 13 Pro · 128 GB', 'Tela de 6,1 polegadas, câmera tripla e espaço para o que importa.', 'eletronicos-e-gadgets', iphone.url, 3299, ['Apple', '128 GB'], true, 3899),
 product('blender', 'Liquidificador de bancada', 'Versátil para sucos, vitaminas e receitas do dia a dia.', 'cozinha', blender.url, 189.90, ['Cozinha'], true, 249.90),
 product('realme', 'Realme C35 · 128 GB', 'Tela ampla e bateria de 5.000 mAh para acompanhar sua rotina.', 'eletronicos-e-gadgets', realme.url, 899.90, ['Realme', '128 GB']),
 product('samsung', 'Samsung Galaxy S10 · 128 GB', 'Tela AMOLED e câmera versátil em um aparelho compacto.', 'eletronicos-e-gadgets', samsung.url, 1299, ['Samsung', '128 GB'], true, 1499),
 product('mascara', 'Máscara de cílios Lash Princess', 'Um toque de volume e definição para a maquiagem diária.', 'beleza-e-cuidados', mascara.url, 39.90, ['Maquiagem'], true, 49.90),
 product('palette', 'Paleta de sombras com espelho', 'Tons versáteis para uma maquiagem leve ou mais marcante.', 'beleza-e-cuidados', palette.url, 79.90, ['Maquiagem']),
 product('mixer', 'Mixer de mão', 'Praticidade para preparar cremes, molhos e pequenas receitas.', 'cozinha', handBlender.url, 119.90, ['Cozinha']),
 product('microwave', 'Forno micro-ondas compacto', 'Uma ajuda na hora de aquecer e preparar suas refeições.', 'cozinha', microwave.url, 549.90, ['Cozinha'], true, 649.90),
 product('console', 'Console PlayStation 5', 'Uma nova geração de jogos para os momentos de lazer.', 'eletronicos-e-gadgets', games.url, 3499, ['Consoles'], true),
 product('book', 'Seleção de literatura contemporânea', 'Histórias para desacelerar e encontrar novas perspectivas.', 'presentes', books.url, 49.90, ['Literatura']),
 product('honey', 'Mel puro · pote de vidro', 'Uma dose de doçura para frutas, chás e receitas caseiras.', 'cozinha', honey.url, 29.90, ['Despensa']),
 product('coffee', 'Café solúvel clássico', 'Prático e aromático para uma pausa no meio do dia.', 'cozinha', coffee.url, 24.90, ['Despensa']),
 product('juice', 'Suco de frutas', 'Uma opção refrescante para acompanhar suas refeições.', 'cozinha', juice.url, 12.90, ['Sem álcool']),
 product('soda', 'Seleção de refrigerantes', 'Sabores clássicos para compartilhar à mesa.', 'cozinha', soda.url, 19.90, ['Sem álcool']),
 product('christmas', 'Seleção de enfeites natalinos', 'Detalhes delicados para deixar a casa no clima de Natal.', 'natal', christmas.url, 59.90, ['Decoração']),
 product('lamp', 'Luminária de mesa', 'Iluminação aconchegante para um presente cheio de cuidado.', 'decoracao', lamp.url, 89.90, ['Presentes']),
 product('plant', 'Arranjo decorativo', 'Um toque de verde para renovar seu cantinho favorito.', 'casa-e-utilidades', plant.url, 39.90, ['Casa']),
];
export const formatPrice = (value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
export function savings(p: Product) { return p.previousPrice && p.previousPrice > p.currentPrice ? Math.round((1 - p.currentPrice / p.previousPrice) * 100) : null; }
export const newestProducts = (n = 6) => [...products].reverse().slice(0, n);
export function searchProducts(query: string) {
 const normalize = (s: string) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
 const q = normalize(query.trim()); if (!q) return [];
 return products.filter(p => normalize(`${p.name} ${p.tags.join(' ')} ${categories.find(c => c.slug === p.category)?.name ?? ''}`).includes(q));
}
export function selectProducts(category: string, query = '', tags: string[] = [], sort = 'relevant') {
 const normalize = (s: string) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
 const result = products.filter(p => (category === 'em-alta' ? p.featured : p.category === category) && normalize(`${p.name} ${p.description} ${p.tags.join(' ')}`).includes(normalize(query.trim())) && (tags.length === 0 || tags.some(tag => p.tags.includes(tag))));
 return sort === 'low' ? result.sort((a,b) => a.currentPrice-b.currentPrice) : sort === 'high' ? result.sort((a,b) => b.currentPrice-a.currentPrice) : result;
}
