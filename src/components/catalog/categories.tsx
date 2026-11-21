import { Link } from '@tanstack/react-router';
import { Sparkles, Gamepad2, Smartphone, CookingPot, BookOpen, Apple, Wine, Gift, PartyPopper, ArrowUpRight } from 'lucide-react';
import { categories } from '@/data/catalog';
const icons = [Sparkles,Gamepad2,Smartphone,CookingPot,BookOpen,Apple,Wine,Gift,PartyPopper];
export function CategoryGrid() { return <div className="category-grid">{categories.map((category,index)=>{const Icon=icons[index]??Sparkles;return <Link key={category.slug} className="category-tile" to="/categoria/$slug" params={{slug:category.slug}}><Icon/><ArrowUpRight className="tile-arrow"/><span className="category-name">{category.name}</span><span className="category-detail">{category.detail}</span></Link>;})}</div>; }
