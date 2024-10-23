import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/ProductGrid";

const Index = () => {
  const categories = [
    { name: "Eletrônicos", path: "/eletronicos", icon: "📱" },
    { name: "Computadores", path: "/computadores", icon: "💻" },
    { name: "Eletrodomésticos", path: "/eletrodomesticos", icon: "🏠" },
    { name: "Roupas Masculinas", path: "/roupas-masculinas", icon: "👔" },
    { name: "Roupas Femininas", path: "/roupas-femininas", icon: "👗" },
    { name: "Calçados", path: "/calcados", icon: "👟" },
    { name: "Lingerie", path: "/lingerie", icon: "✨" },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      price: 8999.99,
      image: "https://placehold.co/300x300",
      category: "Eletrônicos",
    },
    {
      id: 2,
      name: "Notebook Dell XPS",
      price: 12999.99,
      image: "https://placehold.co/300x300",
      category: "Computadores",
    },
    {
      id: 3,
      name: "Smart TV 65\"",
      price: 4999.99,
      image: "https://placehold.co/300x300",
      category: "Eletrodomésticos",
    },
    {
      id: 4,
      name: "Camisa Social",
      price: 199.99,
      image: "https://placehold.co/300x300",
      category: "Roupas Masculinas",
    },
  ];

  return (
    <>
      {/* Categories */}
      <section className="py-8 bg-muted border-y border-primary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-primary relative group inline-block">
            <span className="relative z-10">Categorias</span>
            <span className="absolute inset-0 bg-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.path}
                className="group flex flex-col items-center justify-center p-4 bg-card rounded-lg border border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                <span className="text-4xl mb-2 transform group-hover:scale-110 transition-transform">{category.icon}</span>
                <span className="text-sm font-medium group-hover:text-primary transition-colors">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-primary relative group inline-block">
            <span className="relative z-10">Produtos em Destaque</span>
            <span className="absolute inset-0 bg-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
          </h2>
          <ProductGrid products={featuredProducts} />
        </div>
      </section>
    </>
  );
};

export default Index;