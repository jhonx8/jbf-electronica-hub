import { Link, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingBag, Heart, Phone } from "lucide-react";
import { useState } from "react";

export const MainLayout = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      {/* Top Banner */}
      <div className="bg-primary/90 text-white py-2 px-4 text-center animate-pulse">
        <p className="text-sm">Frete Grátis em compras acima de R$ 299,99 🎁</p>
      </div>

      {/* Info Bar */}
      <div className="bg-muted/80 border-b border-primary/10 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-10">
            <div className="flex items-center gap-4">
              <a href="tel:+5511999999999" className="flex items-center gap-1 hover:text-primary transition-colors">
                <Phone className="h-3 w-3" />
                (11) 99999-9999
              </a>
              <span className="text-primary/30">|</span>
              <Link to="/rastreamento" className="hover:text-primary transition-colors">Rastrear Pedido</Link>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="link" className="text-sm p-0 h-auto hover:text-primary">
                Seja Revendedor(a)
              </Button>
              <span className="text-primary/30">|</span>
              <Button variant="link" className="text-sm p-0 h-auto hover:text-primary">
                Catálogo 2024
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="border-b border-primary/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full shadow-lg shadow-primary/5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="relative group">
              <h1 className="text-3xl font-bold text-primary">
                <span className="relative z-10">JBF Lingerie</span>
                <span className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
              </h1>
              <span className="text-xs text-muted-foreground">Atacado & Varejo</span>
            </Link>

            {/* Search */}
            <div className="flex-1 max-w-xl px-8">
              <div className="relative group">
                <Input
                  type="text"
                  placeholder="O que você procura?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-muted/50 border-primary/20 focus-visible:ring-primary/30 pr-10"
                />
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="absolute right-0 top-0 h-full hover:bg-transparent"
                >
                  <Search className="h-4 w-4 text-primary/60" />
                </Button>
                <span className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-md blur-md"></span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative group">
                <Heart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-[10px] text-white rounded-full flex items-center justify-center">0</span>
                <span className="absolute inset-0 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 blur-md"></span>
              </Button>
              
              <Button variant="ghost" size="icon" className="relative group">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-[10px] text-white rounded-full flex items-center justify-center">0</span>
                <span className="absolute inset-0 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 blur-md"></span>
              </Button>

              <Button className="bg-primary/90 hover:bg-primary shadow-lg shadow-primary/20 transition-all hover:shadow-primary/40">
                Entrar
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-6 h-12 text-sm">
            {["Lingerie", "Conjuntos", "Plus Size", "Moda Íntima", "Pijamas", "Promoções"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(" ", "-")}`}
                className="relative group hover:text-primary transition-colors"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="bg-muted py-8 mt-8 border-t border-primary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-4 text-primary">Sobre a JBF Vendas</h3>
              <p className="text-sm text-muted-foreground">
                Sua loja online completa para eletrônicos, moda e muito mais.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-primary">Contato</h3>
              <p className="text-sm text-muted-foreground">
                Email: contato@jbfvendas.com
                <br />
                Telefone: (11) 1234-5678
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-primary">Redes Sociais</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="border-primary/20 hover:border-primary/50">
                  Instagram
                </Button>
                <Button variant="outline" size="sm" className="border-primary/20 hover:border-primary/50">
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