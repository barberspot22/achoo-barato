import { describe, it, expect } from 'vitest';
import { categories, products, selectProducts, searchProducts, savings, site } from '@/data/catalog';
describe('Catalog rules',()=>{
 it('lists the twelve requested categories in order, each with an image',()=>{expect(categories.map(c=>c.name)).toEqual(['Em alta','Casa e Utilidades','Pets','Eletrônicos e Gadgets','Beleza e Cuidados','Moda e Acessórios','Natal','Praia e Verão','Presentes','Cozinha','Organização','Decoração']);for(const c of categories)expect(c.image).toMatch(/categoria-/);expect(products.every(p=>p.demo)).toBe(true);});
 it('every product belongs to a registered category',()=>{const slugs=categories.map(c=>c.slug) as string[];for(const p of products)expect(slugs).toContain(p.category);});
 it('Em alta shows the featured products',()=>{expect(selectProducts('em-alta').map(p=>p.id).sort()).toEqual(products.filter(p=>p.featured).map(p=>p.id).sort());});
 it('points the social buttons at the real group links',()=>{expect(site.whatsapp).toBe('https://chat.whatsapp.com/ICJo8TE0suO8HCspjdObkf?s=cl&p=i&iam=2');expect(site.telegram).toBe('https://t.me/+Jy-37TWFql83NTdh');});
 it('searches inside only the current category and ignores accents',()=>{expect(selectProducts('eletronicos-e-gadgets','IPHONE').map(p=>p.id)).toEqual(['iphone']);expect(selectProducts('presentes','iphone')).toEqual([]);expect(selectProducts('pets')).toEqual([]);});
 it('global search finds products by name and by category name',()=>{expect(searchProducts('mascara').map(p=>p.id)).toEqual(['mascara']);expect(searchProducts('beleza').map(p=>p.id).sort()).toEqual(['mascara','palette']);expect(searchProducts('  ')).toEqual([]);});
 it('sorts by price without mutating the catalog',()=>{const before=products.map(p=>p.id);expect(selectProducts('eletronicos-e-gadgets','',['128 GB'],'low').map(p=>p.id)).toEqual(['realme','samsung','iphone']);expect(products.map(p=>p.id)).toEqual(before);});
 it('calculates savings only when a previous higher price exists',()=>{const p=products.find(p=>p.id==='blender');if(!p)throw new Error('missing');expect(savings(p)).toBe(24);expect(savings({...p,previousPrice:100})).toBeNull();});
});
