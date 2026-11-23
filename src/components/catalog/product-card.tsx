import { ArrowUpRight, Heart, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { categories, formatPrice, savings, type Product } from '@/data/catalog';
import { useFavorites } from '@/hooks/use-favorites';
export function DemoNotice() { return <p className="demo-disclaimer"><Info size={13}/><span>Catálogo demonstrativo: imagens ilustrativas e preços de exemplo, não verificados. Os links abrem uma busca na loja parceira.</span></p>; }
export function ProductCard({ product }: {product:Product}) {
 const discount=savings(product); const fav=useFavorites(); const on=fav.has(product.id);
 const photo=['console','book','christmas'].includes(product.id);
 return <article className="product-card"><div className={`product-image ${photo?'photo':''}`}><img src={product.image} alt={product.name} loading="lazy" width="400" height="400"/><button type="button" className={`fav-button ${on?'on':''}`} onClick={()=>fav.toggle(product.id)} aria-pressed={on} aria-label={on?`Remover ${product.name} dos favoritos`:`Adicionar ${product.name} aos favoritos`}><Heart size={16}/></button>{discount!==null&&<span className="discount-badge">-{discount}%</span>}</div><div className="product-body"><span className="product-label">{categories.find(c=>c.slug===product.category)?.name}</span><h3>{product.name}</h3><div className="price-block">{product.previousPrice&&<del className="previous-price">{formatPrice(product.previousPrice)}</del>}<div className="current-price">{formatPrice(product.currentPrice)}</div></div><Button asChild className="promotion-button"><a href={product.promotionUrl} target="_blank" rel="noopener noreferrer sponsored" aria-label={`Ver achadinho: ${product.name} (abre em nova aba)`}>Ver achadinho<ArrowUpRight size={14}/></a></Button></div></article>;
}
export function ProductRail({ items, label }: {items:Product[];label:string}) {
 const id=`rail-${label.replace(/\W+/g,'-')}`;
 const scroll=(d:number)=>document.getElementById(id)?.scrollBy({left:d*300,behavior:'smooth'});
 return <div className="rail-wrap"><div className="rail-controls"><Button variant="outline" size="icon" onClick={()=>scroll(-1)} aria-label={`Voltar em ${label}`}>‹</Button><Button variant="outline" size="icon" onClick={()=>scroll(1)} aria-label={`Avançar em ${label}`}>›</Button></div><div className="product-rail" id={id} tabIndex={0} aria-label={label}>{items.map(p=><ProductCard key={p.id} product={p}/>)}</div></div>;
}
