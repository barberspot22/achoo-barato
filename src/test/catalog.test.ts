import { describe, it, expect } from 'vitest';
import { categories, products, selectProducts, savings, site } from '@/data/catalog';
describe('Catalog rules',()=>{
 it('contains exactly two distinct featured products',()=>{const featured=products.filter(p=>p.featured);expect(featured).toHaveLength(2);expect(new Set(featured.map(p=>p.id)).size).toBe(2);});
 it('contains demo products in all nine requested categories',()=>{expect(categories.map(c=>c.name)).toEqual(['Cosméticos','Videogames','Celulares','Eletrodomésticos','Livros','Comida','Bebidas','Natal','Fim de ano']);for(const c of categories)expect(products.some(p=>p.category===c.slug)).toBe(true);expect(products.every(p=>p.demo)).toBe(true);});
 it('points the social buttons at the real group links',()=>{expect(site.whatsapp).toBe('https://chat.whatsapp.com/ICJo8TE0suO8HCspjdObkf?s=cl&p=i&iam=2');expect(site.telegram).toBe('https://t.me/+Jy-37TWFql83NTdh');});
 it('searches inside only the current category and ignores accents',()=>{expect(selectProducts('celulares','IPHONE').map(p=>p.id)).toEqual(['iphone']);expect(selectProducts('cosmeticos','mascara').map(p=>p.id)).toEqual(['mascara']);expect(selectProducts('livros','iphone')).toEqual([]);});
 it('filters by registered tags',()=>{expect(selectProducts('celulares','',['Realme']).map(p=>p.id)).toEqual(['realme']);expect(selectProducts('celulares','',['Apple'],'low').map(p=>p.id)).toEqual(['iphone']);});
 it('sorts by price in both directions without mutating the catalog',()=>{const before=products.map(p=>p.id);expect(selectProducts('celulares','',[],'low').map(p=>p.id)).toEqual(['realme','samsung','iphone']);expect(selectProducts('celulares','',[],'high').map(p=>p.id)).toEqual(['iphone','samsung','realme']);expect(products.map(p=>p.id)).toEqual(before);});
 it('calculates savings only when a previous higher price exists',()=>{const p=products.find(p=>p.id==='blender');if(!p)throw new Error('missing');expect(savings(p)).toBe(24);expect(savings({...p,previousPrice:100})).toBeNull();const q=products.find(p=>p.id==='realme');if(!q)throw new Error('missing');expect(savings(q)).toBeNull();});
});
