import { createFileRoute } from '@tanstack/react-router';
import { Sparkles, ShieldCheck, LayoutGrid, BadgePercent, ArrowDown } from 'lucide-react';
import { Header, Footer, SocialLinks } from '@/components/catalog/shell';
import { CategoryGrid } from '@/components/catalog/categories';
import { ProductRail, DemoNotice } from '@/components/catalog/product-card';
import { Button } from '@/components/ui/button';
import { products, newestProducts, site } from '@/data/catalog';
import banner from '@/assets/black-friday-banner.webp.asset.json';
export const Route = createFileRoute('/')({
 head:()=>({meta:[{title:`${site.name} — Achadinhos selecionados para o dia a dia`},{name:'description',content:'Explore 12 categorias de achadinhos, veja os destaques e novidades do Achou Barato e entre nos grupos do WhatsApp e Telegram.'},{property:'og:title',content:`${site.name} — Achadinhos selecionados`},{property:'og:description',content:'Categorias, destaques e novidades em uma loja de achadinhos fácil de explorar.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component:Index,
});
const benefits=[{Icon:Sparkles,t:'Achadinhos selecionados',d:'Escolhas pensadas para o seu dia a dia.'},{Icon:ShieldCheck,t:'Segurança nas compras',d:'Você finaliza a compra direto na loja parceira.'},{Icon:LayoutGrid,t:'Variedade para o dia a dia',d:'Doze categorias para explorar.'},{Icon:BadgePercent,t:'Ofertas imperdíveis',d:'Preços que valem a sua atenção.'}];
function Index() { return <><Header/><main className="container">
 <section className="hero-banner"><img src={banner.url} alt="" width="1920" height="640" loading="eager"/><div className="hero-copy"><h1>Achou barato? Achou aqui.</h1><p>Achadinhos para casa, tecnologia, beleza e presentes em um só lugar.</p><Button asChild size="lg"><a href="#achadinhos">Explorar achadinhos<ArrowDown/></a></Button></div></section>
 <section className="intro"><SocialLinks/></section>
 <section className="home-section" id="categorias"><div className="section-heading"><h2>Explore por Categorias</h2></div><CategoryGrid/></section>
 <section className="home-section" id="achadinhos"><div className="section-heading"><h2>Achadinhos em Destaque</h2></div><ProductRail label="Achadinhos em Destaque" items={products.filter(p=>p.featured)}/></section>
 <section className="home-section" id="novidades"><div className="section-heading"><h2>Novidades</h2></div><ProductRail label="Novidades" items={newestProducts()}/><DemoNotice/></section>
 <section className="benefits" aria-label="Benefícios">{benefits.map(({Icon,t,d})=><div key={t}><Icon/><div><h3>{t}</h3><p>{d}</p></div></div>)}</section>
</main><Footer/></>; }
