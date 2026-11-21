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
export const site = { name: 'Achou Barato', tagline: 'Achados úteis, escolhidos com cuidado', whatsapp: 'https://wa.me/SEUNUMERO', telegram: 'https://t.me/SEUCANAL' };
export const categories = [
  { slug: 'cosmeticos', name: 'Cosméticos', detail: 'Seu cuidado diário', description: 'Pequenos cuidados que fazem parte de uma boa rotina.' },
  { slug: 'videogames', name: 'Videogames', detail: 'Hora de dar o play', description: 'Consoles e acessórios para aproveitar seu tempo de jogo.' },
  { slug: 'celulares', name: 'Celulares', detail: 'Conecte o seu dia', description: 'Tecnologia útil, com opções para diferentes rotinas e bolsos.' },
  { slug: 'eletrodomesticos', name: 'Eletrodomésticos', detail: 'Mais praticidade em casa', description: 'Uma seleção para simplificar a rotina e cuidar da sua casa.' },
  { slug: 'livros', name: 'Livros', detail: 'Sua próxima boa leitura', description: 'Histórias, ideias e novas perspectivas para sua estante.' },
  { slug: 'comida', name: 'Comida', detail: 'Sabor à mesa', description: 'Achados para a despensa e para os pequenos prazeres à mesa.' },
  { slug: 'bebidas', name: 'Bebidas', detail: 'Um brinde aos achados', description: 'Do café da manhã aos encontros, uma seleção para acompanhar.' },
  { slug: 'natal', name: 'Natal', detail: 'Presentes com carinho', description: 'Detalhes especiais para decorar e presentear com cuidado.' },
  { slug: 'fim-de-ano', name: 'Fim de ano', detail: 'Celebre novos começos', description: 'Escolhas para renovar a casa e celebrar um novo ciclo.' },
] as const;
export type CategorySlug = typeof categories[number]['slug'];
export interface Product { id: string; name: string; description: string; category: CategorySlug; image: string; currentPrice: number; previousPrice?: number; promotionUrl: string; featured: boolean; tags: string[]; demo: true }
function product(id: string, name: string, description: string, category: CategorySlug, image: string, currentPrice: number, tags: string[], featured = false, previousPrice?: number): Product {
 return { id, name, description, category, image, currentPrice, tags, featured, demo: true, promotionUrl: `https://www.amazon.com.br/s?k=${encodeURIComponent(name)}`, ...(previousPrice !== undefined ? { previousPrice } : {}) };
}
export const products: Product[] = [
 product('iphone', 'iPhone 13 Pro · 128 GB', 'Tela de 6,1 polegadas, câmera tripla e espaço para o que importa.', 'celulares', iphone.url, 3299, ['Apple', '128 GB'], true, 3899),
 product('blender', 'Liquidificador de bancada', 'Versátil para sucos, vitaminas e receitas do dia a dia.', 'eletrodomesticos', blender.url, 189.90, ['Cozinha'], true, 249.90),
 product('realme', 'Realme C35 · 128 GB', 'Tela ampla e bateria de 5.000 mAh para acompanhar sua rotina.', 'celulares', realme.url, 899.90, ['Realme', '128 GB']),
 product('samsung', 'Samsung Galaxy S10 · 128 GB', 'Tela AMOLED e câmera versátil em um aparelho compacto.', 'celulares', samsung.url, 1299, ['Samsung', '128 GB'], false, 1499),
 product('mascara', 'Máscara de cílios Lash Princess', 'Um toque de volume e definição para a maquiagem diária.', 'cosmeticos', mascara.url, 39.90, ['Maquiagem'], false, 49.90),
 product('palette', 'Paleta de sombras com espelho', 'Tons versáteis para uma maquiagem leve ou mais marcante.', 'cosmeticos', palette.url, 79.90, ['Maquiagem']),
 product('mixer', 'Mixer de mão', 'Praticidade para preparar cremes, molhos e pequenas receitas.', 'eletrodomesticos', handBlender.url, 119.90, ['Cozinha']),
 product('microwave', 'Forno micro-ondas compacto', 'Uma ajuda na hora de aquecer e preparar suas refeições.', 'eletrodomesticos', microwave.url, 549.90, ['Cozinha'], false, 649.90),
 product('console', 'Console PlayStation 5', 'Uma nova geração de jogos para os momentos de lazer.', 'videogames', games.url, 3499, ['Consoles']),
 product('book', 'Seleção de literatura contemporânea', 'Histórias para desacelerar e encontrar novas perspectivas.', 'livros', books.url, 49.90, ['Literatura']),
 product('honey', 'Mel puro · pote de vidro', 'Uma dose de doçura para frutas, chás e receitas caseiras.', 'comida', honey.url, 29.90, ['Despensa']),
 product('coffee', 'Café solúvel clássico', 'Prático e aromático para uma pausa no meio do dia.', 'comida', coffee.url, 24.90, ['Despensa']),
 product('juice', 'Suco de frutas', 'Uma opção refrescante para acompanhar suas refeições.', 'bebidas', juice.url, 12.90, ['Sem álcool']),
 product('soda', 'Seleção de refrigerantes', 'Sabores clássicos para compartilhar à mesa.', 'bebidas', soda.url, 19.90, ['Sem álcool']),
 product('christmas', 'Seleção de enfeites natalinos', 'Detalhes delicados para deixar a casa no clima de Natal.', 'natal', christmas.url, 59.90, ['Decoração']),
 product('lamp', 'Luminária de mesa', 'Iluminação aconchegante para um presente cheio de cuidado.', 'natal', lamp.url, 89.90, ['Presentes']),
 product('plant', 'Arranjo decorativo', 'Um toque de verde para renovar seu cantinho favorito.', 'fim-de-ano', plant.url, 39.90, ['Casa']),
];
export const formatPrice = (value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
export function savings(p: Product) { return p.previousPrice && p.previousPrice > p.currentPrice ? Math.round((1 - p.currentPrice / p.previousPrice) * 100) : null; }
export function selectProducts(category: string, query = '', tags: string[] = [], sort = 'relevant') {
 const normalize = (s: string) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
 const result = products.filter(p => p.category === category && normalize(`${p.name} ${p.description} ${p.tags.join(' ')}`).includes(normalize(query.trim())) && (tags.length === 0 || tags.some(tag => p.tags.includes(tag))));
 return sort === 'low' ? result.sort((a,b) => a.currentPrice-b.currentPrice) : sort === 'high' ? result.sort((a,b) => b.currentPrice-a.currentPrice) : result;
}
