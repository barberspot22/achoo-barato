import { ArrowUpRight, ExternalLink, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { categories, formatPrice, savings, type Product } from '@/data/catalog';
export function DemoNotice() { return <p className="demo-disclaimer"><Info size={13}/><span>Catálogo demonstrativo: imagens ilustrativas e preços de exemplo, não verificados. Os links abrem uma busca na loja parceira.</span></p>; }
export function ProductCard({ product, featured=false }: {product:Product;featured?:boolean}) {
 const discount=savings(product);
 const photo=['console','book','christmas'].includes(product.id);
 return <article className={`product-card ${featured?'featured':''}`}><div className={`product-image ${photo?'photo':''}`}><img src={product.image} alt={product.name} loading="lazy" width="400" height="400"/></div><div className="product-body"><span className="product-label">{categories.find(c=>c.slug===product.category)?.name}</span><h3>{product.name}</h3><p>{product.description}</p><div className="price-block">{product.previousPrice&&<div><del className="previous-price">{formatPrice(product.previousPrice)}</del>{discount!==null&&<span className="savings">{discount}% de economia</span>}</div>}<div className="current-price">{formatPrice(product.currentPrice)}</div></div><Button asChild className="promotion-button"><a href={product.promotionUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ver promoção: ${product.name} (demonstração, abre em nova aba)`}>Ver promoção<ArrowUpRight size={14}/></a></Button><span className="partner-note"><ExternalLink size={10}/>Você será direcionado à loja parceira</span></div></article>;
}
