import { createFileRoute, Link } from '@tanstack/react-router';
import { SearchX } from 'lucide-react';
import { Header, Footer } from '@/components/catalog/shell';
import { ProductCard } from '@/components/catalog/product-card';
import { Button } from '@/components/ui/button';
import { searchProducts, site } from '@/data/catalog';
export const Route = createFileRoute('/busca')({
 validateSearch:(s:Record<string,unknown>)=>({q:typeof s['q']==='string'?s['q']:''}),
 head:()=>({meta:[{title:`Buscar produtos — ${site.name}`},{name:'description',content:'Encontre achadinhos pelo nome ou pela categoria.'},{property:'og:title',content:`Buscar produtos — ${site.name}`},{property:'og:description',content:'Encontre achadinhos pelo nome ou pela categoria.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary'},{name:'robots',content:'noindex'}]}),
 component:SearchPage,
});
function SearchPage(){const {q}=Route.useSearch();const r=searchProducts(q);return <><Header/><main className="container page-main"><h1 className="page-title">Resultados para “{q}”</h1><p className="result-count">{r.length} {r.length===1?'produto encontrado':'produtos encontrados'}</p>{r.length?<div className="catalog-grid">{r.map(p=><ProductCard key={p.id} product={p}/>)}</div>:<div className="empty-state"><SearchX size={35}/><h2>Nenhum achadinho encontrado.</h2><p>Tente outro nome ou explore as categorias.</p><Button asChild variant="outline"><Link to="/" hash="categorias">Ver categorias</Link></Button></div>}</main><Footer/></>;}
