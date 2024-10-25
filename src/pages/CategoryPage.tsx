import { useParams } from "react-router-dom";
import { ProductGrid } from "@/components/ProductGrid";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const mockProducts = {
  eletronicos: [
    {
      id: 1,
      name: "iPhone 15 Pro",
      price: 8999.99,
      image: "https://placehold.co/300x300",
      category: "Eletrônicos",
    },
    // ... mais produtos
  ],
  lingerie: [
    {
      id: 1,
      name: "Conjunto Rendado",
      price: 129.99,
      image: "https://placehold.co/300x300",
      category: "Lingerie",
    },
    // ... mais produtos
  ],
  // ... outros produtos por categoria
};

const categoryTitles = {
  eletronicos: "Eletrônicos",
  computadores: "Computadores",
  eletrodomesticos: "Eletrodomésticos",
  "roupas-masculinas": "Roupas Masculinas",
  "roupas-femininas": "Roupas Femininas",
  calcados: "Calçados",
  lingerie: "Lingerie",
};

export const CategoryPage = () => {
  const { category } = useParams();
  const title = categoryTitles[category as keyof typeof categoryTitles] || "Produtos";
  const products = mockProducts[category as keyof typeof mockProducts] || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold text-primary relative group">
          <span className="relative z-10">{title}</span>
          <span className="absolute inset-0 bg-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
        </h1>
        <div className="flex gap-4">
          <Select>
            <SelectTrigger className="w-[180px] border-primary/20">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price-asc">Menor preço</SelectItem>
              <SelectItem value="price-desc">Maior preço</SelectItem>
              <SelectItem value="name">Nome</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px] border-primary/20">
              <SelectValue placeholder="Filtrar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new">Novidades</SelectItem>
              <SelectItem value="sale">Promoções</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <ProductGrid products={products} />
    </div>
  );
};