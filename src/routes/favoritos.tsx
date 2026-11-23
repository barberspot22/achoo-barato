import { createFileRoute, Link } from '@tanstack/react-router';
import { Heart } from 'lucide-react';
import { Header, Footer } from '@/components/catalog/shell';
import { ProductCard } from '@/components/catalog/product-card';
import { Button } from '@/components/ui/button';
import { products, site } from '@/data/catalog';
import { useFavorites } from '@/hooks/use-favorites';
export const Route = createFileRoute('/favoritos')({
 head:()=>({meta:[{title:`Meus favoritos — ${site.name}`},{name:'description',content:'Os achadinhos que você salvou neste navegador.'},{property:'og:title',content:`Meus favoritos — ${site.name}`},{property:'og:description',content:'Os achadinhos que você salvou.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary'}]}),
 component:FavoritesPage,
});
function FavoritesPage(){const {ids}=useFavorites();const r=products.filter(p=>ids.includes(p.id));return <><Header/><main className="container page-main"><h1 className="page-title">Meus favoritos</h1>{r.length?<div className="catalog-grid">{r.map(p=><ProductCard key={p.id} product={p}/>)}</div>:<div className="empty-state"><Heart size={35}/><h2>Nenhum favorito ainda.</h2><p>Toque no coração de um produto para guardá-lo aqui.</p><Button asChild variant="outline"><Link to="/" hash="achadinhos">Ver achadinhos</Link></Button></div>}</main><Footer/></>;}
