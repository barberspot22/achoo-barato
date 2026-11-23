import { Link } from '@tanstack/react-router';
import { categories } from '@/data/catalog';
export function CategoryGrid() { return <div className="category-grid">{categories.map(c=><Link key={c.slug} className="category-tile" to="/categoria/$slug" params={{slug:c.slug}}><img src={c.image} alt="" loading="lazy" width="300" height="300"/><span className="category-name">{c.name}</span></Link>)}</div>; }
