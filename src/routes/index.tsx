import { createFileRoute } from '@tanstack/react-router';
import { Leaf, Check } from 'lucide-react';
import { Header, Footer, SocialLinks } from '@/components/catalog/shell';
import { CategoryGrid } from '@/components/catalog/categories';
import { ProductCard, DemoNotice } from '@/components/catalog/product-card';
import { products, site } from '@/data/catalog';
import banner from '@/assets/black-friday-banner.webp.asset.json';
export const Route = createFileRoute('/')({
 head:()=>({meta:[{title:`${site.name} — Achados úteis, escolhidos com cuidado`},{name:'description',content:'Explore nove categorias de produtos e conheça a curadoria de ofertas do Achou Barato. Entre em contato pelo WhatsApp ou Telegram.'},{property:'og:title',content:`${site.name} — Boas escolhas, sem perder tempo`},{property:'og:description',content:'Uma seleção cuidadosa de produtos para o seu dia a dia. Catálogo demonstrativo.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component:Index,
});
function Index() { return <><Header/><main className="container"><section className="intro"><div className="eyebrow"><Leaf size={13}/>Um bom achado faz a diferença</div><h1>Boas escolhas,<br/> <em>sem perder tempo.</em></h1><p>Uma seleção de ofertas e produtos que valem a pena encontrar.</p><SocialLinks/><div className="intro-note"><Check size={12}/>Mais perto dos achados. Sem complicação.</div></section><a className="promo-banner" href="#ofertas" aria-label="Promoção Black Friday — ver as ofertas do dia"><img src={banner.url} alt="Black Friday — produtos em destaque com preços especiais" width="1920" height="640" loading="eager"/></a><section className="category-section" id="categorias"><div className="section-heading"><h2>Explore por categoria</h2><span className="section-index">Um achado para cada momento</span></div><CategoryGrid/></section><section className="offer-section" id="ofertas"><div className="section-heading"><div><h2>Custo-benefício do dia</h2><p>Duas escolhas que merecem um lugar na sua lista.</p></div><span className="eyebrow"><span>Seleção Achou Barato</span><Leaf size={14}/></span></div><div className="offer-grid">{products.filter(p=>p.featured).map(p=><ProductCard key={p.id} product={p} featured/>)}</div><DemoNotice/></section></main><Footer/></>; }
