import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { name: "Eletrônicos", path: "/eletronicos", icon: "📱" },
    { name: "Computadores", path: "/computadores", icon: "💻" },
    { name: "Eletrodomésticos", path: "/eletrodomesticos", icon: "🏠" },
    { name: "Roupas Masculinas", path: "/roupas-masculinas", icon: "👔" },
    { name: "Roupas Femininas", path: "/roupas-femininas", icon: "👗" },
    { name: "Calçados", path: "/calcados", icon: "👟" },
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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Link to="/" className="text-2xl font-bold text-primary">
              JBF Vendas
            </Link>
            <div className="flex items-center gap-2 w-full md:w-1/2">
              <Input
                type="text"
                placeholder="Buscar produtos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
              <Button size="icon">
                <Search className="h-4 w-4" />
              </Button>
            </div>
            <nav className="flex items-center gap-4">
              <Button variant="ghost">Login</Button>
              <Button>Carrinho (0)</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Categories */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Categorias</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.path}
                className="flex flex-col items-center justify-center p-4 bg-card rounded-lg hover:bg-accent transition-colors"
              >
                <span className="text-4xl mb-2">{category.icon}</span>
                <span className="text-sm font-medium">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Produtos em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-card rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-medium mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {product.category}
                  </p>
                  <p className="text-lg font-bold">
                    R$ {product.price.toLocaleString("pt-BR")}
                  </p>
                  <Button className="w-full mt-4">Adicionar ao Carrinho</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8 mt-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-4">Sobre a JBF Vendas</h3>
              <p className="text-sm text-muted-foreground">
                Sua loja online completa para eletrônicos, moda e muito mais.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contato</h3>
              <p className="text-sm text-muted-foreground">
                Email: contato@jbfvendas.com
                <br />
                Telefone: (11) 1234-5678
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                <Button variant="ghost" size="sm">
                  Instagram
                </Button>
                <Button variant="ghost" size="sm">
                  Facebook
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;